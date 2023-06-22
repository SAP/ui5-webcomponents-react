import type { Meta, StoryObj } from '@storybook/react';
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
import TestComp from './TestComp';

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

export const Test: Story = { render: (args) => <TestComp {...args} /> };

export const Default: Story = {
  render: (props) => {
    return (
      <Form {...props} columnsS={11}>
        <FormItem label="Sole Form Item">
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
          <FormItem
            style={{ alignSelf: 'start' }}
            label={<Label style={{ alignSelf: 'start', paddingTop: '0.25rem' }}>Additional Comment</Label>}
          >
            <TextArea
              rows={5}
              style={{ width: '210px', '--_ui5_textarea_margin': 0 }}
              placeholder="The styles of the Label of the TextArea FormItem is set to: alignSelf: 'start', paddingTop: '0.25rem'"
            />
          </FormItem>
          <FormItem label="Home address">
            <CheckBox checked />
          </FormItem>
        </FormGroup>
        <FormItem label="Sole Form Item">
          <Input type={InputType.Text} />
        </FormItem>
        <FormItem label="Sole Form Item">
          <Input type={InputType.Text} />
        </FormItem>
        <FormGroup titleText="Empty" />
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
