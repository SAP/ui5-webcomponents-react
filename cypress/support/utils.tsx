import { ComponentType } from 'react';

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

export function mountWithCustomTagName<P extends { as?: keyof HTMLElementTagNameMap }>(
  Component: ComponentType<P>,
  props?: P
) {
  it('mount with custom tag name', () => {
    const testId = 'component-to-be-tested';
    const as = props?.as || 'header';
    cy.mount(<Component as={as} data-testid={testId} {...props} />);
    cy.get(`${as}[data-testid="${testId}"]`).should('be.visible');
  });
}
