import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';
import { mount, shallow } from 'enzyme';
import React, { ComponentType } from 'react';

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

export const createPassThroughPropsTest = (Component: ComponentType<any>, props = {}) => {
  test('Pass Through HTML Standard Props', () => {
    const wrapper = mount(
      <Component
        data-special-test-prop="data-prop"
        aria-labelledby="aria-prop"
        id="element-id"
        disabled-custom-prop
        {...props}
      />
    );
    const html = wrapper.html();

    expect(html).toMatch(/data-special-test-prop="data-prop"/);
    expect(html).toMatch(/aria-labelledby="aria-prop"/);
    // special handling for ObjectPage Sections because of own ID handling...
    if (Component.displayName !== 'ObjectPageSection' && Component.displayName !== 'ObjectPageSubSection') {
      expect(html).toMatch(/id="element-id"/);
    }
    expect(html).not.toMatch(/disabled-custom-prop/);
  });
};
