import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { TimelineItem } from './index';

describe('TimelineItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TimelineItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(TimelineItem);
  createWaitForDefineTest(TimelineItem);
});
