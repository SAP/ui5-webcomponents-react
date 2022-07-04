import { fireEvent, render, screen } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import React from 'react';
import { DeviationIndicator, ValueColor } from '../../enums';
import { AnalyticalCard } from '../AnalyticalCard';
import { NumericSideIndicator } from '../NumericSideIndicator';
import { AnalyticalCardHeader } from './index';

describe('AnalyticalCardHeader', () => {
  test.each([
    [ValueColor.Error, 'AnalyticalCardHeader-error'],
    [ValueColor.Critical, 'AnalyticalCardHeader-critical'],
    [ValueColor.Good, 'AnalyticalCardHeader-good'],
    [ValueColor.Neutral, 'AnalyticalCardHeader-neutral']
  ])(`state '%s`, (state, expectedClassName) => {
    render(<AnalyticalCardHeader unitOfMeasurement="EUR" trend={DeviationIndicator.Down} value="123" state={state} />);
    expect(screen.getByText('123').parentElement).toHaveClass(expectedClassName);
  });

  test('click event', () => {
    const cb = jest.fn();

    const { rerender, container } = render(<AnalyticalCardHeader onClick={cb} titleText="header" />);

    expect(container.firstChild).toHaveClass('AnalyticalCardHeader-cardHeaderClickable');
    fireEvent.click(screen.getByText('header'));
    expect(cb).toHaveBeenCalledTimes(1);

    rerender(<AnalyticalCardHeader titleText="header" />);
    expect(container.firstChild).not.toHaveClass('AnalyticalCardHeader-cardHeaderClickable');
  });

  test('with all string props', () => {
    const { asFragment } = render(
      <AnalyticalCardHeader
        titleText="Title"
        subtitleText="Subtitle"
        value="Value"
        unitOfMeasurement="Unit"
        description="Description"
      >
        <NumericSideIndicator titleText="Target" number={100} />
        <NumericSideIndicator titleText="Deviation" number={50} state={ValueColor.Error} />
      </AnalyticalCardHeader>
    );
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Subtitle')).toBeInTheDocument();
    expect(screen.getByText('Value')).toBeInTheDocument();
    expect(screen.getByText('Unit')).toBeInTheDocument();
    expect(screen.getByText('Target')).toBeInTheDocument();
    expect(screen.getByText('Deviation')).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  test('with arrow indicator', () => {
    const { rerender } = render(<AnalyticalCardHeader scale="EUR" trend={DeviationIndicator.Down} />);
    expect(screen.getByText('EUR').previousSibling).toHaveAttribute('name', 'down');

    rerender(<AnalyticalCardHeader scale="EUR" trend={DeviationIndicator.Up} />);
    expect(screen.getByText('EUR').previousSibling).toHaveAttribute('name', 'up');
  });

  createCustomPropsTest(AnalyticalCard);
});
