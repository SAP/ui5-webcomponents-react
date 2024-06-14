import type { Meta, StoryObj } from '@storybook/react';
import InputType from '@ui5/webcomponents/dist/types/InputType.js';
import { useId, useReducer } from 'react';
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
    labelSpan: 'S12 M4 L4 XL4',
    style: { alignItems: 'center' }
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
          <FormItem
            labelContent={<Label style={{ alignSelf: 'start', paddingTop: '0.25rem' }}>Additional Comment</Label>}
          >
            <TextArea
              rows={5}
              placeholder="The styles of the Label of the TextArea FormItem is set to: alignSelf: 'start', paddingTop: '0.25rem'"
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
    return <Input value={value} style={{ width: '100%' }} type={inputType} onInput={onInput} {...rest} />;
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
                  <Input value={zip} type={InputType.Number} style={{ width: '30%' }} onInput={handleInput} data-zip />
                  <Input value={city} style={{ width: '70%' }} onInput={handleInput} data-city />
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

export const FormItemsWithoutGroup: Story = {
  args: {
    headerText: 'Address',
    layout: 'S1 M2 L3 XL4',
    labelSpan: 'S12 M12 L12 XL12',
    children: null
  },
  render(props) {
    return (
      <Form {...props}>
        <FormItem labelContent={<Label>Name</Label>}>
          <Input id="name" />
        </FormItem>

        <FormItem labelContent={<Label>Street/No</Label>}>
          <Input></Input>
        </FormItem>

        <FormItem labelContent={<Label>ZIP Code/City</Label>}>
          <Input />
        </FormItem>

        <FormItem labelContent={<Label>Country</Label>}>
          <Select id="country">
            <Option value="England">England</Option>
            <Option value="Germany">Germany</Option>
            <Option value="USA">USA</Option>
          </Select>
        </FormItem>

        <FormItem labelContent={<Label>Web</Label>}>
          <Input type="URL" />
        </FormItem>

        <FormItem labelContent={<Label>Twitter</Label>}>
          <Input />
        </FormItem>

        <FormItem labelContent={<Label>Email</Label>}>
          <Input type="Email" />
        </FormItem>

        <FormItem labelContent={<Label>Tel.</Label>}>
          <Input type="Tel" />
        </FormItem>

        <FormItem labelContent={<Label>SMS</Label>}>
          <Input type="Tel" />
        </FormItem>
        <FormItem labelContent={<Label>Mobile</Label>}>
          <Input type="Tel" />
        </FormItem>
        <FormItem labelContent={<Label>Pager</Label>}>
          <Input type="Tel" />
        </FormItem>
        <FormItem labelContent={<Label>Fax</Label>}>
          <Input type="Tel" />
        </FormItem>
      </Form>
    );
  }
};

export const CustomLabel: Story = {
  name: 'Custom Label (a11y)',
  render() {
    const uniqueId = useId();
    return (
      <Form
        headerText="Not announced (because of `aria-label` of the `Form`)"
        aria-label="Custom announcement of the form title via aria-label"
      >
        <FormGroup headerText="Default Group Announcement">
          <FormItem labelContent={<Label>Default announcement with custom Label</Label>}>
            <Input />
          </FormItem>
        </FormGroup>
        <FormGroup headerText="Not announced (because of `accessibleName` of the `Input`)">
          <FormItem labelContent={<Label>Not announced (because of `accessibleName` of the `Input`)</Label>}>
            <Input accessibleName="Custom announcement via accessibleName prop" />
          </FormItem>
        </FormGroup>
        <FormGroup headerText="Not announced (because of `accessibleNameRef` of the `Input`)">
          <FormItem labelContent={<Label>Not announced (because of `accessibleNameRef` of the `Input`)</Label>}>
            <Input accessibleNameRef={`${uniqueId}-input1`} />
            <span id={`${uniqueId}-input1`} className="pseudoInvisibleText">
              Custom announcement via accessibleNameRef prop
            </span>
          </FormItem>
        </FormGroup>
        <FormGroup
          headerText="Announced (because of `accessibleNameRef` of the `Input` and linking id)"
          id={`${uniqueId}-group`}
        >
          <FormItem labelContent={<Label>Not announced (because of `accessibleNameRef` of the `Input`)</Label>}>
            <Input accessibleNameRef={`${uniqueId}-group ${uniqueId}-input2`} />
            <span id={`${uniqueId}-input2`} className="pseudoInvisibleText">
              Custom announcement via accessibleNameRef prop
            </span>
          </FormItem>
        </FormGroup>
      </Form>
    );
  }
};
