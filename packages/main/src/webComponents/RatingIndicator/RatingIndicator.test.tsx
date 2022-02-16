import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { RatingIndicator } from './index';

describe('RatingIndicator', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<RatingIndicator />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(RatingIndicator);
  createWaitForDefineTest(RatingIndicator);
});
