import { render } from '@shared/tests';
import { createPassThroughPropsTest } from '@shared/tests/utils';
import { Form } from '@ui5/webcomponents-react/lib/Form';
import { FormGroup } from '@ui5/webcomponents-react/lib/FormGroup';
import { FormItem } from '@ui5/webcomponents-react/lib/FormItem';
import { Input } from '@ui5/webcomponents-react/lib/Input';
import { InputType } from '@ui5/webcomponents-react/lib/InputType';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import * as React from 'react';

const SIZE_S = 200;
const SIZE_M = 800;
const SIZE_L = 1200;
const SIZE_XL = 1600;
const component = (
  <Form title={'Test form'}>
    <FormGroup title={'Group 1'}>
      <FormItem label={'item 1'}>
        <Input type={InputType.Text} />
      </FormItem>
      <FormItem label={'item 2'}>
        <Input type={InputType.Number} />
      </FormItem>
    </FormGroup>
    <FormGroup title={'Group 2'}>
      <FormItem label={'item 1'}>
        <Input type={InputType.Text} />
      </FormItem>
      <FormItem label={'item 2'}>
        <Input type={InputType.Number} />
      </FormItem>
    </FormGroup>
  </Form>
);

describe('Create a Form', () => {
  test('size rate S; should create Label and Element with 100% width and display: block for top FormItem div', () => {
    window = Object.assign(window, { innerWidth: SIZE_S });
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });

  test('size rate M; should create Label and Element with 16% and 83% width respectively and display: flex for top FormItem div', () => {
    window = Object.assign(window, { innerWidth: SIZE_M });
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });

  test('size rate L; should create Label and Element with 33% and 66% width respectively and display: flex for top FormItem div', () => {
    window = Object.assign(window, { innerWidth: SIZE_L });
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });

  test('size rate XL; should create Label and Element with 33% and 66% width respectively and display: flex for top FormItem div', () => {
    window = Object.assign(window, { innerWidth: SIZE_XL });
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });

  test("should use a single FormGroup's title as a Form title if one is not set", () => {
    const ungroupedChildren = (
      <Form>
        <FormGroup title={'To be Form title'}>
          <FormItem label={'item 1'}>
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem label={'item 2'}>
            <Input type={InputType.Number} />
          </FormItem>
        </FormGroup>
      </Form>
    );
    const { asFragment } = render(ungroupedChildren);
    expect(asFragment()).toMatchSnapshot();
  });

  createPassThroughPropsTest(Form, {
    children: (
      <FormItem>
        <Input type={InputType.Text} />
      </FormItem>
    )
  });
});
