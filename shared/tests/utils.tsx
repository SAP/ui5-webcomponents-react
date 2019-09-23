import React from 'react';
import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from '../../packages/main/src/lib/ThemeProvider';

export const modifyObjectProperty = (object: any, attr: string, value: any) => {
  Object.defineProperty(object, attr, {
    value,
    configurable: true
  });
};
export const getEventFromCallback = (callback, index = 0): Event => {
  return callback.args[index][0];
};
export const setUserAgentString = (userAgent) => {
  Object.defineProperty(window.navigator, 'userAgent', {
    value: userAgent,
    configurable: true
  });
};

export const mountThemedComponent = (component, contextOverwrite = {}, enzymeOptions = {}) =>
  mount(<ThemeProvider {...contextOverwrite}>{component}</ThemeProvider>, enzymeOptions);

export const ThemedComponent = (component, contextOverwrite = {}) => (
  <ThemeProvider {...contextOverwrite}>{component}</ThemeProvider>
);

export const renderThemedComponent = (component, contextOverwrite = {}) =>
  shallow(<ThemeProvider {...contextOverwrite}>{component}</ThemeProvider>).render();

export { mount };
