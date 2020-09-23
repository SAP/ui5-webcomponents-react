import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../util/TestSetup';

import { Pagination } from './Pagination';

const fourButtonsPagination = {
  numberOfElements: 11,
  totalPages: 2,
  number: 0,
};

describe('Pagination.js Test Suite', () => {
  beforeEach(() => {
    render(<Pagination numberOfElements={fourButtonsPagination.numberOfElements} totalPages={fourButtonsPagination.totalPages} selectedPage={fourButtonsPagination.number} />);
  });

  test('should match snapshot', () => {
    const pagination = screen.getByTestId('pagination-wrapper');

    expect(pagination).toMatchSnapshot();
  });

  test('should have 4 buttons (< 1 2 >) ', () => {
    const pagination = screen.getByTestId('pagination-wrapper');
    const leftarrow = screen.getByTestId('leftarrow-pagination-wrapper');
    const selectedPage = screen.getByTestId('selectedPage-pagination-wrapper');
    const nextPage = screen.getByTestId('nextPage-pagination-wrapper');
    const afterarrow = screen.getByTestId('afterarrow-pagination-wrapper');

    expect(pagination).toBeInTheDocument();
    expect(leftarrow).toHaveTextContent('<');
    expect(selectedPage).toHaveTextContent('1');
    expect(nextPage).toHaveTextContent('2');
    expect(afterarrow).toHaveTextContent('>');
  });

  test('should have button < disabled', () => {
    const pagination = screen.getByTestId('pagination-wrapper');
    const leftarrow = screen.getByTestId('leftarrow-pagination-wrapper');

    expect(pagination).toBeInTheDocument();
    expect(leftarrow).toHaveProperty('disabled', true);
  });

  test('should have button 1 selected', () => {
    const pagination = screen.getByTestId('pagination-wrapper');
    const selectedPage = screen.getByTestId('selectedPage-pagination-wrapper');

    expect(pagination).toBeInTheDocument();
    expect(selectedPage).toHaveProperty('design', 'Emphasized');
  });
});
