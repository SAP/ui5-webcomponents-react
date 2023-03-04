import { TimePicker } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('TimePicker', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<TimePicker />);
    cy.get('[ui5-time-picker]').should('exist');
  });

  cypressPassThroughTestsFactory(TimePicker);
});
