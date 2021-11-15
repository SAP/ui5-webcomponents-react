import { render } from '@shared/tests';
import { AvatarGroup } from '@ui5/webcomponents-react/dist/AvatarGroup';
import { Avatar } from '@ui5/webcomponents-react/dist/Avatar';
import React from 'react';

describe('AvatarGroup', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(
      <AvatarGroup>
        <Avatar initials="UI5" />
      </AvatarGroup>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
