import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Getting Started with UI5 Web Component for React/i);
  expect(linkElement).toBeInTheDocument();
});
