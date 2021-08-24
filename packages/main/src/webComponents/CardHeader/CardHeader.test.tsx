import { render } from '@shared/tests';
import { CardHeader } from '@ui5/webcomponents-react/dist/CardHeader';
import React from 'react';

describe('CardHeader', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<CardHeader />);
    expect(asFragment()).toMatchSnapshot();
  });
});
