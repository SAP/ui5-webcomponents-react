import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { FileUploader } from './index';

describe('FileUploader', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<FileUploader />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(FileUploader);
  createWaitForDefineTest(FileUploader);
});
