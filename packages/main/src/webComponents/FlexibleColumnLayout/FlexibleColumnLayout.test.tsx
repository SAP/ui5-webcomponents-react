import { FlexibleColumnLayout } from '@ui5/webcomponents-react/lib/FlexibleColumnLayout';
import { mount } from 'enzyme';
import React from 'react';

describe('FlexibleColumnLayout', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<FlexibleColumnLayout />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
