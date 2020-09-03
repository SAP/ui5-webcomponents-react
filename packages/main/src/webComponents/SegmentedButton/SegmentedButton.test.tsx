import { render } from '@shared/tests';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { SegmentedButton } from '@ui5/webcomponents-react/lib/SegmentedButton';
import React from 'react';

describe('SegmentedButton', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(
      <SegmentedButton>
        <Button>Segment 1</Button>
        <Button>Segment 2</Button>
        <Button>Segment 3</Button>
      </SegmentedButton>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
