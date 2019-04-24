import * as React from 'react';
import { renderThemedComponent } from '@shared/tests/utils';
import { DonutChart } from './index';
import { labels, singleDataset } from '../../test/resources/ChartProps';

describe('DonutChart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<DonutChart labels={labels} datasets={singleDataset} />);
  });
});
