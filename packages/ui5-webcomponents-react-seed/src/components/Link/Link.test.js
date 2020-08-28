import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Link from './Link';
import { LinkDesign } from '@ui5/webcomponents-react/lib/LinkDesign';

test('should match snapshot', () => {
  const { asFragment } = render(<Link />);
  expect(asFragment()).toMatchSnapshot();
});

test('renders with "test" text', () => {
  const { getByText } = render(<Link text='test' />);
  const linkElement = getByText('test');
  expect(linkElement).toBeInTheDocument();
});

test('is Emphasized', () => {
  const { getByText } = render(<Link text='test' />);
  const linkElement = getByText('test');
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('design', LinkDesign.Emphasized);
});
