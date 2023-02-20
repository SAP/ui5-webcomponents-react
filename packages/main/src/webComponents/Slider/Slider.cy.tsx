import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { Slider } from './index';

describe('Slider', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Slider />);
    cy.get('[ui5-slider]').should('exist');
  });

  cypressPassThroughTestsFactory(Slider);
});
