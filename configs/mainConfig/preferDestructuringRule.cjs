const { ERROR } = require('../../consts/common.cjs');

module.exports = [
  ERROR,
  {
    VariableDeclarator: {
      array: false,
      object: true,
    },

    AssignmentExpression: {
      array: false,
      object: false,
    },
  },
  {
    enforceForRenamedProperties: false,
  },
];
