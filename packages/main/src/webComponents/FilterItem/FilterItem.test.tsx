import { render } from '@shared/tests';
import { FilterItem } from '@ui5/webcomponents-react/lib/FilterItem';
import React from 'react';

describe('FilterItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<FilterItem />);
    expect(asFragment()).toMatchSnapshot();
  });
});
