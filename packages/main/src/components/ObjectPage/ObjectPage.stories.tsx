import '@ui5/webcomponents-fiori/dist/illustrations/UnableToLoad.js';
import SampleImage from '@sb/demoImages/Person.png';
import type { Meta, StoryObj } from '@storybook/react';
import BarDesign from '@ui5/webcomponents/dist/types/BarDesign.js';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import sunIcon from '@ui5/webcomponents-icons/dist/general-leave-request.js';
import {
  Bar,
  Breadcrumbs,
  BreadcrumbsItem,
  Button,
  DynamicPageHeader,
  DynamicPageTitle,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxWrap,
  Form,
  FormGroup,
  FormItem,
  Icon,
  IllustratedMessage,
  IllustrationMessageType,
  Label,
  Link,
  MessageStrip,
  ObjectPageMode,
  ObjectPageSection,
  ObjectPageSubSection,
  ObjectStatus,
  Text,
  Title,
  ToggleButton,
  ValueState
} from '../..';
import { ObjectPage } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / ObjectPage',
  component: ObjectPage,
  argTypes: {
    headerTitle: { control: { disable: true } },
    headerContent: { control: { disable: true } },
    footer: { control: { disable: true } },
    children: { control: { disable: true } },
    placeholder: { control: { disable: true } },
    a11yConfig: { table: { category: 'A11y props' } }
  },
  args: {
    mode: ObjectPageMode.Default,
    showHideHeaderButton: true,
    selectedSectionId: 'goals',
    headerContentPinnable: true,
    imageShapeCircle: true,
    image: SampleImage,
    style: { height: '700px' },
    footer: (
      <Bar
        design={BarDesign.FloatingFooter}
        endContent={
          <>
            <Button design={ButtonDesign.Positive}>Accept</Button>
            <Button design={ButtonDesign.Negative}>Reject</Button>
          </>
        }
      />
    ),
    headerTitle: (
      <DynamicPageTitle
        showSubHeaderRight
        header="Denise Smith"
        subHeader="Senior UI Developer"
        actions={
          <>
            <Button key="1" design={ButtonDesign.Emphasized}>
              Primary Action
            </Button>
            <Button key="2">Action</Button>
          </>
        }
        breadcrumbs={
          <Breadcrumbs>
            <BreadcrumbsItem>Manager Cockpit</BreadcrumbsItem>
            <BreadcrumbsItem>My Team</BreadcrumbsItem>
            <BreadcrumbsItem>Employee Details</BreadcrumbsItem>
          </Breadcrumbs>
        }
        expandedContent={<MessageStrip>Information (only visible if header content is expanded)</MessageStrip>}
        snappedContent={<MessageStrip>Information (only visible if header content is collapsed/snapped)</MessageStrip>}
      >
        <ObjectStatus state={ValueState.Positive}>employed</ObjectStatus>
      </DynamicPageTitle>
    ),
    headerContent: (
      <DynamicPageHeader>
        <FlexBox wrap={FlexBoxWrap.Wrap} alignItems={FlexBoxAlignItems.Center}>
          <FlexBox direction={FlexBoxDirection.Column}>
            <Link>+33 6 4512 5158</Link>
            <Link href="mailto:ui5-webcomponents-react@sap.com">DeniseSmith@sap.com</Link>
            <Link href="https://github.com/SAP/ui5-webcomponents-react">
              https://github.com/SAP/ui5-webcomponents-react
            </Link>
          </FlexBox>
          <FlexBox direction={FlexBoxDirection.Column} style={{ padding: '10px' }}>
            <Label>San Jose</Label>
            <Label>California, USA</Label>
          </FlexBox>
        </FlexBox>
      </DynamicPageHeader>
    )
  }
} satisfies Meta<typeof ObjectPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    return (
      <ObjectPage {...args}>
        <ObjectPageSection titleText="Goals" id="goals" aria-label="Goals">
          <Form
            columnsL={3}
            columnsXL={3}
            labelSpanXL={6}
            labelSpanL={6}
            columnsM={2}
            labelSpanM={6}
            style={{ alignItems: 'baseline' }}
          >
            <FormItem label="Evangelize the UI framework across the company">
              <Text>4 days overdue - Cascaded</Text>
            </FormItem>
            <FormItem label="Get trained in development management direction">
              <Text>Due Nov, 21</Text>
            </FormItem>
            <FormItem label="Mentor junior developers">
              <Text>Due Dec, 31 - Cascaded</Text>
            </FormItem>
          </Form>
        </ObjectPageSection>
        <ObjectPageSection titleText="Personal" id="personal" aria-label="Personal">
          <ObjectPageSubSection
            titleText="Connect"
            id="personal-connect"
            aria-label="Connect"
            actions={
              <>
                <Button design={ButtonDesign.Emphasized} style={{ minWidth: '120px' }}>
                  Custom Action
                </Button>
                <Button design={ButtonDesign.Transparent} icon="action-settings" tooltip="settings" />
                <Button design={ButtonDesign.Transparent} icon="download" tooltip="download" />
              </>
            }
          >
            <Form columnsXL={4} columnsL={4} style={{ alignItems: 'baseline' }}>
              <FormGroup titleText="Phone Numbers">
                <FormItem label="Home">
                  <Text>+1 234-567-8901</Text>
                </FormItem>
                <FormItem label="">
                  <Text>+1 234-567-5555</Text>
                </FormItem>
              </FormGroup>
              <FormGroup titleText="Social Accounts">
                <FormItem label="LinkedIn">
                  <Text>/DeniseSmith</Text>
                </FormItem>
                <FormItem label="Twitter">
                  <Text>@DeniseSmith</Text>
                </FormItem>
              </FormGroup>
              <FormGroup titleText="Addresses">
                <FormItem label="Home Address">
                  <Text>2096 Mission Street</Text>
                </FormItem>
                <FormItem label="Mailing Address">
                  <Text>PO Box 32114</Text>
                </FormItem>
              </FormGroup>
              <FormGroup titleText="Mailing Address">
                <FormItem label="Work">
                  <Text>DeniseSmith@sap.com</Text>
                </FormItem>
              </FormGroup>
            </Form>
          </ObjectPageSubSection>
          <ObjectPageSubSection
            titleText="Payment Information"
            id="personal-payment-information"
            aria-label="Payment Information"
          >
            <Form columnsXL={4} columnsL={4} style={{ alignItems: 'baseline' }}>
              <FormGroup titleText="Salary">
                <FormItem label="Bank Transfer">
                  <Text>Money Bank, Inc.</Text>
                </FormItem>
              </FormGroup>
              <FormGroup titleText="Payment method for Expenses">
                <FormItem label="Extra Travel Expenses">
                  <Text>Cash 100 USD</Text>
                </FormItem>
              </FormGroup>
            </Form>
          </ObjectPageSubSection>
        </ObjectPageSection>
        <ObjectPageSection titleText="Employment" id="employment" aria-label="Employment">
          <ObjectPageSubSection
            titleText="Job Information"
            id="employment-job-information"
            aria-label="Job Information"
          >
            <Form columnsXL={4} columnsL={4} style={{ alignItems: 'baseline' }}>
              <FormItem label="Job Classification">
                <FlexBox direction={FlexBoxDirection.Column}>
                  <Text>Senior UI Developer</Text>
                  <Label>(UIDEV-SR)</Label>
                </FlexBox>
              </FormItem>
              <FormItem label="Job Title">
                <Text>Developer</Text>
              </FormItem>
              <FormItem label="Employee Class">
                <Text>Employee</Text>
              </FormItem>
              <FormItem label="Manager">
                <FlexBox direction={FlexBoxDirection.Column}>
                  <Text>Dan Smith</Text>
                  <Label>Development Manager</Label>
                </FlexBox>
              </FormItem>
              <FormItem label="Pay Grade">
                <Text>Salary Grade 18 (GR-14)</Text>
              </FormItem>
              <FormItem label="FTE">
                <Text>1</Text>
              </FormItem>
            </Form>
          </ObjectPageSubSection>
          <ObjectPageSubSection
            titleText="Employee Details"
            id="employment-employee-details"
            aria-label="Employee Details"
          >
            <Form columnsXL={4} columnsL={4} style={{ alignItems: 'baseline' }}>
              <FormItem label="Start Date">
                <Text>Jan 01, 2018</Text>
              </FormItem>
              <FormItem label="End Date">
                <Text>Dec 31, 9999</Text>
              </FormItem>
              <FormItem label="Payroll Start Date">
                <Text>Jan 01, 2018</Text>
              </FormItem>
              <FormItem label="Benefits Start Date">
                <Text>Jul 01, 2018</Text>
              </FormItem>
              <FormItem label="Company Car Eligibility">
                <Text>Jan 01, 2021</Text>
              </FormItem>
              <FormItem label="Equity Start Date">
                <Text>Jul 01, 2018</Text>
              </FormItem>
            </Form>
          </ObjectPageSubSection>
          <ObjectPageSubSection
            titleText="Job Relationship"
            id="employment-job-relationship"
            aria-label="Job Relationship"
          >
            <Form columnsXL={4} columnsL={4} style={{ alignItems: 'baseline' }}>
              <FormItem label="Manager">
                <Text>John Doe</Text>
              </FormItem>
              <FormItem label="Scrum Master">
                <Text>Michael Adams</Text>
              </FormItem>
              <FormItem label="Product Owner">
                <Text>John Miller</Text>
              </FormItem>
            </Form>
          </ObjectPageSubSection>
        </ObjectPageSection>
      </ObjectPage>
    );
  }
};

