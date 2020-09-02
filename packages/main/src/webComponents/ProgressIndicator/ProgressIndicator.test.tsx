import { render } from '@shared/tests';
import { ProgressIndicator } from '@ui5/webcomponents-react/lib/ProgressIndicator';
import React from 'react';

describe('ProgressIndicator', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ProgressIndicator />);
    expect(asFragment()).toMatchSnapshot();
  });
});
