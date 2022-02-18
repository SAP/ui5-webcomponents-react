import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { GroupHeaderListItem } from './index';

describe('GroupHeaderListItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<GroupHeaderListItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(GroupHeaderListItem);
  createWaitForDefineTest(GroupHeaderListItem);
});
