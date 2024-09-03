const { OFF } = require('../consts/common.cjs');

module.exports = {
  files: ['**/*-test.ts', '**/*.test.ts', '**/*-test.tsx', '**/*.test.tsx'],

  rules: {
    'testing-library/no-await-sync-queries': OFF,
    'testing-library/render-result-naming-convention': OFF,
    '@typescript-eslint/no-explicit-any': OFF,
    '@typescript-eslint/no-non-null-assertion': OFF,
  },
};
