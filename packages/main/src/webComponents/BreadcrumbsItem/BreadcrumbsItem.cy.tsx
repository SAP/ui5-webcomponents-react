import { BreadcrumbsItem } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('BreadcrumbsItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<BreadcrumbsItem />);
    cy.get('[ui5-breadcrumbs-item]').should('exist');
  });

  cypressPassThroughTestsFactory(BreadcrumbsItem);
});
