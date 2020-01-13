import { Form } from './index';
import React from 'react';
import notes from './Form.md';
import { FormItem } from './FormItem';
import { FormGroup } from './FormGroup';
import { CheckBox } from '@ui5/webcomponents-react/lib/CheckBox';
import { Input } from '@ui5/webcomponents-react/lib/Input';
import { InputType } from '@ui5/webcomponents-react/lib/InputType';
import { Option } from '@ui5/webcomponents-react/lib/Option';
import { Select } from '@ui5/webcomponents-react/lib/Select';

export const defaultStory = () => {
  return (
    <Form title={'Test Form'}>
      <FormGroup title={'Personal Data'}>
        <FormItem labelText={'Name'}>
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
          <CheckBox checked />
        </FormItem>
      </FormGroup>
      <FormGroup title={'Business Data'}>
        <FormItem labelText={'Organization'}>
          <Input type={InputType.Text} />
        </FormItem>
        <FormItem labelText={'Position'}>
          <Input type={InputType.Text} />
        </FormItem>
        <FormItem labelText={'Wage'}>
          <Input type={InputType.Number} value={'5000'} disabled />
        </FormItem>
        <FormItem labelText={'Pilot license'}>
          <CheckBox checked />
        </FormItem>
      </FormGroup>
    </Form>
  );
};

export default {
  title: 'Components / Form',
  component: Form,
  parameters: { notes }
};
