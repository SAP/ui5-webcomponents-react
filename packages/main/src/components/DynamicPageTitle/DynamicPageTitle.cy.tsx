import { useRef, useState } from 'react';
import type { DynamicPagePropTypes, DynamicPageTitlePropTypes, ObjectPagePropTypes } from '../..';
import {
  Avatar,
  Breadcrumbs,
  BreadcrumbsItem,
  DynamicPage,
  DynamicPageHeader,
  ObjectPage,
  ObjectPageSection,
  Title
} from '../..';
import { Button } from '../../webComponents/index.js';
import { DynamicPageTitle } from './';

interface PropTypes {
  dynamicPageTitleProps?: DynamicPageTitlePropTypes;
  pageProps?: ObjectPagePropTypes | DynamicPagePropTypes;
  isObjectPage: boolean;
  childrenScrollable?: boolean;
}

const PageComponent = ({ dynamicPageTitleProps = {}, isObjectPage, pageProps = {}, childrenScrollable }: PropTypes) => {
  const actionsRef = useRef(null);
  const navActionsRef = useRef(null);
  const [actionsToolbarInstance, setActionsToolbarInstance] = useState();
  const [navActionsToolbarInstance, setNavActionsToolbarInstance] = useState();
  const childrenObjectPage = (
    <ObjectPageSection id={'0'}>
      <div style={{ height: '1600px', background: 'cadetblue' }}></div>
    </ObjectPageSection>
  );
  const childrenDynamicPage = <div style={{ height: '1600px', background: 'cadetblue' }}></div>;
  const localPageProps = {
    headerTitle: (
      <DynamicPageTitle
        actions={new Array(10).fill(<Button>Test</Button>)}
        navigationActions={new Array(20).fill(<Button>Test</Button>)}
        actionsToolbarProps={{ overflowPopoverRef: actionsRef }}
        navigationActionsToolbarProps={{ overflowPopoverRef: navActionsRef }}
        {...dynamicPageTitleProps}
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
      {isObjectPage ? (
        <ObjectPage data-testid="page" {...localPageProps}>
          {childrenScrollable && childrenObjectPage}
        </ObjectPage>
      ) : (
        <DynamicPage data-testid="page" {...localPageProps}>
          {childrenScrollable && childrenDynamicPage}
        </DynamicPage>
      )}
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

describe('DynamicPageTitle', () => {
  it('toolbar instances - DynamicPage', () => {
    cy.mount(<PageComponent isObjectPage={false} />);
    cy.wait(300);
    testOverflowRefs({ nav: 'false', actions: 'true' });
    cy.viewport(1000, 1000);
    cy.mount(<PageComponent isObjectPage={false} />);
    cy.wait(300);
    testOverflowRefs({ nav: 'true', actions: 'true' });
    cy.viewport(5000, 5000);
    cy.mount(<PageComponent isObjectPage={false} />);
    cy.wait(300);
    testOverflowRefs({ nav: 'false', actions: 'false' });
  });
  it('toolbar instances - ObjectPage', () => {
    cy.mount(<PageComponent isObjectPage />);
    cy.wait(300);
    testOverflowRefs({ nav: 'false', actions: 'true' });
    cy.viewport(1000, 1000);
    cy.mount(<PageComponent isObjectPage />);
    cy.wait(300);
    testOverflowRefs({ nav: 'true', actions: 'true' });
    cy.viewport(5000, 5000);
    cy.mount(<PageComponent isObjectPage />);
    cy.wait(300);
    testOverflowRefs({ nav: 'false', actions: 'false' });
  });
  it('show 2nd line content', () => {
    cy.viewport(320, 700);
    [true, false].forEach((isObjectPage) => {
      cy.mount(
        <PageComponent
          isObjectPage={isObjectPage}
          dynamicPageTitleProps={{
            header: <Title>This is a pretty long title of the DynamicPageTitle</Title>,
            navigationActions: undefined,
            children: <div>Content</div>
          }}
        />
      );
      cy.findByText('This is a pretty long title of the DynamicPageTitle').should('be.visible');
      cy.findByText('Content').should('be.visible');
      cy.get('[data-component-name="ToolbarOverflowButton"]').should('be.visible');
    });
  });

  it('breadcrumbs spread', () => {
    [true, false].forEach((isObjectPage) => {
      cy.viewport(1920, 1080);
      cy.mount(
        <PageComponent
          isObjectPage={isObjectPage}
          dynamicPageTitleProps={{
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
          isObjectPage={isObjectPage}
          dynamicPageTitleProps={{
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
  });

  it('expandedContent & snappedContent', () => {
    [true, 'withImage', false].forEach((isObjectPage) => {
      const image = isObjectPage === 'withImage' && <Avatar />;
      [
        undefined,
        <DynamicPageHeader key="headerContent" style={{ height: '100px', background: 'lightblue' }}>
          Header Section
        </DynamicPageHeader>
      ].forEach((headerContent) => {
        cy.mount(
          <PageComponent
            childrenScrollable
            isObjectPage={!!isObjectPage}
            pageProps={{ image, headerContent, style: { height: '800px' } }}
            dynamicPageTitleProps={{
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
});
