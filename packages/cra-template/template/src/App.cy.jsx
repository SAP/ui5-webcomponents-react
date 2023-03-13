import App from './App';

describe('Component tests', () => {
  it('render Link', () => {
    cy.mount(<App />);
    cy.get('[ui5-link]').should('be.visible').should('have.text', 'Getting Started with UI5 Web Component for React');
  });
});
