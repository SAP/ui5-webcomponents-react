import * as React from 'react';
import { renderThemedComponent } from '@shared/tests/utils';
import { ColumnChart } from './index';
import { labels, singleDataset } from '../../test/resources/ChartProps';

describe('ColumnChart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<ColumnChart labels={labels} datasets={singleDataset} />);
  });
});
