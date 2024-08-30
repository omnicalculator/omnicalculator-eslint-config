const { OFF, WARN } = require('../consts/common.cjs');

module.exports = {
  files: [
    'e2e-cypress/cypress.config.ts',
    'e2e-cypress/cypress/**/*.cy.ts',
    'e2e-cypress/cypress/**/**/*.ts',
    'e2e-cypress/*.ts',
  ],
  rules: {
    strict: OFF,
    'no-undef': OFF,
    '@typescript-eslint/no-unused-expressions': OFF,
    '@typescript-eslint/no-var-requires': OFF,
    '@typescript-eslint/no-namespace': OFF,

    '@typescript-eslint/no-unused-vars': [
      WARN,
      {
        argsIgnorePattern: '.',
      },
    ],
  },
};
