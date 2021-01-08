import { render } from '@shared/tests';
import { Bar } from '@ui5/webcomponents-react/lib/Bar';
import React from 'react';

describe('Bar', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(
      <Bar startContent={<span>Start</span>} middleContent={<span>Middle</span>} endContent={<span>End</span>} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
