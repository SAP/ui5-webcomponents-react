/**
 * PLEASE DO NOT IMPORT THIS FILE!
 * IT IS ONLY EXISTING FOR NOT BREAKING LEGACY APPLICATIONS, BUT IS OFFICIALLY DEPRECATED AND MAY BE REMOVED WITHOUT FURTHER NOTICE.
 *
 * How to use this file:
 *
 * @ui5/webcomponents-react is supporting all modern major browsers. There is no support for Internet Explorer 11 built in.<br />
 * If you want your application to run in IE11, you will have to polyfill some features by importing these polyfills as **first** imports in your `src/index.js`:
 *
 * ```js
 * import 'react-app-polyfill/ie11';
 * import '@ui5/webcomponents-base/dist/features/browsersupport/IE11WithWebComponentsPolyfill';
 * import '@ui5/webcomponents-react-base/polyfill/IE11';
 * ```
 *
 * You can install `react-app-polyfill` with the following command:
 *
 * ```bash
 * npm install react-app-polyfill --save
 * ```
 */
import 'core-js/modules/es.array.flat';
import 'core-js/modules/es.array.from';
import 'core-js/modules/es.object.assign';
import 'core-js/modules/es.object.values';
import 'intersection-observer';
import ResizeObserver from 'resize-observer-polyfill';
import { polyfill as scrollToPolyfill } from 'smoothscroll-polyfill';

window.ResizeObserver = ResizeObserver;

// required for scrollTo methods
scrollToPolyfill();

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  // eslint-disable-next-line no-console
  if (console && console.warn) {
    // eslint-disable-next-line no-console
    console.warn(
      `'@ui5/webcomponents-react' is not longer supporting IE11, so '@ui5/webcomponents-react-base/polyfill/IE11' is deprecated! Please remove this import from your application.`
    );
  }
}
