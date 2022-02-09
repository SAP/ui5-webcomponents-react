import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { Title } from './index';
import React from 'react';

describe('Title', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Title />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Title);
});
