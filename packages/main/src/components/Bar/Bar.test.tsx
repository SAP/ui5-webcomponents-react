import { createPassThroughPropsTest } from '@shared/tests/utils';
import { render, screen, cleanup } from '@testing-library/react';
import { Bar } from '@ui5/webcomponents-react/lib/Bar';
import { BarDesign } from '@ui5/webcomponents-react/lib/BarDesign';
import React from 'react';

const text1 = 'Content Left';
const text2 = 'Content Middle';
const text3 = 'Content Right';

describe('Bar', () => {
  afterEach(cleanup);

  test('Renders with default Props', () => {
    expect(render(<Bar />).asFragment()).toMatchSnapshot();
  });

  test('Render all content', () => {
    const utils = render(
      <Bar contentLeft={<div>{text1}</div>} contentMiddle={<div>{text2}</div>} contentRight={<div>{text3}</div>} />
    );

    expect(screen.getByText(text1).textContent).toEqual(text1);
    expect(screen.getByText(text2).textContent).toEqual(text2);
    expect(screen.getByText(text3).textContent).toEqual(text3);

    expect(utils.asFragment()).toMatchSnapshot();
  });

  test('Test classes for all modes', () => {
    const { rerender } = render(
      <Bar
        design={BarDesign.Footer}
        contentLeft={<div>{text1}</div>}
        contentMiddle={<div>{text2}</div>}
        contentRight={<div>{text3}</div>}
        data-testid={'bar'}
      />
    );
    expect(screen.getByTestId('bar').className).toMatch(/footer/);

    rerender(
      <Bar
        design={BarDesign.SubHeader}
        contentLeft={<div>{text1}</div>}
        contentMiddle={<div>{text2}</div>}
        contentRight={<div>{text3}</div>}
        data-testid={'bar'}
      />
    );

    expect(screen.getByTestId('bar').className).toMatch(/subHeader/);
    rerender(
      <Bar
        design={BarDesign.FloatingFooter}
        contentLeft={<div>{text1}</div>}
        contentMiddle={<div>{text2}</div>}
        contentRight={<div>{text3}</div>}
        data-testid={'bar'}
      />
    );
    expect(screen.getByTestId('bar').className).toMatch(/floatingFooter/);
  });

  createPassThroughPropsTest(Bar);
});
