import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { SegmentedButtonItem } from './index';
import React from 'react';

describe('SegmentedButtonItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<SegmentedButtonItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(SegmentedButtonItem);
});
