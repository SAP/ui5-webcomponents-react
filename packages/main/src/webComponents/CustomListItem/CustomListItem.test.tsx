import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { CustomListItem } from '@ui5/webcomponents-react/dist/CustomListItem';
import React from 'react';

describe('CustomListItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<CustomListItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(CustomListItem);
});
