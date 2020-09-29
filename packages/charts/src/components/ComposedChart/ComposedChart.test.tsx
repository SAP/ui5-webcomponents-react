import { render } from '@shared/tests';
import * as React from 'react';
import { complexDataSet } from '../../resources/DemoProps';
import { ColumnChart } from '../ColumnChart/ColumnChart';
import { ComposedChart } from './index';

describe('ComposedChart', () => {
  test('Renders with data', () => {
    const utils = render(
      <ComposedChart
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
            accessor: 'sessions',
            label: 'Active Sessions',
            type: 'bar'
          },
          {
            accessor: 'users',
            label: 'Users',
            formatter: (val) => val.toLocaleString(),
            type: 'line'
          },
          {
            accessor: 'volume',
            label: 'Vol.',
            formatter: (val) => `${val} sessions`,
            type: 'line'
          }
        ]}
      />
    );
    expect(utils.asFragment()).toMatchSnapshot();
  });

  test('loading placeholder', () => {
    const wrapper = render(<ColumnChart style={{ width: '50%' }} dimensions={[]} measures={[]} />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
