import { render } from '@shared/tests';
import * as React from 'react';
import { RadialChart } from './RadialChart';

describe('RadialChart', () => {
  test('Renders with data', () => {
    const utils = render(<RadialChart style={{ width: '50%' }} value={67} displayValue={'67%'} />);
    expect(utils.asFragment()).toMatchSnapshot();
  });

  test('loading placeholder', () => {
    const wrapper = render(<RadialChart style={{ width: '50%' }} />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
