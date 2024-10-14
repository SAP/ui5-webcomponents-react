export function testZoomingTool(Component, props) {
  it('zoomingTool', () => {
    cy.mount(<Component {...props} chartConfig={{ zoomingTool: true }} />);
    cy.get('.recharts-brush').should('be.visible');

    cy.mount(<Component {...props} chartConfig={{ zoomingTool: false }} />);
    cy.get('.recharts-brush').should('not.exist');

    cy.mount(<Component {...props} chartConfig={{ zoomingTool: { stroke: 'red' } }} />);
    cy.get('.recharts-brush').should('be.visible');
    cy.get('.recharts-brush [stroke="red"]').should('be.visible');
  });
}
