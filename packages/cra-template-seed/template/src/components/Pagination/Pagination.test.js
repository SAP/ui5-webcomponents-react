import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '../../util/TestSetup';

import { Pagination } from './Pagination';

const fourButtonsPagination = {
  numberOfElements: 11,
  totalPages: 2,
  number: 0,
};

const fourButtonsSelectedAtLastPagination = {
  numberOfElements: 11,
  totalPages: 2,
  number: 1,
};

const sixButtonsPagination = {
  numberOfElements: 61,
  totalPages: 7,
  number: 3,
};

describe('Pagination.js Test Suite', () => {
  beforeEach(() => {
    render(<Pagination numberOfElements={sixButtonsPagination.numberOfElements} totalPages={sixButtonsPagination.totalPages} selectedPage={sixButtonsPagination.number} />);
  });

  test('should have 6 buttons (< 2 3 4 5 6 >) with 61 records and a size of 10', () => {
    const pagination = screen.getByTestId('pagination-wrapper');
    const leftArrow = screen.getByTestId('leftarrow-pagination-wrapper');
    const morePreviousPage = screen.getByTestId('morePreviousPage-pagination-wrapper');
    const previousPage = screen.getByTestId('previousPage-pagination-wrapper');
    const selectedPage = screen.getByTestId('selectedPage-pagination-wrapper');
    const nextPage = screen.getByTestId('nextPage-pagination-wrapper');
    const moreNextPage = screen.getByTestId('moreNextPage-pagination-wrapper');
    const afterArrow = screen.getByTestId('afterarrow-pagination-wrapper');

    expect(pagination).toBeInTheDocument();
    expect(leftArrow).toHaveTextContent('<');
    expect(morePreviousPage).toHaveTextContent('2');
    expect(previousPage).toHaveTextContent('3');
    expect(selectedPage).toHaveTextContent('4');
    expect(nextPage).toHaveTextContent('5');
    expect(moreNextPage).toHaveTextContent('6');
    expect(afterArrow).toHaveTextContent('>');
  });

  test('should have button 4 selected', () => {
    const pagination = screen.getByTestId('pagination-wrapper');
    const selectedPage = screen.getByTestId('selectedPage-pagination-wrapper');

    expect(pagination).toBeInTheDocument();
    expect(selectedPage).toHaveProperty('design', 'Emphasized');
  });

  test('should increment selected page when nextPage is selected', async () => {
    let selectedPageCount = 3;
    const setSelectedPageCount = (params) => {
      selectedPageCount = params;
    };
    render(
      <Pagination
        numberOfElements={sixButtonsPagination.numberOfElements}
        totalPages={sixButtonsPagination.totalPages}
        selectedPage={sixButtonsPagination.number}
        setPage={(params) => setSelectedPageCount(params)}
      />,
    );
    const pagination = screen.getAllByTestId('pagination-wrapper')[1];
    const afterArrow = screen.getAllByTestId('afterarrow-pagination-wrapper')[1];

    expect(pagination).toBeInTheDocument();
    expect(selectedPageCount).toBe(3);
    fireEvent.click(afterArrow);
    expect(selectedPageCount).toBe(4);
  });

  test('should decrease selected page when nextPage is selected', async () => {
    let selectedPageCount = 3;
    const setSelectedPageCount = (params) => {
      selectedPageCount = params;
    };
    render(
      <Pagination
        numberOfElements={sixButtonsPagination.numberOfElements}
        totalPages={sixButtonsPagination.totalPages}
        selectedPage={sixButtonsPagination.number}
        setPage={(params) => setSelectedPageCount(params)}
      />,
    );
    const pagination = screen.getAllByTestId('pagination-wrapper')[1];
    const leftArrow = screen.getAllByTestId('leftarrow-pagination-wrapper')[1];

    expect(pagination).toBeInTheDocument();
    expect(selectedPageCount).toBe(3);
    fireEvent.click(leftArrow);
    expect(selectedPageCount).toBe(2);
  });

  test('should have button < disabled when first page is selected in a example with 2 pages', () => {
    render(<Pagination numberOfElements={fourButtonsPagination.numberOfElements} totalPages={fourButtonsPagination.totalPages} selectedPage={fourButtonsPagination.number} />);

    const pagination = screen.getAllByTestId('pagination-wrapper')[1];
    const leftarrow = screen.getAllByTestId('leftarrow-pagination-wrapper')[1];

    expect(pagination).toBeInTheDocument();
    expect(leftarrow).toHaveProperty('disabled', true);
  });

  test('should have button > disabled when last page is selected  in a example with 2 pages', () => {
    render(
      <Pagination
        numberOfElements={fourButtonsSelectedAtLastPagination.numberOfElements}
        totalPages={fourButtonsSelectedAtLastPagination.totalPages}
        selectedPage={fourButtonsSelectedAtLastPagination.number}
      />,
    );

    const afterarrow = screen.getAllByTestId('afterarrow-pagination-wrapper')[1];

    expect(afterarrow).toBeInTheDocument();
    expect(afterarrow).toHaveProperty('disabled', true);
  });

  test('should render nothing (return undefined) when no pagination data is passed', () => {
    render(<Pagination numberOfElements={null} totalPages={null} selectedPage={null} />);

    const pagination = screen.getAllByTestId('pagination-wrapper')[1];

    expect(pagination).toBeUndefined();
  });
});
