import { ObjectPage, DynamicPageHeader, DynamicPageTitle, ObjectPageSection } from '../..';

describe('ObjectPage', () => {
  it('toggle header', () => {
    const toggle = cy.spy().as('toggleSpy');
    cy.mount(
      <ObjectPage
        headerTitle={<DynamicPageTitle header="Heading" subHeader="SubHeading" />}
        headerContent={<DynamicPageHeader>ObjectPageHeader</DynamicPageHeader>}
        onToggleHeaderContent={toggle}
        headerContentPinnable={false}
        showHideHeaderButton
      >
        <ObjectPageSection id="section" titleText="Section">
          Content
        </ObjectPageSection>
      </ObjectPage>
    );
    cy.findByText('ObjectPageHeader').should('be.visible');

    cy.get('[data-component-name="DynamicPageAnchorBar"] > [ui5-button]').click();
    cy.findByText('ObjectPageHeader').should('not.be.visible');
    cy.get('@toggleSpy').should('have.been.calledOnce');
    cy.get('@toggleSpy').should('have.been.calledWith', false);

    cy.get('[data-component-name="DynamicPageAnchorBar"] > [ui5-button]').click();
    cy.findByText('ObjectPageHeader').should('be.visible');
    cy.get('@toggleSpy').should('have.been.calledWith', true);
    cy.get('@toggleSpy').should('have.been.calledTwice');

    cy.findByText('Heading').click();
    cy.findByText('ObjectPageHeader').should('not.be.visible');
    cy.get('@toggleSpy').should('have.been.calledThrice');
    cy.get('@toggleSpy').should('have.been.calledWith', false);

    cy.get('[data-component-name="DynamicPageTitle"]').click();
    cy.findByText('ObjectPageHeader').should('be.visible');
    cy.get('@toggleSpy').should('have.been.calledWith', true);
    cy.get('@toggleSpy').should('have.callCount', 4);
  });
});
