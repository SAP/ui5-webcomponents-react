import { render } from '@shared/tests';
import { StandardListItem } from '@ui5/webcomponents-react/dist/StandardListItem';
import React from 'react';

describe('StandardListItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<StandardListItem />);
    expect(asFragment()).toMatchSnapshot();
  });
});
