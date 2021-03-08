import { render } from '@shared/tests';
import { SideNavigationSubItem } from '@ui5/webcomponents-react/dist/SideNavigationSubItem';
import React from 'react';

describe('SideNavigationSubItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<SideNavigationSubItem />);
    expect(asFragment()).toMatchSnapshot();
  });
});