export const WithIllustratedMessage: Story = {
  name: 'with IllustratedMessage',
  render(args) {
    return (
      <ObjectPage
        image={args.image}
        headerTitle={args.headerTitle}
        headerContent={args.headerContent}
        imageShapeCircle
        placeholder={<IllustratedMessage name={IllustrationMessageType.UnableToLoad} />}
      />
    );
  }
};

export const WithCustomOverflowButton: Story = {
  name: 'with custom overflow button',
  render() {
    const titleProps = {
      actionsToolbarProps: {
        overflowButton: <ToggleButton design={ButtonDesign.Transparent} icon="navigation-down-arrow" />
      },
      navigationActionsToolbarProps: {
        overflowButton: <ToggleButton design={ButtonDesign.Transparent} icon="menu2" />
      },
      actions: (
        <>
          <Button key={'edit'} design={ButtonDesign.Emphasized}>
            Edit
          </Button>
          <Button key={'delete'} design={ButtonDesign.Transparent}>
            Delete
          </Button>
          <Button key={'copy'} design={ButtonDesign.Transparent}>
            Copy
          </Button>
          <Button key={'action'} icon="action" design={ButtonDesign.Transparent}>
            Action
          </Button>
          <Button design={ButtonDesign.Transparent}>Create</Button>
          <Button design={ButtonDesign.Transparent}>Loooooooooooooooooooooooooooooooooooong actions Button</Button>
        </>
      ),
      navigationActions: (
        <>
          <Button key={'fullscreen'} icon="full-screen" design={ButtonDesign.Transparent} />
          <Button key={'exitFullscreen'} icon="exit-full-screen" design={ButtonDesign.Transparent} />
          <Button key={'decline'} icon="decline" design={ButtonDesign.Transparent} />
          <Button design={ButtonDesign.Transparent}>UI5 Web Components For React</Button>
          <Button design={ButtonDesign.Transparent}>Navigation Actions Button</Button>
          <Button design={ButtonDesign.Transparent}>
            Loooooooooooooooooooooooooooooooooooong navigation actions Button
          </Button>
        </>
      )
    };
    return (
      <>
        <ObjectPage
          style={{ width: '1000px' }}
          showHideHeaderButton={false}
          headerTitle={
            <DynamicPageTitle
              {...titleProps}
              header={
                <Title wrappingType="Normal">
                  Custom overflow buttons for navigationActions and actions (width: 1000px)
                </Title>
              }
            />
          }
        />
        <ObjectPage
          style={{ width: '1400px' }}
          showHideHeaderButton={false}
          headerTitle={
            <DynamicPageTitle
              {...titleProps}
              header={<Title>Custom overflow buttons for actions (width: 1400px)</Title>}
            />
          }
        />
      </>
    );
  }
};

