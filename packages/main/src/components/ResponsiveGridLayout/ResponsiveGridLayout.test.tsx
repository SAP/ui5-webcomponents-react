import { screen, render } from '@shared/tests';
import { createPassThroughPropsTest } from '@shared/tests/utils';
import { ResponsiveGridLayout } from '@ui5/webcomponents-react/dist/ResponsiveGridLayout';
import React from 'react';

describe('ResponsiveGridLayout', () => {
  test('Render without Crashing', () => {
    const { asFragment } = render(
      <ResponsiveGridLayout>
        <div style={{ gridColumn: 'span 2' }} data-testid={'span2'} />
        <div style={{ gridColumn: 'span 3' }} data-testid={'span3'} />
        <div style={{ gridColumn: 'span 4' }} />
        <div style={{ gridColumn: 'span 5' }} />
        <div data-testid={'defaultspan'} />
        <div />
        <div />
        <div style={{ gridColumn: 'span 4' }} />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </ResponsiveGridLayout>
    );

    expect(screen.getByTestId('span2')).toHaveStyle(`grid-column: span 2`);
    expect(screen.getByTestId('span3')).toHaveStyle(`grid-column: span 3`);
    // can't assert on default-span because jsdom does not support media queries at the moment: https://github.com/jsdom/jsdom/issues/2805
    // expect(screen.getByTestId('defaultspan')).toHaveStyle('grid-column: span 1');

    expect(asFragment()).toMatchSnapshot();
  });

  createPassThroughPropsTest(ResponsiveGridLayout);
});
