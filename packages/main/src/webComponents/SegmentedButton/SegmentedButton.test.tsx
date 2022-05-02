import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { SegmentedButtonItem } from '../SegmentedButtonItem';
import { SegmentedButton } from './index';

describe('SegmentedButton', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(
      <SegmentedButton>
        <SegmentedButtonItem>Segment 1</SegmentedButtonItem>
        <SegmentedButtonItem>Segment 2</SegmentedButtonItem>
        <SegmentedButtonItem>Segment 3</SegmentedButtonItem>
      </SegmentedButton>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(SegmentedButton);
  createWaitForDefineTest(SegmentedButton);
});
