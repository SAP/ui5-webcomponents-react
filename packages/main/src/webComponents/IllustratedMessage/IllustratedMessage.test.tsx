import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { IllustratedMessage } from './index';

describe('IllustratedMessage', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<IllustratedMessage />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(IllustratedMessage);
  createWaitForDefineTest(IllustratedMessage);
});
