import { complexDataSet } from '../../resources/DemoProps.js';
import { LineChart } from './LineChart.js';
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

describe('LineChart', () => {
  it('Basic', () => {
    cy.mount(<LineChart dataset={complexDataSet} dimensions={dimensions} measures={measures} />);
    cy.get('.recharts-responsive-container').should('be.visible');
    cy.get('.recharts-line').should('have.length', 3);
    cy.get('.recharts-line-curve').should('have.length', 3);
  });

  it('click handlers', () => {
    const onClick = cy.spy().as('onClick');
    const onLegendClick = cy.spy().as('onLegendClick');
    cy.mount(
      <LineChart
        dataset={complexDataSet}
        dimensions={dimensions}
        measures={measures}
        onClick={onClick}
        onLegendClick={onLegendClick}
        noAnimation
      />
    );

    cy.get('.recharts-line-dot[name="Users"]').eq(0).click({ force: true });
    cy.get('@onClick')
      .should('have.been.calledOnce')
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
    cy.mount(<LineChart dataset={[]} dimensions={[]} measures={[]} />);
    cy.get('.recharts-line').should('not.exist');
    cy.contains('Loading...').should('exist');
  });

  cypressPassThroughTestsFactory(LineChart, { dimensions: [], measures: [] });
});
