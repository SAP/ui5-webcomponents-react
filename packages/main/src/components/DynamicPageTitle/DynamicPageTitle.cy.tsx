import { useRef, useState } from 'react';
import { Button } from '../../webComponents';
import { DynamicPage, ObjectPage } from '../..';
import { DynamicPageTitle } from './';

const PageComponent = ({ toolbarProps = {}, isObjectPage }) => {
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
        {...toolbarProps}
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
  cy.findByTestId('actionsInstance').should('have.text', should.actions);
  cy.findByText('Show navActionsRef').click({ force: true });
  cy.findByTestId('navActionsInstance').should('have.text', should.nav);
};

describe('DynamicPageTitle', () => {
  it('toolbar instances - DynamicPage', () => {
    cy.mount(<PageComponent isObjectPage={false} />);
    cy.wait(100);
    testOverflowRefs({ nav: 'false', actions: 'true' });
    cy.viewport(1000, 1000);
    cy.mount(<PageComponent isObjectPage={false} />);
    cy.wait(200);
    testOverflowRefs({ nav: 'true', actions: 'true' });
    cy.viewport(5000, 5000);
    cy.mount(<PageComponent isObjectPage={false} />);
    cy.wait(200);
    testOverflowRefs({ nav: 'false', actions: 'false' });
  });
  it('toolbar instances - ObjectPage', () => {
    cy.mount(<PageComponent isObjectPage />);
    cy.wait(100);
    testOverflowRefs({ nav: 'false', actions: 'true' });
    cy.viewport(1000, 1000);
    cy.mount(<PageComponent isObjectPage />);
    cy.wait(200);
    testOverflowRefs({ nav: 'true', actions: 'true' });
    cy.viewport(5000, 5000);
    cy.mount(<PageComponent isObjectPage />);
    cy.wait(200);
    testOverflowRefs({ nav: 'false', actions: 'false' });
  });
});
