import { CheckBox } from '@ui5/webcomponents-react/lib/CheckBox';
import { Form } from '@ui5/webcomponents-react/lib/Form';
import { FormGroup } from '@ui5/webcomponents-react/lib/FormGroup';
import { FormItem } from '@ui5/webcomponents-react/lib/FormItem';
import { Input } from '@ui5/webcomponents-react/lib/Input';
import { InputType } from '@ui5/webcomponents-react/lib/InputType';
import { Option } from '@ui5/webcomponents-react/lib/Option';
import { Select } from '@ui5/webcomponents-react/lib/Select';
import React from 'react';

export const defaultStory = () => {
  return (
    <Form title={'Test Form'}>
      <FormGroup title={'Personal Data'}>
        <FormItem label={'Name'}>
          <Input type={InputType.Text} />
        </FormItem>
        <FormItem label={'Address'}>
          <Input type={InputType.Text} />
        </FormItem>
        <FormItem label={'Country'}>
          <Select>
            <Option>Germany</Option>
            <Option>France</Option>
            <Option>Italy</Option>
          </Select>
        </FormItem>
        <FormItem label={'Home address'}>
          <CheckBox checked />
        </FormItem>
      </FormGroup>
      <FormGroup title={'Business Data'}>
        <FormItem label={'Organization'}>
          <Input type={InputType.Text} />
        </FormItem>
        <FormItem label={'Position'}>
          <Input type={InputType.Text} />
        </FormItem>
        <FormItem label={'Wage'}>
          <Input type={InputType.Number} value={'5000'} disabled />
        </FormItem>
        <FormItem label={'Pilot license'}>
          <CheckBox checked />
        </FormItem>
      </FormGroup>
    </Form>
  );
};

export default {
  title: 'Components / Form',
  component: Form,
  parameters: {
    subcomponents: { FormGroup, FormItem }
  }
};
