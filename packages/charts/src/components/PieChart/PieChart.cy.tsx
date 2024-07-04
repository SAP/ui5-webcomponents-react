import { Text as RechartsText } from 'recharts';
import { simpleDataSet } from '../../resources/DemoProps.js';
import { PieChart } from './PieChart.js';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils.js';

const dimension = {
  accessor: 'name'
};
const measure = {
  accessor: 'users'
};

describe('PieChart', () => {
  it('Basic', () => {
    cy.mount(<PieChart dataset={simpleDataSet} dimension={dimension} measure={measure} />);
    cy.get('.recharts-responsive-container').should('be.visible');
    cy.get('.recharts-pie').should('have.length', 1);
    cy.get('.recharts-pie-sector').should('have.length', 12);
  });

  it('click handlers', () => {
    const onClick = cy.spy().as('onClick');
    const onLegendClick = cy.spy().as('onLegendClick');
    cy.mount(
      <PieChart
        dataset={simpleDataSet}
        dimension={dimension}
        measure={measure}
        onDataPointClick={onClick}
        onLegendClick={onLegendClick}
        noAnimation
      />
    );

    cy.get('[name="January"]').eq(0).click({ force: true });
    cy.get('@onClick')
      .should('have.been.called')
      .and(
        'have.been.calledWith',
        Cypress.sinon.match({
          detail: Cypress.sinon.match({
            payload: simpleDataSet[0]
          })
        })
      );

    cy.contains('January').click();
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
    cy.mount(<PieChart dataset={[]} dimension={dimension} measure={measure} />);
    cy.get('.recharts-pie').should('not.exist');
    cy.contains('Loading...').should('exist');
  });

  cypressPassThroughTestsFactory(PieChart, { dimension: {}, measure: {} });

  it('custom label', () => {
    const CustomDataLabel = (props) => <RechartsText {...props}>CustomLabel</RechartsText>;

    cy.mount(
      <PieChart
        dataset={simpleDataSet}
        dimension={dimension}
        measure={{
          accessor: 'users',
          DataLabel: <CustomDataLabel />
        }}
      />
    );
    cy.findAllByText('CustomLabel').should('have.length', 12);
  });
});
