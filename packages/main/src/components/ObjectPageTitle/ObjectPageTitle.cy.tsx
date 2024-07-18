import type { ObjectPageTitlePropTypes, ObjectPagePropTypes } from '../..';
import {
  Avatar,
  Breadcrumbs,
  BreadcrumbsItem,
  ObjectPageHeader,
  ObjectPage,
  ObjectPageSection,
  Title,
  Toolbar,
  ToolbarButton
} from '../..';
import { ObjectPageTitle } from './index.js';

interface PropTypes {
  titleProps?: ObjectPageTitlePropTypes;
  pageProps?: ObjectPagePropTypes;
  childrenScrollable?: boolean;
}

const PageComponent = ({ titleProps = {}, pageProps = {}, childrenScrollable }: PropTypes) => {
  const childrenObjectPage = (
    <ObjectPageSection id={'0'}>
      <div style={{ height: '1600px', background: 'cadetblue' }}></div>
    </ObjectPageSection>
  );
  const localPageProps = {
    titleArea: (
      <ObjectPageTitle
        actionsBar={<Toolbar>{new Array(10).fill(<ToolbarButton text="Test" />)}</Toolbar>}
        navigationBar={<Toolbar>{new Array(20).fill(<ToolbarButton text="Test" />)}</Toolbar>}
        {...titleProps}
      />
    ),
    ...pageProps
  };
  return (
    <>
      <ObjectPage data-testid="page" {...localPageProps}>
        {childrenScrollable && childrenObjectPage}
      </ObjectPage>
    </>
  );
};

describe('ObjectPageTitle', () => {
  it('show 2nd line content', () => {
    cy.viewport(320, 700);
    cy.mount(
      <PageComponent
        titleProps={{
          header: <Title>This is a pretty long title of the ObjectPageTitle</Title>,
          navigationBar: undefined,
          children: <div>Content</div>
        }}
      />
    );
    cy.findByText('This is a pretty long title of the ObjectPageTitle').should('be.visible');
    cy.findByText('Content').should('exist'); // covered by click span
    cy.get('[icon="overflow"]').should('be.visible');
  });

  it('breadcrumbs spread', () => {
    cy.viewport(1920, 1080);
    cy.mount(
      <PageComponent
        titleProps={{
          navigationBar: undefined,
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
          pageProps={{ image, headerArea: headerContent, style: { height: '800px' } }}
          titleProps={{
            expandedContent: <div data-testid="expandedContent">expandedContent</div>,
            snappedContent: <div data-testid="snappedContent">snappedContent</div>
          }}
        />
      );
      if (headerContent) {
        cy.findByText('expandedContent').should('exist');
        cy.findByTestId('snappedContent').should('not.exist');
      } else {
        cy.findByText('snappedContent').should('exist');
        cy.findByTestId('expandedContent').should('not.exist');
      }
      cy.wait(50);
      cy.findByTestId('page').scrollTo(0, 500);
      cy.findByText('snappedContent').should('exist');
      cy.findByTestId('expandedContent').should('not.exist');
      if (headerContent && image) {
        cy.get('[data-component-name="ATwithImageSnappedContentContainer"]').should('exist');
      } else {
        cy.get('[data-component-name="ATwithImageSnappedContentContainer"]').should('not.exist');
      }
    });
  });
});
