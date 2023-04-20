import { MessageStrip } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('MessageStrip', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<MessageStrip />);
    cy.get('[ui5-message-strip]').should('exist');
  });

  cypressPassThroughTestsFactory(MessageStrip);
});
