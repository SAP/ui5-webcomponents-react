import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Avatar } from './index';

describe('Avatar', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Avatar />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Avatar);
  createWaitForDefineTest(Avatar);
});
