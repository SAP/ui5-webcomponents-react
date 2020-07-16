import { Breadcrumbs } from '@ui5/webcomponents-react/lib/Breadcrumbs';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { Link } from '@ui5/webcomponents-react/lib/Link';
import { ObjectPage } from '@ui5/webcomponents-react/lib/ObjectPage';
import { ObjectPageMode } from '@ui5/webcomponents-react/lib/ObjectPageMode';
import { ObjectPageSection } from '@ui5/webcomponents-react/lib/ObjectPageSection';
import { ObjectPageSubSection } from '@ui5/webcomponents-react/lib/ObjectPageSubSection';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import React, { useState } from 'react';
import SampleImage from './DemoImage.png';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

export const renderDemo = (props) => {
  return (
    <div style={{ width: 'calc(100% - 1rem)', height: 'calc(100% - 1rem)', position: 'relative', marginTop: '2rem' }}>
      <ObjectPage
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
        breadcrumbs={
          <Breadcrumbs>
            <Link href="PathSegment1">Path1</Link>
            <Link href="PathSegment2">Path2</Link>
            <Link href="PathSegment3"></Link>
          </Breadcrumbs>
        }
        keyInfos={
          <>
            <div>
              <Title level={TitleLevel.H5}>Key Info 1</Title>
              <Text>Value 1</Text>
            </div>
            <div>
              <Title level={TitleLevel.H5}>Key Info 2</Title>
              <Text>Value 2</Text>
            </div>
            <div>
              <Title level={TitleLevel.H5}>Key Info 3</Title>
              <Text>Value 3</Text>
            </div>
          </>
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
        <ObjectPageSection title="Test 1" id="1">
          <div style={{ height: '200px' }}>Test1</div>
        </ObjectPageSection>
        <ObjectPageSection title="Test 2" id="2">
          <div style={{ height: '800px' }}>Test2</div>
        </ObjectPageSection>
        <ObjectPageSection title="Test 3" id="3">
          Test1
        </ObjectPageSection>
        <ObjectPageSection title="Test 4" id="4">
          <h1>Section 4</h1>
          <ObjectPageSubSection title="SubSection 4.1" id="4.1">
            Test 4 SubSection 1
          </ObjectPageSubSection>
          <ObjectPageSubSection title="SubSection 4.2" id="4.2">
            Test 4 SubSection 2
          </ObjectPageSubSection>
        </ObjectPageSection>
        <ObjectPageSection title="Test 5" id="5">
          <ObjectPageSubSection title="SubSection 5.1" id="5.1">
            Content of SubSection 5.1
          </ObjectPageSubSection>
          <ObjectPageSubSection title="SubSection 5.2" id="5.2">
            Content of SubSection 5.2
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
    title: 'Object Page Title',
    subTitle: 'Object Page Sub Title',
    mode: ObjectPageMode.Default,
    showHideHeaderButton: true,
    selectedSectionId: '1',
    headerContentPinnable: true
  }
};
