import { mountThemedComponent, renderThemedComponent } from '@shared/tests/utils';
import * as React from 'react';
import { dataset, label } from '../../test/resources/RechartProps';
import { ColumnChart } from './ColumnRechart';

describe('ColumnRechart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<ColumnChart width={'100%'} dataset={dataset} labelKey={label} />);
  });

  test('loading placeholder', () => {
    const wrapper = mountThemedComponent(<ColumnChart width={'50%'} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
