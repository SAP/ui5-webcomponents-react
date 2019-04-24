import React from 'react';
import { Event } from '@fiori-for-react/utils';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from '../../packages/fiori3/src/components/ThemeProvider';
import { ContentDensity, Themes } from '@fiori-for-react/core/enums';

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
  mount(
    <ThemeProvider theme={Themes.sap_fiori3_light} contentDensity={ContentDensity.Compact} {...contextOverwrite}>
      {component}
    </ThemeProvider>,
    enzymeOptions
  );

export const ThemedComponent = (component, contextOverwrite = {}) => (
  <ThemeProvider theme={Themes.sap_fiori3_light} contentDensity={ContentDensity.Compact} {...contextOverwrite}>
    {component}
  </ThemeProvider>
);

export const renderThemedComponent = (component, contextOverwrite = {}) =>
  shallow(
    <ThemeProvider theme={Themes.sap_fiori3_light} contentDensity={ContentDensity.Compact} {...contextOverwrite}>
      {component}
    </ThemeProvider>
  ).render();
