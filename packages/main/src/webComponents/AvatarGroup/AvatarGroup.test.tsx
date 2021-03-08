import { render } from '@shared/tests';
import { AvatarGroup } from '@ui5/webcomponents-react/dist/AvatarGroup';
import React from 'react';

describe('AvatarGroup', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<AvatarGroup />);
    expect(asFragment()).toMatchSnapshot();
  });
});
