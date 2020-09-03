import { render } from '@shared/tests';
import { CustomListItem } from '@ui5/webcomponents-react/lib/CustomListItem';
import React from 'react';

describe('CustomListItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<CustomListItem />);
    expect(asFragment()).toMatchSnapshot();
  });
});
