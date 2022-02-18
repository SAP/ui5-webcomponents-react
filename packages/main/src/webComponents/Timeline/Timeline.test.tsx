import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Timeline } from './index';

describe('Timeline', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Timeline />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Timeline);
  createWaitForDefineTest(Timeline);
});
