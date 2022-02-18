import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { CardHeader } from './index';

describe('CardHeader', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<CardHeader />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(CardHeader);
  createWaitForDefineTest(CardHeader);
});
