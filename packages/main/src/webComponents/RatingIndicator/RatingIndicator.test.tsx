import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { RatingIndicator } from './index';
import React from 'react';

describe('RatingIndicator', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<RatingIndicator />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(RatingIndicator);
});
