import { DynamicPage, DynamicPageHeader, DynamicPageTitle } from '../..';

describe('DynamicPage', () => {
  it('toggle header', () => {
    const toggle = cy.spy().as('toggleSpy');
    cy.mount(
      <DynamicPage
        headerTitle={<DynamicPageTitle header="Heading" subHeader="SubHeading" />}
        headerContent={<DynamicPageHeader>DynamicPageHeader</DynamicPageHeader>}
        onToggleHeaderContent={toggle}
        headerContentPinnable={false}
      >
        <div>Content</div>
      </DynamicPage>
    );
    cy.findByText('DynamicPageHeader').should('be.visible');

    cy.get('[ui5-button]').click();
    cy.findByText('DynamicPageHeader').should('not.be.visible');
    cy.get('@toggleSpy').should('have.been.calledOnce');
    cy.get('@toggleSpy').should('have.been.calledWith', false);

    cy.get('[ui5-button]').click();
    cy.findByText('DynamicPageHeader').should('be.visible');
    cy.get('@toggleSpy').should('have.been.calledWith', true);
    cy.get('@toggleSpy').should('have.been.calledTwice');

    cy.findByText('Heading').click();
    cy.findByText('DynamicPageHeader').should('not.be.visible');
    cy.get('@toggleSpy').should('have.been.calledThrice');
    cy.get('@toggleSpy').should('have.been.calledWith', false);

    cy.get('[data-component-name="DynamicPageTitle"]').click();
    cy.findByText('DynamicPageHeader').should('be.visible');
    cy.get('@toggleSpy').should('have.been.calledWith', true);
    cy.get('@toggleSpy').should('have.callCount', 4);
  });
});
