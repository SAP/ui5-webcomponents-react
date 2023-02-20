import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { ToggleButton } from './index';

describe('ToggleButton', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ToggleButton />);
    cy.get('[ui5-toggle-button]').should('exist');
  });

  cypressPassThroughTestsFactory(ToggleButton);
});
