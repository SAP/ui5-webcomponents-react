import { mountThemedComponent, renderThemedComponent } from '@shared/tests/utils';
import * as React from 'react';
import { dataset, label } from '../../resources/RechartProps';
import { ComposedChart } from './ComposedRechart';

describe('ComposedChart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<ComposedChart width={'100%'} dataset={dataset} labelKey={label} />);
  });

  test('loading placeholder', () => {
    const wrapper = mountThemedComponent(<ComposedChart width={'50%'} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
