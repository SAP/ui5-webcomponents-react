import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { MediaGalleryItem } from './index';

describe('MediaGalleryItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<MediaGalleryItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(MediaGalleryItem);
  createWaitForDefineTest(MediaGalleryItem);
});
