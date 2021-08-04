import { render } from '@shared/tests';
import { Bar } from '@ui5/webcomponents-react/dist/Bar';
import React from 'react';

describe('Bar', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(
      <Bar startContent={<span>Start</span>} children={<span>Middle</span>} endContent={<span>End</span>} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
