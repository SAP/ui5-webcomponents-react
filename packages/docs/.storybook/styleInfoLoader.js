const extract = require('extract-comments');

function enhanceWithStyleInfo(source, attributes) {
  const styleInfo = JSON.stringify({ attributes });
  return source.replace(/__docgenInfo \= \{/, `__docgenInfo = { styleInfo: ${styleInfo}, `);
}

function extractInlineStyle(source) {
  const matches = source.match(/const styles = (.|\n)*?\};\n\n/);
  if (matches) {
    return matches[0];
  }
  return null;
}

module.exports = function loader(source) {
  const parts = this.context.split('/');
  const styleFileName = parts[parts.length - 1];
  let file = null;
  try {
    file = this.fs.readFileSync(this.context + '/' + styleFileName + '.jss.ts');
  } catch (e) {
    file = extractInlineStyle(source);
  }
  if (!file) {
    return source;
  }

  const fileContent = typeof file === 'string' ? file : file.toString();
  const lines = fileContent.split('\n');
  const comments = extract(fileContent);

  const styleInfo = [];

  for (let i in comments) {
    const comment = comments[i];
    const codeLine = lines[comment.loc.end.line];
    if (codeLine) {
      const matches = codeLine.match(/(.*)\:/);
      if (matches) {
        const className = matches[1];
        if (className) {
          styleInfo.push({
            comment: comment.value,
            className: className.trim()
          });
        }
      }
    }
  }
  if (styleInfo.length > 0) {
    return enhanceWithStyleInfo(source, styleInfo);
  }
  return source;
};
