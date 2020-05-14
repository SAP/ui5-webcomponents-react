import { mount } from 'enzyme';
import * as React from 'react';
import { LineChart } from './LineChart';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { complexDataSet } from '../../resources/DemoProps';

describe('LineChart', () => {
  test('Renders with data', () => {
    expect(
      mount(
        <LineChart
          loading={boolean('loading', false)}
          onDataPointClick={action('onDataPointClick')}
          onLegendClick={action('onLegendClick')}
          dataset={complexDataSet}
          style={{ width: '100%' }}
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
