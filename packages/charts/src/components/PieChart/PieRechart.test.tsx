import { mount } from 'enzyme';
import * as React from 'react';
import { dataset, label } from '../../resources/RechartProps';
import { PieChart } from './PieChart';

describe('PieChart', () => {
  test('Renders with data', () => {
    expect(mount(<PieChart width={'100%'} dataset={dataset} labelKey={label} />).render()).toMatchSnapshot();
  });

  test('loading placeholder', () => {
    const wrapper = mount(<PieChart width={'50%'} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
