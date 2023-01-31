import { ComponentType } from 'react';

export function mountWithCustomTagName<P extends { as?: keyof HTMLElementTagNameMap }>(
  Component: ComponentType<P>,
  props?: P
) {
  it('mount as header tag', () => {
    const testId = 'component-to-be-tested';
    const as = props?.as || 'header';
    cy.mount(<Component as={as} data-testid={testId} {...props} />);
    cy.get(`${as}[data-testid="${testId}"]`).should('be.visible');
  });
}
