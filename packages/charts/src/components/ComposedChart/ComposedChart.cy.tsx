import { complexDataSet } from '../../resources/DemoProps.js';
import { ComposedChart } from './index.js';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils.js';

const dimensions = [
  {
    accessor: 'name',
    interval: 0
  }
];
const measures = [
  {
    accessor: 'users',
    label: 'Users',
    formatter: (val: number) => val.toLocaleString('en'),
    type: 'line'
  },
  {
    accessor: 'sessions',
    label: 'Active Sessions',
    formatter: (val) => `${val} sessions`,
    type: 'bar'
  },
  {
    accessor: 'volume',
    label: 'Vol.',
    type: 'area'
  }
];

describe('ComposedChart', () => {
  it('Basic', () => {
    cy.mount(<ComposedChart dataset={complexDataSet} dimensions={dimensions} measures={measures} />);
    cy.get('.recharts-responsive-container').should('be.visible');
    measures.forEach(({ type }) => {
      cy.get(`.recharts-${type}`).should('have.length', 1);
    });

    cy.get('.recharts-area-dots').should('have.length', 1);
    cy.get('.recharts-bar-rectangles').should('have.length', 1);
    cy.get('.recharts-line-curve').should('have.length', 1);
  });

  it('click handlers', () => {
    const onClick = cy.spy().as('onClick');
    const onLegendClick = cy.spy().as('onLegendClick');
    cy.mount(
      <ComposedChart
        dataset={complexDataSet}
        dimensions={dimensions}
        measures={measures}
        onClick={onClick}
        onLegendClick={onLegendClick}
      />
    );

    cy.findByText('January').click();
    cy.get('@onClick').should('have.been.called');
    cy.get('[name="January"]').eq(0).click();
    cy.get('@onClick')
      .should('have.been.calledTwice')
      .and(
        'have.been.calledWith',
        Cypress.sinon.match({
          detail: Cypress.sinon.match({
            payload: complexDataSet[0]
          })
        })
      );

    cy.contains('Users').click();
    cy.get('@onLegendClick').should(
      'have.been.calledWith',
      Cypress.sinon.match({
        detail: Cypress.sinon.match({
          dataKey: 'users'
        })
      })
    );
  });

  it('Loading Placeholder', () => {
    cy.mount(<ComposedChart dataset={[]} dimensions={[]} measures={[]} />);
    cy.get('.recharts-bar').should('not.exist');
    cy.contains('Loading...').should('exist');
  });

  cypressPassThroughTestsFactory(ComposedChart, { dimensions: [], measures: [] });
});
