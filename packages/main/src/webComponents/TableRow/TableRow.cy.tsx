import { TableRow } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('TableRow', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<TableRow />);
    cy.get('[ui5-table-row]').should('exist');
  });

  cypressPassThroughTestsFactory(TableRow);
});
