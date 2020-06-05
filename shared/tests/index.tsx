import { render, RenderOptions, RenderResult } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { JssProvider } from 'react-jss';

const generateId = (rule, sheet) => {
  return `${sheet.options.classNamePrefix}${rule.key}`;
};

const WithJSSProvider = ({ children }) => {
  return <JssProvider generateId={generateId}>{children}</JssProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult =>
  render(ui, { wrapper: WithJSSProvider, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
