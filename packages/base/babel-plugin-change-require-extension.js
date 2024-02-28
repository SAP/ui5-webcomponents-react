export default function (babel) {
    const { types: t } = babel;
  
    return {
      name: 'babel-plugin-change-require-extension',
      visitor: {
        CallExpression(path, state) {
          if (
            t.isIdentifier(path.node.callee, { name: 'require' }) &&
            t.isStringLiteral(path.node.arguments[0]) &&
            !path.node.arguments[0].value.includes('@') && 
            path.node.arguments[0].value.endsWith('.js')
          ) {
            path.node.arguments[0].value = path.node.arguments[0].value.replace(/\.js$/, '.cjs');
          }
          if (
            t.isIdentifier(path.node.callee, { name: 'require' }) &&
            t.isStringLiteral(path.node.arguments[0]) &&
            !path.node.arguments[0].value.includes('@') && 
            path.node.arguments[0].value.includes('/dist')
          ) {
            path.node.arguments[0].value = path.node.arguments[0].value.replace('/dist', '/cjs');
          }
          if (
            t.isIdentifier(path.node.callee, { name: 'require' }) &&
            t.isStringLiteral(path.node.arguments[0]) &&
            (
              path.node.arguments[0].value.includes('@ui5/webcomponents-fiori/dist')
              || path.node.arguments[0].value.includes('@ui5/webcomponents-react-base/dist')
              || path.node.arguments[0].value.includes('@ui5/webcomponents-base/dist')
              )
          ) {
            path.node.arguments[0].value = path.node.arguments[0].value.replace('/dist', '/cjs');
            path.node.arguments[0].value = path.node.arguments[0].value.replace(/\.js$/, '.cjs');
          }
        },
      },
    };
  }
  