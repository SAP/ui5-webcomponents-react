import { mount } from 'enzyme';
import React from 'react';
import { Carousel } from '@ui5/webcomponents-react/lib/Carousel';

describe('Carousel', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<Carousel />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
