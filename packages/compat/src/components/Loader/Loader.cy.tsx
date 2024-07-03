import { cypressPassThroughTestsFactory } from '@/cypress/support/utils.js';
import { LoaderType, Loader } from '@/packages/main';

// skip until component is moved to this package
describe.skip('Loader', () => {
  it('indeterminate', () => {
    cy.mount(<Loader data-testid="loader" />);
    cy.findByTestId('loader').should('have.css', 'animation-duration', '1.2s');

    cy.mount(<Loader data-testid="loader" type={LoaderType.Indeterminate} />);
    cy.findByTestId('loader').should('have.css', 'animation-duration', '1.2s');
  });
  it('determinate', () => {
    cy.mount(<Loader type={LoaderType.Determinate} data-testid="loader" />);
    cy.findByTestId('loader')
      .should('have.css', 'animation-duration', '0s')
      .should('have.css', 'background-size', '0px');

    cy.mount(<Loader type={LoaderType.Determinate} data-testid="loader" progress="50%" />);

    cy.findByTestId('loader')
      .should('have.css', 'animation-duration', '0s')
      .should('have.css', 'background-size', '50%');
  });
  it('with delay', () => {
    cy.mount(<Loader delay={300} data-testid="loader" />);
    cy.findByTestId('loader', { timeout: 200 }).should('not.exist');
    cy.findByTestId('loader').should('be.visible');
  });

  cypressPassThroughTestsFactory(Loader);
});
