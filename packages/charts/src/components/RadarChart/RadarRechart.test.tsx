import { mountThemedComponent, renderThemedComponent } from '@shared/tests/utils';
import * as React from 'react';
import { dataset, label } from '../../test/resources/RechartProps';
import { RadarRechart } from './RadarRechart';

describe('LineRechart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<RadarRechart width={'100%'} dataset={dataset} labelKey={label} />);
  });

  test('loading placeholder', () => {
    const wrapper = mountThemedComponent(<RadarRechart width={'50%'} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
