const { OFF, WARN } = require('../consts/common.cjs');
const { TEST_FILES_PATTERNS } = require('../consts/pathPatterns.cjs');

module.exports = [
  {
    files: ['**/*.tsx'],
    rules: {
      'import/prefer-default-export': WARN,
    },
  },
  {
    files: ['**/*.tsx'],
    ignores: TEST_FILES_PATTERNS,
    rules: {
      'testing-library/no-await-sync-queries': OFF,
      'testing-library/render-result-naming-convention': OFF,
    },
  },
];