export const SectionWithCustomHeader: Story = {
  name: 'section with custom header',
  render(args) {
    return (
      <ObjectPage {...args}>
        <ObjectPageSection
          titleText="Goals"
          hideTitleText
          id="goals"
          aria-label="Goals"
          header={<Title>Custom Header Section One</Title>}
        >
          <div style={{ width: '100%', height: '200px', background: 'cadetblue' }} />
        </ObjectPageSection>
        <ObjectPageSection
          titleText="Personal"
          hideTitleText
          id="personal"
          aria-label="Personal"
          header={<MessageStrip hideCloseButton>Custom Header Section Two</MessageStrip>}
        >
          <div style={{ width: '100%', height: '500px', background: 'cadetblue' }} />
        </ObjectPageSection>
        <ObjectPageSection
          titleText="Employment"
          hideTitleText
          id="employment"
          aria-label="Employment"
          header={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Icon name={sunIcon} style={{ marginInlineEnd: '2rem' }} />
              <Text>Custom Header Section Three</Text>
              <Icon name={sunIcon} style={{ marginInlineStart: '2rem' }} />
            </div>
          }
        >
          <div style={{ width: '100%', height: '300px', background: 'cadetblue' }} />
        </ObjectPageSection>
      </ObjectPage>
    );
  }
};

export const FullScreenSingleSection: Story = {
  args: { selectedSectionId: 'section1' },
  name: 'with fullscreen section',
  render(args) {
    return (
      <ObjectPage {...args} mode={ObjectPageMode.IconTabBar}>
        <ObjectPageSection titleText="Section 1" id="section1" style={{ height: '100%' }}>
          <div style={{ height: '100%', background: 'lightblue' }}>
            It is recommended to only use fullscreen sections in TabBar mode, otherwise your layout will most probably
            break!
          </div>
        </ObjectPageSection>
        <ObjectPageSection titleText="Section 2" id="section2" style={{ height: '100%' }}>
          <div style={{ height: '100%', background: 'lightgreen' }} />
        </ObjectPageSection>
        <ObjectPageSection titleText="Section with Overflow" id="section3" style={{ height: '100%', overflow: 'auto' }}>
          <div style={{ height: '300%', background: 'lightyellow' }} />
        </ObjectPageSection>
      </ObjectPage>
    );
  }
};
