import contentLoaderSerializer from '@shared/tests/serializer/content-loader-serializer.js';
import jssSerializer from '@shared/tests/serializer/jss-snapshot-serializer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

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

export const setupMatchMedia = () => {
  // @ts-ignore
  window.matchMedia = () => {
    return {
      matches: true,
      addListener() {},
      removeListener() {}
    };
  };
};

export const setupResizeObserver = () => {
  // @ts-ignore
  window.ResizeObserver = function ResizeObserver() {
    // @ts-ignore
    this.observe = () => {};
    // @ts-ignore
    this.disconnect = () => {};
  };
};

setupMatchMedia();
setupResizeObserver();
