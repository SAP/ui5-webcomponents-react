import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { MediaGalleryItem } from './index';

describe('MediaGalleryItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<MediaGalleryItem />);
    cy.get('[ui5-media-gallery-item]').should('exist');
  });

  cypressPassThroughTestsFactory(MediaGalleryItem);
});
