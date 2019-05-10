import { ExtendedWindow } from '../interfaces/ExtendedWindow';
import 'core-js/modules/es6.object.assign';
import 'core-js/modules/es7.object.values';

if (!!(window as ExtendedWindow).Fiori4React === false) Object.assign(window, { Fiori4React: {} });
if (!!(window as ExtendedWindow).Fiori4React.__SECRET_INTERNALS_DO_NOT_USE === false) {
  Object.assign((window as ExtendedWindow).Fiori4React, {
    __SECRET_INTERNALS_DO_NOT_USE: {}
  });
}
