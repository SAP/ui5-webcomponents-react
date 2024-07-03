import { complexDataSet } from '../../resources/DemoProps.js';
import { ColumnChart } from './ColumnChart.js';
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
    formatter: (val: number) => val.toLocaleString('en')
  },
  {
    accessor: 'sessions',
    label: 'Active Sessions',
    formatter: (val) => `${val} sessions`,
    hideDataLabel: true
  },
  {
    accessor: 'volume',
    label: 'Vol.'
  }
];

describe('ColumnChart', () => {
  it('Basic', () => {
    cy.mount(<ColumnChart dataset={complexDataSet} dimensions={dimensions} measures={measures} />);
    cy.get('.recharts-responsive-container').should('be.visible');
    cy.get('.recharts-bar').should('have.length', 3);
    cy.get('.recharts-bar-rectangles').should('have.length', 3);
  });

  it('click handlers', () => {
    const onClick = cy.spy().as('onClick');
    const onLegendClick = cy.spy().as('onLegendClick');
    cy.mount(
      <ColumnChart
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
    cy.mount(<ColumnChart dataset={[]} dimensions={[]} measures={[]} />);
    cy.get('.recharts-bar').should('not.exist');
    cy.contains('Loading...').should('exist');
  });

  cypressPassThroughTestsFactory(ColumnChart, { dimensions: [], measures: [] });
});
