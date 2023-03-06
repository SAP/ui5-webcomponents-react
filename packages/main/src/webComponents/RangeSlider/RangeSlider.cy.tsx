import { RangeSlider } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('RangeSlider', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<RangeSlider />);
    cy.get('[ui5-range-slider]').should('exist');
  });

  cypressPassThroughTestsFactory(RangeSlider);
});
