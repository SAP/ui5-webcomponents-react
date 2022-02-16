import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Label } from './index';

describe('Label', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Label />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Label);
  createWaitForDefineTest(Label);
});
