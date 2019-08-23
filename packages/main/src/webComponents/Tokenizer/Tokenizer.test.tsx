import React from 'react';
import { Tokenizer } from '../../lib/Tokenizer';
import { mountThemedComponent } from '@shared/tests/utils';

describe('Tokenizer', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Tokenizer />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
