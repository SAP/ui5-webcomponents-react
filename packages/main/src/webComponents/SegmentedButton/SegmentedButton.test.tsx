import { SegmentedButton } from '@ui5/webcomponents-react/lib/SegmentedButton';
import { mount } from 'enzyme';
import React from 'react';

describe('SegmentedButton', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<SegmentedButton />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
