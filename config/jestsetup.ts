import contentLoaderSerializer from '@shared/tests/serializer/content-loader-serializer.js';
import jssSerializer from '@shared/tests/serializer/jss-snapshot-serializer';
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';
import 'intersection-observer';
import ResizeObserver from 'resize-observer-polyfill';

beforeAll(async () => {
  await import('@ui5/webcomponents/dist/Assets');
  await import('@ui5/webcomponents-fiori/dist/Assets');
  await import('@ui5/webcomponents-react/dist/Assets');
});

jest.spyOn(global.console, 'warn').mockImplementation((message, ...rest) => {
  if (!message.startsWith('Inefficient bundling detected')) {
    console.error(message, ...rest);
  }
});

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
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  });
};

export const setupResizeObserver = () => {
  // @ts-ignore
  window.ResizeObserver = ResizeObserver;
};

setupMatchMedia();
setupResizeObserver();
window.scrollTo = jest.fn();
