import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { FlexibleColumnLayout } from './index';
import React from 'react';

describe('FlexibleColumnLayout', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<FlexibleColumnLayout />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(FlexibleColumnLayout);
});
