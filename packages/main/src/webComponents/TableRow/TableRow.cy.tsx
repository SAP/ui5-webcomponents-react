import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { TableRow } from './index';

describe('TableRow', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<TableRow />);
    cy.get('[ui5-table-row]').should('exist');
  });

  cypressPassThroughTestsFactory(TableRow);
});
