import ResizeObserver from 'resize-observer-polyfill';
import 'intersection-observer';
import smoothscroll from 'smoothscroll-polyfill';

// @ts-ignore
window.ResizeObserver = ResizeObserver;

// required for scrollTo methods
smoothscroll.polyfill();
