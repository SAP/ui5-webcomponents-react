import App from './App';

describe('Component tests', () => {
  it('basic component test', () => {
    cy.mount(<App />);
    cy.get('[ui5-shellbar]').should('be.visible');
  });
});
