import { render } from '@shared/tests';
import { FilterItemOption } from '@ui5/webcomponents-react/lib/FilterItemOption';
import React from 'react';

describe('FilterItemOption', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<FilterItemOption />);
    expect(asFragment()).toMatchSnapshot();
  });
});
