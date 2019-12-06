import { Form } from './index';
import React from 'react';
import notes from './Form.md';
import { FormItem } from './FormItem';
import { FormGroup } from './FormGroup';
import { CheckBox, Input, InputType, Select, Option } from '../..';

export const defaultStory = () => {
  return (
    <Form title={'Test Form'}>
      <FormGroup title={'Personal Data'}>
        <FormItem labelText={'Name'} id={'name'}>
          <Input type={InputType.Text} />
        </FormItem>
        <FormItem labelText={'Address'}>
          <Input type={InputType.Text} />
        </FormItem>
        <FormItem labelText={'Country'}>
          <Select>
            <Option>Germany</Option>
            <Option>France</Option>
            <Option>Italy</Option>
          </Select>
        </FormItem>
        <FormItem labelText={'Home address'}>
          <CheckBox checked={true} />
        </FormItem>
      </FormGroup>
      <FormGroup title={'Business Data'}>
        <FormItem labelText={'Organization'} id={'name'}>
          <Input type={InputType.Text} />
        </FormItem>
        <FormItem labelText={'Position'}>
          <Input type={InputType.Text} />
        </FormItem>
        <FormItem labelText={'Wage'}>
          <Input type={InputType.Number} value={'5000'} disabled={true} />
        </FormItem>
        <FormItem labelText={'Pilot license'}>
          <CheckBox checked={true} />
        </FormItem>
      </FormGroup>
    </Form>
  );
};

export default {
  title: 'Components | Form',
  component: Form,
  parameters: { notes }
};
