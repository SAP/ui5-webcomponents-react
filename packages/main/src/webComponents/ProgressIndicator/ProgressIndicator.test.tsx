import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { ProgressIndicator } from './index';
import React from 'react';

describe('ProgressIndicator', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ProgressIndicator />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ProgressIndicator);
});
