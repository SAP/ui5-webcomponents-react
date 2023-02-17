import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { Table } from './index';

describe('Table', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Table />);
    cy.get('[ui5-table]').should('exist');
  });

  cypressPassThroughTestsFactory(Table);
});
