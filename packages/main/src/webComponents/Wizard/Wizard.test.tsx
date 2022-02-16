import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Wizard } from './index';

describe('Wizard', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Wizard />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Wizard);
  createWaitForDefineTest(Wizard);
});
