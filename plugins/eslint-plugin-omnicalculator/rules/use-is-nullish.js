'use strict';

const IMPORT_UTILS_PATH = '@omnicalculator/shared/src/utils';

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Use isNullish and isDefined utils when checking for nullish and not-nullish values.',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: 'code',
    schema: [],
    messages: {
      useIsNullish:
        'Please use isNullish and isDefined utils when checking for nullish and not-nullish values.',
    },
  },
  create(context) {
    const sourceCode = context.getSourceCode();

    return {
      BinaryExpression(node) {
        if (node.operator !== '==' && node.operator !== '!=') {
          return;
        }

        if (!isNullOrUndefined(node.left) && !isNullOrUndefined(node.right)) {
          return;
        }

        const isEsm = detectModuleSystem(sourceCode) === 'esm';

        const fix = isEsm ? buildFixFunction(sourceCode, node) : undefined;

        context.report({
          node,
          messageId: 'useIsNullish',
          fix,
        });
      },
    };
  },
};

function isNullOrUndefined(node) {
  if (node.type === 'Literal' && node.value === null) {
    return true;
  }

  if (node.type === 'Identifier' && node.name === 'undefined') {
    return true;
  }

  return false;
}

function buildFixFunction(sourceCode, node) {
  return fixer => {
    const fixes = [];

    const utilFunctionName = getUtilFunctionName(node.operator);

    if (utilFunctionName === null) {
      return [];
    }

    const importFix = createImportFix({
      sourceCode,
      fixer,
      newIdentifier: utilFunctionName,
      importPath: IMPORT_UTILS_PATH,
    });

    if (importFix) {
      fixes.push(importFix);
    }

    const utilFunctionFix = createUtilFunctionFix({
      sourceCode,
      fixer,
      node,
      utilFunctionName,
    });

    if (utilFunctionFix) {
      fixes.push(utilFunctionFix);
    }

    return fixes;
  };
}

function getUtilFunctionName(operator) {
  switch (operator) {
    case '==':
      return 'isNullish';
    case '!=':
      return 'isDefined';
    default:
      return null;
  }
}

function getOldExpression(sourceCode, node) {
  const { left, right } = node;

  const leftText = sourceCode.getText(left);
  const rightText = sourceCode.getText(right);

  if (isNullOrUndefined(left)) {
    return rightText;
  }

  if (isNullOrUndefined(right)) {
    return leftText;
  }

  return null;
}

function createUtilFunctionFix({ fixer, node, sourceCode, utilFunctionName }) {
  const oldExpression = getOldExpression(sourceCode, node);
  if (oldExpression === null) {
    return null;
  }

  const replacement = `${utilFunctionName}(${oldExpression})`;

  return fixer.replaceText(node, replacement);
}

function createImportFix({ fixer, importPath, newIdentifier, sourceCode }) {
  const program = sourceCode.ast;
  const { body } = program;

  const importDeclaration = body.find(
    node =>
      node.type === 'ImportDeclaration' && node.source.value === importPath
  );

  if (!importDeclaration) {
    //  TODO: handle 'use strict' and other stuff on top of the file

    return fixer.insertTextBefore(
      body[0],
      `import { ${newIdentifier} } from "${importPath}";\n`
    );
  }

  const alreadyImported = importDeclaration.specifiers.some(specifier => {
    return (
      specifier.type === 'ImportSpecifier' &&
      specifier.imported.name === newIdentifier
    );
  });

  if (alreadyImported) {
    return null;
  }

  if (importDeclaration.specifiers.length > 0) {
    const lastSpecifier =
      importDeclaration.specifiers[importDeclaration.specifiers.length - 1];

    return fixer.insertTextAfter(lastSpecifier, `, ${newIdentifier}`);
  }

  return fixer.replaceText(
    importDeclaration,
    `import { ${newIdentifier} } from "${importPath}";`
  );
}

function detectModuleSystem(sourceCode) {
  const { ast } = sourceCode;

  for (const node of ast.body) {
    if (
      node.type === 'ImportDeclaration' ||
      node.type === 'ExportNamedDeclaration' ||
      node.type === 'ExportDefaultDeclaration'
    ) {
      return 'esm';
    }

    if (
      node.type === 'VariableDeclaration' &&
      node.declarations.some(
        decl =>
          decl.init &&
          decl.init.type === 'CallExpression' &&
          decl.init.callee.name === 'require'
      )
    ) {
      return 'commonjs';
    }

    if (
      node.type === 'ExpressionStatement' &&
      node.expression.type === 'AssignmentExpression' &&
      node.expression.left.type === 'MemberExpression' &&
      node.expression.left.object.name === 'module' &&
      node.expression.left.property.name === 'exports'
    ) {
      return 'commonjs';
    }
  }

  return 'unknown';
}
