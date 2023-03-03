import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { BreadcrumbsItem } from './index';

describe('BreadcrumbsItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<BreadcrumbsItem />);
    cy.get('[ui5-breadcrumbs-item]').should('exist');
  });

  cypressPassThroughTestsFactory(BreadcrumbsItem);
});
