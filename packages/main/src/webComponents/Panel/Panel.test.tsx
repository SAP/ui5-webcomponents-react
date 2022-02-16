import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Panel } from './index';

describe('Panel', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Panel />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Panel);
  createWaitForDefineTest(Panel);
});
