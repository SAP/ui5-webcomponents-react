import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { DatePicker } from './index';

describe('DatePicker', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<DatePicker />);
    cy.get('[ui5-date-picker]').should('exist');
  });

  cypressPassThroughTestsFactory(DatePicker);
});
