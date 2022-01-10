import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { CardHeader } from '@ui5/webcomponents-react/dist/CardHeader';
import React from 'react';

describe('CardHeader', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<CardHeader />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(CardHeader);
});
