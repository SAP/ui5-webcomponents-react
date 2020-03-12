import { mountThemedComponent, renderThemedComponent } from '@shared/tests/utils';
import * as React from 'react';
import { dataset, label } from '../../resources/RechartProps';
import { DonutChart } from './DonutChart';

describe('DonutChart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<DonutChart width={'100%'} dataset={dataset} labelKey={label} />);
  });

  test('loading placeholder', () => {
    const wrapper = mountThemedComponent(<DonutChart width={'50%'} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
