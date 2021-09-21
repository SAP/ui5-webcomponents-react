import contentLoaderSerializer from '@shared/tests/serializer/content-loader-serializer.cjs';
import '@testing-library/jest-dom';
import 'intersection-observer';
import ResizeObserver from 'resize-observer-polyfill';

const setupMatchMedia = () => {
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

beforeEach(async () => {
  (window as any).ResizeObserver = ResizeObserver;
  window.scrollTo = jest.fn();
  setupMatchMedia();

  await import('@ui5/webcomponents/dist/Assets.js');
  await import('@ui5/webcomponents-fiori/dist/Assets.js');
  await import('@ui5/webcomponents-icons/dist/Assets.js');
  await import('@ui5/webcomponents-react/dist/Assets');
});

expect.addSnapshotSerializer(contentLoaderSerializer);
