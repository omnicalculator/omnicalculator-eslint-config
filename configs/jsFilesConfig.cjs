const { ERROR, OFF } = require('../consts/common.cjs');

module.exports = {
  files: ['**/*.js', '**/.*.js'],

  languageOptions: {
    ecmaVersion: 5,
    sourceType: 'script',
  },

  rules: {
    '@typescript-eslint/no-var-requires': OFF,
    strict: [ERROR, 'global'],
  },
};
