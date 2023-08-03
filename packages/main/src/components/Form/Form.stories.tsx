import type { Meta, StoryObj } from '@storybook/react';
import { useReducer, useState } from 'react';
import {
  CheckBox,
  FormBackgroundDesign,
  FormGroup,
  FormItem,
  Input,
  InputType,
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

export const Test = {
  render: () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useReducer((prev) => !prev, false);
    const [show3, setShow3] = useReducer((prev) => !prev, false);
    const [toggle, setToggle] = useReducer((prev) => !prev, false);
    const [toggle2, setToggle2] = useReducer((prev) => !prev, false);
    const [toggle3, setToggle3] = useReducer((prev) => !prev, false);
    const childrenA = (
      <>
        <FormItem label={toggle2 ? 'laksjdklasjd' : 'hello'}>
          <Input placeholder={toggle3 ? 'Hello' : ''} />
        </FormItem>
        {show && (
          <FormItem label="Test2">
            <Input />
          </FormItem>
        )}
        {show2 && (
          <FormGroup titleText={'Group1'}>
            <FormItem label="Test1 Grouped">
              <Input />
            </FormItem>
            <FormItem label="Test1 Grouped">
              <Input />
            </FormItem>
          </FormGroup>
        )}
        <FormItem label="Test3">
          <Input />
        </FormItem>
        <FormItem label="Test4">
          <Input />
        </FormItem>
      </>
    );
    const childrenB = (
      <>
        <FormItem label={toggle2 ? 'laksjdklasjd' : 'hello'}>
          <Input placeholder={toggle3 ? 'Hello' : ''} />
        </FormItem>
        {show && (
          <FormItem label="Test2">
            <Input />
          </FormItem>
        )}
        {show2 && (
          <FormGroup titleText={'Group1'}>
            <FormItem label="Test1 Grouped">
              <Input />
            </FormItem>
            {show && (
              <FormItem label="Test2 Grouped">
                <Input />
              </FormItem>
            )}
          </FormGroup>
        )}
        {show3 && (
          <FormGroup titleText={'Empty Group'}>
            <FormItem label="Test1 Grouped">
              <Input />
            </FormItem>
          </FormGroup>
        )}
        <FormItem label="Test3">
          <Input />
        </FormItem>
        <FormItem label="Test4">
          <Input />
        </FormItem>
      </>
    );
    return (
      <>
        <button onClick={setToggle}>toggle</button>
        <button onClick={setToggle2}>toggle2</button>
        <button onClick={setToggle3}>toggle3</button>
        <button onClick={() => setShow((state) => !state)}>Show/Add Input</button>
        <button onClick={setShow2}>Show/Add Group</button>
        <button onClick={setShow3}>Show/Add Group2</button>
        <Form>{toggle ? childrenA : childrenB}</Form>
      </>
    );
  }
};

export const Default: Story = {
  render: (props) => {
    return (
      <Form {...props}>
        <FormItem>
          <Input type={InputType.Text} />
        </FormItem>
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
        <FormGroup titleText="Contact">
          <FormItem label="Website">
            <Link href={'https://sap.github.io/ui5-webcomponents-react'}>
              https://sap.github.io/ui5-webcomponents-react
            </Link>
          </FormItem>
          <FormItem label="Email">
            <Link>some.one@sap.com</Link>
          </FormItem>
          <FormItem label="Slack">
            <Link href={'https://openui5.slack.com/archives/CSQEJ2J04'}>#webcomponents-react</Link>
          </FormItem>
          <FormItem label="Company">
            <Text>SAP</Text>
          </FormItem>
          <FormItem label="Company Headquarter">
            <Text>Walldorf, Germany</Text>
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
