import { renderThemedComponent } from '@shared/tests/utils';
import * as React from 'react';
import { labels, singleDataset } from '../../test/resources/ChartProps';
import { RadarChart } from './index';

describe('RadarChart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<RadarChart labels={labels} datasets={singleDataset} />);
  });
});
