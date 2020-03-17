import { mount } from 'enzyme';
import * as React from 'react';
import { dataset, label } from '../../resources/RechartProps';
import { BarChart } from './BarChart';

describe('BarRechart', () => {
  test('Renders with data', () => {
    expect(mount(<BarChart width={'100%'} dataset={dataset} labelKey={label} />).render()).toMatchSnapshot();
  });

  test('loading placeholder', () => {
    const wrapper = mount(<BarChart width={'50%'} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
