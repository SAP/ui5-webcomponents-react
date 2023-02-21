import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { MediaGallery } from './index';

describe('MediaGallery', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<MediaGallery />);
    cy.get('[ui5-media-gallery]').should('exist');
  });

  cypressPassThroughTestsFactory(MediaGallery);
});
