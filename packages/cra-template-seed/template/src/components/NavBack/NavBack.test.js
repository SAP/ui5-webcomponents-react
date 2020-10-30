import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '../../util/TestSetup';

import NavBack from './NavBack';

describe('NavBack.js Test Suite', () => {
  beforeEach(() => {
    render(<NavBack />, { route: 'TODO_EDIT' });
  });

  test('should contains Back text if nothing is passed', () => {
    const navback = screen.getByTestId('navback-wrapper');

    expect(navback).toHaveTextContent('Back');
  });

  test('should contains transparent button', () => {
    const navback = screen.getByTestId('navback-wrapper');

    expect(navback).toHaveProperty('design', 'Transparent');
  });

  test('should redirect to home if pressed', async () => {
    const navback = screen.getByTestId('navback-wrapper');

    await fireEvent.click(navback);

    const currentURL = window.location.pathname;

    expect(currentURL).toEqual('/');
  });

  test('should contains Nav Back text if is passed', () => {
    render(<NavBack text="Nav Back" />);

    const navback = screen.getAllByTestId('navback-wrapper')[1];

    expect(navback).toHaveTextContent('Nav Back');
  });
});
