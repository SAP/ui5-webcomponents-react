import { mountThemedComponent, renderThemedComponent } from '@shared/tests/utils';
import * as React from 'react';
import { dataset, label } from '../../test/resources/RechartProps';
import { DonutRechart } from './DonutRechart';

describe('DonutRechart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<DonutRechart width={'100%'} dataset={dataset} labelKey={label} />);
  });

  test('loading placeholder', () => {
    const wrapper = mountThemedComponent(<DonutRechart width={'50%'} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
