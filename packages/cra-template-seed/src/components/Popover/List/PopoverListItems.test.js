import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../util/TestSetup';

import PopoverListItems from './PopoverListItems';

const popoverListItemsRef = {
  current: {
    openBy: jest.fn(),
  },
};

const popoverItems = [
  {
    children: 'Language Switch',
    icon: 'user-settings',
  },
  {
    children: 'Theme Switch',
    icon: 'customize',
  },
];

describe('PopoverListItems.js Test Suite', () => {
  beforeEach(() => {
    render(
      <>
        <p data-testid="opener-wrapper" onClick={(e) => popoverListItemsRef.current.openBy(e.detail.targetRef)}>
          Open Popover
        </p>
        <PopoverListItems popoverRef={popoverListItemsRef} title="Some Title" items={popoverItems} />
      </>,
    );
  });

  test('should render once triggered to open', async () => {
    const opener = screen.getByTestId('opener-wrapper');
    await userEvent.click(opener);

    const popoverListItems = screen.getByTestId('popoverListItems-wrapper');
    expect(popoverListItems).toBeInTheDocument();
  });

  test('should render two items in the list if passed correctly', async () => {
    const opener = screen.getByTestId('opener-wrapper');
    await userEvent.click(opener);

    const popoverListItems = screen.getByTestId('popoverListItems-wrapper');
    const popoverListItemsListOfElements = screen.getByTestId('popoverListItems-listOfElements-wrapper');
    expect(popoverListItems).toBeInTheDocument();
    expect(popoverListItemsListOfElements).toBeInTheDocument();
    expect(popoverListItemsListOfElements.children).toHaveLength(2);
  });
});
