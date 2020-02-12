import { mountThemedComponent, renderThemedComponent } from '@shared/tests/utils';
import * as React from 'react';
import { label, dataset } from '../../test/resources/RechartProps';
import { LineRechart } from './LineRechart';

describe('LineRechart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<LineRechart width={'50%'} dataset={dataset} labelKey={label} />);
  });

  test('loading placeholder', () => {
    const wrapper = mountThemedComponent(<LineRechart width={'50%'} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
