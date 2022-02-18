import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { ProgressIndicator } from './index';

describe('ProgressIndicator', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ProgressIndicator />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ProgressIndicator);
  createWaitForDefineTest(ProgressIndicator);
});
