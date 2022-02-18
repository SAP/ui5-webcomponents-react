import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { SuggestionItem } from './index';

describe('SuggestionItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<SuggestionItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(SuggestionItem);
  createWaitForDefineTest(SuggestionItem);
});
