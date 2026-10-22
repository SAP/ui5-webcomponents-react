import '@ui5/webcomponents-fiori/dist/illustrations/UnableToLoad.js';
import SampleImage from '@sb/demoImages/Person.png';
import type { Meta, StoryObj } from '@storybook/react-vite';
import BarDesign from '@ui5/webcomponents/dist/types/BarDesign.js';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import IllustrationMessageType from '@ui5/webcomponents-fiori/dist/types/IllustrationMessageType.js';
import declineIcon from '@ui5/webcomponents-icons/dist/decline.js';
import sunIcon from '@ui5/webcomponents-icons/dist/general-leave-request.js';
import shareIcon from '@ui5/webcomponents-icons/dist/share.js';
import { useRef } from 'react';
import { fn } from 'storybook/test';
import { Toolbar as LegacyToolbar, ToolbarSpacer as LegacyToolbarSpacer } from '../../../../compat/src/index.js';
import type { ObjectPageDomRef } from '../../index.js';
import {
  AnalyticalTable,
  AnalyticalTableVisibleRowCountMode,
  Bar,
  Breadcrumbs,
  BreadcrumbsItem,
  Button,
  ObjectPageHeader,
  ObjectPageTitle,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxWrap,
  Form,
  FormGroup,
  FormItem,
  Icon,
  IllustratedMessage,
  Label,
  Link,
  MessageStrip,
  ObjectPageMode,
  ObjectPageSection,
  ObjectPageSubSection,
  Table,
  TableCell,
  TableGrowing,
  TableHeaderCell,
  TableHeaderRow,
  TableRow,
  Text,
  Title,
  Toolbar,
  ToolbarButton,
} from '../../index.js';
import { Tag } from '../../webComponents/Tag/index.js';
import { ObjectPage } from './index.js';

const tableRows = Array.from({ length: 60 }, (_, i) => ({
  name: `Employee ${i + 1}`,
  role: i % 2 ? 'Developer' : 'Designer',
  location: i % 3 ? 'Walldorf' : 'San Jose',
}));

const tableColumns = [
  { accessor: 'name', Header: 'Name' },
  { accessor: 'role', Header: 'Role' },
  { accessor: 'location', Header: 'Location' },
];

