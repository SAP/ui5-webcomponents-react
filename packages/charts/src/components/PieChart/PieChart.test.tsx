import { mount } from 'enzyme';
import * as React from 'react';
import { PieChart } from './PieChart';
import { action } from '@storybook/addon-actions';
import { simpleDataSet } from '../../resources/DemoProps';
import { text } from '@storybook/addon-knobs';

describe('PieChart', () => {
  test('Renders with data', () => {
    expect(
      mount(
        <PieChart
          onDataPointClick={action('onDataPointClick')}
          onLegendClick={action('onLegendClick')}
          style={{ width: '50%' }}
          dataset={simpleDataSet}
          chartConfig={{
            innerRadius: text('innerRadius', '0%')
          }}
          dimension={{
            accessor: 'name'
          }}
          measure={{
            accessor: 'users'
          }}
        />
      ).render()
    ).toMatchSnapshot();
  });

  test('loading placeholder', () => {
    const wrapper = mount(<PieChart style={{ width: '50%' }} dimensions={[]} measures={[]} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
