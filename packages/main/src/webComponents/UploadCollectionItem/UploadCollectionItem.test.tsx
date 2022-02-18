import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { UploadCollectionItem } from './index';

describe('UploadCollectionItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<UploadCollectionItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(UploadCollectionItem);
  createWaitForDefineTest(UploadCollectionItem);
});
