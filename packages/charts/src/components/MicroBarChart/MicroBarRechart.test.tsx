import { mount } from 'enzyme';
import * as React from 'react';
import { singleData } from '../../resources/DemoProps';
import { MicroBarChart } from './MicroBarChart';

describe('PieChart', () => {
  test('Renders with data', () => {
    expect(
      mount(
        <MicroBarChart
          dataset={singleData}
          style={{ width: '50%' }}
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
    const wrapper = mount(<MicroBarChart style={{ width: '50%' }} dimensions={[]} measures={[]} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
