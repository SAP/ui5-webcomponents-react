import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { FileUploader } from './index';

describe('FileUploader', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<FileUploader />);
    cy.get('[ui5-file-uploader]').should('exist');
  });

  cypressPassThroughTestsFactory(FileUploader);
});