const meta = {
  title: 'Layouts & Floorplans / ObjectPage',
  component: ObjectPage,
  argTypes: {
    titleArea: { control: { disable: true } },
    headerArea: { control: { disable: true } },
    footerArea: { control: { disable: true } },
    children: { control: { disable: true } },
    placeholder: { control: { disable: true } },
    accessibilityAttributes: { table: { category: 'Accessibility props' } },
  },
  args: {
    mode: ObjectPageMode.Default,
    imageShapeCircle: true,
    image: SampleImage,
    style: { height: '700px', maxHeight: '90vh' },
    onToggleHeaderArea: fn(),
    footerArea: (
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
    titleArea: (
      <ObjectPageTitle
        header={<Title level="H2">Denise Smith</Title>}
        snappedHeader={<Title level="H2">Denise Smith (snapped header)</Title>}
        subHeader="Senior UI Developer"
        snappedSubHeader={'Senior UI Developer (snapped header)'}
        actionsBar={
          <Toolbar design="Transparent" style={{ height: 'auto' }}>
            <ToolbarButton design={ButtonDesign.Emphasized} text="Primary Action" />
            <ToolbarButton design={ButtonDesign.Transparent} text="Action" />
          </Toolbar>
        }
        navigationBar={
          <Toolbar design="Transparent" style={{ height: 'auto' }}>
            <ToolbarButton
              icon={shareIcon}
              design={ButtonDesign.Transparent}
              tooltip="Navigation Action"
              accessibleName="Example Navigation Action 1"
            />
            <ToolbarButton
              icon={declineIcon}
              design={ButtonDesign.Transparent}
              tooltip="Navigation Action"
              accessibleName="Example Navigation Action 2"
            />
          </Toolbar>
        }
        breadcrumbs={
          <Breadcrumbs>
            <BreadcrumbsItem>Manager Cockpit</BreadcrumbsItem>
            <BreadcrumbsItem>My Team</BreadcrumbsItem>
            <BreadcrumbsItem>Employee Details</BreadcrumbsItem>
          </Breadcrumbs>
        }
        expandedContent={
          <MessageStrip style={{ paddingBlockStart: '0.5rem' }}>
            Information (only visible if header content is expanded)
          </MessageStrip>
        }
        snappedContent={
          <MessageStrip style={{ paddingBlockStart: '0.5rem' }}>
            Information (only visible if header content is collapsed/snapped)
          </MessageStrip>
        }
      >
        <Tag design="Positive" style={{ alignSelf: 'center' }}>
          employed
        </Tag>
      </ObjectPageTitle>
    ),
    headerArea: (
      <ObjectPageHeader>
        <FlexBox wrap={FlexBoxWrap.Wrap} alignItems={FlexBoxAlignItems.Center}>
          <FlexBox direction={FlexBoxDirection.Column}>
            <Link>+33 6 4512 5158</Link>
            <Link href="mailto:ui5-webcomponents-react@sap.com">DeniseSmith@sap.com</Link>
            <Link href="https://github.com/UI5/webcomponents-react">https://github.com/UI5/webcomponents-react</Link>
          </FlexBox>
          <FlexBox direction={FlexBoxDirection.Column} style={{ padding: '10px' }}>
            <Label>San Jose</Label>
            <Label>California, USA</Label>
          </FlexBox>
        </FlexBox>
      </ObjectPageHeader>
    ),
  },
  tags: ['package:@ui5/webcomponents-react'],
} satisfies Meta<typeof ObjectPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    return (
      // `onBeforeNavigate` & `onToggleHeaderArea` have to be added like this, otherwise Storybook invokes them incorrectly sometimes
      <ObjectPage {...args} onBeforeNavigate={args.onBeforeNavigate} onToggleHeaderArea={args.onToggleHeaderArea}>
        <ObjectPageSection titleText="Goals" id="goals">
          <Form layout="S1 M2 L3 XL3" labelSpan="S12 M12 L12 XL12">
            <FormItem labelContent={<Label showColon>Evangelize the UI framework across the company</Label>}>
              <Text>4 days overdue - Cascaded</Text>
            </FormItem>
            <FormItem labelContent={<Label showColon>Get trained in development management direction</Label>}>
              <Text>Due Nov, 21</Text>
            </FormItem>
            <FormItem labelContent={<Label showColon>Mentor junior developers</Label>}>
              <Text>Due Dec, 31 - Cascaded</Text>
            </FormItem>
          </Form>
        </ObjectPageSection>
        <ObjectPageSection titleText="Personal" id="personal">
          <ObjectPageSubSection
            titleText="Connect"
            id="personal-connect"
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
            <Form style={{ alignItems: 'baseline' }}>
              <FormGroup headerText="Phone Numbers">
                <FormItem labelContent={<Label showColon>Home</Label>}>
                  <Text>+1 234-567-8901</Text>
                  <Text>+1 234-567-5555</Text>
                </FormItem>
              </FormGroup>
              <FormGroup headerText="Social Accounts">
                <FormItem labelContent={<Label showColon>LinkedIn</Label>}>
                  <Text>/DeniseSmith</Text>
                </FormItem>
                <FormItem labelContent={<Label showColon>Twitter</Label>}>
                  <Text>@DeniseSmith</Text>
                </FormItem>
              </FormGroup>
              <FormGroup headerText="Addresses">
                <FormItem labelContent={<Label showColon>Home Address</Label>}>
                  <Text>2096 Mission Street</Text>
                </FormItem>
                <FormItem labelContent={<Label showColon>Mailing Address</Label>}>
                  <Text>PO Box 32114</Text>
                </FormItem>
              </FormGroup>
              <FormGroup headerText="Mailing Address">
                <FormItem labelContent={<Label showColon>Work</Label>}>
                  <Text>DeniseSmith@sap.com</Text>
                </FormItem>
              </FormGroup>
            </Form>
          </ObjectPageSubSection>
          <ObjectPageSubSection titleText="Payment Information" id="personal-payment-information">
            <Form>
              <FormGroup headerText="Salary">
                <FormItem labelContent={<Label showColon>Bank Transfer</Label>}>
                  <Text>Money Bank, Inc.</Text>
                </FormItem>
              </FormGroup>
              <FormGroup headerText="Payment method for Expenses">
                <FormItem labelContent={<Label showColon>Extra Travel Expenses</Label>}>
                  <Text>Cash 100 USD</Text>
                </FormItem>
              </FormGroup>
            </Form>
          </ObjectPageSubSection>
        </ObjectPageSection>
        <ObjectPageSection titleText="Employment" id="employment">
          <ObjectPageSubSection titleText="Job Information" id="employment-job-information">
            <Form>
              <FormItem labelContent={<Label showColon>Job Classification</Label>}>
                <FlexBox direction={FlexBoxDirection.Column}>
                  <Text>Senior UI Developer</Text>
                  <Label>(UIDEV-SR)</Label>
                </FlexBox>
              </FormItem>
              <FormItem labelContent={<Label showColon>Job Title</Label>}>
                <Text>Developer</Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>Employee Class</Label>}>
                <Text>Employee</Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>Manager</Label>}>
                <FlexBox direction={FlexBoxDirection.Column}>
                  <Text>Dan Smith</Text>
                  <Label>Development Manager</Label>
                </FlexBox>
              </FormItem>
              <FormItem labelContent={<Label showColon>Pay Grade</Label>}>
                <Text>Salary Grade 18 (GR-14)</Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>FTE</Label>}>
                <Text>1</Text>
              </FormItem>
            </Form>
          </ObjectPageSubSection>
          <ObjectPageSubSection titleText="Employee Details" id="employment-employee-details">
            <Form>
              <FormItem labelContent={<Label showColon>Start Date</Label>}>
                <Text>Jan 01, 2018</Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>End Date</Label>}>
                <Text>Dec 31, 9999</Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>Payroll Start Date</Label>}>
                <Text>Jan 01, 2018</Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>Benefits Start Date</Label>}>
                <Text>Jul 01, 2018</Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>Company Car Eligibility</Label>}>
                <Text>Jan 01, 2021</Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>Equity Start Date</Label>}>
                <Text>Jul 01, 2018</Text>
              </FormItem>
            </Form>
          </ObjectPageSubSection>
          <ObjectPageSubSection titleText="Job Relationship" id="employment-job-relationship">
            <Form>
              <FormItem labelContent={<Label showColon>Manager</Label>}>
                <Text>John Doe</Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>Scrum Master</Label>}>
                <Text>Michael Adams</Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>Product Owner</Label>}>
                <Text>John Miller</Text>
              </FormItem>
            </Form>
          </ObjectPageSubSection>
        </ObjectPageSection>
      </ObjectPage>
    );
  },
};

