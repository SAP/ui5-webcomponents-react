import { Page } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('Page', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Page />);
    cy.get('[ui5-page]').should('exist');
  });

  cypressPassThroughTestsFactory(Page);
});
