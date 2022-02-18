import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { MediaGallery } from './index';

describe('MediaGallery', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<MediaGallery />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(MediaGallery);
  createWaitForDefineTest(MediaGallery);
});
