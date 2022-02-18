import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { FilterItemOption } from './index';

describe('FilterItemOption', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<FilterItemOption />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(FilterItemOption);
  createWaitForDefineTest(FilterItemOption);
});