export const WithIllustratedMessage: Story = {
  name: 'with IllustratedMessage',
  render(args) {
    return (
      <ObjectPage
        image={args.image}
        titleArea={args.titleArea}
        headerArea={args.headerArea}
        imageShapeCircle
        placeholder={<IllustratedMessage name={IllustrationMessageType.UnableToLoad} />}
      />
    );
  },
};

export const SectionWithCustomHeader: Story = {
  name: 'section with custom header',
  render(args) {
    return (
      <ObjectPage {...args} onBeforeNavigate={args.onBeforeNavigate}>
        <ObjectPageSection titleText="Goals" hideTitleText id="goals" header={<Title>Custom Header Section One</Title>}>
          <div style={{ width: '100%', height: '200px', background: 'cadetblue' }} />
        </ObjectPageSection>
        <ObjectPageSection
          titleText="Personal"
          hideTitleText
          id="personal"
          header={<MessageStrip hideCloseButton>Custom Header Section Two</MessageStrip>}
        >
          <ObjectPageSubSection
            titleText="Connect"
            id="personal-connect"
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
            <Form style={{ alignItems: 'baseline' }}>
              <FormGroup headerText="Phone Numbers">
                <FormItem labelContent={<Label showColon>Home</Label>}>
                  <Text>+1 234-567-8901</Text>
                  <Text>+1 234-567-5555</Text>
                </FormItem>
              </FormGroup>
              <FormGroup headerText="Social Accounts">
                <FormItem labelContent={<Label showColon>LinkedIn</Label>}>
                  <Text>/DeniseSmith</Text>
                </FormItem>
                <FormItem labelContent={<Label showColon>Twitter</Label>}>
                  <Text>@DeniseSmith</Text>
                </FormItem>
              </FormGroup>
              <FormGroup headerText="Addresses">
                <FormItem labelContent={<Label showColon>Home Address</Label>}>
                  <Text>2096 Mission Street</Text>
                </FormItem>
                <FormItem labelContent={<Label showColon>Mailing Address</Label>}>
                  <Text>PO Box 32114</Text>
                </FormItem>
              </FormGroup>
              <FormGroup headerText="Mailing Address">
                <FormItem labelContent={<Label showColon>Work</Label>}>
                  <Text>DeniseSmith@sap.com</Text>
                </FormItem>
              </FormGroup>
            </Form>
          </ObjectPageSubSection>
          <ObjectPageSubSection titleText="Payment Information" id="personal-payment-information">
            <Form>
              <FormGroup headerText="Salary">
                <FormItem labelContent={<Label showColon>Bank Transfer</Label>}>
                  <Text>Money Bank, Inc.</Text>
                </FormItem>
              </FormGroup>
              <FormGroup headerText="Payment method for Expenses">
                <FormItem labelContent={<Label showColon>Extra Travel Expenses</Label>}>
                  <Text>Cash 100 USD</Text>
                </FormItem>
              </FormGroup>
            </Form>
          </ObjectPageSubSection>
        </ObjectPageSection>
        <ObjectPageSection
          titleText="Employment"
          hideTitleText
          id="employment"
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
  },
};

export const FullScreenSingleSection: Story = {
  name: 'with fullscreen section',
  render(args) {
    return (
      <ObjectPage {...args} mode={ObjectPageMode.IconTabBar} onBeforeNavigate={args.onBeforeNavigate}>
        <ObjectPageSection titleText="Section 1" id="section1" fitContent>
          <div style={{ height: '100%', background: 'lightblue' }}>
            It is recommended to only use fullscreen sections in `IconTabBar` mode, otherwise your layout will most
            probably break!
          </div>
        </ObjectPageSection>
        <ObjectPageSection titleText="Analytical Table" id="analytical" fitContent>
          <div style={{ flex: 1, minHeight: 0 }}>
            <AnalyticalTable
              columns={tableColumns}
              data={tableRows}
              visibleRowCountMode={AnalyticalTableVisibleRowCountMode.AutoWithEmptyRows}
            />
          </div>
        </ObjectPageSection>
        <ObjectPageSection titleText="Responsive Table" id="table" fitContent>
          <Table
            overflowMode="Scroll"
            style={{ flex: 1, minHeight: 0 }}
            headerRow={
              <TableHeaderRow sticky>
                <TableHeaderCell minWidth="200px">Name</TableHeaderCell>
                <TableHeaderCell minWidth="150px">Role</TableHeaderCell>
                <TableHeaderCell minWidth="150px">Location</TableHeaderCell>
              </TableHeaderRow>
            }
            features={<TableGrowing mode="Scroll" />}
          >
            {tableRows.map((row, i) => (
              <TableRow key={i} rowKey={String(i)}>
                <TableCell>
                  <span>{row.name}</span>
                </TableCell>
                <TableCell>
                  <span>{row.role}</span>
                </TableCell>
                <TableCell>
                  <span>{row.location}</span>
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </ObjectPageSection>
        <ObjectPageSection titleText="Section with Overflow" id="section3" fitContent>
          <div style={{ flex: 1, minHeight: 0, overflow: 'auto' }}>
            <div style={{ height: '300%', background: 'lightyellow' }} />
          </div>
        </ObjectPageSection>
        <ObjectPageSection titleText="Subsections" id="subsections" fitContent>
          <ObjectPageSubSection titleText="Subsection 1" id="subsections-1">
            <div style={{ background: 'lightblue', padding: '1rem' }}>
              Fullscreen section with subsections. The content fits, so nothing scrolls.
            </div>
          </ObjectPageSubSection>
          <ObjectPageSubSection titleText="Subsection 2" id="subsections-2">
            <div style={{ background: 'lightgreen', padding: '1rem' }}>More content that still fits.</div>
          </ObjectPageSubSection>
        </ObjectPageSection>
        <ObjectPageSection titleText="Subsections with Overflow" id="subsections-overflow" fitContent>
          {Array.from({ length: 5 }, (_, i) => (
            <ObjectPageSubSection key={i} titleText={`Subsection ${i + 1}`} id={`subsections-overflow-${i + 1}`}>
              <div style={{ height: '60vh', background: i % 2 ? 'lightgreen' : 'lightblue' }}>
                Tall subsection content — the section scrolls internally while the footer stays visible.
              </div>
            </ObjectPageSubSection>
          ))}
        </ObjectPageSection>
        <ObjectPageSection titleText="Section without fullscreen" id="section4">
          <div style={{ background: 'lightgreen' }}>
            This section doesn&apos;t use `fitContent`, so it grows with its content and the page scrolls normally.
          </div>
        </ObjectPageSection>
        <ObjectPageSection titleText="Section without fullscreen (overflow)" id="section5">
          <div style={{ height: '150vh', background: 'lightsalmon' }}>
            This section doesn&apos;t use `fitContent` and its content exceeds the viewport, so the standard page scroll
            is visible.
          </div>
        </ObjectPageSection>
      </ObjectPage>
    );
  },
};

export const SingleSection: Story = {
  name: 'with single section',
  render(args) {
    return (
      <ObjectPage {...args}>
        <ObjectPageSection titleText="Employment" id="employment">
          <ObjectPageSubSection titleText="Job Information" id="employment-job-information">
            <Form>
              <FormItem labelContent={<Label showColon>Job Classification</Label>}>
                <FlexBox direction={FlexBoxDirection.Column}>
                  <Text>Senior UI Developer</Text>
                  <Label>(UIDEV-SR)</Label>
                </FlexBox>
              </FormItem>
              <FormItem labelContent={<Label showColon>Job Title</Label>}>
                <Text>Developer</Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>Employee Class</Label>}>
                <Text>Employee</Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>Manager</Label>}>
                <FlexBox direction={FlexBoxDirection.Column}>
                  <Text>Dan Smith</Text>
                  <Label>Development Manager</Label>
                </FlexBox>
              </FormItem>
              <FormItem labelContent={<Label showColon>Pay Grade</Label>}>
                <Text>Salary Grade 18 (GR-14)</Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>FTE</Label>}>
                <Text>1</Text>
              </FormItem>
            </Form>
          </ObjectPageSubSection>
          <ObjectPageSubSection titleText="Employee Details" id="employment-employee-details">
            <Form>
              <FormItem labelContent={<Label showColon>Start Date</Label>}>
                <Text>Jan 01, 2018</Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>End Date</Label>}>
                <Text>Dec 31, 9999</Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>Payroll Start Date</Label>}>
                <Text>Jan 01, 2018</Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>Benefits Start Date</Label>}>
                <Text>Jul 01, 2018</Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>Company Car Eligibility</Label>}>
                <Text>Jan 01, 2021</Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>Equity Start Date</Label>}>
                <Text>Jul 01, 2018</Text>
              </FormItem>
            </Form>
          </ObjectPageSubSection>
          <ObjectPageSubSection titleText="Job Relationship" id="employment-job-relationship">
            <Form>
              <FormItem labelContent={<Label showColon>Manager</Label>}>
                <Text>John Doe</Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>Scrum Master</Label>}>
                <Text>Michael Adams</Text>
              </FormItem>
              <FormItem labelContent={<Label showColon>Product Owner</Label>}>
                <Text>John Miller</Text>
              </FormItem>
            </Form>
          </ObjectPageSubSection>
        </ObjectPageSection>
      </ObjectPage>
    );
  },
};

