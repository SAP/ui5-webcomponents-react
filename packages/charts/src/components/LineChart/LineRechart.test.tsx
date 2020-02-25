import { mountThemedComponent, renderThemedComponent } from '@shared/tests/utils';
import * as React from 'react';
import { dataset, label } from '../../resources/RechartProps';
import { LineChart } from './LineRechart';

describe('LineChart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<LineChart width={'100%'} dataset={dataset} labelKey={label} />);
  });

  test('loading placeholder', () => {
    const wrapper = mountThemedComponent(<LineChart width={'50%'} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
