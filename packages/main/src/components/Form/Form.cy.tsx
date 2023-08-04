import { useReducer } from 'react';
import { createPortal } from 'react-dom';
import { InputType } from '../../enums/index.js';
import { Input, Label } from '../../webComponents/index.js';
import { FormGroup } from '../FormGroup';
import { FormItem } from '../FormItem';
import { Form } from './index.js';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

const component = (
  <Form titleText={'Test form'}>
    {false}
    {null}
    {undefined}
    <FormGroup titleText={'Group 1'}>
      <FormItem label={'item 1'}>
        <Input data-testid="formInput" type={InputType.Text} />
      </FormItem>
      <FormItem label={'item 2'}>
        <Input type={InputType.Number} />
      </FormItem>
    </FormGroup>
    <FormGroup titleText={'Group 2'}>
      <FormItem label={'item 3'}>
        <Input data-testid="formInput2" type={InputType.Text} />
      </FormItem>
      <FormItem label={<Label>item 4</Label>}>
        <Input type={InputType.Number} id="test-id" />
      </FormItem>
    </FormGroup>
  </Form>
);

const ConditionRenderingExample = () => {
  const [show, toggle] = useReducer((prev) => !prev, false);
  const [show2, toggle2] = useReducer((prev) => !prev, false);
  const [show3, toggle3] = useReducer((prev) => !prev, false);
  return (
    <>
      <button onClick={toggle}>Toggle Input</button>
      <button onClick={toggle2}>Toggle Group</button>
      <button onClick={toggle3}>Toggle Group2</button>
      <Form>
        <FormItem label="Item 1">
          <Input data-testid="1" />
        </FormItem>
        {show3 && <FormGroup titleText="Empty Group" />}
        {show && (
          <FormItem label="Item 2">
            <Input data-testid="2" />
          </FormItem>
        )}
        {show2 && (
          <FormGroup titleText="Group 1">
            <FormItem label="Item1 Grouped">
              <Input data-testid="g1" />
            </FormItem>
            <FormItem label="Item2 Grouped">
              <Input data-testid="g2" />
            </FormItem>
          </FormGroup>
        )}

        <FormItem label="Item 3">
          <Input data-testid="3" />
        </FormItem>
        <FormItem label="Item 4">
          <Input data-testid="4" />
        </FormItem>
      </Form>
    </>
  );
};

