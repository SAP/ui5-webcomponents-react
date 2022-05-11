import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider } from '../../packages/main/src/components/ThemeProvider';
import React, { ReactElement } from 'react';
import { JssProvider } from 'react-jss';

const generateId = (rule, sheet) => {
  return `${sheet.options.classNamePrefix}${rule.key}`;
};

const WithJSSProvider = ({ children }) => {
  return (
    <JssProvider generateId={generateId}>
      <ThemeProvider>{children}</ThemeProvider>
    </JssProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult =>
  render(ui, { wrapper: WithJSSProvider, ...options });

const RtlWrapper = ({ children }) => (
  <WithJSSProvider>
    <div dir="rtl">{children}</div>
  </WithJSSProvider>
);
export const renderRtl = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult => {
  Object.defineProperty(global.document.body, 'dir', { value: 'rtl' });
  return customRender(ui, { wrapper: RtlWrapper, ...options });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };

//copied from https://github.com/testing-library/react-testing-library/issues/268#issuecomment-454872934 on 4.Dec 2020
class FakeMouseEvent extends MouseEvent {
  offsetX: number;
  offsetY: number;
  pageX: number;
  pageY: number;
  x: number;
  y: number;

  constructor(type: string, values) {
    const { pageX, pageY, offsetX, offsetY, x, y, ...mouseValues } = values;
    super(type, mouseValues);

    Object.assign(this, {
      offsetX: offsetX || 0,
      offsetY: offsetY || 0,
      pageX: pageX || 0,
      pageY: pageY || 0,
      x: x || 0,
      y: y || 0
    });
  }
}

export function getMouseEvent(type: string, values = {}): FakeMouseEvent {
  values = {
    bubbles: true,
    cancelable: true,
    ...values
  };
  return new FakeMouseEvent(type, values);
}

export const renderWithDefine = async (Component, elements: string[]) => {
  const { ...rest } = customRender(Component);
  await Promise.all(elements.map((tag) => customElements.whenDefined(tag)));
  return { ...rest };
};
