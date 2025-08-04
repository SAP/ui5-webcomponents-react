import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { MessageViewButton } from './index.js';

const testCases: [ValueState | undefined, string, string, string][] = [
  [ValueState.Negative, 'error', 'Error Type', 'Error'],
  [ValueState.Positive, 'sys-enter-2', 'Success Type', 'Success'],
  [ValueState.Critical, 'alert', 'Warning Type', 'Warning'],
  [ValueState.Information, 'information', 'Information Type', 'Information'],
  [ValueState.None, 'information', 'Information Type', 'Information'],
  [undefined, 'error', 'Error Type', 'Error'],
];

describe('MessageViewButton', () => {
  testCases.forEach(([type, icon, label, tooltip]) => {
    it(`type ${type}`, () => {
      cy.mount(<MessageViewButton type={type} data-testid={type ?? 'undefined'} />);
      cy.findByTestId(type ?? 'undefined')
        .should('have.attr', 'icon', icon)
        .and('have.attr', 'accessible-name', label)
        .and('have.attr', 'tooltip', tooltip)
        .and('be.visible');
    });
  });
  it('counter', () => {
    cy.mount(<MessageViewButton data-testid="btn" />);
    cy.findByTestId('btn').should('be.empty').and('have.attr', 'accessible-name', 'Error Type');
    cy.mount(<MessageViewButton data-testid="btn" counter={0} />);
    cy.findByTestId('btn').should('be.empty').and('have.attr', 'accessible-name', 'Error Type');
    cy.mount(<MessageViewButton data-testid="btn" counter={2} />);
    cy.findByTestId('btn').should('have.text', '2').and('have.attr', 'accessible-name', '2 Error Type');
  });
});
