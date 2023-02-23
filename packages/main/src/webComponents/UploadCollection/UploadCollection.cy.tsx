import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { UploadCollection } from './index';

describe('UploadCollection', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<UploadCollection />);
    cy.get('[ui5-upload-collection]').should('exist');
  });

  cypressPassThroughTestsFactory(UploadCollection);
});
