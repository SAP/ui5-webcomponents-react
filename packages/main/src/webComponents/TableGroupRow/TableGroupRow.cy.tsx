import { TableGroupRow } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('TableGroupRow', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<TableGroupRow />);
    cy.get('[ui5-table-group-row]').should('exist');
  });

  cypressPassThroughTestsFactory(TableGroupRow);
});
