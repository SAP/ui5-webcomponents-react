import contentLoaderSerializer from '@shared/tests/serializer/content-loader-serializer.cjs';
import '@testing-library/jest-dom';
import '@ui5/webcomponents-react/jestSetup.js';
import ResizeObserver from 'resize-observer-polyfill';

const DEFAULT_REACT_VERSION = '18';

jest.mock('react', () => {
  const packages = {
    18: 'react',
    17: 'react-17',
    16: 'react-16'
  };
  const version = process.env.REACTJS_VERSION || DEFAULT_REACT_VERSION;

  if (version === '18') {
    //@ts-ignore
    return { ...jest.requireActual(packages[version]), useId: () => '1337' };
  }
  return { ...jest.requireActual(packages[version]) };
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

window.ResizeObserver = ResizeObserver;
expect.addSnapshotSerializer(contentLoaderSerializer);
