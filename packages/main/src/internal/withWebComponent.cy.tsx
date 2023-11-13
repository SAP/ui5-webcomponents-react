import {
  setCustomElementsScopingSuffix,
  setCustomElementsScopingRules
} from '@ui5/webcomponents-base/dist/CustomElementsScope.js';
import { useReducer, useState } from 'react';
import { Bar, Button, Switch } from '../webComponents/index.js';

describe('withWebComponent', () => {
  it('Unmount Event Handlers correctly after prop update', () => {
    const custom = cy.spy().as('custom');
    const nativePassedThrough = cy.spy().as('nativePassedThrough');
    const native = cy.spy().as('native');
    const updatedCustom = cy.spy().as('updatedCustom');
    const updatedNative = cy.spy().as('updatedNative');
    const updatedNativePassedThrough = cy.spy().as('updatedNativePassedThrough');

    const TestComp = () => {
      const [currentHandler, updateHandler] = useReducer(
        () => ({
          native: updatedNative,
          nativePassedThrough: updatedNativePassedThrough,
          custom: updatedCustom
        }),
        { native, nativePassedThrough, custom }
      );
      return (
        <>
          <button onClick={updateHandler}>Update handler</button>
          <Switch data-testid="switch" onChange={currentHandler.custom} onClick={currentHandler.native} />
          <Button onClick={currentHandler.nativePassedThrough}>Btn</Button>
        </>
      );
    };
    cy.mount(<TestComp />);

    cy.findByTestId('switch').click();
    cy.findByText('Btn').click();
    cy.get('@custom').should('have.been.calledOnce');
    cy.get('@native').should('have.been.calledOnce');
    cy.get('@nativePassedThrough').should('have.been.calledOnce');
    cy.findByText('Update handler').click();
    cy.findByTestId('switch').click();
    cy.findByText('Btn').click();
    cy.get('@custom').should('have.been.calledOnce');
    cy.get('@native').should('have.been.calledOnce');
    cy.get('@nativePassedThrough').should('have.been.calledOnce');
    cy.get('@updatedCustom').should('have.been.calledOnce');
    cy.get('@updatedNative').should('have.been.calledOnce');
    cy.get('@updatedNativePassedThrough').should('have.been.calledOnce');
  });

  it('Slots accept both Fragment and regular nodes', () => {
    const callbackFooter1 = cy.spy().as('cb1');
    const callbackFooter2 = cy.spy().as('cb2');

    cy.mount(<Bar startContent={<Button onClick={callbackFooter1}>Footer Button 1</Button>}>Middle Content</Bar>);

    cy.findByText('Footer Button 1').click();
    cy.get('@cb1').should('have.been.calledOnce');

    cy.mount(
      <Bar
        startContent={
          <>
            <Button onClick={callbackFooter1}>Footer Button 1</Button>
            <Button onClick={callbackFooter2}>Footer Button 2</Button>
          </>
        }
      >
        Middle Content
      </Bar>
    );
    cy.findByText('Footer Button 1').click();
    cy.get('@cb1').should('have.been.calledTwice');
    cy.findByText('Footer Button 2').click();
    cy.get('@cb2').should('have.been.calledOnce');

    cy.mount(
      <Bar
        startContent={
          <>
            {true}
            not mounted
            {false && <span>not mounted</span>}
            <span>mounted</span>
            <>
              {false && <span>not mounted</span>}
              <span>mounted</span>
              <>
                {false && <span>not mounted</span>}
                <span>mounted</span>
                <>
                  <span>mounted</span>
                </>
              </>
            </>
            <>
              <span>mounted</span>
            </>
            <>{false && <span>not mounted</span>}</>
            <>
              <span>mounted</span>
              {[<span key="0">mounted</span>, <span key="1">mounted</span>]}
            </>
          </>
        }
      />
    );

    cy.findByText('not mounted').should('not.exist');
    cy.findAllByText('mounted').should('have.length', 8).should('be.visible');
  });

  it('correct handling of boolean props', () => {
    const TestComp = () => {
      const [disabled, setDisabled] = useState(undefined);
      return (
        <>
          <button
            onClick={() => {
              setDisabled(false);
            }}
          >
            false
          </button>
          <button
            onClick={() => {
              setDisabled(true);
            }}
          >
            true
          </button>
          <button
            onClick={() => {
              setDisabled(undefined);
            }}
          >
            undefined
          </button>
          <Button disabled={disabled}>Btn</Button>
        </>
      );
    };
    cy.mount(<TestComp />);
    cy.findByText('Btn').should('not.have.attr', 'disabled');
    cy.findByText('true').click();
    cy.findByText('Btn').should('have.attr', 'disabled');
    cy.findByText('false').click();
    cy.findByText('Btn').should('not.have.attr', 'disabled');
    cy.findByText('undefined').click();
    cy.findByText('Btn').should('not.have.attr', 'disabled');
  });

  it('scoping', () => {
    const TestComp = () => {
      setCustomElementsScopingSuffix('ui5-wcr');
      return <Button>Test</Button>;
    };

    const TestComp2 = () => {
      setCustomElementsScopingSuffix('ui5-wcr');
      setCustomElementsScopingRules({ include: [/^ui5-/], exclude: [/^ui5-button/] });
      return <Button>Test</Button>;
    };

    cy.mount(<TestComp />);
    cy.get('ui5-button-ui5-wcr').should('be.visible');
    cy.get('ui5-button').should('not.exist');

    // now exclude the button
    cy.mount(<TestComp2 />);
    cy.get('ui5-button').should('be.visible');
    cy.get('ui5-button-ui5-wcr').should('not.exist');
  });
});
