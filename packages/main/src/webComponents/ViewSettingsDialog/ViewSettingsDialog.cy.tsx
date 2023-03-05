import { ViewSettingsDialog } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('ViewSettingsDialog', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<ViewSettingsDialog />);
    cy.get('[ui5-view-settings-dialog]').should('exist');
  });

  cypressPassThroughTestsFactory(ViewSettingsDialog);
});
