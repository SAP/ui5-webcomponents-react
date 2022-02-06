import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { TextArea } from './index';
import React from 'react';

describe('TextArea', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TextArea />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(TextArea);
});
