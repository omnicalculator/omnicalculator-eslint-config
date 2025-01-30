'use strict';

const IMPORT_UTILS_PATH = '@omnicalculator/shared/src/utils';

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Enforce the usage of isNullish and isDefined utility functions for checking nullish and non-nullish values.',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: 'code',
    schema: [
      {
        type: 'object',
        properties: {
          utilsImportPath: { type: 'string' },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      useIsNullish:
        'Please use isNullish and isDefined utility functions for checking nullish and non-nullish values.',
    },
  },
  create(context) {
    const { sourceCode } = context;
    const options = context.options[0] || {};
    const utilsImportPath = options.utilsImportPath || IMPORT_UTILS_PATH;

    return {
      BinaryExpression(node) {
        if (node.operator !== '==' && node.operator !== '!=') {
          return;
        }

        if (!isNullOrUndefined(node.left) && !isNullOrUndefined(node.right)) {
          return;
        }

        const isEsm = checkIfEsm(sourceCode);

        const fix = isEsm
          ? buildFixFunction({
              sourceCode,
              node,
              utilsImportPath,
            })
          : undefined;

        context.report({
          node,
          messageId: 'useIsNullish',
          fix,
        });
      },
    };
  },
};

/**
 * @param {import('estree').Node} node
 * @returns {boolean}
 */
function isNullOrUndefined(node) {
  if (node.type === 'Literal' && node.value === null) {
    return true;
  }

  if (node.type === 'Identifier' && node.name === 'undefined') {
    return true;
  }

  return false;
}

/**
 * @param {object} options
 * @param {import('eslint').SourceCode} options.sourceCode
 * @param {import('estree').BinaryExpression} options.node
 * @param {string} options.utilsImportPath
 * @returns {import('eslint').Rule.FixFunction}
 */
function buildFixFunction({ node, sourceCode, utilsImportPath }) {
  return fixer => {
    const fixes = [];

    const utilFunctionName = getUtilFunctionName(node.operator);

    if (utilFunctionName === null) {
      return [];
    }

    try {
      const importFix = createImportFix({
        sourceCode,
        fixer,
        newIdentifier: utilFunctionName,
        importPath: utilsImportPath,
      });

      if (importFix) {
        fixes.push(importFix);
      }
    } catch (error) {
      return [];
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

/**
 * @param {string} operator
 * @returns {string | null}
 * */
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

/**
 * @param {import('eslint').SourceCode} sourceCode
 * @param {import('estree').BinaryExpression} node
 * @returns {string | null}
 */
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

/**
 * @param {object} options
 * @param {import('eslint').Rule.RuleFixer} options.fixer
 * @param {import('estree').Node} options.node
 * @param {import('eslint').SourceCode} options.sourceCode
 * @param {string} options.utilFunctionName
 * @returns {import('eslint').Rule.Fix | null}
 */
function createUtilFunctionFix({ fixer, node, sourceCode, utilFunctionName }) {
  const oldExpression = getOldExpression(sourceCode, node);
  if (oldExpression === null) {
    return null;
  }

  const replacement = `${utilFunctionName}(${oldExpression})`;

  return fixer.replaceText(node, replacement);
}

/**
 * @param {object} options
 * @param {import('eslint').Rule.RuleFixer} options.fixer
 * @param {string} options.importPath
 * @param {string} options.newIdentifier
 * @param {import('eslint').SourceCode} options.sourceCode
 * @returns {import('eslint').Rule.Fix | null}
 */
function createImportFix({ fixer, importPath, newIdentifier, sourceCode }) {
  const program = sourceCode.ast;
  const { body } = program;

  const targetedImportDeclaration = body.find(
    node =>
      node.type === 'ImportDeclaration' && node.source.value === importPath
  );

  if (!targetedImportDeclaration) {
    const firstImportDeclaration = body.find(
      node => node.type === 'ImportDeclaration'
    );

    if (!firstImportDeclaration) {
      throw new Error(`Can't fix import automatically`);
    }

    return fixer.insertTextBefore(
      firstImportDeclaration,
      `import { ${newIdentifier} } from "${importPath}";\n`
    );
  }

  const alreadyImported = targetedImportDeclaration.specifiers.some(
    specifier => {
      return (
        specifier.type === 'ImportSpecifier' &&
        specifier.imported.name === newIdentifier
      );
    }
  );

  if (alreadyImported) {
    return null;
  }

  if (targetedImportDeclaration.specifiers.length > 0) {
    const lastSpecifier =
      targetedImportDeclaration.specifiers[
        targetedImportDeclaration.specifiers.length - 1
      ];

    return fixer.insertTextAfter(lastSpecifier, `, ${newIdentifier}`);
  }

  return fixer.replaceText(
    targetedImportDeclaration,
    `import { ${newIdentifier} } from "${importPath}";`
  );
}

/**
 *
 * @param {import('eslint').SourceCode} sourceCode
 * @returns {boolean}
 */
function checkIfEsm(sourceCode) {
  for (const node of sourceCode.ast.body) {
    if (
      node.type === 'ImportDeclaration' ||
      node.type === 'ExportNamedDeclaration' ||
      node.type === 'ExportDefaultDeclaration'
    ) {
      return true;
    }
  }

  return false;
}
