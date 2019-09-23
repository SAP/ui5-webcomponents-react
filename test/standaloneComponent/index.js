import React from 'react';
import { render } from 'react-dom';
import { ObjectPage } from '@ui5/webcomponents-react/lib/ObjectPage';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { Link } from '@ui5/webcomponents-react/lib/Link';
import { ObjectPageSection } from '@ui5/webcomponents-react/lib/ObjectPageSection';
import { ObjectPageSubSection } from '@ui5/webcomponents-react/lib/ObjectPageSubSection';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import SampleImage from '@ui5/webcomponents-react/src/components/ObjectPage/DemoImage.png';
import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';

const renderHeaderContent = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Link href="https://www.sap.com">www.myurl.com</Link>
    <Text>Address 1</Text>
    <Text>Address 2</Text>
    <Text>Address 3</Text>
  </div>
);

render(
  <ThemeProvider>
    <ObjectPage
      title={'Object Page Title'}
      subTitle={'Object Page Sub Title'}
      headerActions={[
        <Button key="1" design={ButtonDesign.Emphasized}>
          Primary Action
        </Button>,
        <Button key="2">Action</Button>
      ]}
      image={SampleImage}
      renderHeaderContent={renderHeaderContent}
      imageShapeCircle={false}
      showHideHeaderButton={true}
      style={{ height: '700px' }}
    >
      <ObjectPageSection title="Test 1" id="1">
        <div style={{ height: '20px' }}>My Content 1</div>
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
    </ObjectPage>{' '}
  </ThemeProvider>,
  document.querySelector('body')
);
