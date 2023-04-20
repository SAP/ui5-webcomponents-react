import { CustomListItem } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('CustomListItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<CustomListItem />);
    cy.get('[ui5-li-custom]').should('exist');
  });

  cypressPassThroughTestsFactory(CustomListItem);
});
