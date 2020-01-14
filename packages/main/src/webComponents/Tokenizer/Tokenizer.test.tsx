import { mountThemedComponent } from '@shared/tests/utils';
import { Tokenizer } from '@ui5/webcomponents-react/lib/Tokenizer';
import React from 'react';

describe('Tokenizer', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Tokenizer />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
