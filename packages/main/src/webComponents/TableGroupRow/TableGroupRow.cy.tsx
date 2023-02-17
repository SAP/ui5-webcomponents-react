import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { TableGroupRow } from './index';

describe('TableGroupRow', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<TableGroupRow />);
    cy.get('[ui5-table-group-row]').should('exist');
  });

  cypressPassThroughTestsFactory(TableGroupRow);
});
