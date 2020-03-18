import { mount } from 'enzyme';
import * as React from 'react';
import { dataset, label } from '../../resources/RechartProps';
import { DonutChart } from './DonutChart';

describe('DonutChart', () => {
  test('Renders with data', () => {
    expect(mount(<DonutChart width={'100%'} dataset={dataset} labelKey={label} />).render()).toMatchSnapshot();
  });

  test('loading placeholder', () => {
    const wrapper = mount(<DonutChart width={'50%'} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
