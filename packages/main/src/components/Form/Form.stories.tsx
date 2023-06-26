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

const FormComponent = (props) => {
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

export const Test = {
  render: (args) => {
    return (
      <Form
        titleText="Test"
        columnsXL={5}
        columnsL={4}
        columnsM={1}
        columnsS={args.columnsS}
        labelSpanS={args.labelSpanS}
        labelSpanM={11}
        labelSpanL={12}
      >
        <FormItem id="Item01" label="Single 1">
          <Input />
        </FormItem>
        <FormGroup id={'Item02'} titleText="Empty Group" />
        <CustomComponent id="Custom1">
          <FormItem id="CustomFormItem1" label="Single in Custom">
            <Input />
          </FormItem>
        </CustomComponent>
        <CustomComponent id="Custom1">
          <FormGroup titleText="Group in Custom">
            <FormItem id="CustomFormItem1" label="Group in Custom - Item">
              <Input />
            </FormItem>
          </FormGroup>
        </CustomComponent>
        <CustomComponent>
          <FormGroup id={'Item03'} titleText="CEmpty2" />
          <FormItem id={'Item2'} /> {/*" Correct map order test - Id shouldn't matter map.forEach => ordered map " */}
          <FormGroup id={'Group1'} titleText="CEmpty3" /> {/*""No FormItem test "*/}
          <FormItem id={'Item1'} /> {/*"" No FormGroup test "*/}
          <FormGroup id={'Group2'} titleText="CGroup">
            {/*""With FormItems test"*/}
            <CustomComponent id="Custom2">
              {/*" Wrapped FormItems "*/}
              <FormItem id={'Item3'} label="CEmptyItem" />
              <FormItem id={'Item4'} label="CEmptyItem" />
              <CustomComponent id="Custom3">
                {/*""Deep wrapped FormItem "*/}
                <FormItem id={'Item5'} label="CEmptyItem" />
              </CustomComponent>
            </CustomComponent>
          </FormGroup>
        </CustomComponent>
        <FormItem id="Item01" label="Single 2">
          <Input />
        </FormItem>
        <FormGroup id={'Item04'} titleText="Group 1">
          <FormItem id="Item01" label="G1Hello there">
            <Input />
          </FormItem>
          <FormItem id="Item01" label="G1Hello there">
            <Input />
          </FormItem>
          <FormItem id="Item01" label="G1Hello there">
            <Input />
          </FormItem>
        </FormGroup>
        <FormItem id="Item01" label="Single 3">
          <Input />
        </FormItem>
        <FormGroup id={'Item04'} titleText="Group 2">
          <FormItem id="Item01" label="G2Hello there">
            <Input />
          </FormItem>
          <FormItem id="Item01" label="G2Hello there">
            <Input />
          </FormItem>
          <FormItem id="Item01" label="G2Hello there">
            <Input />
          </FormItem>
        </FormGroup>
        <FormItem id="Item01" label="Single 4">
          <Input />
        </FormItem>
      </Form>
    );
  }
};
