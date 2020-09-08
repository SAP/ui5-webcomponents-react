import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../util/TestSetup';

import HyperLink from './HyperLink';
import { LinkDesign } from '@ui5/webcomponents-react/lib/LinkDesign';

describe('Shell.js Test Suite', () => {
  beforeEach(() => {
    render(<HyperLink />);
  });

  test('should match snapshot', () => {
    const link = screen.getByTestId('link-wrapper');

    expect(link).toMatchSnapshot();
  });

  test('renders with "test" text', () => {
    render(<HyperLink text='test' />);
    const linkElement = screen.getByText('test');

    expect(linkElement).toBeInTheDocument();
  });

  test('is Emphasized', () => {
    render(<HyperLink text='test' />);
    const linkElement = screen.getByText('test');

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('design', LinkDesign.Emphasized);
  });
});
