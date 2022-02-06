import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { SegmentedButtonItem } from '../SegmentedButtonItem';
import { SegmentedButton } from './index';
import React from 'react';

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
});
