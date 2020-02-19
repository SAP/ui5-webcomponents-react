import { mountThemedComponent, renderThemedComponent } from '@shared/tests/utils';
import * as React from 'react';
import { label, dataset } from '../../test/resources/RechartProps';
import { ComposedRechart } from './ComposedRechart';

describe('ComposedRechart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<ComposedRechart width={'100%'} dataset={dataset} labelKey={label} />);
  });

  test('loading placeholder', () => {
    const wrapper = mountThemedComponent(<ComposedRechart width={'50%'} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
