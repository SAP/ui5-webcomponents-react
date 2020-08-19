import { ProgressIndicator } from '@ui5/webcomponents-react/lib/ProgressIndicator';
import { mount } from 'enzyme';
import React from 'react';

describe('ProgressIndicator', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<ProgressIndicator />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
