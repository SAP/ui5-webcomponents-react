import contentLoaderSerializer from '@shared/tests/serializer/content-loader-serializer.cjs';
import '@testing-library/jest-dom';
import 'intersection-observer';
import ResizeObserver from 'resize-observer-polyfill';
import 'whatwg-fetch';

const setupMatchMedia = () => {
  Object.defineProperty(globalThis, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => {
      const maxWidth = parseInt(/max-width:(?<maxWidth>\d+)px/.exec(query)?.groups?.maxWidth);
      const minWidth = parseInt(/min-width:(?<minWidth>\d+)px/.exec(query)?.groups?.minWidth);

      let matches =
        (minWidth ? minWidth <= window.innerWidth : true) && (maxWidth ? window.innerWidth <= maxWidth : true);

      if (query === '(orientation: landscape)') {
        matches = window.innerWidth > window.innerHeight;
      }

      return {
        matches,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
      };
    })
  });
};

Object.defineProperty(globalThis, 'crypto', {
  value: {
    randomUUID: () => `1337`
  }
});

beforeEach(async () => {
  (window as any).ResizeObserver = ResizeObserver;
  window.scrollTo = jest.fn();
  setupMatchMedia();

  await import('@ui5/webcomponents/dist/Assets');
  await import('@ui5/webcomponents-fiori/dist/Assets');
  await import('@ui5/webcomponents-icons/dist/Assets');
  await import('@ui5/webcomponents-react/dist/Assets');
});

expect.addSnapshotSerializer(contentLoaderSerializer);
