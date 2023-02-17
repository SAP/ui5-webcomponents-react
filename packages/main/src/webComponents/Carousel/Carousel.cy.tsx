import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { Carousel } from './index';

describe('Carousel', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Carousel />);
    cy.get('[ui5-carousel]').should('exist');
  });

  cypressPassThroughTestsFactory(Carousel);
});
