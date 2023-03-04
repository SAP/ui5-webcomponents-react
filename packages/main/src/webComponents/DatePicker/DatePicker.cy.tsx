import { DatePicker } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('DatePicker', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<DatePicker />);
    cy.get('[ui5-date-picker]').should('exist');
  });

  cypressPassThroughTestsFactory(DatePicker);
});
