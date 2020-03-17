import { renderThemedComponent } from '@shared/tests/utils';
import { mount } from 'enzyme';
import * as React from 'react';
import { dataset, label } from '../../resources/RechartProps';
import { ComposedChart } from './index';

describe('ComposedChart', () => {
  test('Renders with data', () => {
    renderThemedComponent(
      <ComposedChart
        width={'100%'}
        dataset={dataset}
        labelKey={label}
        elements={[
          {
            type: 'bar',
            accessor: 'sessions',
            fillOpacity: 0.1,
            barSize: 25,
            stackId: 'a'
          },
          {
            type: 'bar',
            accessor: 'volume',
            strokeWidth: 2,
            stackId: 'a'
          },
          {
            type: 'line',
            accessor: 'users',
            color: 'orange',
            strokeOpacity: 0.7,
            strokeWidth: 3.5
          }
        ]}
      />
    );
  });

  test('loading placeholder', () => {
    const wrapper = mount(<ComposedChart width={'50%'} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
