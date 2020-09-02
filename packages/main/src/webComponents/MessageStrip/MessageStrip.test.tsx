import { render } from '@shared/tests';
import { MessageStrip } from '@ui5/webcomponents-react/lib/MessageStrip';
import React from 'react';

describe('MessageStrip', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<MessageStrip />);
    expect(asFragment()).toMatchSnapshot();
  });
});
