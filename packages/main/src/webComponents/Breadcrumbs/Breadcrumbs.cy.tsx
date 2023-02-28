import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { BreadcrumbsItem } from '../BreadcrumbsItem';
import { Breadcrumbs } from './index';

describe('Breadcrumbs', () => {
  it('Basic Test (generated)', () => {
    cy.mount(
      <Breadcrumbs>
        <BreadcrumbsItem>Hello World!</BreadcrumbsItem>
      </Breadcrumbs>
    );
    cy.get('[ui5-breadcrumbs]').should('exist');
  });

  cypressPassThroughTestsFactory(Breadcrumbs, { children: <BreadcrumbsItem>Hello World!</BreadcrumbsItem> });
});