export const LegacyToolbarSupport: Story = {
  render(args) {
    const objectPageRef = useRef<ObjectPageDomRef>(null);
    const handleToolbarClick = (e) => {
      if (e.target.dataset.componentName === 'ToolbarContent') {
        objectPageRef.current.toggleHeaderArea();
      }
    };
    return (
      <ObjectPage
        {...args}
        onBeforeNavigate={args.onBeforeNavigate}
        ref={objectPageRef}
        titleArea={
          <ObjectPageTitle
            header="Legacy Toolbar Support"
            subHeader="actions and navigation actions are rendered inside the legacy Toolbar component"
            actionsBar={
              <LegacyToolbar
                design="Transparent"
                toolbarStyle="Clear"
                onClick={handleToolbarClick}
                data-in-object-page-title
              >
                <LegacyToolbarSpacer />
                <Button design={ButtonDesign.Emphasized}>Primary Action</Button>
                <Button design={ButtonDesign.Transparent}>Action</Button>
              </LegacyToolbar>
            }
            navigationBar={
              <LegacyToolbar
                design="Transparent"
                toolbarStyle="Clear"
                onClick={handleToolbarClick}
                data-in-object-page-title
              >
                <LegacyToolbarSpacer />
                <Button
                  icon={shareIcon}
                  design={ButtonDesign.Transparent}
                  tooltip="Navigation Action"
                  accessibleName="Example Navigation Action 1"
                />
                <Button
                  icon={declineIcon}
                  design={ButtonDesign.Transparent}
                  tooltip="Navigation Action"
                  accessibleName="Example Navigation Action 2"
                />
              </LegacyToolbar>
            }
          />
        }
      >
        <ObjectPageSection titleText="Section 1" id="opSection1">
          <div style={{ height: '300px', width: '100%', background: 'lightblue' }}>Section 1 Content</div>
        </ObjectPageSection>
        <ObjectPageSection titleText="Section 2" id="opSection2">
          <div style={{ height: '200px', width: '100%', background: 'lightblue' }}>Section 2 Content</div>
        </ObjectPageSection>
        <ObjectPageSection titleText="Section 3" id="opSection3">
          <div style={{ height: '500px', width: '100%', background: 'lightblue' }}>Section 3 Content</div>
        </ObjectPageSection>
      </ObjectPage>
    );
  },
};
