import { Table } from '@ui5/webcomponents-react/lib/Table';
import { mount } from 'enzyme';
import React from 'react';

describe('Table', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<Table />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
