import { render } from '@shared/tests';
import { SideNavigationItem } from '@ui5/webcomponents-react/lib/SideNavigationItem';
import React from 'react';

describe('SideNavigationItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<SideNavigationItem />);
    expect(asFragment()).toMatchSnapshot();
  });
});
