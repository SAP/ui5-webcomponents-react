import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { TreeItem } from './index';

describe('TreeItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<TreeItem />);
    cy.get('[ui5-tree-item]').should('exist');
  });

  cypressPassThroughTestsFactory(TreeItem);
});
