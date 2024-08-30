const {ESLINT_IGNORED_PATHS} = require('./consts/pathPatterns.cjs')
const baseConfig = require('./configs/baseConfigs.cjs')
const mainConfig = require('./configs//mainConfig/mainConfig.cjs')
const jsFilesConfig = require('./configs/jsFilesConfig.cjs')
const testFilesConfig = require('./configs/tsTestFilesConfig.cjs')
const workerFilesConfig = require('./configs/workerFilesConfig.cjs')
const tsFilesConfig = require('./configs/tsFilesConfig.cjs')
const generalTestFilesConfig = require('./configs/generalTestFilesConfig.cjs')
const e2eTestFilesConfig  = require('./configs/e2eTestFilesConfig.cjs')
const tsxFilesConfig  = require('./configs/tsxFilesConfig.cjs')
const tsDefinitionsFilesConfig = require('./configs/tsDefinitionsFilesConfig.cjs')

module.exports = function createConfig() {
    return [
        {ignores: ESLINT_IGNORED_PATHS}, 
        ...baseConfig, 
        mainConfig,
        jsFilesConfig,
        testFilesConfig,
        workerFilesConfig,
        tsFilesConfig,
        generalTestFilesConfig,
        tsxFilesConfig,
        e2eTestFilesConfig,
        tsDefinitionsFilesConfig
    ]
}