import { render } from '@shared/tests';
import { SegmentedButton } from '@ui5/webcomponents-react/lib/SegmentedButton';
import React from 'react';

describe('SegmentedButton', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<SegmentedButton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
