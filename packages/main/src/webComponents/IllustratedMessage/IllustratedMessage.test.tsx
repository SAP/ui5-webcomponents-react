import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { IllustratedMessage } from '@ui5/webcomponents-react/dist/IllustratedMessage';
import React from 'react';

describe('IllustratedMessage', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<IllustratedMessage />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(IllustratedMessage);
});
