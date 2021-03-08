import { render } from '@shared/tests';
import { Carousel } from '@ui5/webcomponents-react/dist/Carousel';
import React from 'react';

describe('Carousel', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Carousel />);
    expect(asFragment()).toMatchSnapshot();
  });
});
