import { Link } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('Link', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Link />);
    cy.get('[ui5-link]').should('exist');
  });

  cypressPassThroughTestsFactory(Link);
});
