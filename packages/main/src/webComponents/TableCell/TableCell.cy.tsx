import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { TableCell } from './index';

describe('TableCell', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<TableCell />);
    cy.get('[ui5-table-cell]').should('exist');
  });

  cypressPassThroughTestsFactory(TableCell);
});
