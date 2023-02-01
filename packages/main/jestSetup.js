/* eslint-disable no-console */

// eslint-disable-next-line import/no-unresolved
import '@ui5/webcomponents-react/dist/Assets.js';

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

const consoleError = console.error;
console.error = (message, ...args) => {
  if (typeof message === 'string' && message.includes('Error: Could not parse CSS stylesheet')) {
    return;
  }
  if (message?.message?.includes('Could not parse CSS stylesheet')) {
    return;
  }

  consoleError(message, ...args);
};

globalThis.scrollTo = jest.fn();
setupMatchMedia();

const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});
globalThis.IntersectionObserver = mockIntersectionObserver;

Object.defineProperty(globalThis, 'crypto', {
  value: {
    randomUUID: jest.fn().mockReturnValue('1337')
  },
  writable: true
});
