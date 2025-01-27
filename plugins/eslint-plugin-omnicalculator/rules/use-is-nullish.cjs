module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Use isNullish and isDefined utils when checking for nullish values.',
      category: 'Best Practices',
      recommended: true,
    },
    schema: [],
    messages: {
      useIsNullish: 'Please use isNullish when checking for nullish value.',
      useIsDefined: 'Please use isDefined when checking for not nullish value.',
    },
  },
  create(context) {
    return {
      BinaryExpression(node) {
        console.log('xdddd3');
        if (
          (node.right.type === 'Literal' && node.right.value === null) ||
          (node.left.type === 'Literal' && node.left.value === null)
        ) {
          if (node.operator === '!=') {
            context.report({
              node,
              messageId: 'useIsDefined',
            });
          } else if (node.operator === '==') {
            context.report({
              node,
              messageId: 'useIsNullish',
            });
          }
        }
      },
    };
  },
};
