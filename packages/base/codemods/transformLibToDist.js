const libReplaceRegex = /^@ui5\/webcomponents-react(-(base|charts))?\/lib/;

module.exports = function ({ path, source }, api, options) {
  const j = api.jscodeshift;
  const printOptions = options.printOptions || {};

  const root = j(source)
    .find(j.ImportDeclaration)
    .forEach((nodePath) => {
      if (libReplaceRegex.test(nodePath.value.source.value)) {
        j(nodePath).replaceWith(
          j.importDeclaration(
            nodePath.value.specifiers,
            j.literal(nodePath.value.source.value.replace('/lib/', '/dist/'))
          )
        );
      }

      return nodePath;
    });

  return root.toSource(printOptions);
};
