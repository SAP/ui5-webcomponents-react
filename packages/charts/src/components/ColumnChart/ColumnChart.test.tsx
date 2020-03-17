import { mount } from 'enzyme';
import * as React from 'react';
import { labels, singleDataset } from '../../resources/ChartProps';
import { ColumnChart } from './index';

describe('ColumnChart', () => {
  test('Renders with data', () => {
    expect(mount(<ColumnChart labels={labels} datasets={singleDataset} />).render()).toMatchSnapshot();
  });

  test('loading placeholder', () => {
    const wrapper = mount(<ColumnChart labels={labels} datasets={[]} loading />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
