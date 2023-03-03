import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { Link } from './index';

describe('Link', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Link />);
    cy.get('[ui5-link]').should('exist');
  });

  cypressPassThroughTestsFactory(Link);
});
