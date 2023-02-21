import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { StandardListItem } from './index';

describe('StandardListItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<StandardListItem />);
    cy.get('[ui5-li]').should('exist');
  });

  cypressPassThroughTestsFactory(StandardListItem);
});
