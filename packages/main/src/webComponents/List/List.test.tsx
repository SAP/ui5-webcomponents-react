import { render } from '@shared/tests';
import { List } from '@ui5/webcomponents-react/lib/List';
import React from 'react';

describe('List', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<List />);
    expect(asFragment()).toMatchSnapshot();
  });
});
