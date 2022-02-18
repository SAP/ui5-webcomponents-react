import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { UploadCollection } from './index';

describe('UploadCollection', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<UploadCollection />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(UploadCollection);
  createWaitForDefineTest(UploadCollection);
});
