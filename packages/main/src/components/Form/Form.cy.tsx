import { InputType } from '../../enums/InputType';
import { Input } from '../../webComponents';
import { FormGroup } from '../FormGroup';
import { FormItem } from '../FormItem';
import { Form } from './index';

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
      <FormItem label={'item 4'}>
        <Input type={InputType.Number} />
      </FormItem>
    </FormGroup>
  </Form>
);

describe('Form', () => {
  it('size S - labels and fields should cover full width', () => {
    cy.viewport(393, 852); // iPhone 14 Pro
    cy.mount(component);
    cy.findByText('item 1:').should('have.css', 'grid-column', '1 / span 12');
    cy.findByTestId('formInput').parent().should('have.css', 'grid-column', 'auto / span 12');
  });

  it('size M - label should cover 2/12, field 10/12', () => {
    cy.viewport(834, 1194); // iPad Pro
    cy.mount(component);
    cy.findByText('item 1:').should('have.css', 'grid-column', '1 / span 2');
    cy.findByTestId('formInput').parent().should('have.css', 'grid-column', 'auto / span 10');
  });

  it('size L - label should cover 1/3, field 2/3', () => {
    cy.viewport(1280, 1024);
    cy.mount(component);
    cy.findByText('item 1:').should('have.css', 'grid-column', '1 / span 4');
    cy.findByTestId('formInput').parent().should('have.css', 'grid-column', 'auto / span 8');
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

  // todo pass through props test
});
