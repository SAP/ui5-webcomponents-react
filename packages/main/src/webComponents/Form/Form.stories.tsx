import type { Meta, StoryObj } from '@storybook/react';
import InputType from '@ui5/webcomponents/dist/types/InputType.js';
import { useReducer } from 'react';
import { Button, CheckBox, Input, Label, Link, Option, Select, Text, TextArea } from '../../index';
import { FormGroup } from '../FormGroup/index.js';
import { FormItem } from '../FormItem/index.js';
import { Form } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / Form',
  component: Form,
  argTypes: {
    children: { control: { disable: true } }
  },
  args: {
    headerText: 'Test Form',
    layout: 'S1 M1 L2 XL2',
    labelSpan: 'S12 M4 L4 XL4'
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => {
    return (
      <Form {...props}>
        <FormGroup headerText="Personal Data">
          <FormItem labelContent={<Label>Name</Label>}>
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem labelContent={<Label>Address</Label>}>
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem labelContent={<Label>Country</Label>}>
            <Select>
              <Option>Germany</Option>
              <Option>France</Option>
              <Option>Italy</Option>
            </Select>
          </FormItem>
          <FormItem labelContent={<Label>Additional Comment</Label>} className="formAlignLabelStart">
            <TextArea
              rows={5}
              placeholder="The label is aligned to start by setting `<class>::part(label){  align-self: start; }` "
            />
          </FormItem>
          <FormItem labelContent={<Label>Home address</Label>}>
            <CheckBox checked />
          </FormItem>
        </FormGroup>
        <FormGroup headerText="Company Data">
          <FormItem labelContent={<Label>Company Name</Label>}>
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem labelContent={<Label>Company Address</Label>}>
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem labelContent={<Label>Company City</Label>}>
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem labelContent={<Label>Company Country</Label>}>
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem labelContent={<Label>Number of Employees</Label>}>
            <Input type={InputType.Number} value="5000" disabled />
          </FormItem>
          <FormItem labelContent={<Label>Member of Partner Network</Label>}>
            <CheckBox checked />
          </FormItem>
        </FormGroup>
        <FormGroup headerText="Marketing Data">
          <FormItem labelContent={<Label>Email</Label>}>
            <Input type={InputType.Email} />
          </FormItem>
          <FormItem labelContent={<Label>Company Email</Label>}>
            <Input type={InputType.Email} />
          </FormItem>
          <FormItem labelContent={<Label>I want to receive the newsletter</Label>}>
            <CheckBox />
          </FormItem>
        </FormGroup>
      </Form>
    );
  }
};

const StandardField = ({ editMode, value, inputType = InputType.Text, onInput, ...rest }) => {
  if (editMode) {
    return <Input value={value} type={inputType} onInput={onInput} {...rest} />;
  }
  if (inputType === InputType.URL || inputType === InputType.Email) {
    return (
      <Link href={inputType === InputType.Email ? `mailto:${value}` : value} target="_blank" {...rest}>
        {value}
      </Link>
    );
  }
  return <Text {...rest}>{value}</Text>;
};

const reducer = (state, { field, value }) => {
  return { ...state, [field]: value };
};

export const DisplayEditMode: Story = {
  name: 'Display & Edit mode',
  args: { headerText: 'Supplier' },
  render: (args) => {
    const [editMode, toggleEditMode] = useReducer((prev) => !prev, false, undefined);
    const [formState, dispatch] = useReducer(
      reducer,
      {
        name: 'Red Point Stores',
        street: 'Main St 1618',
        zip: 31415,
        city: 'Maintown',
        country: 'Germany',
        web: 'https://www.sap.com',
        mail: 'john.smith@sap.com',
        twitter: '@sap',
        phone: '+49 1234 56789'
      },
      undefined
    );
    const { zip, city, name, street, country, web, mail, twitter, phone } = formState;

    const handleInput = (e) => {
      dispatch({ field: Object.keys(e.target.dataset)[0], value: e.target.value });
    };

    return (
      <>
        <Button onClick={toggleEditMode}>Toggle {editMode ? 'Display-Only Mode' : 'Edit Mode'}</Button>
        <Form
          {...args}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <FormGroup headerText="Address">
            <FormItem labelContent={<Label>Name</Label>}>
              <StandardField editMode={editMode} value={name} onInput={handleInput} data-name />
            </FormItem>
            <FormItem labelContent={<Label>Street</Label>}>
              <StandardField editMode={editMode} value={street} onInput={handleInput} data-street />
            </FormItem>
            <FormItem labelContent={<Label>ZIP Code / City</Label>}>
              {editMode ? (
                <>
                  <Input value={zip} type={InputType.Number} onInput={handleInput} data-zip />
                  <Input value={city} onInput={handleInput} data-city />
                </>
              ) : (
                <Text>{`${zip} ${city}`}</Text>
              )}
            </FormItem>
            <FormItem labelContent={<Label>Country</Label>}>
              <StandardField editMode={editMode} value={country} onInput={handleInput} data-country />
            </FormItem>
            <FormItem labelContent={<Label>Web</Label>}>
              <StandardField editMode={editMode} value={web} inputType={InputType.URL} onInput={handleInput} data-web />
            </FormItem>
          </FormGroup>
          <FormGroup headerText="Contact">
            <FormItem labelContent={<Label>Email</Label>}>
              <StandardField
                editMode={editMode}
                value={mail}
                inputType={InputType.Email}
                onInput={handleInput}
                data-email
              />
            </FormItem>
            <FormItem labelContent={<Label>Twitter</Label>}>
              <StandardField editMode={editMode} value={twitter} onInput={handleInput} data-twitter />
            </FormItem>
            <FormItem labelContent={<Label>Phone</Label>}>
              <StandardField
                editMode={editMode}
                value={phone}
                inputType={InputType.Tel}
                onInput={handleInput}
                data-phone
              />
            </FormItem>
          </FormGroup>
        </Form>
      </>
    );
  }
};
