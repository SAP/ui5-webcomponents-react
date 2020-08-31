import { render } from '@shared/tests';
import { Avatar } from '@ui5/webcomponents-react/lib/Avatar';
import React from 'react';

describe('Avatar', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Avatar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
