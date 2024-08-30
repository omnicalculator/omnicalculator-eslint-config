const globals = require('globals');
const tsParser = require('@typescript-eslint/parser');

module.exports = {
    globals: {
        ...globals.node,
        ...globals.jest,
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 2018,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
}