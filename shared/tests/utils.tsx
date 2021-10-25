import { render, screen } from '@testing-library/react';
import React, { ComponentType } from 'react';

export const modifyObjectProperty = (object: any, attr: string, value: any) => {
  Object.defineProperty(object, attr, {
    value,
    configurable: true,
    writable: true
  });
};

export const createChangeTagNameTest = (Component: ComponentType<any>) => {
  test('Change tag name', () => {
    const { getByTestId } = render(<Component data-testid={'component-to-be-tested'} as="header" />);
    expect(getByTestId('component-to-be-tested').tagName).toBe('HEADER');
  });
};
