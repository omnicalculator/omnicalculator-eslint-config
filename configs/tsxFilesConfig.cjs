const {WARN} = require('../consts/common.cjs')

module.exports =  {
    files: ['**/*.tsx'],
    rules: {
      'import/prefer-default-export': WARN,
    }
}