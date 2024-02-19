// make sure to start your dev server before running e2e tests
describe('E2E tests', () => {
  it('click list item', () => {
    cy.visit('/');
    cy.clickUi5ListItemByText("Solve a Rubik's cube");
    cy.url().should('eq', 'http://localhost:5173/todo/5');
    cy.get('[value="Solve a Rubik\'s cube"]').should('be.visible').and('have.attr', 'ui5-input');
  });
});
