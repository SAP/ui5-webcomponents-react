import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { SuggestionGroupItem } from './index';
import React from 'react';

describe('SuggestionGroupItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<SuggestionGroupItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(SuggestionGroupItem);
});
