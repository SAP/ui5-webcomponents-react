import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { TreeItem } from '@ui5/webcomponents-react/dist/TreeItem';
import React from 'react';

describe('TreeItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TreeItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(TreeItem);
});
