import App from './App';

describe('Component tests', () => {
  it('render Link component with text', () => {
    cy.mount(<App />);
    cy.get('[ui5-link]').should('be.visible').and('have.text', 'Getting Started with UI5 Web Component for React');
  });
  it('type into Input component', () => {
    cy.mount(<App />);
    cy.get('[ui5-input]').typeIntoUi5Input('Hello there!');
    cy.get('[ui5-label]').should('be.visible').and('have.text', 'Hello there!');
  });
});
