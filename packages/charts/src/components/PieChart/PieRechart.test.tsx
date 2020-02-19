import { mountThemedComponent, renderThemedComponent } from '@shared/tests/utils';
import * as React from 'react';
import { label, dataset } from '../../test/resources/RechartProps';
import { PieChart } from './PieRechart';

describe('PieChart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<PieChart width={'100%'} dataset={dataset} labelKey={label} />);
  });

  test('loading placeholder', () => {
    const wrapper = mountThemedComponent(<PieChart width={'50%'} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
