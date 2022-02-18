import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { CustomListItem } from './index';

describe('CustomListItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<CustomListItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(CustomListItem);
  createWaitForDefineTest(CustomListItem);
});
