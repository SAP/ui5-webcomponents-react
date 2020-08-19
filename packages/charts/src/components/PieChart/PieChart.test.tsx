import { mount } from 'enzyme';
import * as React from 'react';
import { simpleDataSet } from '../../resources/DemoProps';
import { PieChart } from './PieChart';

describe('PieChart', () => {
  test('Renders with data', () => {
    expect(
      mount(
        <PieChart
          dataset={simpleDataSet}
          style={{ width: '50%' }}
          chartConfig={{
            innerRadius: '0%'
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
