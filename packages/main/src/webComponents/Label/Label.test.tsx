import { render } from '@shared/tests';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import React from 'react';

describe('Label', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Label />);
    expect(asFragment()).toMatchSnapshot();
  });
});
