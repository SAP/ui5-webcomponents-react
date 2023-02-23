import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { Title } from './index';

describe('Title', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Title />);
    cy.get('[ui5-title]').should('exist');
  });

  cypressPassThroughTestsFactory(Title);
});
