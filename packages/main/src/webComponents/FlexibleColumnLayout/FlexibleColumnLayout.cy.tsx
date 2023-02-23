import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { FlexibleColumnLayout } from './index';

describe('FlexibleColumnLayout', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<FlexibleColumnLayout />);
    cy.get('[ui5-flexible-column-layout]').should('exist');
  });

  cypressPassThroughTestsFactory(FlexibleColumnLayout);
});
