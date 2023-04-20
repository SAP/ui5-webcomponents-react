import { IllustratedMessage } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('IllustratedMessage', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<IllustratedMessage />);
    cy.get('[ui5-illustrated-message]').should('exist');
  });

  cypressPassThroughTestsFactory(IllustratedMessage);
});
