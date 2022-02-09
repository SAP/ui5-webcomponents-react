import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { Avatar } from './index';
import React from 'react';

describe('Avatar', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Avatar />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Avatar);
});
