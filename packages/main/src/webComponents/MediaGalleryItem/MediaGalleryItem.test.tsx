import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { MediaGalleryItem } from '@ui5/webcomponents-react/dist/MediaGalleryItem';
import React from 'react';

describe('MediaGalleryItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<MediaGalleryItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(MediaGalleryItem);
});
