import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../util/TestSetup';

import Link from './Link';
import { LinkDesign } from '@ui5/webcomponents-react/lib/LinkDesign';

beforeEach(() => {
  render(<Link />);
});

test('should match snapshot', () => {
  const link = screen.getByTestId('link-wrapper');

  expect(link).toMatchSnapshot();
});

test('renders with "test" text', () => {
  render(<Link text='test' />);
  const linkElement = screen.getByText('test');

  expect(linkElement).toBeInTheDocument();
});

test('is Emphasized', () => {
  render(<Link text='test' />);
  const linkElement = screen.getByText('test');

  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('design', LinkDesign.Emphasized);
});
