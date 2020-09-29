import { render } from '@shared/tests';
import { SideNavigation } from '@ui5/webcomponents-react/lib/SideNavigation';
import React from 'react';

describe('SideNavigation', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<SideNavigation />);
    expect(asFragment()).toMatchSnapshot();
  });
});
