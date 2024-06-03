import type { Meta, StoryObj } from '@storybook/react';
import InputType from '@ui5/webcomponents/dist/types/InputType.js';
import { useReducer } from 'react';
import {
  Button,
  CheckBox,
  FormBackgroundDesign,
  FormGroup,
  FormItem,
  Input,
  Label,
  Link,
  Option,
  Select,
  Text,
  TextArea
} from '../../index.js';
import { Form } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / Form',
  component: Form,
  argTypes: {
    children: { control: { disable: true } }
  },
  args: {
    backgroundDesign: FormBackgroundDesign.Transparent,
    titleText: 'Test Form',
    labelSpanS: 12,
    labelSpanM: 2,
    labelSpanL: 4,
    labelSpanXL: 4,
    columnsS: 1,
    columnsM: 1,
    columnsL: 1,
    columnsXL: 2,
    style: { alignItems: 'center' }
  }
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => {
    return (
      <Form {...props}>
        <FormGroup titleText="Personal Data">
          <FormItem label="Name">
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem label={<Label>Address</Label>}>
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem label="Country">
            <Select>
              <Option>Germany</Option>
              <Option>France</Option>
              <Option>Italy</Option>
            </Select>
          </FormItem>
          <FormItem label={<Label style={{ alignSelf: 'start', paddingTop: '0.25rem' }}>Additional Comment</Label>}>
            <TextArea
              rows={5}
              placeholder="The styles of the Label of the TextArea FormItem is set to: alignSelf: 'start', paddingTop: '0.25rem'"
            />
          </FormItem>
          <FormItem label="Home address">
            <CheckBox checked />
          </FormItem>
        </FormGroup>
        <FormGroup titleText="Company Data">
          <FormItem label={'Company Name'}>
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem label="Company Address">
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem label="Company City">
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem label="Company Country">
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem label="Number of Employees">
            <Input type={InputType.Number} value="5000" disabled />
          </FormItem>
          <FormItem label="Member of Partner Network">
            <CheckBox checked />
          </FormItem>
        </FormGroup>
        <FormGroup titleText="Marketing Data">
          <FormItem label="Email">
            <Input type={InputType.Email} />
          </FormItem>
          <FormItem label="Company Email">
            <Input type={InputType.Email} />
          </FormItem>
          <FormItem label="I want to receive the newsletter">
            <CheckBox />
          </FormItem>
        </FormGroup>
      </Form>
    );
  }
};

const CustomComponent = ({ children }) => {
  return <>{children}</>;
};

const CustomComponent2 = () => {
  return (
    <CustomComponent>
      <FormGroup titleText="Group 1 inside custom component2">
        <CustomComponent>
          <FormItem label="FormItem 1 within group">
            <Input />
          </FormItem>
          <FormItem label="FormItem 2 within group">
            <Input />
          </FormItem>
        </CustomComponent>
      </FormGroup>
      <FormGroup titleText="Group 2 inside custom component2">
        <FormItem label="FormItem 1 within group">
          <Input />
        </FormItem>
        <FormItem label="FormItem 2 within group">
          <Input />
        </FormItem>
      </FormGroup>
    </CustomComponent>
  );
};

