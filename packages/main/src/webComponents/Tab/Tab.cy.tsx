import { Tab } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('Tab', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Tab />);
    cy.get('[ui5-tab]').should('exist');
  });

  cypressPassThroughTestsFactory(Tab);
});
