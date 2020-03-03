import { mountThemedComponent, renderThemedComponent } from '@shared/tests/utils';
import * as React from 'react';
import { RadialChart } from './RadialRechart';

describe('RadialChart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<RadialChart width={'100%'} value={67} displayValue={'67%'} />);
  });

  test('loading placeholder', () => {
    const wrapper = mountThemedComponent(<RadialChart width={'50%'} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
