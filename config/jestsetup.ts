import contentLoaderSerializer from '@shared/tests/serializer/content-loader-serializer.cjs';
import '@testing-library/jest-dom';
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
