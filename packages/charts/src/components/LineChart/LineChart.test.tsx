import { mount } from 'enzyme';
import * as React from 'react';
import { complexDataSet } from '../../resources/DemoProps';
import { LineChart } from './LineChart';

describe('LineChart', () => {
  test('Renders with data', () => {
    expect(
      mount(
        <LineChart
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
      ).render()
    ).toMatchSnapshot();
  });

  test('loading placeholder', () => {
    const wrapper = mount(<LineChart style={{ width: '30%' }} dimensions={[]} measures={[]} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
