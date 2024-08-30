const {OFF} = require('../consts/common.cjs');
const globals = require('globals');

module.exports =     {
    files: ['**/*.worker.ts'],

    languageOptions: {
      globals: {
        ...globals.worker,
      },
    },

    rules: {
      'no-restricted-globals': OFF,
    },
  }