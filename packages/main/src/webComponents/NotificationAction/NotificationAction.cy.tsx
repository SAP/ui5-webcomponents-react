import { NotificationAction } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('NotificationAction', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<NotificationAction />);
    cy.get('[ui5-notification-action]').should('exist');
  });

  cypressPassThroughTestsFactory(NotificationAction);
});