describe('Form', () => {
  it('size S - labels and fields should cover full width', () => {
    cy.viewport(393, 852); // iPhone 14 Pro
    cy.mount(component);
    cy.findByText('item 1:').should('have.css', 'grid-column', '1 / span 12');
    cy.findByTestId('formInput').parent().should('have.css', 'grid-column', '1 / span 12');
  });

  it('size M - label should cover 2/12, field 10/12', () => {
    cy.viewport(834, 1194); // iPad Pro
    cy.mount(component);
    cy.findByText('item 1:').should('have.css', 'grid-column', '1 / span 2');
    cy.findByTestId('formInput').parent().should('have.css', 'grid-column', '3 / span 10');
  });

  it('size L - label should cover 1/3, field 2/3', () => {
    cy.viewport(1280, 1024);
    cy.mount(component);
    cy.findByText('item 1:').should('have.css', 'grid-column', '1 / span 4');
    cy.findByTestId('formInput').parent().should('have.css', 'grid-column', '5 / span 8');
  });

  it('size XL - render two columns with 1/3 and 2/3 each', () => {
    cy.viewport(1920, 1080);
    cy.mount(component);
    cy.findByText('item 1:').should('have.css', 'grid-column', '1 / span 4');
    cy.findByText('item 3:').should('have.css', 'grid-column', '13 / span 4');
    cy.findByTestId('formInput').parent().should('have.css', 'grid-column', '5 / span 8');
    cy.findByTestId('formInput2').parent().should('have.css', 'grid-column', '17 / span 8');
  });

  it('change tag name', () => {
    cy.mount(
      <Form as={'div'} data-testid={'form'}>
        <FormItem>
          <Input type={InputType.Text} />
        </FormItem>
      </Form>
    );
    cy.findByTestId('form').should('have.prop', 'nodeName', 'DIV');
  });

  it('a11y labels', () => {
    cy.mount(component);
    for (let i = 1; i <= 3; i++) {
      cy.findByText(`item ${i}`).should('exist').should('not.be.visible');
      cy.findByText(`item ${i}:`).should('be.visible');
    }
    // custom `Label`
    cy.findAllByText(`item 4`).eq(0).should('be.visible');
    cy.findAllByText(`item 4`).eq(1).should('exist').should('not.be.visible');

    // custom id child of FormItem
    cy.get('#test-id').should('have.length', 1).should('be.visible');
    cy.get('[for="test-id"]').should('have.length', 1).should('not.be.visible');
  });

  it('FilterItem: doesnt crash with portal as child', () => {
    cy.mount(
      <Form as={'div'} data-testid={'form'}>
        <FormItem label="Portal">
          {createPortal(<Input data-testid="notSupported" type={InputType.Text} />, document.body)}
        </FormItem>
      </Form>
    );
    cy.findByText('Portal:').should('be.visible');
    cy.findByTestId('notSupported').should('not.exist');
  });

  it('conditionally render FormItems & FormGroups', () => {
    cy.mount(<ConditionRenderingExample />);
    cy.findByText('Item 2').should('not.exist');

    cy.findByText('Toggle Input').click();
    cy.findByText('Item 2').should('exist');
    cy.findByTestId('2').should('be.visible').as('item2');
    cy.get('@item2').parent().should('have.css', 'grid-column-start', '17').and('have.css', 'grid-row-start', '1');

    cy.findByText('Toggle Group').click();
    cy.findByText('Group 1')
      .should('be.visible')
      .and('have.css', 'grid-column-start', '1')
      .and('have.css', 'grid-row-start', '2');
    cy.findByTestId('g2').should('be.visible').as('g2');
    cy.get('@g2').parent().should('have.css', 'grid-column-start', '5').and('have.css', 'grid-row-start', '4');
    cy.findByTestId('2').should('be.visible').as('item2');
    cy.get('@item2').parent().should('have.css', 'grid-column-start', '17').and('have.css', 'grid-row-start', '1');

    cy.findByText('Toggle Group2').click();
    cy.findByText('Empty Group')
      .should('be.visible')
      .and('have.css', 'grid-column-start', '13')
      .and('have.css', 'grid-row-start', '1');
    cy.findByText('Group 1')
      .should('be.visible')
      .and('have.css', 'grid-column-start', '13')
      .and('have.css', 'grid-row-start', '3');
    cy.findByTestId('g2').should('be.visible').as('g2');
    cy.get('@g2').parent().should('have.css', 'grid-column-start', '17').and('have.css', 'grid-row-start', '5');
    cy.findByTestId('2').should('be.visible').as('item2');
    cy.get('@item2').parent().should('have.css', 'grid-column-start', '5').and('have.css', 'grid-row-start', '4');

    cy.findByText('Toggle Input').click();
    cy.findByText('Empty Group')
      .should('be.visible')
      .and('have.css', 'grid-column-start', '13')
      .and('have.css', 'grid-row-start', '1');
    cy.findByText('Group 1')
      .should('be.visible')
      .and('have.css', 'grid-column-start', '1')
      .and('have.css', 'grid-row-start', '3');
    cy.findByTestId('g2').should('be.visible').as('g2');
    cy.get('@g2').parent().should('have.css', 'grid-column-start', '5').and('have.css', 'grid-row-start', '5');
    cy.findByTestId('2').should('not.exist');
  });

  cypressPassThroughTestsFactory(Form, {
    children: (
      <FormItem label="Item">
        <Input type={InputType.Text} />
      </FormItem>
    )
  });
});
