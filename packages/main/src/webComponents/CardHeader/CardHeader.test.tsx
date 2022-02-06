import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { CardHeader } from './index';
import React from 'react';

describe('CardHeader', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<CardHeader />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(CardHeader);
});
