import { scatterComplexDataSet } from '../../resources/DemoProps.js';
import { ScatterChart } from './ScatterChart.js';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils.js';

const measures = [
  {
    accessor: 'users',
    label: 'Number',
    axis: 'x' as const
  },
  {
    accessor: 'sessions',
    label: 'Sessions',
    axis: 'y' as const
  },
  {
    accessor: 'volume',
    axis: 'z' as const
  }
];

describe('ScatterChart', () => {
  it('Basic', () => {
    cy.mount(<ScatterChart dataset={scatterComplexDataSet} measures={measures} />);
    cy.get('.recharts-responsive-container').should('be.visible');
    cy.get('.recharts-scatter').should('have.length', 2);
    cy.get('.recharts-symbols[name="APJ"]').should('have.length', 12);
  });

  it('click handlers', () => {
    const onClick = cy.spy().as('onClick');
    const onLegendClick = cy.spy().as('onLegendClick');
    cy.mount(
      <ScatterChart
        dataset={scatterComplexDataSet}
        measures={measures}
        onDataPointClick={onClick}
        onLegendClick={onLegendClick}
        noAnimation
      />
    );

    cy.get('[name="Users"]').eq(0).click();
    cy.get('@onClick')
      .should('have.been.calledOnce')
      .and(
        'have.been.calledWith',
        Cypress.sinon.match({
          detail: Cypress.sinon.match({
            payload: scatterComplexDataSet[0].data[0]
          })
        })
      );

    cy.contains('Users').click();
    cy.get('@onLegendClick').should(
      'have.been.calledWith',
      Cypress.sinon.match({
        detail: Cypress.sinon.match({
          value: 'Users'
        })
      })
    );
  });

  it('Loading Placeholder', () => {
    cy.mount(<ScatterChart dataset={[]} measures={[]} />);
    cy.get('.recharts-scatter').should('not.exist');
    cy.contains('Loading...').should('exist');
  });

  cypressPassThroughTestsFactory(ScatterChart, { measures: [] });
});
