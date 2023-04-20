import { Bar } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

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
