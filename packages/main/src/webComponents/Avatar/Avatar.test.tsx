import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { Avatar } from '@ui5/webcomponents-react/dist/Avatar';
import React from 'react';

describe('Avatar', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Avatar />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Avatar);
});
