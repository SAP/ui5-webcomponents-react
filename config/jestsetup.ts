import contentLoaderSerializer from '@shared/tests/serializer/content-loader-serializer.cjs';
import '@testing-library/jest-dom';
import 'intersection-observer';
import ResizeObserver from 'resize-observer-polyfill';
import 'whatwg-fetch';

const DEFAULT_REACT_VERSION = '18';

jest.mock('react', () => {
  const packages = {
    18: 'react',
    17: 'react-17',
    16: 'react-16'
  };
  const version = process.env.REACTJS_VERSION || DEFAULT_REACT_VERSION;

  //@ts-ignore
  return { ...jest.requireActual(packages[version]), useId: () => '1337' };
});

jest.mock('react-dom', () => {
  const packages = {
    18: 'react-dom',
    17: 'react-dom-17',
    16: 'react-dom-16'
  };
  const version = process.env.REACTJS_VERSION || DEFAULT_REACT_VERSION;

  return jest.requireActual(packages[version]);
});

jest.mock('react-dom/test-utils', () => {
  const packages = {
    18: 'react-dom/test-utils',
    17: 'react-dom-17/test-utils',
    16: 'react-dom-16/test-utils'
  };
  const version = process.env.REACTJS_VERSION || DEFAULT_REACT_VERSION;

  return jest.requireActual(packages[version]);
});

jest.mock('@testing-library/react', () => {
  const packages = {
    18: '@testing-library/react',
    17: '@testing-library/react-17',
    16: '@testing-library/react-17'
  };
  const version = process.env.REACTJS_VERSION || DEFAULT_REACT_VERSION;

  return jest.requireActual(packages[version]);
});

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

const consoleError = console.error;
console.error = (message: string | Error, ...args) => {
  if (typeof message === 'string' && message.includes('Error: Could not parse CSS stylesheet')) {
    return;
  }
  if ((message as Error)?.message?.includes('Could not parse CSS stylesheet')) {
    return;
  }

  consoleError(message, ...args);
};

beforeEach(async () => {
  (window as any).ResizeObserver = ResizeObserver;
  window.scrollTo = jest.fn();
  setupMatchMedia();

  await import('@ui5/webcomponents/dist/Assets.js');
  await import('@ui5/webcomponents-fiori/dist/Assets.js');
  await import('@ui5/webcomponents-icons/dist/Assets.js');
  await import('@ui5/webcomponents-react/dist/Assets.js');
});

expect.addSnapshotSerializer(contentLoaderSerializer);
