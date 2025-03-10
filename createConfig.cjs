const { ESLINT_IGNORED_PATHS } = require('./consts/pathPatterns.cjs');
const baseConfig = require('./configs/baseConfigs.cjs');
const mainConfig = require('./configs//mainConfig/mainConfig.cjs');
const jsFilesConfig = require('./configs/jsFilesConfig.cjs');
const testFilesConfig = require('./configs/tsTestFilesConfig.cjs');
const workerFilesConfig = require('./configs/workerFilesConfig.cjs');
const tsFilesConfig = require('./configs/tsFilesConfig.cjs');
const generalTestFilesConfig = require('./configs/generalTestFilesConfig.cjs');
const e2eTestFilesConfig = require('./configs/e2eTestFilesConfig.cjs');
const tsxFilesConfigs = require('./configs/tsxFilesConfigs.cjs');
const tsDefinitionsFilesConfig = require('./configs/tsDefinitionsFilesConfig.cjs');
const tsTestFilesConfig = require('./configs/tsTestFilesConfig.cjs');
const cjsFilesConfig = require('./configs/cjsFilesConfig.cjs');

module.exports = function createConfig() {
  return [
    ...baseConfig,
    { ignores: ESLINT_IGNORED_PATHS },
    mainConfig,
    jsFilesConfig,
    testFilesConfig,
    workerFilesConfig,
    tsTestFilesConfig,
    generalTestFilesConfig,
    tsFilesConfig,
    ...tsxFilesConfigs,
    e2eTestFilesConfig,
    tsDefinitionsFilesConfig,
    cjsFilesConfig,
  ];
};
