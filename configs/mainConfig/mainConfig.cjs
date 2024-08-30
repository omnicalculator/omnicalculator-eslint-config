const plugins = require('./plugins.cjs')
const {OFF, WARN, ERROR} = require('../../consts/common.cjs');
const languageOptions = require('./languageOptions.cjs')
const quotesRule = require('./quotesRule.cjs')
const noRestictedSyntaxRule = require('./noRestrictedSyntaxRule.cjs')
const preferDestructuringRule = require('./preferDestructuringRule.cjs')
const noRestrictedImportsRule = require('./noRestrictedImportsRule.cjs')

module.exports = {
    plugins,
    languageOptions, 
    settings: {
        react: {
          version: '18.2.0',
        },
    },
    rules: {
        complexity: [ERROR, 15],
        curly: [ERROR, 'all'],
        'import/first': ERROR,
        'import/no-duplicates': ERROR,
        'import/no-cycle': OFF,
        'no-console': WARN,
        'no-param-reassign': ERROR,
        '@typescript-eslint/no-unused-expressions': OFF,
        'no-restricted-syntax': noRestictedSyntaxRule,
        'no-unexpected-multiline': ERROR,
        'no-unsafe-optional-chaining': WARN,
        '@typescript-eslint/no-unused-vars': OFF,
        'no-useless-constructor': OFF,
        'no-use-before-define': OFF,
        'no-prototype-builtins': OFF,
        'no-only-tests/no-only-tests': ERROR,
        'no-var': ERROR,
        'prefer-const': ERROR,
        'prefer-destructuring': preferDestructuringRule,
        radix: [ERROR, 'always'],
        'sort-destructure-keys/sort-destructure-keys': WARN,
        'import/no-anonymous-default-export': [ ERROR,{ allowArray: true, allowObject: true, } ],
        quotes: quotesRule,
        'unicorn/prefer-number-properties': ERROR,
        'no-eq-null': ERROR,
        eqeqeq: [ERROR, 'always'],
        'no-implicit-coercion': ERROR,
        'unicorn/catch-error-name': [ERROR, { name: 'error' } ],
        'unicorn/prefer-number-properties': ERROR,
        'no-eq-null': ERROR,
        eqeqeq: [ERROR, 'always'],
        'no-implicit-coercion': ERROR,
        'no-restricted-imports': noRestrictedImportsRule,
        'react/jsx-uses-react': OFF,
    }
}