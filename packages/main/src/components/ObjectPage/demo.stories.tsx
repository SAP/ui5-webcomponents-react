import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { propTablesExclude } from '../../../../docs/.storybook/config';
import { Button } from '../../lib/Button';
import { ButtonDesign } from '../../lib/ButtonDesign';
import { Label } from '../../lib/Label';
import { Link } from '../../lib/Link';
import { ObjectPage } from '../../lib/ObjectPage';
import { ObjectPageMode } from '../../lib/ObjectPageMode';
import { ObjectPageSection } from '../../lib/ObjectPageSection';
import { ObjectPageSubSection } from '../../lib/ObjectPageSubSection';
import { Text } from '../../lib/Text';
// @ts-ignore
import SampleImage from './DemoImage.png';

const renderHeaderContent = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Link href="https://www.sap.com">www.myurl.com</Link>
    <Text>Address 1</Text>
    <Text>Address 2</Text>
    <Text>Address 3</Text>
  </div>
);
const renderDemo = () => {
  return (
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
      onSelectedSectionChanged={action('onSelectedSectionChanged')}
      noHeader={boolean('noHeader', false)}
      style={{ height: '700px' }}
    >
      <ObjectPageSection title="Test 1" id="1">
        <Label>My Content 1</Label>
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
  );
};

const renderComponentWithSections = () => (
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

storiesOf('Components | ObjectPage', module)
  .addParameters({
    info: {
      inline: false,
      propTablesExclude: [...propTablesExclude, Text, Label]
    }
  })
  .add('Default', renderDemo)
  .add('Only Sections', renderComponentWithSections);
