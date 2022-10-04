/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import React, { useState } from 'react';
import { Toolbar, Button, Text, Input } from '@ui5/webcomponents-react';

const OverflowTestComponent = (props) => {
  const { onOverflowChange } = props;
  const [width, setWidth] = useState(undefined);
  const [additionalChildren, setAdditionalChildren] = useState([]);
  return (
    <>
      <Input
        data-testid="input"
        onChange={(e) => {
          setWidth(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          setAdditionalChildren((prev) => [...prev, <Button style={{ width: '200px' }}>Button</Button>]);
        }}
      >
        Add
      </Button>
      <Button
        onClick={() => {
          setAdditionalChildren((prev) => {
            const [omit, ...rest] = prev;
            return rest;
          });
        }}
      >
        Remove
      </Button>
      <Toolbar
        data-testid="toolbar"
        onOverflowChange={onOverflowChange}
        style={width ? { width: `${width}px`, maxWidth: 'none' } : undefined}
      >
        <Text data-testid="toolbar-item" style={{ width: '200px' }}>
          Item1
        </Text>
        <Text data-testid="toolbar-item2" style={{ width: '200px' }}>
          Item2
        </Text>
        <Text data-testid="toolbar-item3" style={{ width: '200px' }}>
          Item3
        </Text>
        {additionalChildren}
      </Toolbar>
    </>
  );
};

describe('Toolbar', () => {
  it('overflow menu', () => {
    const onOverflowChange = cy.spy().as('overflowChangeSpy');
    cy.viewport(300, 500);
    cy.mount(<OverflowTestComponent onOverflowChange={onOverflowChange} />);
    cy.get('@overflowChangeSpy').should('have.been.calledOnce');
    cy.findByText('Item1').should('be.visible');
    cy.get('[data-testid="toolbar-item2"]').should('not.be.visible');
    cy.get('[data-testid="toolbar-item3"]').should('not.be.visible');

    // open
    cy.get(`[tooltip="Show more"]`).click();

    cy.findByText('Item1').should('be.visible');
    cy.get('[data-testid="toolbar-item2"]').should('be.visible');
    cy.get('[data-testid="toolbar-item3"]').should('be.visible');

    cy.viewport(500, 500);

    // close
    cy.get(`[tooltip="Show more"]`).click();
    cy.wait(1000);

    cy.get('@overflowChangeSpy').should('have.callCount', 2);

    cy.findByTestId('input').shadow().find('input').type('100');
    cy.findByTestId('input').trigger('change');
    cy.findByTestId('input').shadow().find('input').clear({ force: true });

    cy.get('@overflowChangeSpy').should('have.callCount', 3);

    cy.get('[data-testid="toolbar-item"]').should('not.be.visible');
    cy.get('[data-testid="toolbar-item2"]').should('not.be.visible');
    cy.get('[data-testid="toolbar-item3"]').should('not.be.visible');

    cy.findByTestId('input').shadow().find('input').type('2000', { force: true });
    cy.findByTestId('input').trigger('change');

    cy.get('@overflowChangeSpy').should('have.callCount', 4);

    cy.get('[data-testid="toolbar-item"]').should('be.visible');
    cy.get('[data-testid="toolbar-item2"]').should('be.visible');
    cy.get('[data-testid="toolbar-item3"]').should('be.visible');

    cy.findByTestId('input').shadow().find('input').clear({ force: true });
    cy.findByTestId('input').trigger('change');

    cy.get('@overflowChangeSpy').should('have.callCount', 5);

    cy.findByText('Add').click();

    cy.get('@overflowChangeSpy').should('have.callCount', 6);

    cy.findByText('Add').click();
    cy.findByText('Add').click();
    cy.findByText('Add').click();
    cy.findByText('Add').click();
    cy.findByText('Add').click();

    cy.get('@overflowChangeSpy').should('have.callCount', 11);

    cy.findByText('Remove').click();

    cy.get('@overflowChangeSpy').should('have.callCount', 12);

    cy.findByText('Remove').click();
    cy.findByText('Remove').click();
    cy.findByText('Remove').click();
    cy.findByText('Remove').click();
    cy.findByText('Remove').click();

    cy.get('@overflowChangeSpy').should('have.callCount', 17);
  });
});
