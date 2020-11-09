import React, { ComponentType } from 'react';
import { render, screen } from '@testing-library/react';

export const modifyObjectProperty = (object: any, attr: string, value: any) => {
  Object.defineProperty(object, attr, {
    value,
    configurable: true,
    writable: true
  });
};

export const createPassThroughPropsTest = (Component: ComponentType<any>, props = {}) => {
  test('Pass Through HTML Standard Props', () => {
    render(
      <Component
        data-testid={'component-to-be-tested'}
        data-special-test-prop="data-prop"
        aria-labelledby="aria-prop"
        id="element-id"
        disabled-custom-prop
        className="thisClassIsUsedForTestingPurposesOnly"
        style={{ pointerEvents: 'none' }}
        {...props}
      />
    );

    const element = screen.getByTestId('component-to-be-tested');

    expect(element.classList.contains('thisClassIsUsedForTestingPurposesOnly')).toBeTruthy();
    expect(element.style.pointerEvents).toEqual('none');

    expect(element.dataset.specialTestProp).toEqual('data-prop');
    expect(element.getAttribute('aria-labelledby')).toEqual('aria-prop');
    // special handling for ObjectPage Sections because of own ID handling...
    if (Component.displayName !== 'ObjectPageSection' && Component.displayName !== 'ObjectPageSubSection') {
      expect(element.id).toBe('element-id');
    }
    expect(element.hasAttribute('disabled-custom-prop')).toBeFalsy();
  });
};
