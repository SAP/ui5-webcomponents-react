import { Table } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('Table', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Table />);
    cy.get('[ui5-table]').should('exist');
  });

  cypressPassThroughTestsFactory(Table);
});
