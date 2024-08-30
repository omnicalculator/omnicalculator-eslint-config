const { OFF } = require('../consts/common.cjs');
const { TEST_FILES_PATTERNS } = require('../consts/pathPatterns.cjs');

module.exports = {
  files: ['**/*.ts'],

  ignores: TEST_FILES_PATTERNS,

  rules: {
    'testing-library/no-await-sync-queries': OFF,
    'testing-library/render-result-naming-convention': OFF,
  },
};
