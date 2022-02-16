import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Carousel } from './index';

describe('Carousel', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Carousel />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Carousel);
  createWaitForDefineTest(Carousel);
});
