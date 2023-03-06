import { NotificationListGroupItem } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('NotificationListGroupItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<NotificationListGroupItem />);
    cy.get('[ui5-li-notification-group]').should('exist');
  });

  cypressPassThroughTestsFactory(NotificationListGroupItem);
});
