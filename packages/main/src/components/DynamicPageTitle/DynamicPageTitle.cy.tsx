import { useRef, useState } from 'react';
import type { DynamicPageTitlePropTypes } from '../..';
import { DynamicPage, ObjectPage, Title } from '../..';
import { Button } from '../../webComponents/index.js';
import { DynamicPageTitle } from './';

interface PropTypes {
  dynamicPageTitleProps?: DynamicPageTitlePropTypes;
  isObjectPage: boolean;
}

const PageComponent = ({ dynamicPageTitleProps = {}, isObjectPage }: PropTypes) => {
  const actionsRef = useRef(null);
  const navActionsRef = useRef(null);
  const [actionsToolbarInstance, setActionsToolbarInstance] = useState();
  const [navActionsToolbarInstance, setNavActionsToolbarInstance] = useState();
  const pageProps = {
    headerTitle: (
      <DynamicPageTitle
        actions={new Array(10).fill(<Button>Test</Button>)}
        navigationActions={new Array(20).fill(<Button>Test</Button>)}
        actionsToolbarProps={{ overflowPopoverRef: actionsRef }}
        navigationActionsToolbarProps={{ overflowPopoverRef: navActionsRef }}
        {...dynamicPageTitleProps}
      />
    )
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
      {isObjectPage ? <ObjectPage {...pageProps} /> : <DynamicPage {...pageProps} />}
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

describe.only('DynamicPageTitle', () => {
  it('toolbar instances - DynamicPage', () => {
    cy.mount(<PageComponent isObjectPage={false} />);
    testOverflowRefs({ nav: 'false', actions: 'true' });
    cy.viewport(1000, 1000);
    cy.mount(<PageComponent isObjectPage={false} />);
    testOverflowRefs({ nav: 'true', actions: 'true' });
    cy.viewport(5000, 5000);
    cy.mount(<PageComponent isObjectPage={false} />);
    cy.wait(200);
    testOverflowRefs({ nav: 'false', actions: 'false' });
  });
  it.only('toolbar instances - ObjectPage', () => {
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
});
