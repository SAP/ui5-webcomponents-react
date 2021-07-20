import { render, screen } from '@shared/tests';
import * as React from 'react';
import { complexDataSet } from '../../resources/DemoProps';
import { ColumnChartWithTrend } from './ColumnChartWithTrend';
import { createPassThroughPropsTest } from '@shared/tests/utils';

describe('ColumnChart', () => {
  test('Renders with data', () => {
    const { container, asFragment } = render(
      <ColumnChartWithTrend
        dataset={complexDataSet}
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
          }
        ]}
      />
    );

    const responsiveContainers = container.querySelectorAll('div.recharts-responsive-container');
    expect(responsiveContainers.length).toBe(2);

    expect(asFragment()).toMatchSnapshot();
  });

  test('Loading placeholder', () => {
    const { container, asFragment } = render(<ColumnChartWithTrend dimensions={[]} measures={[]} />);
    const responsiveContainers = container.querySelectorAll('div.recharts-responsive-container');
    expect(responsiveContainers.length).toBe(0);

    expect(asFragment()).toMatchSnapshot();
  });

  createPassThroughPropsTest(ColumnChartWithTrend, { dimensions: [], measures: [] });
});
