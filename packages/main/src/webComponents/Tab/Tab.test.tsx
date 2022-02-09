import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { Tab } from './index';
import React from 'react';

describe('Tab', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Tab />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Tab);
});
