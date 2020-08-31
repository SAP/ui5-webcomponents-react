import { render } from '@shared/tests';
import { Popover } from '@ui5/webcomponents-react/lib/Popover';
import React from 'react';

describe('Popover', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Popover />);
    expect(asFragment()).toMatchSnapshot();
  });
});
