import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';
import { Breadcrumbs } from '@ui5/webcomponents-react/lib/Breadcrumbs';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { Form } from '@ui5/webcomponents-react/lib/Form';
import { FormGroup } from '@ui5/webcomponents-react/lib/FormGroup';
import { FormItem } from '@ui5/webcomponents-react/lib/FormItem';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { Link } from '@ui5/webcomponents-react/lib/Link';
import { ObjectPage } from '@ui5/webcomponents-react/lib/ObjectPage';
import { ObjectPageMode } from '@ui5/webcomponents-react/lib/ObjectPageMode';
import { ObjectPageSection } from '@ui5/webcomponents-react/lib/ObjectPageSection';
import { ObjectPageSubSection } from '@ui5/webcomponents-react/lib/ObjectPageSubSection';
import { ProgressIndicator } from '@ui5/webcomponents-react/lib/ProgressIndicator';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React, { useState } from 'react';
import SampleImage from './DemoImage.png';

export const renderDemo = (props) => {
  return (
    <div style={{ width: 'calc(100% - 1rem)', height: 'calc(100% - 1rem)', position: 'relative', marginTop: '2rem' }}>
      <ObjectPage
        headerContent={
          <>
            <FlexBox direction={FlexBoxDirection.Column}>
              <Link>+33 6 4512 5158</Link>
              <Link href="mailto:ui5-webcomponents-react@sap.com">DeniseSmith@sap.com</Link>
              <Link href="https://github.com/SAP/ui5-webcomponents-react">
                https://github.com/SAP/ui5-webcomponents-react
              </Link>
            </FlexBox>
            <FlexBox direction={FlexBoxDirection.Column} style={{ width: '200px' }}>
              <Label>Achieved Goals</Label>
              <ProgressIndicator value={80} valueState={ValueState.Success} />
            </FlexBox>
            <FlexBox direction={FlexBoxDirection.Column}>
              <Label>San Jose</Label>
              <Label>California, USA</Label>
            </FlexBox>
          </>
        }
        breadcrumbs={
          <Breadcrumbs currentLocationText="Employee Details">
            <Link href="PathSegment1">Manager Cockpit</Link>
            <Link href="PathSegment2">My Team</Link>
          </Breadcrumbs>
        }
        title={props.title}
        subTitle={props.subTitle}
        headerActions={[
          <Button key="1" design={ButtonDesign.Emphasized}>
            Primary Action
          </Button>,
          <Button key="2">Action</Button>
        ]}
        image={SampleImage}
        mode={props.mode}
        imageShapeCircle={props.imageShapeCircle}
        showHideHeaderButton={props.showHideHeaderButton}
        selectedSectionId={props.selectedSectionId}
        selectedSubSectionId={props.selectedSubSectionId}
        onSelectedSectionChanged={props.onSelectedSectionChanged}
        noHeader={props.noHeader}
        alwaysShowContentHeader={props.alwaysShowContentHeader}
        showTitleInHeaderContent={props.showTitleInHeaderContent}
        style={{ height: '700px' }}
        headerContentPinnable={props.headerContentPinnable}
      >
        <ObjectPageSection title="Goals" id="goals">
          <Form columnsL={3} columnsXL={3} labelSpanXL={6} labelSpanL={6} columnsM={2} labelSpanM={6}>
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
        <ObjectPageSection title="Personal" id="personal">
          <ObjectPageSubSection title="Connect" id="personal-connect">
            <Form columnsXL={4} columnsL={4}>
              <FormGroup title="Phone Numbers">
                <FormItem label="Home">
                  <Text>+1 234-567-8901</Text>
                </FormItem>
                <FormItem label="">
                  <Text>+1 234-567-5555</Text>
                </FormItem>
              </FormGroup>
              <FormGroup title="Social Accounts">
                <FormItem label="LinkedIn">
                  <Text>/DeniseSmith</Text>
                </FormItem>
                <FormItem label="Twitter">
                  <Text>@DeniseSmith</Text>
                </FormItem>
              </FormGroup>
              <FormGroup title="Addresses">
                <FormItem label="Home Address">
                  <Text>2096 Mission Street</Text>
                </FormItem>
                <FormItem label="Mailing Address">
                  <Text>PO Box 32114</Text>
                </FormItem>
              </FormGroup>
              <FormGroup title="Mailing Address">
                <FormItem label="Work">
                  <Text>DeniseSmith@sap.com</Text>
                </FormItem>
              </FormGroup>
            </Form>
          </ObjectPageSubSection>

          <ObjectPageSubSection title="Payment Information" id="personal-payment-information">
            <Form columnsXL={4} columnsL={4}>
              <FormGroup title="Salary">
                <FormItem label="Bank Transfer">
                  <Text>Money Bank, Inc.</Text>
                </FormItem>
              </FormGroup>

              <FormGroup title="Payment method for Expenses">
                <FormItem label="Extra Travel Expenses">
                  <Text>Cash 100 USD</Text>
                </FormItem>
              </FormGroup>
            </Form>
          </ObjectPageSubSection>
        </ObjectPageSection>
        <ObjectPageSection title="Employment" id="employment">
          <ObjectPageSubSection title="Job Information" id="employment-job-information">
            <Form columnsXL={4} columnsL={4}>
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
          <ObjectPageSubSection title="Employee Details" id="employment-employee-details">
            <Form columnsXL={4} columnsL={4}>
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
          <ObjectPageSubSection title="Job Relationship" id="employment-job-relationship">
            <Form columnsXL={4} columnsL={4}>
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
    </div>
  );
};
renderDemo.storyName = 'Default';

export const renderComponentWithSections = (props) => {
  const [numberOfSections, setNumberOfSections] = useState(3);

  return (
    <ObjectPage
      title="Fiori Object Page Title"
      subTitle="Sub Title"
      headerActions={[
        <Button key="add-section" onClick={() => setNumberOfSections((old) => old + 1)}>
          Add Section
        </Button>
      ]}
      image={SampleImage}
      headerContent={
        <>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Link href="https://www.sap.com">www.myurl.com</Link>
            <Text>Address 1</Text>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Text>Address 2</Text>
            <Text>Address 3</Text>
          </div>
        </>
      }
      mode={props.mode}
      style={{ height: '700px' }}
    >
      {Array(numberOfSections)
        .fill('')
        .map((_, index) => {
          return (
            <ObjectPageSection title={`Section ${index + 1}`} id={`${index}`} key={index}>
              <Label>Section Content {index + 1}</Label>
            </ObjectPageSection>
          );
        })}
    </ObjectPage>
  );
};
renderComponentWithSections.storyName = 'with Sections Only';

export default {
  title: 'Components / ObjectPage',
  component: ObjectPage,
  parameters: {
    subcomponents: { ObjectPageSection, ObjectPageSubSection }
  },
  argTypes: {
    ...createSelectArgTypes({ mode: ObjectPageMode }),
    breadcrumbs: {
      type: null
    },
    image: {
      type: null
    },
    headerActions: {
      type: null
    },
    headerContent: {
      type: null
    },
    keyInfos: {
      type: null
    }
  },
  args: {
    title: 'Denise Smith',
    subTitle: 'Senior UI Developer',
    mode: ObjectPageMode.Default,
    showHideHeaderButton: true,
    selectedSectionId: 'goals',
    headerContentPinnable: true,
    imageShapeCircle: true
  }
};
