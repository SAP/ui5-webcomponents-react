import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { IllustratedMessage } from './index';
import React from 'react';

describe('IllustratedMessage', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<IllustratedMessage />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(IllustratedMessage);
});
