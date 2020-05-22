import ResizeObserver from 'resize-observer-polyfill';
import { polyfill as scrollToPolyfill } from 'smoothscroll-polyfill';

// @ts-ignore
window.ResizeObserver = ResizeObserver;

// required for scrollTo methods
scrollToPolyfill();
