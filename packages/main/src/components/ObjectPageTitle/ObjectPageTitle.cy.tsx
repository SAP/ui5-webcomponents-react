import { useRef, useState } from 'react';
import type { ObjectPageTitlePropTypes, ObjectPagePropTypes } from '../..';
import { Avatar, Breadcrumbs, BreadcrumbsItem, ObjectPageHeader, ObjectPage, ObjectPageSection, Title } from '../..';
import { Button } from '../../webComponents/index.js';
import { ObjectPageTitle } from './';

interface PropTypes {
  titleProps?: ObjectPageTitlePropTypes;
  pageProps?: ObjectPagePropTypes;
  childrenScrollable?: boolean;
}

const PageComponent = ({ titleProps = {}, pageProps = {}, childrenScrollable }: PropTypes) => {
  const actionsRef = useRef(null);
  const navActionsRef = useRef(null);
  const [actionsToolbarInstance, setActionsToolbarInstance] = useState();
  const [navActionsToolbarInstance, setNavActionsToolbarInstance] = useState();
  const childrenObjectPage = (
    <ObjectPageSection id={'0'}>
      <div style={{ height: '1600px', background: 'cadetblue' }}></div>
    </ObjectPageSection>
  );
  const localPageProps = {
    headerTitle: (
      <ObjectPageTitle
        actions={new Array(10).fill(<Button>Test</Button>)}
        navigationActions={new Array(20).fill(<Button>Test</Button>)}
        actionsToolbarProps={{ overflowPopoverRef: actionsRef }}
        navigationActionsToolbarProps={{ overflowPopoverRef: navActionsRef }}
        {...titleProps}
      />
    ),
    ...pageProps
  };
  return (
    <>
      <Button
        onClick={() => {
          setActionsToolbarInstance(actionsRef.current);
        }}
      >
        Show actionsRef
      </Button>
      <Button
        onClick={() => {
          setNavActionsToolbarInstance(navActionsRef.current);
        }}
      >
        Show navActionsRef
      </Button>
      <ObjectPage data-testid="page" {...localPageProps}>
        {childrenScrollable && childrenObjectPage}
      </ObjectPage>
      <p data-testid="actionsInstance">{`${!!actionsToolbarInstance}`}</p>
      <p data-testid="navActionsInstance">{`${!!navActionsToolbarInstance}`}</p>
    </>
  );
};

const testOverflowRefs = (should = { nav: 'false', actions: 'false' }) => {
  cy.findByText('Show actionsRef').click({ force: true });
  cy.wait(200);
  cy.findByTestId('actionsInstance').should('have.text', should.actions);
  cy.findByText('Show navActionsRef').click({ force: true });
  cy.wait(200);
  cy.findByTestId('navActionsInstance').should('have.text', should.nav);
};

describe('ObjectPageTitle', () => {
  it('toolbar instances - ObjectPage', () => {
    cy.mount(<PageComponent />);
    cy.wait(300);
    testOverflowRefs({ nav: 'false', actions: 'true' });
    cy.viewport(1000, 1000);
    cy.mount(<PageComponent />);
    cy.wait(300);
    testOverflowRefs({ nav: 'true', actions: 'true' });
    cy.viewport(5000, 5000);
    cy.mount(<PageComponent />);
    cy.wait(300);
    testOverflowRefs({ nav: 'false', actions: 'false' });
  });
  it('show 2nd line content', () => {
    cy.viewport(320, 700);
    cy.mount(
      <PageComponent
        titleProps={{
          header: <Title>This is a pretty long title of the ObjectPageTitle</Title>,
          navigationActions: undefined,
          children: <div>Content</div>
        }}
      />
    );
    cy.findByText('This is a pretty long title of the ObjectPageTitle').should('be.visible');
    cy.findByText('Content').should('be.visible');
    cy.get('[data-component-name="ToolbarOverflowButton"]').should('be.visible');
  });

  it('breadcrumbs spread', () => {
    cy.viewport(1920, 1080);
    cy.mount(
      <PageComponent
        titleProps={{
          navigationActions: undefined,
          breadcrumbs: (
            <Breadcrumbs data-testid="breadcrumbs">
              {new Array(14).fill(1337).map((item, index) => (
                <BreadcrumbsItem key={index}>{`BreadcrumbsItem ${index}`}</BreadcrumbsItem>
              ))}
            </Breadcrumbs>
          )
        }}
      />
    );
    // no nav actions
    cy.findByTestId('breadcrumbs').parent().should('have.css', 'width', '1808px' /*100%*/);
    cy.mount(
      <PageComponent
        titleProps={{
          breadcrumbs: (
            <Breadcrumbs data-testid="breadcrumbs">
              {new Array(14).fill(1337).map((item, index) => (
                <BreadcrumbsItem key={index}>{`BreadcrumbsItem ${index}`}</BreadcrumbsItem>
              ))}
            </Breadcrumbs>
          )
        }}
      />
    );
    // nav actions in actions toolbar
    cy.findByTestId('breadcrumbs').parent().should('have.css', 'width', '1808px' /*100%*/);
    cy.viewport(1000, 1000);
    // w/ nav actions
    cy.findByTestId('breadcrumbs').parent().should('have.css', 'width', '460px' /*50% (min-width)*/);
  });

  it('expandedContent & snappedContent', () => {
    const image = <Avatar />;
    [
      undefined,
      <ObjectPageHeader key="headerContent" style={{ height: '100px', background: 'lightblue' }}>
        Header Section
      </ObjectPageHeader>
    ].forEach((headerContent) => {
      cy.mount(
        <PageComponent
          childrenScrollable
          pageProps={{ image, headerContent, style: { height: '800px' } }}
          titleProps={{
            expandedContent: <div data-testid="expandedContent">expandedContent</div>,
            snappedContent: <div data-testid="snappedContent">snappedContent</div>
          }}
        />
      );
      if (headerContent) {
        cy.findByText('expandedContent').should('be.visible');
        cy.findByTestId('snappedContent').should('not.exist');
      } else {
        cy.findByText('snappedContent').should('be.visible');
        cy.findByTestId('expandedContent').should('not.exist');
      }
      cy.wait(50);
      cy.findByTestId('page').scrollTo(0, 500);
      cy.findByText('snappedContent').should('be.visible');
      cy.findByTestId('expandedContent').should('not.exist');
      if (headerContent && image) {
        cy.get('[data-component-name="ATwithImageSnappedContentContainer"]').should('be.visible');
      } else {
        cy.get('[data-component-name="ATwithImageSnappedContentContainer"]').should('not.exist');
      }
    });
  });
});
