import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { ViewSettingsDialog } from './index';

describe('ViewSettingsDialog', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ViewSettingsDialog />);
    cy.get('[ui5-view-settings-dialog]').should('exist');
  });

  cypressPassThroughTestsFactory(ViewSettingsDialog);
});
