import { mountThemedComponent } from '@shared/tests/utils';
import * as React from 'react';
//import {Form, FormGroup, FormItem} from '@ui5/webcomponents-react/lib/Form';
import { Form, FormGroup, FormItem } from '../Form';
import { Input } from '../../webComponents/Input';
import { InputType } from '../..';

const SIZE_S = 200;
const SIZE_M = 800;
const SIZE_L = 1200;
const SIZE_XL = 1600;
const component = (
  <Form title={'Test form'}>
    <FormGroup title={'Group 1'}>
      <FormItem labelText={'item 1'}>
        <Input type={InputType.Text}></Input>
      </FormItem>
      <FormItem labelText={'item 2'}>
        <Input type={InputType.Number}></Input>
      </FormItem>
    </FormGroup>
    <FormGroup title={'Group 2'}>
      <FormItem labelText={'item 1'}>
        <Input type={InputType.Text}></Input>
      </FormItem>
      <FormItem labelText={'item 2'}>
        <Input type={InputType.Number}></Input>
      </FormItem>
    </FormGroup>
  </Form>
);

describe('Create a Form', () => {
  test('size rate S; should create Label and Element with 100% width and display: block for top FormItem div', () => {
    window = Object.assign(window, { innerWidth: SIZE_S });
    const wrapper = mountThemedComponent(component);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('size rate M; should create Label and Element with 16% and 83% width respectively and display: flex for top FormItem div', () => {
    window = Object.assign(window, { innerWidth: SIZE_M });
    const wrapper = mountThemedComponent(component);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('size rate L; should create Label and Element with 33% and 66% width respectively and display: flex for top FormItem div', () => {
    window = Object.assign(window, { innerWidth: SIZE_L });
    const wrapper = mountThemedComponent(component);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('size rate XL; should create Label and Element with 33% and 66% width respectively and display: flex for top FormItem div', () => {
    window = Object.assign(window, { innerWidth: SIZE_XL });
    const wrapper = mountThemedComponent(component);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
