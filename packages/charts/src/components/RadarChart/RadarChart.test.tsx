import { mount } from 'enzyme';
import * as React from 'react';
import { complexDataSet } from '../../resources/DemoProps';
import { RadarChart } from './RadarChart';

describe('RadarChart', () => {
  test('Renders with data', () => {
    expect(
      mount(
        <RadarChart
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
    const wrapper = mount(<RadarChart style={{ width: '100%' }} dimensions={[]} measures={[]} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
