import { render } from '@shared/tests';
import { FilterItemOption } from '@ui5/webcomponents-react/dist/FilterItemOption';
import React from 'react';

describe('FilterItemOption', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<FilterItemOption />);
    expect(asFragment()).toMatchSnapshot();
  });
});
