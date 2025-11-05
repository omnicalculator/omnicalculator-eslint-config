module.exports.ESLINT_IGNORED_PATHS = [
  '**/coverage',
  '**/__generated__',
  '**/node_modules',
  '**/pnpm-store',
  '!**/.babelrc.js',
  '!**/.eslintrc.js',
  '**/build',
  '**/storybook-static',
  '**/debug',
  '**/.github',
];

module.exports.TEST_FILES_PATTERNS = [
  '**/*.js',
  '**/*.jsx',
  'e2e-cypress/**/*.*',
  '**/*-test.js',
  '**/*-test.ts',
  '**/*-test.tsx',
  '**/*-tests.ts',
  '**/*-tests.tsx',
  '**/__tests__/**/*.*',
  '**/testutils/**/*.*',
  '**/testUtils/**/*.*',
  '**/utils/tests/**/*.*',
];
