import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { Card } from './index';
import React from 'react';

describe('Card', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Card);
});
