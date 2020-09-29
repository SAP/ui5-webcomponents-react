import { render } from '@shared/tests';
import * as React from 'react';
import { simpleDataSet } from '../../resources/DemoProps';
import { PieChart } from './PieChart';

describe('PieChart', () => {
  test('Renders with data', () => {
    const utils = render(
      <PieChart
        dataset={simpleDataSet}
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
    );
    expect(utils.asFragment()).toMatchSnapshot();
  });

  test('loading placeholder', () => {
    const wrapper = render(
      <PieChart style={{ width: '50%' }} dimension={{ accessor: 'name' }} measure={{ accessor: 'users' }} />
    );
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
