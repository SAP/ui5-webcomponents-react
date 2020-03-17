import 'core-js/modules/es.array.flat';
import 'core-js/modules/es.object.assign';
import 'core-js/modules/es.object.values';
import 'core-js/modules/es.array.from';
import ResizeObserver from 'resize-observer-polyfill';
import 'intersection-observer';

// @ts-ignore
window.ResizeObserver = ResizeObserver;
