import { getRGBColor } from '@ui5/webcomponents-base/dist/util/ColorConversion.js';
import type { ComponentType } from 'react';

export function cypressPassThroughTestsFactory(Component: ComponentType, props?: Record<string, unknown>) {
  it('Pass Through HTML Standard Props', () => {
    const testId = 'component-to-be-tested';
    cy.mount(
      <Component
        data-testid={testId}
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

    cy.findByTitle('Tooltip').should('exist');

    cy.findByTestId(testId)
      .should('exist')
      .should('have.class', 'thisClassIsUsedForTestingPurposesOnly')
      .should('have.css', 'pointer-events', 'none')
      .should('have.attr', 'aria-labelledby', 'aria-prop')
      .should('have.attr', 'customattribute', 'true')
      .should('have.data', 'specialTestProp', 'data-prop');

    // special handling for ObjectPage Sections because of own ID handling...
    if (Component.displayName !== 'ObjectPageSection' && Component.displayName !== 'ObjectPageSubSection') {
      cy.findByTestId(testId).should('have.id', 'element-id');
    }
  });
}

interface MountWithCustomTagNameOptions {
  testTitle?: string;
  defaultTagName?: string;
  only?: boolean;
  wrapperComponent?: ComponentType<any>;
}
export function mountWithCustomTagName<P extends { as?: keyof HTMLElementTagNameMap }>(
  Component: ComponentType<P>,
  props?: P,
  options?: MountWithCustomTagNameOptions
) {
  const { testTitle = 'mount with custom tag name', defaultTagName, only, wrapperComponent } = options;
  const test = only ? it.only : it;
  test(testTitle, () => {
    const testId = 'component-to-be-tested';
    const as = props?.as ?? 'header';
    if (wrapperComponent) {
      const Wrapper = wrapperComponent;
      cy.mount(
        <Wrapper>
          <Component as={as} data-testid={testId} {...props} />
        </Wrapper>
      );
    } else {
      cy.mount(<Component as={as} data-testid={testId} {...props} />);
    }
    cy.get(`${defaultTagName ?? as}[data-testid="${testId}"]`).should('be.visible');
  });
}

export const cssVarToRgb = (cssVar) => {
  const cssVarValue = getComputedStyle(document.documentElement).getPropertyValue(cssVar.match(/(--)[^)]+/)[0]);
  const rgbVal = getRGBColor(cssVarValue);
  return `rgb(${rgbVal.r}, ${rgbVal.g}, ${rgbVal.b})`;
};
