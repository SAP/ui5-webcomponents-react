import { render } from '@shared/tests';
import { Bar } from '@ui5/webcomponents-react/lib/Bar';
import React from 'react';

describe('Bar', () => {
  test.skip('Basic Test (generated)', () => {
    const { asFragment } = render(
      <Bar
        startContent={<span>Start Content</span>}
        middleContent={<span>Middle Content</span>}
        endContent={<span>End Content</span>}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
