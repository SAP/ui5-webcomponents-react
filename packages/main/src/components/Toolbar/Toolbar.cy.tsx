import '@ui5/webcomponents-react/dist/Assets.js';
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import { Toolbar, Button, Text, Input } from '@ui5/webcomponents-react';
import { useState } from 'react';

interface PropTypes {
  onOverflowChange: (event: {
    toolbarElements: HTMLElement[];
    overflowElements: HTMLCollection;
    target: HTMLElement;
  }) => void;
}

const OverflowTestComponent = (props: PropTypes) => {
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
          setAdditionalChildren((prev) => [
            ...prev,
            <Button key={prev.length + 1} style={{ width: '200px' }}>
              Button
            </Button>
          ]);
        }}
      >
        Add
      </Button>
      <Button
        onClick={() => {
          setAdditionalChildren((prev) => {
            const [_omit, ...rest] = prev;
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
  it('default', () => {
    cy.mount(<Toolbar />);
  });

  it('boolean/undefined children', () => {
    cy.mount(
      <Toolbar data-testid="toolbar">
        <Text>Item1</Text>
        {false}
        {undefined}
        <>{false}</>
        <>
          {false}
          {undefined}
        </>
      </Toolbar>
    );
    cy.findByText('Item1').should('be.visible');
  });

  it('support Fragments', () => {
    cy.mount(
      <Toolbar active data-testid="toolbar">
        <>
          <Text>Item1</Text>
          <Text>Item2</Text>
          <Text>Item3</Text>
        </>
        <>
          <Text>Item4</Text>
        </>
      </Toolbar>
    );
    cy.findByText('Item1').should('be.visible');
    cy.findByText('Item2').should('be.visible');
    cy.findByText('Item3').should('be.visible');
    cy.findByText('Item4').should('be.visible');
  });

  it('overflow menu', () => {
    const onOverflowChange = cy.spy().as('overflowChangeSpy');
    cy.viewport(300, 500);
    cy.mount(<OverflowTestComponent onOverflowChange={onOverflowChange} />);
    cy.get('@overflowChangeSpy').should('have.been.calledOnce');
    cy.findByText('Item1').should('be.visible');
    cy.get('[data-testid="toolbar-item2"]').should('not.be.visible');
    cy.get('[data-testid="toolbar-item3"]').should('not.be.visible');

    // open
    cy.get(`[tooltip="Show more"]`).click().as('Open Overflow Popover');

    cy.findByText('Item1').should('be.visible');
    cy.get('[data-testid="toolbar-item2"]').should('be.visible');
    cy.get('[data-testid="toolbar-item3"]').should('be.visible');

    cy.viewport(500, 500);

    // fuzzy - remount component instead
    // cy.get(`[tooltip="Show more"]`).click().as('Close Overflow Popover');
    cy.mount(<OverflowTestComponent onOverflowChange={onOverflowChange} />);
    cy.get('[ui5-popover]').should('not.have.attr', 'open');

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

  it('Toolbar click', () => {
    const click = cy.spy().as('onClickSpy');
    cy.mount(
      <Toolbar active data-testid="tb" onClick={click}>
        Text
      </Toolbar>
    );
    cy.findByTestId('tb').click();
    cy.get('@onClickSpy').should('have.been.calledOnce');

    cy.findByTestId('tb').type('{enter}');
    cy.get('@onClickSpy').should('have.been.calledTwice');

    cy.findByTestId('tb').type(' ');
    cy.get('@onClickSpy').should('have.been.calledThrice');

    cy.mount(
      <Toolbar data-testid="tb" onClick={click}>
        Text
      </Toolbar>
    );

    cy.findByTestId('tb').click();
    cy.get('@onClickSpy').should('have.been.calledThrice');

    cy.findByTestId('tb').type('{enter}');
    cy.get('@onClickSpy').should('have.been.calledThrice');

    cy.findByTestId('tb').type(' ');
    cy.get('@onClickSpy').should('have.been.calledThrice');
  });

  it('Toolbar active use outline or shadow', () => {
    cy.mount(
      <Toolbar active data-testid="tb">
        Text
      </Toolbar>
    );

    cy.findByTestId('tb').should('have.css', 'outlineStyle', 'none');
    cy.findByTestId('tb').should('have.css', 'boxShadow', 'none');

    cy.findByTestId('tb').click();
    cy.findByTestId('tb').should('have.css', 'outlineStyle', 'dotted');
    cy.findByTestId('tb').should('have.css', 'boxShadow', 'none');

    cy.wait(500).then(() => {
      cy.findByTestId('tb').blur();
      setTheme('sap_horizon');
    });

    cy.findByTestId('tb').should('have.css', 'outlineStyle', 'none');
    cy.findByTestId('tb').should('have.css', 'boxShadow', 'none');

    cy.findByTestId('tb').focus();
    cy.findByTestId('tb').should('have.css', 'outlineStyle', 'none');
    cy.findByTestId('tb').should('have.css', 'boxShadow', 'rgb(0, 112, 242) 0px 0px 0px 2px inset');
  });
});
