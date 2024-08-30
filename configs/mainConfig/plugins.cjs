const { fixupPluginRules } = require('@eslint/compat');
const typescriptEslintEslintPlugin = require('@typescript-eslint/eslint-plugin');
const noOnlyTestsPlugin = require('eslint-plugin-no-only-tests');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const typescriptSortKeysPlugin = require('eslint-plugin-typescript-sort-keys');
const simpleImportSortPlugin = require('eslint-plugin-simple-import-sort');
const unicornPlugin = require('eslint-plugin-unicorn');
const importPlugin = require('eslint-plugin-import');
const todoPlzPlugin = require('eslint-plugin-todo-plz');
const sortDestructureKeysPlugin = require('eslint-plugin-sort-destructure-keys');

module.exports = {
    '@typescript-eslint': fixupPluginRules(typescriptEslintEslintPlugin),
    'no-only-tests': noOnlyTestsPlugin,
    'react-hooks': fixupPluginRules(reactHooksPlugin),
    'typescript-sort-keys': typescriptSortKeysPlugin,
    'simple-import-sort': simpleImportSortPlugin,
    unicorn: unicornPlugin,
    import: importPlugin,
    'todo-plz': todoPlzPlugin,
    'sort-destructure-keys': sortDestructureKeysPlugin,
  }