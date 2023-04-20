import { Carousel } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('Carousel', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Carousel />);
    cy.get('[ui5-carousel]').should('exist');
  });

  cypressPassThroughTestsFactory(Carousel);
});
