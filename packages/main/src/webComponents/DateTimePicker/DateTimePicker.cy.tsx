import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { DateTimePicker } from './index';

describe('DateTimePicker', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<DateTimePicker />);
    cy.get('[ui5-datetime-picker]').should('exist');
  });

  cypressPassThroughTestsFactory(DateTimePicker);
});
