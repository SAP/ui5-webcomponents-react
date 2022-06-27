// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import '@ui5/webcomponents-react/jestSetup.js';
import ResizeObserverPolyfill from 'resize-observer-polyfill';

window.ResizeObserver = ResizeObserverPolyfill;
