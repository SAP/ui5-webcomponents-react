import { UploadCollection } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('UploadCollection', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<UploadCollection />);
    cy.get('[ui5-upload-collection]').should('exist');
  });

  cypressPassThroughTestsFactory(UploadCollection);
});
