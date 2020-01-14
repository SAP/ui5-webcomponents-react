import { renderThemedComponent } from '@shared/tests/utils';
import * as React from 'react';
import { RadialChart } from './index';

describe('RadialChart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<RadialChart value={1} displayValue="1%" />);
  });
});
