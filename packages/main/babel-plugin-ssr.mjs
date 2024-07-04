const Modes = {
  CLIENT: 'client',
  WRAPPER: 'wrapper',
  SSR: 'ssr'
};

export default function () {
  return {
    name: 'ui5-webcomponents-ssr-plugin',
    visitor: {
      ImportDeclaration(path, state) {
        if (state.opts.mode === Modes.SSR || state.opts.mode === Modes.WRAPPER) {
          // remove all static web components imports when building for ssr or wrappers
          if (/@ui5\/webcomponents(-fiori)?\/dist\/\w+(\.js)?$/.test(path.node.source.value)) {
            path.remove();
          }
        }
        if (state.opts.mode !== Modes.SSR) {
          // remove dynamic web component import when not building for ssr
          const [importSpecifier] = path.node?.specifiers ?? [];
          if (importSpecifier && importSpecifier.imported?.name === 'useServerSideEffect') {
            path.remove();
          }
        }
      },
      ExpressionStatement(path, state) {
        if (state.opts.mode !== Modes.SSR) {
          // remove dynamic web component import when not building for ssr
          if (
            path.node.expression.type === 'CallExpression' &&
            path.node.expression.callee.name === 'useServerSideEffect'
          ) {
            path.remove();
          }
        }
      },
      CallExpression(path, state) {
        if (state.opts.mode !== Modes.SSR) {
          if (path.node.callee.name === 'withWebComponent') {
            path.node.arguments = path.node.arguments.filter((item) => item.type !== 'ArrowFunctionExpression');
          }
        }
      }
    }
  };
}
