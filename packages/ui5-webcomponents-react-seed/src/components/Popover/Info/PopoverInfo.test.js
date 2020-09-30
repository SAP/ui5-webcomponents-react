import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../util/TestSetup';

import PopoverInfo from './PopoverInfo';

const popoverInfoRef = {
  current: {
    openBy: jest.fn(),
  },
};

describe('PopoverInfo.js Test Suite', () => {
  beforeEach(() => {
    render(
      <>
        <p data-testid="opener-wrapper" onClick={(e) => popoverInfoRef.current.openBy(e.detail.targetRef)}>
          Open Popover
        </p>
        <PopoverInfo popoverRef={popoverInfoRef} title="Some Title" />
      </>,
    );
  });

  test('should render once triggered to open', async () => {
    const opener = screen.getByTestId('opener-wrapper');
    await userEvent.click(opener);

    const popoverInfo = screen.getByTestId('popoverInfo-wrapper');
    expect(popoverInfo).toBeInTheDocument();
  });

  test('should render placed at bottom', async () => {
    const opener = screen.getByTestId('opener-wrapper');
    await userEvent.click(opener);

    const popoverInfo = screen.getByTestId('popoverInfo-wrapper');
    expect(popoverInfo).toBeInTheDocument();
    expect(popoverInfo).toHaveProperty('placementType', 'Bottom');
  });

  test('should render with title if passed', async () => {
    const opener = screen.getByTestId('opener-wrapper');
    await userEvent.click(opener);

    const popoverInfo = screen.getByTestId('popoverInfo-wrapper');
    const title = screen.getByTestId('popoverInfo-title-wrapper');
    expect(popoverInfo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Some Title');
  });

  test('should render without title if none is passed', async () => {
    render(
      <>
        <p data-testid="opener-wrapper" onClick={(e) => popoverInfoRef.current.openBy(e.detail.targetRef)}>
          Open Popover
        </p>
        <PopoverInfo popoverRef={popoverInfoRef} />
      </>,
    );

    const opener = screen.getAllByTestId('opener-wrapper')[1];
    await userEvent.click(opener);

    const popoverInfo = screen.getAllByTestId('popoverInfo-wrapper')[1];
    const title = screen.getAllByTestId('popoverInfo-title-wrapper')[1];
    expect(popoverInfo).toBeInTheDocument();
    expect(title).toBeUndefined();
  });
});
