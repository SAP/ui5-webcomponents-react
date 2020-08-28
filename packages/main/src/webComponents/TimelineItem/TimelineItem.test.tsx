import { render } from '@shared/tests';
import { TimelineItem } from '@ui5/webcomponents-react/lib/TimelineItem';
import React from 'react';

describe('TimelineItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TimelineItem />);
    expect(asFragment()).toMatchSnapshot();
  });
});