export const FormWithCustomComponents: Story = {
  render: (args) => {
    return (
      <Form {...args}>
        <FormItem label="Standalone FormItem">
          <Input />
        </FormItem>
        <FormGroup titleText="Standalone FormGroup">
          <FormItem label="Standalone FormItem within group">
            <Input />
          </FormItem>
          <FormItem label="Standalone FormItem within group">
            <Input />
          </FormItem>
        </FormGroup>
        <FormItem label="Standalone FormItem">
          <Input />
        </FormItem>
        <CustomComponent>
          <FormItem label="FormItem within custom component">
            <Input />
          </FormItem>
        </CustomComponent>
        <FormGroup titleText="Standalone FormGroup with custom component">
          <CustomComponent>
            <FormItem label="FormItem 1 within custom component">
              <Input />
            </FormItem>
            <FormItem label="FormItem 2 within custom component">
              <Input />
            </FormItem>
          </CustomComponent>
        </FormGroup>
        <CustomComponent>
          <FormGroup titleText="FormGroup within custom component">
            <FormItem label="FormItem 1 within group">
              <Input />
            </FormItem>
            <FormItem label="FormItem 2 within group">
              <Input />
            </FormItem>
          </FormGroup>
        </CustomComponent>
        <CustomComponent>
          <FormGroup titleText="Group 1 inside custom component">
            <CustomComponent>
              <FormItem label="FormItem 1 within group">
                <Input />
              </FormItem>
              <FormItem label="FormItem 2 within group">
                <Input />
              </FormItem>
            </CustomComponent>
          </FormGroup>
          <FormGroup titleText="Group 2 inside custom component">
            <FormItem label="FormItem 1 within group">
              <Input />
            </FormItem>
            <FormItem label="FormItem 2 within group">
              <Input />
            </FormItem>
          </FormGroup>
        </CustomComponent>
        <CustomComponent2 />
      </Form>
    );
  }
};

const StandardField = ({ editMode, value, inputType = InputType.None, onInput, ...rest }) => {
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
  args: { titleText: 'Supplier' },
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
          <FormGroup titleText="Address">
            <FormItem label="Name">
              <StandardField editMode={editMode} value={name} onInput={handleInput} data-name />
            </FormItem>
            <FormItem label="Street">
              <StandardField editMode={editMode} value={street} onInput={handleInput} data-street />
            </FormItem>
            <FormItem label="ZIP Code / City">
              {editMode ? (
                <>
                  <Input value={zip} type={InputType.Number} style={{ width: '30%' }} onInput={handleInput} data-zip />
                  <Input value={city} style={{ width: '70%' }} onInput={handleInput} data-city />
                </>
              ) : (
                <Text>{`${zip} ${city}`}</Text>
              )}
            </FormItem>
            <FormItem label="Country">
              <StandardField editMode={editMode} value={country} onInput={handleInput} data-country />
            </FormItem>
            <FormItem label="Web">
              <StandardField editMode={editMode} value={web} inputType={InputType.URL} onInput={handleInput} data-web />
            </FormItem>
          </FormGroup>
          <FormGroup titleText="Contact">
            <FormItem label="Email">
              <StandardField
                editMode={editMode}
                value={mail}
                inputType={InputType.Email}
                onInput={handleInput}
                data-email
              />
            </FormItem>
            <FormItem label="Twitter">
              <StandardField editMode={editMode} value={twitter} onInput={handleInput} data-twitter />
            </FormItem>
            <FormItem label="Phone">
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

export const FormWithOneGroup: Story = {
  args: {
    titleText: 'Address',
    columnsM: 2,
    columnsL: 3,
    columnsXL: 4,
    labelSpanS: 12,
    labelSpanM: 12,
    labelSpanL: 12,
    labelSpanXL: 12,
    children: null
  },
  render(props) {
    return (
      <Form {...props}>
        <FormItem label="Name">
          <Input id="name" />
        </FormItem>

        <FormItem label="Street/No">
          <Input></Input>
        </FormItem>

        <FormItem label="ZIP Code/City">
          <Input />
        </FormItem>

        <FormItem label="Country">
          <Select id="country">
            <Option value="England">England</Option>
            <Option value="Germany">Germany</Option>
            <Option value="USA">USA</Option>
          </Select>
        </FormItem>

        <FormItem label="Web">
          <Input type="URL" />
        </FormItem>

        <FormItem label="Twitter">
          <Input />
        </FormItem>

        <FormItem label="Email">
          <Input type="Email" />
        </FormItem>

        <FormItem label="Tel.">
          <Input type="Tel" />
        </FormItem>

        <FormItem label="SMS">
          <Input type="Tel" />
        </FormItem>
        <FormItem label="Mobile">
          <Input type="Tel" />
        </FormItem>
        <FormItem label="Pager">
          <Input type="Tel" />
        </FormItem>
        <FormItem label="Fax">
          <Input type="Tel" />
        </FormItem>
      </Form>
    );
  }
};
