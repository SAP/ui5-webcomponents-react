import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { StandardListItem } from './index';
import React from 'react';

describe('StandardListItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<StandardListItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(StandardListItem);
});
