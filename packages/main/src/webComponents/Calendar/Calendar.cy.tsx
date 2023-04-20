import { Calendar } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('Calendar', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Calendar />);
    cy.get('[ui5-calendar]').should('exist');
  });

  cypressPassThroughTestsFactory(Calendar);
});
