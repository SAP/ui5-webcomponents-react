import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { AvatarGroup } from './index';
import { Avatar } from '../Avatar';
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
  createCustomPropsTest(AvatarGroup, { children: <Avatar initials="UI5" /> });
});
