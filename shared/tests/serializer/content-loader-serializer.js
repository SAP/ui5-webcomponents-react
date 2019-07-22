// removing dynamic class names as well as code coverage instrumentation added by
// istanbul-instrumenter-loader

const MARKER = '__content-loader-serializer-marker__';
const styleUrl = /fill: url\(#([\d\w)]+)\)/i;

const collectElements = (element, elements = []) => {
  if (typeof element !== 'object') {
    return elements;
  }

  elements.push(element);

  if (element.children) {
    element.children.forEach((child) => collectElements(child, elements));
  }

  return elements;
};

const markElements = (elements) =>
  elements.forEach((element) => {
    element[MARKER] = true;
  });

const replaceIds = (elements) => {
  elements.forEach((element) => {
    if (element.node.name === 'clipPath' || element.props['clip-path'] || element.node.name === 'linearGradient') {
      if (element.props['clip-path']) {
        element.props['clip-path'] = 'CLIP-PATH-URL';
      }

      if (element.props.style) {
        element.props.style = element.props.style.replace(styleUrl, (a, b) => {
          return a.replace(b, 'STYLE-URL');
        });
      }

      if (element.node.name === 'clipPath') {
        element.props.id = 'CLIP-PATH-URL';
      }

      if (element.node.name === 'linearGradient') {
        element.props.id = 'STYLE-URL';
      }
    }
  });
};

module.exports = {
  test(value) {
    return value && !value[MARKER] && value.$$typeof === Symbol.for('react.test.json');
  },

  print(value, serialize) {
    // collect all react element nodes in the tree of the value
    const elements = collectElements(value);

    // mark the collected element nodes to avoid processing them several times
    markElements(elements);

    replaceIds(elements);

    return serialize(value);
  }
};
