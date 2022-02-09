import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { MediaGalleryItem } from './index';
import React from 'react';

describe('MediaGalleryItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<MediaGalleryItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(MediaGalleryItem);
});
