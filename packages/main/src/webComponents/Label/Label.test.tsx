import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { Label } from '@ui5/webcomponents-react/dist/Label';
import React from 'react';

describe('Label', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Label />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Label);
});
