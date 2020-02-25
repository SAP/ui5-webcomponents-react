import { mountThemedComponent, renderThemedComponent } from '@shared/tests/utils';
import * as React from 'react';
import { dataset, label } from '../../resources/RechartProps';
import { RadialChart } from './RadialRechart';

describe('RadialChart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<RadialChart width={'100%'} dataset={dataset} labelKey={label} />);
  });

  test('loading placeholder', () => {
    const wrapper = mountThemedComponent(<RadialChart width={'50%'} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
