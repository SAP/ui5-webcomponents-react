import { complexDataSet } from '../../resources/DemoProps.js';
import { RadarChart } from './RadarChart.js';
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

describe('RadarChart', () => {
  it('Basic', () => {
    cy.mount(<RadarChart dataset={complexDataSet} dimensions={dimensions} measures={measures} />);
    cy.get('.recharts-responsive-container').should('be.visible');
    cy.get('.recharts-radar').should('have.length', 3);
    cy.get('.recharts-radar-polygon').should('have.length', 3);
  });

  it('click handlers', () => {
    const onClick = cy.spy().as('onClick');
    const onLegendClick = cy.spy().as('onLegendClick');
    cy.mount(
      <RadarChart
        dataset={complexDataSet}
        dimensions={dimensions}
        measures={measures}
        onClick={onClick}
        onLegendClick={onLegendClick}
      />
    );

    cy.contains('January').click();
    cy.get('@onClick').should('have.been.calledOnce');
    cy.get('[name="January"]').eq(0).click({ force: true });
    cy.get('@onClick').should('have.been.calledTwice');

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
    cy.mount(<RadarChart dataset={[]} dimensions={[]} measures={[]} />);
    cy.get('.recharts-radar').should('not.exist');
    cy.contains('Loading...').should('exist');
  });

  cypressPassThroughTestsFactory(RadarChart, { dimensions: [], measures: [] });
});
