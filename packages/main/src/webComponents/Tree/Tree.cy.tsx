import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { Tree } from './index';

describe('Tree', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Tree />);
    cy.get('[ui5-tree]').should('exist');
  });

  cypressPassThroughTestsFactory(Tree);
});
