const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const { createSerializer } = require('enzyme-to-json');
const jssSerializer = require('@shared/tests/serializer/jss-snapshot-serializer');
const contentLoaderSerializer = require('@shared/tests/serializer/content-loader-serializer.js');

process.env.NODE_ENV = 'test';
process.env.BABEL_ENV = 'test';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(
  // @ts-ignore
  createSerializer({
    map: (el) => {
      // @ts-ignore
      el.node && el.node.attribs && el.node.attribs.theme && delete el.node.attribs.theme;
      // @ts-ignore
      el.node && el.node.attribs && el.node.attribs.classes && delete el.node.attribs.classes;
      return el;
    }
  })
);
expect.addSnapshotSerializer(jssSerializer);
expect.addSnapshotSerializer(contentLoaderSerializer);

const setupMatchMedia = () => {
  // @ts-ignore
  window.matchMedia = () => {
    return {
      matches: true,
      addListener() {},
      removeListener() {}
    };
  };
};

setupMatchMedia();

module.exports = {
  setupMatchMedia
};
