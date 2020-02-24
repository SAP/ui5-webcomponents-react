import { mountThemedComponent, renderThemedComponent } from '@shared/tests/utils';
import * as React from 'react';
import { dataset, label } from '../../test/resources/RechartProps';
import { BarChart } from './BarRechart';

describe('BarRechart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<BarChart width={'100%'} dataset={dataset} labelKey={label} />);
  });

  test('loading placeholder', () => {
    const wrapper = mountThemedComponent(<BarChart width={'50%'} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
