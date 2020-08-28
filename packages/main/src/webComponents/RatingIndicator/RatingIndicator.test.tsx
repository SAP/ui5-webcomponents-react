import { render } from '@shared/tests';
import { RatingIndicator } from '@ui5/webcomponents-react/lib/RatingIndicator';
import React from 'react';

describe('RatingIndicator', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<RatingIndicator />);
    expect(asFragment()).toMatchSnapshot();
  });
});
