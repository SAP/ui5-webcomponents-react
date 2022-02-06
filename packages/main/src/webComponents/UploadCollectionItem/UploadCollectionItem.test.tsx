import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { UploadCollectionItem } from './index';
import React from 'react';

describe('UploadCollectionItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<UploadCollectionItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(UploadCollectionItem);
});
