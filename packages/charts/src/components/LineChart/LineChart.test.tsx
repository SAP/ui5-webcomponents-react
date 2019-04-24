import * as React from 'react';
import { renderThemedComponent } from '@shared/tests/utils';
import { LineChart } from './index';
import { labels, singleDataset } from '../../test/resources/ChartProps';

describe('LineChart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<LineChart labels={labels} datasets={singleDataset} />);
  });
});
