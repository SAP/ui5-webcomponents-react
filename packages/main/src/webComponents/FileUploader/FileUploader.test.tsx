import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { FileUploader } from './index';
import React from 'react';

describe('FileUploader', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<FileUploader />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(FileUploader);
});
