import { RatingIndicator } from '@ui5/webcomponents-react/lib/RatingIndicator';
import { mount } from 'enzyme';
import React from 'react';

describe('RatingIndicator', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<RatingIndicator />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
