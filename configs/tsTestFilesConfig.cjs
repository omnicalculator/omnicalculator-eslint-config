const {OFF} = require('../consts/common.cjs');

module.exports =   {
    files: ['**/*-test.ts', '**/*-test.tsx'],

    rules: {
        '@typescript-eslint/no-explicit-any': OFF,
        '@typescript-eslint/no-non-null-assertion': OFF,
    },
}