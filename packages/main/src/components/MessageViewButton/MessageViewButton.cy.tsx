import { ValueState } from '../../enums/index.js';
import { MessageViewButton } from './index.js';

describe('MessageViewButton', () => {
  [
    [ValueState.Error, 'error'],
    [ValueState.Success, 'sys-enter-2'],
    [ValueState.Warning, 'alert'],
    [ValueState.Information, 'information'],
    [ValueState.None, 'information'],
    [undefined, 'error']
  ].forEach(([type, icon]: [ValueState, string]) => {
    it(`type ${type}`, () => {
      cy.mount(<MessageViewButton type={type} data-testid={type ?? 'undefined'} />);
      cy.findByTestId(type ?? 'undefined')
        .should('have.attr', 'icon', icon)
        .should('be.visible');
    });
  });
  it('counter', () => {
    cy.mount(<MessageViewButton data-testid="btn" />);
    cy.findByTestId('btn').should('be.empty');
    cy.mount(<MessageViewButton data-testid="btn" counter={1} />);
    cy.findByTestId('btn').should('be.empty');
    cy.mount(<MessageViewButton data-testid="btn" counter={2} />);
    cy.findByTestId('btn').should('have.text', '2');
  });
});
