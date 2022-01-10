import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { MessageStrip } from '@ui5/webcomponents-react/dist/MessageStrip';
import React from 'react';

describe('MessageStrip', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<MessageStrip />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(MessageStrip);
});
