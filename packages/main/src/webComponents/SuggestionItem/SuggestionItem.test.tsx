import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { SuggestionItem } from './index';
import React from 'react';

describe('SuggestionItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<SuggestionItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(SuggestionItem);
});
