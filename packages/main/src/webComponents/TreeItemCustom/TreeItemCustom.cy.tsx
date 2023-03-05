import { TreeItemCustom } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('TreeItemCustom', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<TreeItemCustom />);
    cy.get('[ui5-tree-item-custom]').should('exist');
  });

  cypressPassThroughTestsFactory(TreeItemCustom);
});
