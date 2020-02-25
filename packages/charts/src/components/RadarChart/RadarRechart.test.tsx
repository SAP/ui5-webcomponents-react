import { mountThemedComponent, renderThemedComponent } from '@shared/tests/utils';
import * as React from 'react';
import { dataset, label } from '../../resources/RechartProps';
import { RadarChart } from './RadarRechart';

describe('RadarChart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<RadarChart width={'100%'} dataset={dataset} labelKey={label} />);
  });

  test('loading placeholder', () => {
    const wrapper = mountThemedComponent(<RadarChart width={'50%'} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
