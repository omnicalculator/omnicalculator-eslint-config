const { ERROR, OFF } = require('../consts/common.cjs');
const { TEST_FILES_PATTERNS } = require('../consts/pathPatterns.cjs');

module.exports = {
  files: TEST_FILES_PATTERNS,

  rules: {
    'testing-library/prefer-screen-queries': ERROR,
    'testing-library/no-render-in-lifecycle': ERROR,
    'testing-library/no-node-access': OFF,
    'testing-library/no-container': OFF,
    'testing-library/prefer-presence-queries': OFF,
    'testing-library/await-async-events': OFF,
    '@typescript-eslint/no-require-imports': OFF,
    '@next/next/no-img-element': OFF,
    '@typescript-eslint/no-non-null-assertion': OFF,
    quotes: [
      ERROR,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
  },
};
