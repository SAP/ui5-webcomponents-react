import { mount } from 'enzyme';
import * as React from 'react';
import { BarChart } from './BarChart';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { complexDataSet } from '../../resources/DemoProps';

describe('BarRechart', () => {
  test('Renders with data', () => {
    expect(
      mount(
        <BarChart
          loading={boolean('loading', false)}
          onDataPointClick={action('onDataPointClick')}
          onLegendClick={action('onLegendClick')}
          dataset={complexDataSet}
          style={{ height: '60vh' }}
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
      ).render()
    ).toMatchSnapshot();
  });

  test('loading placeholder', () => {
    const wrapper = mount(<BarChart style={{ width: '30%' }} dimensions={[]} measures={[]} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
