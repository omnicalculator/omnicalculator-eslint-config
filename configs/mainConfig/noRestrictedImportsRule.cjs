const { ERROR } = require('../../consts/common.cjs');

module.exports = [
  ERROR,
  {
    paths: [
      {
        name: '@mui/material',
        importNames: ['styled'],
        message:
          "Please use import { styled } from '@omnicalculator/shared-components' instead",
      },
      {
        name: '@mui/material/styles',
        importNames: ['styled'],
        message:
          "Please use import { styled } from '@omnicalculator/shared-components' instead",
      },
      {
        name: '@emotion/styled',
        message:
          "Please use import { styled } from '@omnicalculator/shared-components' instead",
      },
      {
        name: 'monaco-editor',
        message:
          '`monaco-editor` imports all languages; use the locale `monacoInstance.ts` instead to import only the languages we need',
      },
    ],
  },
];
