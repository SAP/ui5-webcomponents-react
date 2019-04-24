import { getEventFromCallback } from '@shared/tests/utils';
import React from 'react';
import * as sinon from 'sinon';
import { ObjectPageMode } from '@fiori-for-react/core/enums';
import { Button } from '../../webComponents/Button';
import { Label } from '../../webComponents/Label';
import { Link } from '../../webComponents/Link';
import { ObjectPageSection } from '../ObjectPageSection';
import { ObjectPageSubSection } from '../ObjectPageSubSection';
import { Text } from '../Text/index';
import { ObjectPage } from './index';
import { expect, use } from 'chai';
import { mountThemedComponent, renderThemedComponent } from '@shared/tests/utils';
import { matchSnapshot } from 'chai-karma-snapshot';

use(matchSnapshot);

const renderHeaderContent = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Link href="https://www.sap.com">www.myurl.com</Link>
    <Text>Address 1</Text>
    <Text>Address 2</Text>
    <Text>Address 3</Text>
  </div>
);

const renderComponent = (mode = ObjectPageMode.Default) => (
  <ObjectPage
    title="Fiori Object Page Title"
    subTitle="Sub Title"
    headerActions={[<Button key="Actions">Action</Button>]}
    renderHeaderContent={renderHeaderContent}
    mode={mode}
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

const renderComponentWithSections = () => (
  <ObjectPage
    title="Fiori Object Page Title"
    subTitle="Sub Title"
    headerActions={[<Button key="Actions">Action</Button>]}
    renderHeaderContent={renderHeaderContent}
    mode={ObjectPageMode.Default}
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

describe('ObjectPage', () => {
  it('With Subsections', () => {
    const wrapper = mountThemedComponent(renderComponent(), {}, { attachTo: document.body });
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('Only Sections', () => {
    const wrapper = mountThemedComponent(renderComponentWithSections());
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('IconTabBar Mode', () => {
    const wrapper = mountThemedComponent(renderComponent(ObjectPageMode.IconTabBar));
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('Just Some Sections', () => {
    const wrapper = renderThemedComponent(
      <ObjectPage mode={ObjectPageMode.IconTabBar}>
        <ObjectPageSection id={'1'}>Test</ObjectPageSection>
        <ObjectPageSection id={'2'}>Test 2</ObjectPageSection>
      </ObjectPage>
    );

    expect(wrapper.html()).to.matchSnapshot();
  });

  it('Not crashing with 1 section', () => {
    const wrapper = mountThemedComponent(
      <ObjectPage mode={ObjectPageMode.IconTabBar}>
        <ObjectPageSection id={'1'}>Test</ObjectPageSection>
      </ObjectPage>
    );

    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('Not crashing with 0 sections', () => {
    const wrapper = mountThemedComponent(<ObjectPage mode={ObjectPageMode.IconTabBar} />);

    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('Set selected section id', () => {
    const wrapper = mountThemedComponent(
      <ObjectPage selectedSectionId={'2'} mode={ObjectPageMode.IconTabBar}>
        <ObjectPageSection id={'1'}>Test</ObjectPageSection>
        <ObjectPageSection id={'2'}>Test 2</ObjectPageSection>
      </ObjectPage>
    );
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it.skip('onSelectedSectionChangedHandler', () => {
    const callback = sinon.spy();
    const wrapper = mountThemedComponent(
      <ObjectPage selectedSectionId={'2'} mode={ObjectPageMode.IconTabBar} onSelectedSectionChanged={callback}>
        <ObjectPageSection id={'1'}>Test</ObjectPageSection>
        <ObjectPageSection id={'2'}>Test 2</ObjectPageSection>
      </ObjectPage>
    );
    wrapper
      .find('section[role="navigation"] ui5-button')
      .first()
      .simulate('click');
    expect(getEventFromCallback(callback).getParameter('selectedSectionId')).to.eq('1');
  });
});
