import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { Wizard } from '@ui5/webcomponents-react/dist/Wizard';
import React from 'react';

describe('Wizard', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Wizard />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Wizard);
});
