import { render } from '@shared/tests';
import { createChangeTagNameTest, createCustomPropsTest } from '@shared/tests/utils';
import * as React from 'react';
import { InputType } from '../../enums/InputType';
import { Input } from '../../webComponents/Input';
import { FormGroup } from '../FormGroup';
import { FormItem } from '../FormItem';
import { Form } from './index';

const SIZE_S = 200;
const SIZE_M = 800;
const SIZE_L = 1200;
const SIZE_XL = 1600;
const component = (
  <Form titleText={'Test form'}>
    {false}
    {null}
    {undefined}
    <FormGroup titleText={'Group 1'}>
      <FormItem label={'item 1'}>
        <Input type={InputType.Text} />
      </FormItem>
      <FormItem label={'item 2'}>
        <Input type={InputType.Number} />
      </FormItem>
    </FormGroup>
    <FormGroup titleText={'Group 2'}>
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

  test("should use a single FormGroup's heading as a Form heading if one is not set", () => {
    const ungroupedChildren = (
      <Form>
        <FormGroup titleText={'To be Form title'}>
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

  createChangeTagNameTest(Form);

  createCustomPropsTest(Form, {
    children: (
      <FormItem>
        <Input type={InputType.Text} />
      </FormItem>
    )
  });
});
