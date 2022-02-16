import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Card } from './index';

describe('Card', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Card);
  createWaitForDefineTest(Card);
});
