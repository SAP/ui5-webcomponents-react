import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { BarcodeScannerDialog } from './index';

describe('BarcodeScannerDialog', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<BarcodeScannerDialog />);
    cy.get('[ui5-barcode-scanner-dialog]').should('exist');
  });

  cypressPassThroughTestsFactory(BarcodeScannerDialog);
});
