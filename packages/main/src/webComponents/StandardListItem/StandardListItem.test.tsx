import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { StandardListItem } from './index';

describe('StandardListItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<StandardListItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(StandardListItem);
  createWaitForDefineTest(StandardListItem);
});
