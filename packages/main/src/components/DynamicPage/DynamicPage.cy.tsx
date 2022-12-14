import { useState } from 'react';
import { Button, DynamicPage, DynamicPageHeader, DynamicPagePropTypes, DynamicPageTitle } from '../..';

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

  it('pin header', () => {
    const pin = cy.spy().as('onPinSpy');
    cy.mount(
      <DynamicPage
        style={{ height: '100vh' }}
        headerTitle={<DynamicPageTitle header="Heading" subHeader="SubHeading" />}
        headerContent={<DynamicPageHeader>DynamicPageHeader</DynamicPageHeader>}
        headerContentPinnable
        showHideHeaderButton
        onPinnedStateChange={pin}
        data-testid="op"
      >
        <div style={{ height: '2000px' }} />
      </DynamicPage>
    );

    cy.findByTestId('op').scrollTo(0, 500);
    cy.findByText('DynamicPageHeader').should('not.be.visible');

    cy.findByTestId('op').scrollTo('top');

    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').click();
    cy.get('@onPinSpy').should('have.been.calledOnce');
    cy.get('@onPinSpy').should('have.been.calledWith', true);

    cy.findByTestId('op').scrollTo(0, 500);
    cy.findByText('DynamicPageHeader').should('be.visible');

    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').click();
    cy.get('@onPinSpy').should('have.been.calledTwice');
    cy.get('@onPinSpy').should('have.been.calledWith', false);
    cy.findByTestId('op').scrollTo(0, 501);
    cy.findByText('DynamicPageHeader').should('not.be.visible');
  });

  it('programmatically pin header (`alwaysShowContentHeader`)', () => {
    const TestComp = ({ onPinnedStateChange }: DynamicPagePropTypes) => {
      const [pinned, setPinned] = useState(false);
      const handlePinChange = (pinned) => {
        onPinnedStateChange(pinned);
        setPinned(pinned);
      };
      return (
        <>
          <Button
            data-testid="btn"
            onClick={() => {
              setPinned((prev) => !prev);
            }}
          >
            toggle {`${!pinned}`}
          </Button>
          <DynamicPage
            style={{ height: '100vh' }}
            headerTitle={<DynamicPageTitle header="Heading" subHeader="SubHeading" />}
            headerContent={<DynamicPageHeader>DynamicPageHeader</DynamicPageHeader>}
            headerContentPinnable
            showHideHeaderButton
            alwaysShowContentHeader={pinned}
            onPinnedStateChange={handlePinChange}
            data-testid="op"
          >
            <div style={{ height: '2000px' }} />
          </DynamicPage>
        </>
      );
    };
    const pin = cy.spy().as('onPinSpy');
    cy.mount(<TestComp onPinnedStateChange={pin} />);

    cy.findByTestId('op').scrollTo(0, 500);
    cy.findByText('DynamicPageHeader').should('not.be.visible');

    cy.findByTestId('btn').click();
    cy.get('@onPinSpy').should('have.been.calledOnce');
    cy.get('@onPinSpy').should('have.been.calledWith', true);
    cy.findByText('DynamicPageHeader').should('be.visible');

    cy.findByTestId('op').scrollTo(0, 0);
    cy.findByText('DynamicPageHeader').should('be.visible');

    cy.findByTestId('op').scrollTo(0, 800);
    cy.findByText('DynamicPageHeader').should('be.visible');

    cy.findByTestId('btn').click();
    cy.get('@onPinSpy').should('have.been.calledTwice');
    cy.get('@onPinSpy').should('have.been.calledWith', false);
    cy.findByText('DynamicPageHeader').should('be.visible');

    cy.findByTestId('op').scrollTo(0, 801);
    cy.findByText('DynamicPageHeader').should('not.be.visible');

    cy.findByTestId('btn').click();
    cy.findByTestId('op').scrollTo(0, 500);
    cy.findByText('DynamicPageHeader').should('be.visible');

    cy.findByTestId('btn').click();
    cy.findByTestId('op').scrollTo(0, 501);
    cy.findByText('DynamicPageHeader').should('not.be.visible');

    cy.get('[data-component-name="DynamicPageAnchorBarExpandBtn"]').click();
    cy.findByText('DynamicPageHeader').should('be.visible');

    cy.findByTestId('op').scrollTo(0, 502);
    cy.findByText('DynamicPageHeader').should('not.be.visible');

    cy.findByTestId('op').scrollTo(0, 30);
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').click();
    cy.get('@onPinSpy').should('have.callCount', 5);
    cy.findByTestId('btn').should('have.text', 'toggle false');
    cy.findByText('DynamicPageHeader').should('be.visible');

    cy.findByTestId('op').scrollTo(0, 500);
    cy.findByTestId('btn').click();
    cy.findByTestId('op').scrollTo(0, 501);
    cy.findByText('DynamicPageHeader').should('not.be.visible');

    cy.findByTestId('btn').click();
    cy.findByText('DynamicPageHeader').should('be.visible');
    cy.get('@onPinSpy').should('have.callCount', 7);
  });
});
