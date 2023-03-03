import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { MessageStrip } from './index';

describe('MessageStrip', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<MessageStrip />);
    cy.get('[ui5-message-strip]').should('exist');
  });

  cypressPassThroughTestsFactory(MessageStrip);
});
