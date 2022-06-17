import React from 'react';
import {
  ThemeProvider,
  Form,
  FormGroup,
  FormItem,
  Input,
  Option,
  Select,
  CheckBox,
  InputType,
  Button,
  MultiComboBox,
  MultiComboBoxItem,
  DatePicker
} from '@ui5/webcomponents-react';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';

export function CreateAccountForm() {
  const initialValues = {
    email: '',
    password: '',
    country: 'Germany',
    birthday: '',
    payment: [],
    terms: false
  };

  const [values, setValues] = React.useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSelectionChange = (e) => {
    const selected = [];
    Object.entries(e.detail.items).forEach(([key, val]) => {
      selected.push(val.text);
    });
    setValues({
      ...values,
      payment: selected
    });
  };

  const handleSubmit = (e) => {
    alert(JSON.stringify(values, null, 2));
    console.log(values);
  };

  return (
    <ThemeProvider>
      <Form>
        <FormGroup titleText={'Create Account'}>
          <FormItem label={'Email'}>
            <Input name="email" type={InputType.Email} value={values.email} onInput={handleInputChange} />
          </FormItem>
          <FormItem label={'Password'}>
            <Input name="password" type={InputType.Password} value={values.password} onInput={handleInputChange} />
          </FormItem>
          <FormItem label={'Country'}>
            <Select
              name="country"
              value={values.country}
              onChange={(e) =>
                setValues({
                  ...values,
                  country: e.detail.selectedOption.innerText
                })
              }
            >
              <Option>Germany</Option>
              <Option>France</Option>
              <Option>Italy</Option>
            </Select>
          </FormItem>
          <FormItem label={'Date of Birth'}>
            <DatePicker
              value={values.birthday}
              onChange={(e) => {
                setValues({
                  ...values,
                  birthday: e.detail.value
                });
              }}
            ></DatePicker>
          </FormItem>
          <FormItem label={'Payment methods'}>
            <MultiComboBox onSelectionChange={handleSelectionChange}>
              <MultiComboBoxItem text="Credit card" />
              <MultiComboBoxItem text="PayPal" />
              <MultiComboBoxItem text="Bank transfer" />
            </MultiComboBox>
          </FormItem>
          <FormItem label={'I accept the terms of service'}>
            <CheckBox
              required
              name="terms"
              value={values.terms}
              onChange={(e) =>
                setValues({
                  ...values,
                  terms: e.target.checked
                })
              }
            />
          </FormItem>
          <FormItem label={''}>
            <Button onClick={handleSubmit}>Submit</Button>
          </FormItem>
        </FormGroup>
      </Form>
    </ThemeProvider>
  );
}
