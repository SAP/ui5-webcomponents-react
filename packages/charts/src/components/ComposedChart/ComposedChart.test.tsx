import { mount } from 'enzyme';
import * as React from 'react';
import { ComposedChart } from './index';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { complexDataSet } from '../../resources/DemoProps';
import { ColumnChart } from '../ColumnChart/ColumnChart';

describe('ComposedChart', () => {
  test('Renders with data', () => {
    expect(
      mount(
        <ComposedChart
          loading={boolean('loading', false)}
          onDataPointClick={action('onDataPointClick')}
          onLegendClick={action('onLegendClick')}
          dataset={complexDataSet}
          style={{ height: '60vh' }}
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
      ).render()
    ).toMatchSnapshot();
  });

  test('loading placeholder', () => {
    const wrapper = mount(<ColumnChart style={{ width: '50%' }} dimensions={[]} measures={[]} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
