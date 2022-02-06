import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { Timeline } from './index';
import React from 'react';

describe('Timeline', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Timeline />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Timeline);
});
