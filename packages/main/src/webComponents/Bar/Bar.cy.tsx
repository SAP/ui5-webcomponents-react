import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { Bar } from './index';

describe('Bar', () => {
  it('Basic Test (generated)', () => {
    cy.mount(
      <Bar startContent={<span>Start</span>} endContent={<span>End</span>}>
        <span>Middle</span>
      </Bar>
    );
    cy.get('[ui5-bar]').should('exist');
  });

  cypressPassThroughTestsFactory(Bar);
});
