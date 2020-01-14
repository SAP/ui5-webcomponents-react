import { mountThemedComponent, renderThemedComponent } from '@shared/tests/utils';
import * as React from 'react';
import { labels, singleDataset } from '../../test/resources/ChartProps';
import { DonutChart } from './index';

describe('DonutChart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<DonutChart labels={labels} datasets={singleDataset} />);
  });

  test('loading placeholder', () => {
    const wrapper = mountThemedComponent(<DonutChart labels={labels} datasets={[]} loading />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
