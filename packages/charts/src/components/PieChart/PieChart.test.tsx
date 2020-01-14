import { mountThemedComponent, renderThemedComponent } from '@shared/tests/utils';
import * as React from 'react';
import { labels, singleDataset } from '../../test/resources/ChartProps';
import { PieChart } from './index';

describe('PieChart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<PieChart labels={labels} datasets={singleDataset} />);
  });

  test('loading placeholder', () => {
    const wrapper = mountThemedComponent(<PieChart labels={labels} datasets={[]} loading />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
