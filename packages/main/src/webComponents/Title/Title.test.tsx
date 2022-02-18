import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Title } from './index';

describe('Title', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Title />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Title);
  createWaitForDefineTest(Title);
});
