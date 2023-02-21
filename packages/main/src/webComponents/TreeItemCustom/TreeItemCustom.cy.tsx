import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { TreeItemCustom } from './index';

describe('TreeItemCustom', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<TreeItemCustom />);
    cy.get('[ui5-tree-item-custom]').should('exist');
  });

  cypressPassThroughTestsFactory(TreeItemCustom);
});
