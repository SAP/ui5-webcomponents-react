import { Title } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('Title', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Title />);
    cy.get('[ui5-title]').should('exist');
  });

  cypressPassThroughTestsFactory(Title);
});
