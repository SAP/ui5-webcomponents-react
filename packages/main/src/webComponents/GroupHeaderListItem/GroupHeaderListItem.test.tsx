import { render } from '@shared/tests';
import { GroupHeaderListItem } from '@ui5/webcomponents-react/dist/GroupHeaderListItem';
import React from 'react';

describe('GroupHeaderListItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<GroupHeaderListItem />);
    expect(asFragment()).toMatchSnapshot();
  });
});
