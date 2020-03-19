import 'core-js/modules/es.array.flat';
import 'core-js/modules/es.object.assign';
import 'core-js/modules/es.object.values';
import 'core-js/modules/es.array.from';
import ResizeObserver from 'resize-observer-polyfill';
import 'intersection-observer';
import { polyfill as scrollToPolyfill } from 'smoothscroll-polyfill';

// @ts-ignore
window.ResizeObserver = ResizeObserver;

// required for scrollTo methods
scrollToPolyfill();
