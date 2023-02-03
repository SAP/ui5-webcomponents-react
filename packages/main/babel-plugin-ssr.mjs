export default function (babel) {
  const { types: t } = babel;

  return {
    name: 'ui5-webcomponents-ssr-plugin',
    visitor: {
      ImportDeclaration(path, state) {
        if (state.opts.mode === 'ssr' || state.opts.mode === 'wrapper') {
          // remove all static web components imports when building for ssr or wrappers
          if (/@ui5\/webcomponents(-fiori)?\/dist\/\w+(\.js)?$/.test(path.node.source.value)) {
            path.remove();
          }
        }
        if (state.opts.mode !== 'ssr') {
          // remove dynamic web component import when not building for ssr
          const [importSpecifier] = path.node?.specifiers ?? [];
          if (importSpecifier && importSpecifier.imported?.name === 'useServerSideEffect') {
            path.remove();
          }
        }
      },
      ExpressionStatement(path, state) {
        if (state.opts.mode !== 'ssr') {
          // remove dynamic web component import when not building for ssr
          if (
            path.node.expression.type === 'CallExpression' &&
            path.node.expression.callee.name === 'useServerSideEffect'
          ) {
            path.remove();
          }
        }
      }
    }
  };
}
