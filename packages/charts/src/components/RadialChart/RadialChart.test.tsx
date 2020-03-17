import { mount } from 'enzyme';
import * as React from 'react';
import { RadialChart } from './index';

describe('RadialChart', () => {
  test('Renders with data', () => {
    expect(mount(<RadialChart value={1} displayValue="1%" />).render()).toMatchSnapshot();
  });
});
