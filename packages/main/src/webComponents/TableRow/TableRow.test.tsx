import { mount } from 'enzyme';
import { TableRow } from '@ui5/webcomponents-react/lib/TableRow';
import React from 'react';

describe('TableRow', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<TableRow />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
