import questionMarkIcon from '@ui5/webcomponents-icons/dist/question-mark.js';
import { useState } from 'react';
import type { DynamicPagePropTypes } from '../..';
import { Button, DynamicPage, DynamicPageHeader, DynamicPageTitle, ToggleButton } from '../..';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

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

    cy.mount(
      <DynamicPage
        headerTitle={<DynamicPageTitle header="Heading" subHeader="SubHeading" />}
        headerContent={<DynamicPageHeader>DynamicPageHeader</DynamicPageHeader>}
        onToggleHeaderContent={toggle}
        headerContentPinnable={false}
        showHideHeaderButton={false}
      >
        <div>Content</div>
      </DynamicPage>
    );

    cy.get('[accessible-name="Collapse Header"]').should('not.exist');
    cy.get('[accessible-name="Expand Header"]').should('not.exist');
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
    cy.wait(50);
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

    cy.mount(
      <DynamicPage
        style={{ height: '100vh' }}
        headerTitle={<DynamicPageTitle header="Heading" subHeader="SubHeading" />}
        headerContent={<DynamicPageHeader>DynamicPageHeader</DynamicPageHeader>}
        headerContentPinnable
        showHideHeaderButton
        onPinnedStateChange={pin}
        alwaysShowContentHeader
        data-testid="op"
      >
        <div style={{ height: '2000px' }} />
      </DynamicPage>
    );

    cy.findByTestId('op').scrollTo(0, 500);
    cy.findByText('DynamicPageHeader').should('be.visible');
  });

  it('programmatically pin header (`alwaysShowContentHeader`)', () => {
    document.body.style.margin = '0px';
    const TestComp = ({ onPinnedStateChange }: DynamicPagePropTypes) => {
      const [pinned, setPinned] = useState(false);
      const handlePinChange = (pinned) => {
        onPinnedStateChange(pinned);
        setPinned(pinned);
      };
      return (
        <>
          <button
            style={{ height: '40px' }}
            data-testid="btn"
            onClick={() => {
              setPinned((prev) => !prev);
            }}
          >
            toggle {`${!pinned}`}
          </button>
          <DynamicPage
            style={{ height: 'calc(100vh - 40px)' }}
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
    cy.wait(50);

    cy.findByTestId('op').scrollTo(0, 500);
    cy.findByText('DynamicPageHeader').should('not.be.visible');

    cy.findByTestId('btn').click();
    cy.get('@onPinSpy').should('have.been.calledOnce');
    cy.get('@onPinSpy').should('have.been.calledWith', true);
    cy.findByText('DynamicPageHeader').should('be.visible');

    cy.wait(100);
    cy.findByTestId('op').scrollTo(0, 0);
    cy.findByText('DynamicPageHeader').should('be.visible');

    cy.findByTestId('op').scrollTo(0, 800);
    cy.findByText('DynamicPageHeader').should('be.visible');

    cy.findByTestId('btn').click();
    cy.get('@onPinSpy').should('have.been.calledTwice');
    cy.get('@onPinSpy').should('have.been.calledWith', false);
    cy.findByText('DynamicPageHeader').should('be.visible');

    cy.wait(100);
    cy.findByTestId('op').scrollTo(0, 801);
    cy.findByText('DynamicPageHeader').should('not.be.visible');

    cy.findByTestId('btn').click();
    cy.findByTestId('op').scrollTo(0, 500);
    cy.findByText('DynamicPageHeader').should('be.visible');

    cy.findByTestId('btn').click();
    cy.wait(200);
    cy.findByTestId('op').scrollTo(0, 501);
    cy.findByText('DynamicPageHeader').should('not.be.visible');

    cy.get('[data-component-name="DynamicPageAnchorBarExpandBtn"]').click();
    cy.findByText('DynamicPageHeader').should('be.visible');

    // wait for timeout of expand click
    cy.wait(500);

    cy.findByTestId('op').scrollTo(0, 502);
    cy.findByText('DynamicPageHeader').should('not.be.visible');

    // timeout
    cy.wait(500);
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

  it('collapse header when not visible', () => {
    document.body.style.margin = '0px';
    cy.viewport(1440, 1080);
    cy.mount(
      <DynamicPage
        style={{ height: '100vh' }}
        headerTitle={<DynamicPageTitle header="Heading" subHeader="SubHeading" />}
        headerContent={
          <DynamicPageHeader style={{ height: '400px' }}>
            <div style={{ width: '100%', background: 'lightyellow' }}>DynamicPageHeader</div>
          </DynamicPageHeader>
        }
        headerContentPinnable
        showHideHeaderButton
        data-testid="op"
      >
        <div style={{ height: '2000px', background: 'lightblue' }}>
          <span>Content</span>
        </div>
      </DynamicPage>
    );
    cy.wait(50);

    cy.findByTestId('op').scrollTo(0, 400);
    cy.findByText('Content').should('be.visible');
    // header content height + padding
    cy.findByTestId('op').scrollTo(0, 432);
    cy.findByText('Content').should('be.visible');
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').should('not.exist');

    cy.get('[data-component-name="DynamicPageAnchorBarExpandBtn"]').click();
    // wait for timeout of expand click
    cy.wait(200);
    cy.findByText('DynamicPageHeader').should('be.visible');
    // expanded header is covering the Content, not detectable by Cypress
    // cy.findByText('Content').should('not.be.visible');
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').should('exist');

    // collapse when scrolling
    cy.findByTestId('op').scrollTo(0, 440);
    cy.wait(200);
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').should('not.exist');
    cy.findByText('DynamicPageHeader').should('not.be.visible');

    cy.get('[data-component-name="DynamicPageAnchorBarExpandBtn"]').click();
    cy.wait(200);
    cy.findByTestId('op').scrollTo(0, 0);
    cy.wait(200);
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').should('be.visible');
    cy.findByText('DynamicPageHeader').should('be.visible');
  });

  it('Collapse header w/o flickering', () => {
    document.body.style.margin = '0px';
    cy.mount(
      <DynamicPage
        data-testid="dp"
        style={{ height: '100vh' }}
        headerContent={<DynamicPageHeader>headerContent</DynamicPageHeader>}
        headerTitle={<DynamicPageTitle header={<div>Header</div>}>Status</DynamicPageTitle>}
      >
        <div style={{ height: 'calc(100vh - 2rem)' }}></div>
      </DynamicPage>
    );
    // ResizeObserver
    cy.wait(50);
    cy.get('[icon="pushpin-off"]').should('be.visible');
    cy.findByTestId('dp').scrollTo('bottom');
    cy.get('[icon="pushpin-off"]').should('not.exist');
    // timeout
    cy.wait(500);
    cy.findByTestId('dp').scrollTo('top');
    cy.get('[icon="pushpin-off"]').should('be.visible');
  });

  it('w/o content', () => {
    cy.mount(<DynamicPage data-testid="dp" />);
    cy.findByTestId('dp').should('be.visible');
  });

  it('w/ footer', () => {
    cy.mount(<DynamicPage footer={<div>footer</div>} />);
    cy.get('[data-component-name="DynamicPageContent"]').should('have.css', 'padding-block-end', '16px');
    cy.findByText('footer').should('be.visible');
    cy.mount(
      <DynamicPage footer={<div>footer</div>} style={{ height: '400px' }}>
        <div style={{ height: '2000px', background: 'cadetblue' }}>Content</div>
      </DynamicPage>
    );
    cy.get('[data-component-name="DynamicPageContent"]').should('have.css', 'padding-block-end', '16px');
    cy.findByText('footer').should('be.visible');
  });
  it('a11y config', () => {
    cy.mount(
      <DynamicPage
        headerContent={<DynamicPageHeader>headerContent</DynamicPageHeader>}
        headerTitle={<DynamicPageTitle header={<div>Header</div>}>Status</DynamicPageTitle>}
        footer={<div>footer</div>}
      />
    );
    cy.get('[data-component-name="DynamicPageFooter"]').should('have.attr', 'role', 'contentinfo');
    cy.get('[data-component-name="DynamicPageFooter"]').should('not.have.attr', 'aria-label');
    cy.get('[data-component-name="DynamicPageFooter"]').should('not.have.attr', 'aria-labelledby');
    cy.get('[data-component-name="DynamicPageAnchorBar"]').should('have.attr', 'role', 'navigation');

    cy.mount(
      <DynamicPage
        headerContent={<DynamicPageHeader>headerContent</DynamicPageHeader>}
        headerTitle={<DynamicPageTitle header={<div>Header</div>}>Status</DynamicPageTitle>}
        footer={<div>footer</div>}
        a11yConfig={{
          dynamicPageAnchorBar: { role: 'anchorbar' },
          dynamicPageFooter: { role: 'footer', 'aria-label': 'label', 'aria-labelledby': 'labelledby' }
        }}
      />
    );
    cy.get('[data-component-name="DynamicPageFooter"]').should('have.attr', 'role', 'footer');
    cy.get('[data-component-name="DynamicPageFooter"]').should('have.attr', 'aria-label', 'label');
    cy.get('[data-component-name="DynamicPageFooter"]').should('have.attr', 'aria-labelledby', 'labelledby');
    cy.get('[data-component-name="DynamicPageAnchorBar"]').should('have.attr', 'role', 'anchorbar');
  });

  it('with custom overflow toolbar buttons', () => {
    cy.mount(
      <DynamicPage
        style={{ width: '200px' }}
        headerTitle={
          <DynamicPageTitle
            actionsToolbarProps={{ overflowButton: <ToggleButton data-testid="actionBtn" icon={questionMarkIcon} /> }}
            navigationActionsToolbarProps={{
              overflowButton: <ToggleButton data-testid="navActionBtn" icon={questionMarkIcon} />
            }}
            actions={
              <>
                <Button>Actions Button 1</Button>
                <Button>Actions Button 2</Button>
              </>
            }
            navigationActions={
              <>
                <Button>Navigation Actions Button 1</Button>
                <Button>Navigation Actions Button 2</Button>
              </>
            }
          />
        }
      />
    );
    cy.get('[icon="question-mark"]').should('have.length', 2).should('be.visible');
    cy.mount(
      <DynamicPage
        style={{ width: '1300px' }}
        headerTitle={
          <DynamicPageTitle
            actionsToolbarProps={{ overflowButton: <ToggleButton data-testid="actionBtn" icon={questionMarkIcon} /> }}
            navigationActionsToolbarProps={{
              overflowButton: <ToggleButton data-testid="navActionBtn" icon={questionMarkIcon} />
            }}
            actions={
              <>
                <Button>Actions Button 1</Button>
                <Button>Actions Button 2</Button>
              </>
            }
            navigationActions={
              <>
                <Button>Navigation Actions Button 1</Button>
                <Button>Navigation Actions Button 2</Button>
              </>
            }
          />
        }
      />
    );
    cy.get('[icon="question-mark"]').should('have.length', 1).should('be.visible');
  });

  it('with sticky sub-headers', () => {
    const renderContent = (stickyHeaderHeight) => (
      <>
        <div
          style={{
            position: 'sticky',
            width: '100%',
            height: '4rem',
            background: 'lightgreen',
            top: `${stickyHeaderHeight}px`
          }}
        >
          <span>Sticky Header</span>
        </div>
        <div style={{ width: '100%', background: 'orange', height: '10rem' }}>
          <span>Content 1</span>
        </div>
        <div
          style={{
            position: 'sticky',
            width: '100%',
            height: '8rem',
            background: 'lightgreen',
            top: `calc(${stickyHeaderHeight}px + 4rem)`
          }}
        >
          <span>Sticky Header 2</span>
        </div>
        <div style={{ background: 'lightblue', height: '2000px', width: '100%' }}>
          <span>Content 2</span>
        </div>
      </>
    );

    function checksWithScroll() {
      cy.findByText('Sticky Header').should('be.visible');
      cy.findByText('Content 1').should('be.visible');
      cy.findByText('Sticky Header 2').should('be.visible');
      cy.findByText('Content 2').should('be.visible');

      cy.findByTestId('dp').scrollTo(0, 800);

      cy.findByText('Sticky Header').should('be.visible');
      cy.findByText('Content 1').should('not.be.visible');
      cy.findByText('Sticky Header 2').should('be.visible');
      cy.findByText('Content 2').should('not.be.visible');
    }

    cy.mount(
      <DynamicPage
        data-testid="dp"
        style={{ height: '90vh' }}
        headerContent={<DynamicPageHeader>headerContent</DynamicPageHeader>}
        headerTitle={<DynamicPageTitle header={<div>Header</div>}>Status</DynamicPageTitle>}
      >
        {({ stickyHeaderHeight }) => {
          return renderContent(stickyHeaderHeight);
        }}
      </DynamicPage>
    );

    checksWithScroll();

    cy.mount(
      <DynamicPage
        data-testid="dp"
        style={{ height: '90vh' }}
        headerTitle={<DynamicPageTitle header={<div>Header</div>}>Status</DynamicPageTitle>}
      >
        {({ stickyHeaderHeight }) => {
          return renderContent(stickyHeaderHeight);
        }}
      </DynamicPage>
    );

    checksWithScroll();

    cy.mount(
      <DynamicPage data-testid="dp" style={{ height: '90vh' }}>
        {({ stickyHeaderHeight }) => {
          return renderContent(stickyHeaderHeight);
        }}
      </DynamicPage>
    );

    checksWithScroll();

    cy.mount(
      <DynamicPage
        data-testid="dp"
        style={{ height: '90vh' }}
        headerContent={<DynamicPageHeader>headerContent</DynamicPageHeader>}
        headerTitle={<DynamicPageTitle header={<div>Header</div>}>Status</DynamicPageTitle>}
        footer={<div>footer</div>}
      >
        {({ stickyHeaderHeight }) => {
          return renderContent(stickyHeaderHeight);
        }}
      </DynamicPage>
    );

    checksWithScroll();
  });

  it('prop: headerCollapsed', () => {
    document.body.style.margin = '0px';
    const TestComp = () => {
      const [headerCollapsed, setHeaderCollapsed] = useState(true);
      const handleToggle = (visible) => {
        setHeaderCollapsed(!visible);
      };
      return (
        <>
          <button
            style={{ height: '40px' }}
            data-testid="toggle"
            onClick={() => {
              setHeaderCollapsed((prev) => !prev);
            }}
          >
            Toggle headerCollapsed
          </button>
          <DynamicPage
            data-testid="dp"
            style={{ height: 'calc(100vh - 40px)' }}
            headerTitle={<DynamicPageTitle header="Heading" subHeader="SubHeading" />}
            headerContent={<DynamicPageHeader>DynamicPageHeader</DynamicPageHeader>}
            headerCollapsed={headerCollapsed}
            onToggleHeaderContent={handleToggle}
          >
            <div style={{ height: '2000px' }}>Content</div>
          </DynamicPage>
        </>
      );
    };
    cy.mount(<TestComp />);

    //collapsed
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').should('not.exist');

    cy.findByTestId('toggle').click();
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').should('be.visible');
    cy.wait(200);

    cy.findByTestId('dp').scrollTo(0, 800, { duration: 300 });
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').should('not.exist');

    cy.findByTestId('toggle').click();
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').should('be.visible');
    cy.wait(200);

    cy.findByTestId('dp').scrollTo(0, 750, { duration: 300 });
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').should('not.exist');
    cy.wait(200);

    cy.findByTestId('dp').scrollTo(0, 0, { duration: 300 });
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').should('be.visible');
  });

  it('prop: preserveHeaderStateOnScroll', () => {
    document.body.style.margin = '0px';
    const TestComp = () => {
      const [headerCollapsed, setHeaderCollapsed] = useState<boolean | undefined>(undefined);
      const [preserveHeaderStateOnScroll, setPreserveHeaderStateOnScroll] = useState(true);
      const handleToggle = (visible) => {
        setHeaderCollapsed(!visible);
      };
      return (
        <>
          <button
            style={{ height: '40px' }}
            data-testid="col"
            onClick={() => {
              setHeaderCollapsed((prev) => !prev);
            }}
          >
            Toggle headerCollapsed
          </button>
          <button
            style={{ height: '40px' }}
            data-testid="pres"
            onClick={() => {
              setPreserveHeaderStateOnScroll((prev) => !prev);
            }}
          >
            Toggle preserveHeaderStateOnScroll
          </button>
          <DynamicPage
            data-testid="dp"
            style={{ height: 'calc(100vh - 40px)' }}
            headerTitle={<DynamicPageTitle header="Heading" subHeader="SubHeading" />}
            headerContent={<DynamicPageHeader>DynamicPageHeader</DynamicPageHeader>}
            headerCollapsed={headerCollapsed}
            onToggleHeaderContent={handleToggle}
            preserveHeaderStateOnScroll={preserveHeaderStateOnScroll}
          >
            <div style={{ height: '2000px' }}>Content</div>
          </DynamicPage>
        </>
      );
    };
    cy.mount(<TestComp />);

    cy.findByTestId('dp').scrollTo(0, 800);
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').should('be.visible');

    cy.findByTestId('dp').scrollTo(0, 0);
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').should('be.visible');

    cy.wait(300);
    cy.findByTestId('dp').scrollTo(0, 800);
    cy.get('[data-component-name="DynamicPageAnchorBarExpandBtn"]').click();
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').should('not.exist');

    cy.findByTestId('dp').scrollTo(0, 0);
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').should('not.exist');

    cy.wait(300);
    cy.findByTestId('dp').scrollTo(0, 800);
    cy.get('[data-component-name="DynamicPageAnchorBarExpandBtn"]').click();
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').should('be.visible');

    cy.findByTestId('col').click();
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').should('not.exist');

    cy.findByTestId('dp').scrollTo(0, 0);
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').should('not.exist');

    cy.findByTestId('col').click();
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').should('be.visible');

    cy.findByTestId('dp').scrollTo(0, 800);
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').should('be.visible');

    cy.findByTestId('pres').click();
    cy.wait(300);
    cy.findByTestId('dp').scrollTo(0, 750, { duration: 300 });
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').should('not.exist');

    cy.findByTestId('dp').scrollTo(0, 0, { duration: 300 });
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').should('be.visible');
  });
  cypressPassThroughTestsFactory(DynamicPage);
});
