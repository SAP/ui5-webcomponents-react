import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { Page } from './index';

describe('Page', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Page />);
    cy.get('[ui5-page]').should('exist');
  });

  cypressPassThroughTestsFactory(Page);
});
