import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { Priority } from '../../enums/Priority';
import { NotificationAction } from '../NotificationAction';
import { NotificationListItem } from './index';

describe('NotificationListItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(
      <NotificationListItem
        titleText="My Notification"
        showClose
        priority={Priority.High}
        actions={<NotificationAction text="My Action" />}
      />
    );
    cy.get('[ui5-li-notification]').should('exist');
  });

  cypressPassThroughTestsFactory(NotificationListItem);
});
