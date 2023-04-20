import { Panel } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('Panel', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Panel />);
    cy.get('[ui5-panel]').should('exist');
  });

  cypressPassThroughTestsFactory(Panel);
});
