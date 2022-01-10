import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { SortItem } from '@ui5/webcomponents-react/dist/SortItem';
import React from 'react';

describe('SortItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<SortItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(SortItem);
});
