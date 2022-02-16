import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { SegmentedButtonItem } from './index';

describe('SegmentedButtonItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<SegmentedButtonItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(SegmentedButtonItem);
  createWaitForDefineTest(SegmentedButtonItem);
});
