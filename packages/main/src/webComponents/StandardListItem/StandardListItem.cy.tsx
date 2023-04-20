import { StandardListItem } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('StandardListItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<StandardListItem />);
    cy.get('[ui5-li]').should('exist');
  });

  cypressPassThroughTestsFactory(StandardListItem);
});
