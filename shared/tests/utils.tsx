import React, { ComponentType } from 'react';
import { render, screen, waitFor } from './';

export const modifyObjectProperty = (object: any, attr: string, value: any) => {
  Object.defineProperty(object, attr, {
    value,
    configurable: true,
    writable: true
  });
};

export const createCustomPropsTest = (Component: ComponentType<any>, props = {}) => {
  test('Pass Through HTML Standard Props', () => {
    const { getByTitle } = render(
      <Component
        data-testid={'component-to-be-tested'}
        data-special-test-prop="data-prop"
        aria-labelledby="aria-prop"
        id="element-id"
        className="thisClassIsUsedForTestingPurposesOnly"
        style={{ pointerEvents: 'none' }}
        title="Tooltip"
        customattribute="true"
        {...props}
      />
    );

    const element = screen.getByTestId('component-to-be-tested');

    expect(getByTitle('Tooltip')).toBeInTheDocument();
    expect(element.classList.contains('thisClassIsUsedForTestingPurposesOnly')).toBeTruthy();
    expect(element.style.pointerEvents).toEqual('none');

    expect(element.dataset.specialTestProp).toEqual('data-prop');
    expect(element.getAttribute('aria-labelledby')).toEqual('aria-prop');
    // special handling for ObjectPage Sections because of own ID handling...
    if (Component.displayName !== 'ObjectPageSection' && Component.displayName !== 'ObjectPageSubSection') {
      expect(element.id).toBe('element-id');
    }
    expect(element.hasAttribute('customattribute')).toBeTruthy();
  });
};

export const createChangeTagNameTest = (Component: ComponentType<any>) => {
  test('Change tag name', () => {
    const { getByTestId } = render(<Component data-testid={'component-to-be-tested'} as="header" />);
    expect(getByTestId('component-to-be-tested').tagName).toBe('HEADER');
  });
};

export const createWaitForDefineTest = (Component, props = {}) => {
  test('Wait for define', async () => {
    const { getByTestId, queryByTestId } = render(<Component waitForDefine data-testid="component" {...props} />);
    expect(queryByTestId('component')).toBeFalsy();
    await waitFor(() => getByTestId('component').shadowRoot);
    expect(getByTestId('component')).toBeInTheDocument();
  });
};
