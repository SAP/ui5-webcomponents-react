import { mountThemedComponent, renderThemedComponent } from '@shared/tests/utils';
import * as React from 'react';
import { dataset, label } from '../../test/resources/RechartProps';
import { LineRechart } from './LineRechart';

describe('LineRechart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<LineRechart width={'100%'} dataset={dataset} labelKey={label} />);
  });

  test('loading placeholder', () => {
    const wrapper = mountThemedComponent(<LineRechart width={'50%'} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
