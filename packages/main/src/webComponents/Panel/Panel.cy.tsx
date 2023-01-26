import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { Panel } from './index';

describe('Panel', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Panel />);
    cy.get('[ui5-panel]').should('exist');
  });

  cypressPassThroughTestsFactory(Panel);
});
