import { render } from '@shared/tests';
import { BreadcrumbsItem } from '@ui5/webcomponents-react/dist/BreadcrumbsItem';
import React from 'react';

describe('BreadcrumbsItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<BreadcrumbsItem />);
    expect(asFragment()).toMatchSnapshot();
  });
});
