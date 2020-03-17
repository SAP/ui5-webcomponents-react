import { mount } from 'enzyme';
import { Tokenizer } from '@ui5/webcomponents-react/lib/Tokenizer';
import React from 'react';

describe('Tokenizer', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<Tokenizer />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
