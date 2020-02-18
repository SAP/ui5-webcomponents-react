import { mountThemedComponent, renderThemedComponent } from '@shared/tests/utils';
import * as React from 'react';
import { dataset, label } from '../../test/resources/RechartProps';
import { ColumnRechart } from './ColumnRechart';

describe('ColumnRechart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<ColumnRechart width={'100%'} dataset={dataset} labelKey={label} />);
  });

  test('loading placeholder', () => {
    const wrapper = mountThemedComponent(<ColumnRechart width={'50%'} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
