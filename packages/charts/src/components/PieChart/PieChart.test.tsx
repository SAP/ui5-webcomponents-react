import * as React from 'react';
import { mountThemedComponent, renderThemedComponent } from '@shared/tests/utils';
import { PieChart } from './index';
import { labels, singleDataset } from '../../test/resources/ChartProps';

describe('PieChart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<PieChart labels={labels} datasets={singleDataset} />);
  });

  test('loading placeholder', () => {
    const wrapper = mountThemedComponent(<PieChart labels={labels} datasets={[]} loading />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
