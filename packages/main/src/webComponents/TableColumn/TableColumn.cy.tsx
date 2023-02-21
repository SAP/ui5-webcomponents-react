import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { TableColumn } from './index';

describe('TableColumn', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<TableColumn />);
    cy.get('[ui5-table-column]').should('exist');
  });

  cypressPassThroughTestsFactory(TableColumn);
});
