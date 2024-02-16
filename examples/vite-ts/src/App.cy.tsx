import { Button } from '@ui5/webcomponents-react';

describe('Component tests', () => {
  // example for component test
  it('basic', () => {
    const clickSpy = cy.spy().as('clickSpy');
    cy.mount(<Button onClick={clickSpy}>Click me!</Button>);
    cy.get('[ui5-button]').click();
    cy.get('@clickSpy').should('have.been.calledOnce');
  });
});
