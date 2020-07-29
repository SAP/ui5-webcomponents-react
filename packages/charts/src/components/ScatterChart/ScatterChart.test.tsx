import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { mount } from 'enzyme';
import * as React from 'react';
import { scatterComplexDataSet } from '../../resources/DemoProps';
import { ScatterChart } from '@ui5/webcomponents-react-charts/lib/ScatterChart';

describe('Scatter Chart', () => {
  test('Renders with data', () => {
    expect(
      mount(
        <ScatterChart
          loading={boolean('loading', false)}
          onDataPointClick={action('onDataPointClick')}
          onLegendClick={action('onLegendClick')}
          dataset={scatterComplexDataSet}
          style={{ width: '100%' }}
          measures={[
            {
              accessor: 'users',
              label: 'Users',
              axis: 'x'
            },
            {
              accessor: 'sessions',
              label: 'Sessions',
              axis: 'y'
            },
            {
              accessor: 'volume',
              axis: 'z'
            }
          ]}
        />
      ).render()
    ).toMatchSnapshot();
  });

  test('loading placeholder', () => {
    const wrapper = mount(<ScatterChart style={{ width: '30%' }} measures={[]} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
