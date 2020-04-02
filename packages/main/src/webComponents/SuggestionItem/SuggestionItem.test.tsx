import { SuggestionItem } from '@ui5/webcomponents-react/lib/SuggestionItem';
import { mount } from 'enzyme';
import React from 'react';

describe('SuggestionItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<SuggestionItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
