import { mount } from 'enzyme';
import * as React from 'react';
import { labels, singleDataset } from '../../resources/ChartProps';
import { RadarChart } from './index';

describe('RadarChart', () => {
  test('Renders with data', () => {
    expect(mount(<RadarChart labels={labels} datasets={singleDataset} />).render()).toMatchSnapshot();
  });
});
