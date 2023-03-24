import { FlexibleColumnLayout } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('FlexibleColumnLayout', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<FlexibleColumnLayout />);
    cy.get('[ui5-flexible-column-layout]').should('exist');
  });

  cypressPassThroughTestsFactory(FlexibleColumnLayout);
});
