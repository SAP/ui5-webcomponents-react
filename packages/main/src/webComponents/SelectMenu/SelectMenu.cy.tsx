import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { SelectMenu } from './index';

describe('SelectMenu', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<SelectMenu />);
    cy.get('[ui5-select-menu]').should('exist');
  });

  cypressPassThroughTestsFactory(SelectMenu);
});
