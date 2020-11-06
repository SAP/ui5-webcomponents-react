import { render } from '@shared/tests';
import { Tokenizer } from '@ui5/webcomponents-react/lib/Tokenizer';
import React from 'react';

describe('Tokenizer', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Tokenizer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
