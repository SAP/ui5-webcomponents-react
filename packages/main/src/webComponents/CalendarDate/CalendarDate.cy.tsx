import { CalendarDate } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('CalendarDate', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<CalendarDate />);
    cy.get('[ui5-date]').should('exist');
  });

  cypressPassThroughTestsFactory(CalendarDate);
});
