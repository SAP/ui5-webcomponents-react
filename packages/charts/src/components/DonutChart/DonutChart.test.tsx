import { render } from '@shared/tests';
import * as React from 'react';
import { simpleDataSet } from '../../resources/DemoProps';
import { DonutChart } from './DonutChart';

describe('DonutChart', () => {
  test('Renders with data', () => {
    const utils = render(
      <DonutChart
        dataset={simpleDataSet}
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
      <DonutChart
        style={{ width: '30%' }}
        dimension={{
          accessor: 'name'
        }}
        measure={{
          accessor: 'users'
        }}
      />
    );
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
