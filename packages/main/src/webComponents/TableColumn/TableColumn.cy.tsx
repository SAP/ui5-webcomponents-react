import { TableColumn } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('TableColumn', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<TableColumn />);
    cy.get('[ui5-table-column]').should('exist');
  });

  cypressPassThroughTestsFactory(TableColumn);
});
