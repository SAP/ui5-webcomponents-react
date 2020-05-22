import { Label } from '@ui5/webcomponents-react/lib/Label';
import { mount } from 'enzyme';
import React from 'react';

describe('Label', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<Label />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
