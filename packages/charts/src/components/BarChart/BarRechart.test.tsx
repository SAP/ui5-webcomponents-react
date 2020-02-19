import { mountThemedComponent, renderThemedComponent } from '@shared/tests/utils';
import * as React from 'react';
import { label, dataset } from '../../test/resources/RechartProps';
import { BarRechart } from './BarRechart';

describe('BarRechart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<BarRechart width={'100%'} dataset={dataset} labelKey={label} />);
  });

  test('loading placeholder', () => {
    const wrapper = mountThemedComponent(<BarRechart width={'50%'} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
