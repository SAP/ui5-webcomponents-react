import { MicroBarChart } from './MicroBarChart.js';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils.js';

const text1 = 'January';
const text2 = 'February';
const text3 = 'March';

const dataset = [
  { value: 10, label: text1 },
  { value: 100, label: text2 },
  { value: 70, label: text3 }
];

const dimension = {
  accessor: 'label'
};

const measure = {
  accessor: 'value'
};

describe('MicroBarChart', () => {
  it('Basic', () => {
    cy.mount(<MicroBarChart dataset={dataset} dimension={dimension} measure={measure} />);
    cy.get('.recharts-responsive-container').should('be.visible');
    cy.get('[data-component-name="MicroBarChartValueBar"]').should('have.length', 3);

    cy.findByText(text1).should('be.visible');
    cy.findByText(text2).should('be.visible');
    cy.findByText(text3).should('be.visible');
  });

  it('Dimension Formatter', () => {
    cy.mount(
      <MicroBarChart
        dataset={dataset}
        dimension={{ ...dimension, formatter: (label) => `${label} - formatted` }}
        measure={measure}
      />
    );
    cy.get('.recharts-responsive-container').should('be.visible');
    cy.get('[data-component-name="MicroBarChartValueBar"]').should('have.length', 3);

    cy.findByText(`${text1} - formatted`).should('be.visible');
    cy.findByText(`${text2} - formatted`).should('be.visible');
    cy.findByText(`${text3} - formatted`).should('be.visible');
  });

  it('click handlers', () => {
    const onClick = cy.spy().as('onClick');
    cy.mount(<MicroBarChart dataset={dataset} dimension={dimension} measure={measure} onDataPointClick={onClick} />);

    cy.findByText('January').click();
    cy.get('@onClick')
      .should('have.been.calledOnce')
      .and(
        'have.been.calledWith',
        Cypress.sinon.match({
          detail: Cypress.sinon.match({
            payload: dataset[0]
          })
        })
      );
  });

  it('Loading Placeholder', () => {
    cy.mount(<MicroBarChart dataset={[]} dimension={dimension} measure={measure} />);
    cy.get('.recharts-bar').should('not.exist');
    cy.contains('Loading...').should('exist');
  });

  cypressPassThroughTestsFactory(MicroBarChart, { dimension, measure });
});
