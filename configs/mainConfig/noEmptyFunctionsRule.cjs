const { ERROR } = require('../../consts/common.cjs');

module.exports = [
  ERROR,
  {
    allow: [
      'private-constructors',
      'protected-constructors',
      'decoratedFunctions',
    ],
  },
];
