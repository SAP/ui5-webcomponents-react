import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { UploadCollectionItem } from './index';

describe('UploadCollectionItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<UploadCollectionItem />);
    cy.get('[ui5-upload-collection-item]').should('exist');
  });

  cypressPassThroughTestsFactory(UploadCollectionItem);
});
