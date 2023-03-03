import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { NotificationAction } from './index';

describe('NotificationAction', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<NotificationAction />);
    cy.get('[ui5-notification-action]').should('exist');
  });

  cypressPassThroughTestsFactory(NotificationAction);
});
