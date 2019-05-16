import 'core-js/modules/es6.object.assign';
import 'core-js/modules/es7.object.values';

export const bootstrap = () => {
  // @ts-ignore
  if (!!window.Fiori4React === false) Object.assign(window, { Fiori4React: {} });
  // @ts-ignore
  if (!!window.Fiori4React.__SECRET_INTERNALS_DO_NOT_USE === false) {
    // @ts-ignore
    Object.assign(window.Fiori4React, {
      __SECRET_INTERNALS_DO_NOT_USE: {}
    });
  }
};
