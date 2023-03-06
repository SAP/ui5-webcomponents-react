import { DateRangePicker } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('DateRangePicker', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<DateRangePicker />);
    cy.get('[ui5-daterange-picker]').should('exist');
  });

  cypressPassThroughTestsFactory(DateRangePicker);
});
