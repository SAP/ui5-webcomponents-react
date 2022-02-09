import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { FilterItemOption } from './index';
import React from 'react';

describe('FilterItemOption', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<FilterItemOption />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(FilterItemOption);
});
