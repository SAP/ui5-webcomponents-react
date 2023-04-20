import { DateTimePicker } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('DateTimePicker', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<DateTimePicker />);
    cy.get('[ui5-datetime-picker]').should('exist');
  });

  cypressPassThroughTestsFactory(DateTimePicker);
});
