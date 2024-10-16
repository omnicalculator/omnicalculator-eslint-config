const { ERROR } = require('../../consts/common.cjs');

const testingLibraryRestrictedProperties = [
  'getByRole',
  'getAllByRole',
  'findByRole',
  'findAllByRole',
  'queryByRole',
  'queryAllByRole',
];
module.exports = [
  ERROR,
  ...testingLibraryRestrictedProperties.map(property => ({
    property,
    message:
      'This query is not allowed as it has low performance. Please use other queries instead.',
  })),
];
