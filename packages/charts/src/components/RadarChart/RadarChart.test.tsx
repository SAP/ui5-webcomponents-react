import * as React from 'react';
import { renderThemedComponent } from '@shared/tests/utils';
import { RadarChart } from './index';
import { labels, singleDataset } from '../../test/resources/ChartProps';

describe('RadarChart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<RadarChart labels={labels} datasets={singleDataset} />);
  });
});
