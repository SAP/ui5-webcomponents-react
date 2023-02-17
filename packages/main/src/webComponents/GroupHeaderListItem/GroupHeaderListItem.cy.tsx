import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { GroupHeaderListItem } from './index';

describe('GroupHeaderListItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<GroupHeaderListItem />);
    cy.get('[ui5-li-groupheader]').should('exist');
  });

  cypressPassThroughTestsFactory(GroupHeaderListItem);
});
