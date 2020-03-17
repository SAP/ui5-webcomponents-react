import { mount } from 'enzyme';
import * as React from 'react';
import { labels, singleDataset } from '../../resources/ChartProps';
import { PieChart } from './index';

describe('PieChart', () => {
  test('Renders with data', () => {
    expect(mount(<PieChart labels={labels} datasets={singleDataset} />).render()).toMatchSnapshot();
  });

  test('loading placeholder', () => {
    const wrapper = mount(<PieChart labels={labels} datasets={[]} loading />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
