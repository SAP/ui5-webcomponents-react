import { render } from '@shared/tests';
import * as React from 'react';
import { complexDataSet } from '../../resources/DemoProps';
import { ColumnChartWithTrend } from './ColumnChartWithTrend';

describe('ColumnChart', () => {
  test('Renders with data', () => {
    const utils = render(
      <ColumnChartWithTrend
        dataset={complexDataSet}
        style={{ width: '50%' }}
        dimensions={[
          {
            accessor: 'name',
            formatter: (d) => `${d} 2019`,
            interval: 0
          }
        ]}
        measures={[
          {
            accessor: 'users',
            label: 'Users',
            formatter: (val) => val.toLocaleString(),
            type: 'line'
          },
          {
            accessor: 'sessions',
            label: 'Active Sessions',
            type: 'column'
          },
          {
            accessor: 'volume',
            label: 'Vol.',
            type: 'column'
          }
        ]}
      />
    );
    expect(utils.asFragment()).toMatchSnapshot();
  });

  test('Loading placeholder', () => {
    const wrapper = render(<ColumnChartWithTrend style={{ width: '30%' }} dimensions={[]} measures={[]} />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
