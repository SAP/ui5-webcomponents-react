import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Link } from './index';

describe('Link', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Link />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Link);
  createWaitForDefineTest(Link);
});
