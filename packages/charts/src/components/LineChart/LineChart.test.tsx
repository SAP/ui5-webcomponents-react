import { mountThemedComponent, renderThemedComponent } from '@shared/tests/utils';
import * as React from 'react';
import { labels, singleDataset } from '../../test/resources/ChartProps';
import { LineChart } from './index';

describe('LineChart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<LineChart labels={labels} datasets={singleDataset} />);
  });

  test('loading placeholder', () => {
    const wrapper = mountThemedComponent(<LineChart labels={labels} datasets={[]} loading />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
