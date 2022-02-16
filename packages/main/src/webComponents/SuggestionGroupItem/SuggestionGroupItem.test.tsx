import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { SuggestionGroupItem } from './index';

describe('SuggestionGroupItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<SuggestionGroupItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(SuggestionGroupItem);
  createWaitForDefineTest(SuggestionGroupItem);
});
