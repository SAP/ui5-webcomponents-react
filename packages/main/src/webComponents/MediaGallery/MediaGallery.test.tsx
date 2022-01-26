import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { MediaGallery } from '@ui5/webcomponents-react/dist/MediaGallery';
import React from 'react';

describe('MediaGallery', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<MediaGallery />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(MediaGallery);
});
