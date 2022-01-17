import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { TimelineItem } from '@ui5/webcomponents-react/dist/TimelineItem';
import React from 'react';

describe('TimelineItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TimelineItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(TimelineItem);
});
