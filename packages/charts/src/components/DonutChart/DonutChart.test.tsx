import { mount } from 'enzyme';
import * as React from 'react';
import { labels, singleDataset } from '../../resources/ChartProps';
import { DonutChart } from './index';

describe('DonutChart', () => {
  test('Renders with data', () => {
    expect(mount(<DonutChart labels={labels} datasets={singleDataset} />).render()).toMatchSnapshot();
  });

  test('loading placeholder', () => {
    const wrapper = mount(<DonutChart labels={labels} datasets={[]} loading />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
