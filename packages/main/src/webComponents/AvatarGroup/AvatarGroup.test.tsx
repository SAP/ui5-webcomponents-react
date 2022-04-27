import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Avatar } from '../Avatar';
import { AvatarGroup } from './index';

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
  createWaitForDefineTest(AvatarGroup, { children: <Avatar initials="UI5" /> });
});
