import { mountThemedComponent, renderThemedComponent } from '@shared/tests/utils';
import * as React from 'react';
import { label, dataset } from '../../test/resources/RechartProps';
import { PieRechart } from './PieRechart';

describe('PieRechart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<PieRechart width={'100%'} dataset={dataset} labelKey={label} />);
  });

  test('loading placeholder', () => {
    const wrapper = mountThemedComponent(<PieRechart width={'50%'} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
