import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { FlexibleColumnLayout } from './index';

describe('FlexibleColumnLayout', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<FlexibleColumnLayout />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(FlexibleColumnLayout);
  createWaitForDefineTest(FlexibleColumnLayout);
});
