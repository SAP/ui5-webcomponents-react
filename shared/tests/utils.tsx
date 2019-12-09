import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';
import { mount, shallow } from 'enzyme';
import React from 'react';

export const modifyObjectProperty = (object: any, attr: string, value: any) => {
  Object.defineProperty(object, attr, {
    value,
    configurable: true,
    writable: true
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

export const mountThemedComponent = (
  component,
  contextOverwrite: { [key: string]: string } = {},
  enzymeOptions = {}
) => {
  return mount(<ThemeProvider {...contextOverwrite}>{component}</ThemeProvider>, enzymeOptions);
};

export const renderThemedComponent = (component, contextOverwrite = {}) =>
  shallow(<ThemeProvider {...contextOverwrite}>{component}</ThemeProvider>).render();
