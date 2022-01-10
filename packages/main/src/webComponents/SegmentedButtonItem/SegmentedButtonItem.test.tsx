import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { SegmentedButtonItem } from '@ui5/webcomponents-react/dist/SegmentedButtonItem';
import React from 'react';

describe('SegmentedButtonItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<SegmentedButtonItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(SegmentedButtonItem);
});
