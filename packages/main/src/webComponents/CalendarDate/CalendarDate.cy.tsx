import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { CalendarDate } from './index';

describe('CalendarDate', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<CalendarDate />);
    cy.get('[ui5-date]').should('exist');
  });

  cypressPassThroughTestsFactory(CalendarDate);
});
