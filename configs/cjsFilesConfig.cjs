const { OFF } = require('../consts/common.cjs');

module.exports = {
  files: ['**/*.cjs'],
  rules: {
    '@typescript-eslint/no-require-imports': OFF,
  },
};
