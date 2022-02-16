import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { TextArea } from './index';

describe('TextArea', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TextArea />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(TextArea);
  createWaitForDefineTest(TextArea);
});
