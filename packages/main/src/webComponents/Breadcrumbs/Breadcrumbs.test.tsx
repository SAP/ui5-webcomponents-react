import { render } from '@shared/tests';
import { Breadcrumbs } from '@ui5/webcomponents-react/dist/Breadcrumbs';
import React from 'react';

describe('Breadcrumbs', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Breadcrumbs />);
    expect(asFragment()).toMatchSnapshot();
  });
});
