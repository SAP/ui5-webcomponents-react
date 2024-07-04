import { complexDataSet } from '../../resources/DemoProps.js';
import { ColumnChartWithTrend } from './ColumnChartWithTrend.js';
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
  }
];

describe('ColumnChartWithTrend', () => {
  it('Basic', () => {
    cy.mount(<ColumnChartWithTrend dataset={complexDataSet} dimensions={dimensions} measures={measures} />);
    cy.get('.recharts-responsive-container').should('be.visible');
    cy.get('.recharts-bar').should('have.length', 1);
    cy.get('.recharts-line').should('have.length', 2); // the column chart includes an empty line
    cy.get('.recharts-bar-rectangles').should('have.length', 1);
    cy.get('.recharts-line-curve').should('have.length', 2); // the column chart includes an empty line
  });

  it('click handlers', () => {
    const onClick = cy.spy().as('onClick');
    const onLegendClick = cy.spy().as('onLegendClick');
    cy.mount(
      <ColumnChartWithTrend
        dataset={complexDataSet}
        dimensions={dimensions}
        measures={measures}
        onClick={onClick}
        onLegendClick={onLegendClick}
        noAnimation
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
            payload: {
              name: 'January',
              users: 1,
              sessions: 300,
              volume: 756,
              __users: 100
            }
          })
        })
      );

    cy.get('.recharts-legend-item-text').contains('Users').click();
    cy.get('@onClick').should(
      'have.been.calledWith',
      Cypress.sinon.match({
        detail: Cypress.sinon.match({
          dataKey: 'users'
        })
      })
    );
  });

  it('Loading Placeholder', () => {
    cy.mount(<ColumnChartWithTrend dataset={[]} dimensions={[]} measures={[]} />);
    cy.get('.recharts-bar').should('not.exist');
    cy.get('.recharts-line').should('not.exist');
    cy.contains('Loading...').should('exist');
  });

  cypressPassThroughTestsFactory(ColumnChartWithTrend, { dimensions: [], measures: [] });
});
