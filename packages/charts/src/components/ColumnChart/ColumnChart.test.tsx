import * as React from 'react';
import { mountThemedComponent, renderThemedComponent } from '@shared/tests/utils';
import { ColumnChart } from './index';
import { labels, singleDataset } from '../../test/resources/ChartProps';

describe('ColumnChart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<ColumnChart labels={labels} datasets={singleDataset} />);
  });

  test('loading placeholder', () => {
    const wrapper = mountThemedComponent(<ColumnChart labels={labels} datasets={[]} loading />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
