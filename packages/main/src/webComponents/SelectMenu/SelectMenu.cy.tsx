import { SelectMenu } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('SelectMenu', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<SelectMenu />);
    cy.get('[ui5-select-menu]').should('exist');
  });

  cypressPassThroughTestsFactory(SelectMenu);
});
