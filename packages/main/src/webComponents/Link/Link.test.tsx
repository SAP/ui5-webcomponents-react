import { render } from '@shared/tests';
import { Link } from '@ui5/webcomponents-react/dist/Link';
import React from 'react';

describe('Link', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Link />);
    expect(asFragment()).toMatchSnapshot();
  });
});
