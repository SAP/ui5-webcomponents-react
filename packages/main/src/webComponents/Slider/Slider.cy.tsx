import { Slider } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('Slider', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Slider />);
    cy.get('[ui5-slider]').should('exist');
  });

  cypressPassThroughTestsFactory(Slider);
});
