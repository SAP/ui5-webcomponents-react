import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
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
import React from 'react';
// @ts-ignore
import SampleImage from './DemoImage.png';

const renderHeaderContent = () => (
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
);

const renderBreadcrumbs = () => (
  <Breadcrumbs>
    <Link href="PathSegment1">Path1</Link>
    <Link href="PathSegment2">Path2</Link>
    <Link href="PathSegment3"></Link>
  </Breadcrumbs>
);

const renderKeyInfos = () => (
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
);

export const renderDemo = () => {
  return (
    <div style={{ width: 'calc(100% - 1rem)', height: 'calc(100% - 1rem)', position: 'relative', marginTop: '2rem' }}>
      <ObjectPage
        title={text('title', 'Object Page Title')}
        subTitle={text('subTitle', 'Object Page Sub Title')}
        headerActions={[
          <Button key="1" design={ButtonDesign.Emphasized} onClick={action('onHeaderAction1Pressed')}>
            Primary Action
          </Button>,
          <Button key="2" onClick={action('onHeaderAction2Pressed')}>
            Action
          </Button>
        ]}
        image={SampleImage}
        renderHeaderContent={renderHeaderContent}
        mode={select('mode', ObjectPageMode, ObjectPageMode.Default)}
        imageShapeCircle={boolean('imageShapeCircle', false)}
        showHideHeaderButton={boolean('showHideHeaderButton', true)}
        selectedSectionId={text('selectedSectionId', '1')}
        selectedSubSectionId={text('selectedSubSectionId', undefined)}
        onSelectedSectionChanged={action('onSelectedSectionChanged')}
        noHeader={boolean('noHeader', false)}
        alwaysShowContentHeader={boolean('alwaysShowContentHeader', false)}
        showTitleInHeaderContent={boolean('showTitleInHeaderContent', true)}
        renderBreadcrumbs={renderBreadcrumbs}
        renderKeyInfos={renderKeyInfos}
        style={{ height: '700px' }}
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
renderDemo.story = {
  name: 'Default'
};

export const renderComponentWithSections = () => (
  <ObjectPage
    title="Fiori Object Page Title"
    subTitle="Sub Title"
    headerActions={[<Button>Action</Button>]}
    image={SampleImage}
    renderHeaderContent={renderHeaderContent}
    mode={select('mode', ObjectPageMode, ObjectPageMode.Default)}
    style={{ height: '700px' }}
  >
    <ObjectPageSection title="Test 1" id="1">
      <Label>My Content 1</Label>
    </ObjectPageSection>
    <ObjectPageSection title="Test 2" id="2">
      <Label>My Content 2</Label>
    </ObjectPageSection>
    <ObjectPageSection title="Test 3" id="3">
      <Label>My Content 3</Label>
    </ObjectPageSection>
  </ObjectPage>
);
renderComponentWithSections.story = {
  name: 'with Sections Only'
};

export const renderShortContent = () => {
  return (
    <div style={{ width: 'calc(100% - 1rem)', height: '100%', position: 'relative', marginTop: '2rem' }}>
      <ObjectPage
        title={text('title', 'Object Page Title')}
        subTitle={text('subTitle', 'Object Page Sub Title')}
        headerActions={[
          <Button key="1" design={ButtonDesign.Emphasized} onClick={action('onHeaderAction1Pressed')}>
            Primary Action
          </Button>,
          <Button key="2" onClick={action('onHeaderAction2Pressed')}>
            Action
          </Button>
        ]}
        image={SampleImage}
        renderHeaderContent={renderHeaderContent}
        mode={select('mode', ObjectPageMode, ObjectPageMode.IconTabBar)}
        imageShapeCircle={boolean('imageShapeCircle', false)}
        showHideHeaderButton={boolean('showHideHeaderButton', true)}
        selectedSectionId={text('selectedSectionId', '1')}
        onSelectedSectionChanged={action('onSelectedSectionChanged')}
        noHeader={boolean('noHeader', false)}
        style={{ height: '700px' }}
      >
        <ObjectPageSection title="Test 1" id="1">
          <div>My Content 1</div>
        </ObjectPageSection>
      </ObjectPage>
    </div>
  );
};
renderShortContent.story = {
  name: 'Short Content'
};

export default {
  title: 'Components / ObjectPage',
  component: ObjectPage,
  parameters: {
    subcomponents: { ObjectPageSection, ObjectPageSubSection }
  }
};
