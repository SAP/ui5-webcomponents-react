import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { Popover } from '@ui5/webcomponents-react/dist/Popover';
import React from 'react';

describe('Popover', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Popover />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Popover);
});
