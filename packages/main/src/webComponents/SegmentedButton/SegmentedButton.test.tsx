import { render } from '@shared/tests';
import { SegmentedButtonItem } from '@ui5/webcomponents-react/dist/SegmentedButtonItem';
import { SegmentedButton } from '@ui5/webcomponents-react/dist/SegmentedButton';
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
});
