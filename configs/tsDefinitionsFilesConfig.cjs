const { OFF } = require('../consts/common.cjs');

module.exports = {
  files: ['**/*.d.ts'],
  rules: {
    '@typescript-eslint/no-empty-object-type': OFF,
  },
};
