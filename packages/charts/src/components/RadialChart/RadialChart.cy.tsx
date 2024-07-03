import { RadialChart } from './RadialChart.js';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils.js';

describe('RadialChart', () => {
  it('Basic', () => {
    cy.mount(<RadialChart value={67} displayValue={'67%'} />);
    cy.get('.recharts-responsive-container').should('be.visible');
    cy.get('.recharts-area').should('have.length', 1);
    cy.get('.recharts-radial-bar-sectors').should('have.length', 1);
    cy.findByText('67%').should('be.visible');
  });

  it('click handlers', () => {
    const onClick = cy.spy().as('onClick');
    cy.mount(<RadialChart value={67} displayValue={'67%'} onDataPointClick={onClick} />);

    cy.get('.recharts-radial-bar-sector').click();
    cy.get('@onClick')
      .should('have.been.calledOnce')
      .and(
        'have.been.calledWith',
        Cypress.sinon.match({
          detail: Cypress.sinon.match({
            payload: { value: 67 }
          })
        })
      );
  });

  cypressPassThroughTestsFactory(RadialChart, { value: 67, displayValue: '67%' });
});
