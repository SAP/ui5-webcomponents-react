import { render } from '@shared/tests';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import React from 'react';

describe('Title', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Title />);
    expect(asFragment()).toMatchSnapshot();
  });
});
