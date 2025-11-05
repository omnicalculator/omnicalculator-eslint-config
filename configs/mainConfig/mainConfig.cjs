const plugins = require('./plugins.cjs');
const { ERROR, OFF, WARN } = require('../../consts/common.cjs');
const languageOptions = require('./languageOptions.cjs');
const quotesRule = require('./quotesRule.cjs');
const noRestictedSyntaxRule = require('./noRestrictedSyntaxRule.cjs');
const preferDestructuringRule = require('./preferDestructuringRule.cjs');
const noRestrictedImportsRule = require('./noRestrictedImportsRule.cjs');
const stringEnumRule = require('./stringEnumRule.cjs');
const noEmptyFunctionsRule = require('./noEmptyFunctionsRule.cjs');
const noRestrictedPropertiesRule = require('./noRestrictedPropertiesRule.cjs');

module.exports = {
  plugins,
  languageOptions,

  rules: {
    'omnicalculator/nullish-utils': ERROR,
    complexity: [ERROR, 15],
    curly: [ERROR, 'all'],
    'import/first': ERROR,
    'import/no-duplicates': ERROR,
    'import/no-cycle': OFF,
    'no-console': WARN,
    'no-param-reassign': ERROR,
    'no-restricted-syntax': noRestictedSyntaxRule,
    'no-unexpected-multiline': ERROR,
    'no-unsafe-optional-chaining': WARN,
    'no-useless-constructor': OFF,
    'no-use-before-define': OFF,
    'no-prototype-builtins': OFF,
    'no-only-tests/no-only-tests': ERROR,
    'default-case': ERROR,
    'no-var': ERROR,
    'prefer-const': ERROR,
    'prefer-destructuring': preferDestructuringRule,
    radix: [ERROR, 'always'],
    'sort-destructure-keys/sort-destructure-keys': WARN,
    'import/no-anonymous-default-export': [
      ERROR,
      { allowArray: true, allowObject: true },
    ],
    quotes: quotesRule,
    'unicorn/prefer-number-properties': ERROR,
    'no-eq-null': ERROR,
    eqeqeq: [ERROR, 'always'],
    'no-implicit-coercion': ERROR,
    'unicorn/catch-error-name': [ERROR, { name: 'error' }],
    'no-restricted-imports': noRestrictedImportsRule,
    'react/jsx-uses-react': OFF,
    'react/react-in-jsx-scope': OFF,
    'react/no-unknown-property': [ERROR, { ignore: ['jsx', 'global'] }],
    'no-empty-function': OFF,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': ERROR,
    'typescript-sort-keys/string-enum': stringEnumRule,
    'react/no-unescaped-entities': OFF,
    'simple-import-sort/imports': ERROR,
    '@typescript-eslint/no-empty-function': noEmptyFunctionsRule,
    '@typescript-eslint/no-unused-expressions': OFF,
    '@typescript-eslint/no-unused-vars': OFF,
    '@typescript-eslint/no-use-before-define': [ERROR, { functions: false }],
    'typescript-sort-keys/interface': WARN,
    'unused-imports/no-unused-imports': ERROR,
    'no-restricted-properties': noRestrictedPropertiesRule,
    '@typescript-eslint/no-non-null-assertion': ERROR,
  },
};
