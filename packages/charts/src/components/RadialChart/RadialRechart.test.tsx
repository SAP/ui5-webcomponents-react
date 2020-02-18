import { mountThemedComponent, renderThemedComponent } from '@shared/tests/utils';
import * as React from 'react';
import { dataset, label } from '../../test/resources/RechartProps';
import { RadialRechart } from './RadialRechart';

describe('LineRechart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<RadialRechart width={'100%'} dataset={dataset} labelKey={label} />);
  });

  test('loading placeholder', () => {
    const wrapper = mountThemedComponent(<RadialRechart width={'50%'} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
