/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import React from 'react';
import { Button } from './index';
describe('Button.cy.tsx', () => {
  it('render button', () => {
    const click = cy.spy().as('onClickSpy');
    cy.mount(<Button onClick={click}>Test</Button>);
    cy.get('ui5-button').click();
    cy.get('@onClickSpy').should('have.been.calledOnce');
  });
});
