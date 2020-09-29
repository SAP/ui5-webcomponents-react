import { render } from '@shared/tests';
import * as React from 'react';
import { complexDataSet } from '../../resources/DemoProps';
import { BarChart } from './BarChart';

describe('BarRechart', () => {
  test('Renders with data', () => {
    const utils = render(
      <BarChart
        dataset={complexDataSet}
        dimensions={[
          {
            accessor: 'name',
            interval: 0
          }
        ]}
        measures={[
          {
            accessor: 'users',
            label: 'Users',
            formatter: (val) => val.toLocaleString()
          },
          {
            accessor: 'sessions',
            label: 'Active Sessions',
            formatter: (val) => `${val} sessions`,
            hideDataLabel: true
          },
          {
            accessor: 'volume',
            label: 'Vol.'
          }
        ]}
      />
    );
    expect(utils.asFragment()).toMatchSnapshot();
  });

  test('loading placeholder', () => {
    const wrapper = render(<BarChart dimensions={[]} measures={[]} />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
