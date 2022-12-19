import { useState } from 'react';
import { Button, DynamicPageHeader, DynamicPageTitle, ObjectPage, ObjectPagePropTypes, ObjectPageSection } from '../..';

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

  it('pin header', () => {
    const pin = cy.spy().as('onPinSpy');
    cy.mount(
      <ObjectPage
        style={{ height: '100vh' }}
        headerTitle={<DynamicPageTitle header="Heading" subHeader="SubHeading" />}
        headerContent={<DynamicPageHeader>ObjectPageHeader</DynamicPageHeader>}
        headerContentPinnable
        showHideHeaderButton
        onPinnedStateChange={pin}
        data-testid="op"
      >
        <ObjectPageSection id="section" titleText="Section">
          <div style={{ height: '2000px' }} />
        </ObjectPageSection>
      </ObjectPage>
    );
    cy.wait(50);

    cy.findByTestId('op').scrollTo(0, 500);
    cy.findByText('ObjectPageHeader').should('not.be.visible');

    cy.findByTestId('op').scrollTo('top');

    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').click();
    cy.get('@onPinSpy').should('have.been.calledOnce');
    cy.get('@onPinSpy').should('have.been.calledWith', true);

    cy.findByTestId('op').scrollTo(0, 500);
    cy.findByText('ObjectPageHeader').should('be.visible');

    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').click();
    cy.get('@onPinSpy').should('have.been.calledTwice');
    cy.get('@onPinSpy').should('have.been.calledWith', false);
    cy.findByText('ObjectPageHeader').should('not.be.visible');
  });

  it('programmatically pin header (`alwaysShowContentHeader`)', () => {
    const TestComp = ({ onPinnedStateChange }: ObjectPagePropTypes) => {
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
          <ObjectPage
            style={{ height: '100vh' }}
            headerTitle={<DynamicPageTitle header="Heading" subHeader="SubHeading" />}
            headerContent={<DynamicPageHeader>ObjectPageHeader</DynamicPageHeader>}
            headerContentPinnable
            showHideHeaderButton
            alwaysShowContentHeader={pinned}
            onPinnedStateChange={handlePinChange}
            data-testid="op"
          >
            <ObjectPageSection id="section" titleText="Section">
              <div style={{ height: '2000px' }} />
            </ObjectPageSection>
          </ObjectPage>
        </>
      );
    };
    const pin = cy.spy().as('onPinSpy');
    cy.mount(<TestComp onPinnedStateChange={pin} />);
    cy.wait(50);

    cy.findByTestId('op').scrollTo(0, 500);
    cy.findByText('ObjectPageHeader').should('not.be.visible');

    cy.findByTestId('btn').click();
    cy.get('@onPinSpy').should('have.been.calledOnce');
    cy.get('@onPinSpy').should('have.been.calledWith', true);
    cy.findByText('ObjectPageHeader').should('be.visible');

    cy.findByTestId('op').scrollTo(0, 0);
    cy.findByText('ObjectPageHeader').should('be.visible');

    cy.findByTestId('op').scrollTo(0, 800);
    cy.findByText('ObjectPageHeader').should('be.visible');

    cy.findByTestId('btn').click();
    cy.get('@onPinSpy').should('have.been.calledTwice');
    cy.get('@onPinSpy').should('have.been.calledWith', false);
    cy.findByText('ObjectPageHeader').should('not.be.visible');

    cy.findByTestId('btn').click();
    cy.findByTestId('op').scrollTo(0, 500);
    cy.findByText('ObjectPageHeader').should('be.visible');

    cy.findByTestId('btn').click();
    cy.findByText('ObjectPageHeader').should('not.be.visible');

    cy.get('[data-component-name="DynamicPageAnchorBarExpandBtn"]').click();
    cy.findByText('ObjectPageHeader').should('be.visible');

    // wait for timeout of expand click
    cy.wait(500);

    cy.findByTestId('op').scrollTo(0, 501);
    cy.findByText('ObjectPageHeader').should('not.be.visible');

    cy.findByTestId('op').scrollTo(0, 30);
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').click();
    cy.get('@onPinSpy').should('have.callCount', 5);
    cy.findByTestId('btn').should('have.text', 'toggle false');
    cy.findByText('ObjectPageHeader').should('be.visible');

    cy.findByTestId('op').scrollTo(0, 500);
    cy.findByTestId('btn').click();
    cy.findByText('ObjectPageHeader').should('not.be.visible');

    cy.findByTestId('btn').click();
    cy.findByText('ObjectPageHeader').should('be.visible');
    cy.get('@onPinSpy').should('have.callCount', 7);
  });

  it('collapse header when partially visible', () => {
    cy.viewport(1440, 1080);
    cy.mount(
      <ObjectPage
        style={{ height: '100vh' }}
        headerTitle={<DynamicPageTitle header="Heading" subHeader="SubHeading" />}
        headerContent={
          <DynamicPageHeader>
            <div style={{ height: '400px', width: '100%', background: 'lightyellow' }}>ObjectPageHeader</div>
          </DynamicPageHeader>
        }
        headerContentPinnable
        showHideHeaderButton
        data-testid="op"
      >
        <ObjectPageSection id="section" titleText="Section">
          <div style={{ height: '2000px' }} />
        </ObjectPageSection>
      </ObjectPage>
    );
    cy.wait(50);

    cy.findByTestId('op').scrollTo(0, 400);
    cy.get('[data-component-name="DynamicPageAnchorBarExpandBtn"]').click();
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').should('not.exist');
    cy.findByText('ObjectPageHeader').should('not.be.visible');

    // wait for timeout of expand click
    cy.wait(500);

    cy.findByTestId('op').scrollTo(0, 1);
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').should('not.exist');
    cy.wait(50);
    cy.findByTestId('op').scrollTo(0, 0);
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').should('be.visible');
    cy.findByText('ObjectPageHeader').should('be.visible');
  });
});
