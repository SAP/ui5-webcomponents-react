import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Tab } from './index';

describe('Tab', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Tab />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Tab);
  createWaitForDefineTest(Tab);
});
