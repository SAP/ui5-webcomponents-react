import '@ui5/webcomponents-icons/dist/AllIcons.js';
import { CSSProperties, useRef, useState } from 'react';
import {
  Bar,
  BarDesign,
  Breadcrumbs,
  BreadcrumbsItem,
  Button,
  ButtonDesign,
  DynamicPageHeader,
  DynamicPageTitle,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxWrap,
  Label,
  Link,
  ObjectPage,
  ObjectPageMode,
  ObjectPagePropTypes,
  ObjectPageSection,
  ObjectPageSubSection,
  ObjectStatus,
  ValueState
} from '../..';

describe('ObjectPage', () => {
  it('toggle header', () => {
    const toggle = cy.spy().as('toggleSpy');
    cy.mount(
      <ObjectPage
        headerTitle={<DynamicPageTitle header="Heading" subHeader="SubHeading" />}
        headerContent={<DynamicPageHeader>ObjectPageHeader</DynamicPageHeader>}
        onToggleHeaderContent={toggle}
        headerContentPinnable={false}
        showHideHeaderButton
      >
        <ObjectPageSection id="section" titleText="Section">
          Content
        </ObjectPageSection>
      </ObjectPage>
    );
    cy.findByText('ObjectPageHeader').should('be.visible');

    cy.get('[data-component-name="DynamicPageAnchorBar"] > [ui5-button]').click();
    cy.findByText('ObjectPageHeader').should('not.be.visible');
    cy.get('@toggleSpy').should('have.been.calledOnce');
    cy.get('@toggleSpy').should('have.been.calledWith', false);

    cy.get('[data-component-name="DynamicPageAnchorBar"] > [ui5-button]').click();
    cy.findByText('ObjectPageHeader').should('be.visible');
    cy.get('@toggleSpy').should('have.been.calledWith', true);
    cy.get('@toggleSpy').should('have.been.calledTwice');

    cy.findByText('Heading').click();
    cy.findByText('ObjectPageHeader').should('not.be.visible');
    cy.get('@toggleSpy').should('have.been.calledThrice');
    cy.get('@toggleSpy').should('have.been.calledWith', false);

    cy.get('[data-component-name="DynamicPageTitle"]').click();
    cy.findByText('ObjectPageHeader').should('be.visible');
    cy.get('@toggleSpy').should('have.been.calledWith', true);
    cy.get('@toggleSpy').should('have.callCount', 4);
  });

  it('pin header', () => {
    const pin = cy.spy().as('onPinSpy');
    cy.mount(
      <ObjectPage
        style={{ height: '100vh' }}
        headerTitle={<DynamicPageTitle header="Heading" subHeader="SubHeading" />}
        headerContent={<DynamicPageHeader>ObjectPageHeader</DynamicPageHeader>}
        headerContentPinnable
        showHideHeaderButton
        onPinnedStateChange={pin}
        data-testid="op"
      >
        <ObjectPageSection id="section" titleText="Section">
          <div style={{ height: '2000px' }} />
        </ObjectPageSection>
      </ObjectPage>
    );
    cy.wait(50);

    cy.findByTestId('op').scrollTo(0, 500);
    cy.findByText('ObjectPageHeader').should('not.be.visible');

    cy.findByTestId('op').scrollTo('top');

    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').click();
    cy.get('@onPinSpy').should('have.been.calledOnce');
    cy.get('@onPinSpy').should('have.been.calledWith', true);

    cy.findByTestId('op').scrollTo(0, 500);
    cy.findByText('ObjectPageHeader').should('be.visible');

    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').click();
    cy.get('@onPinSpy').should('have.been.calledTwice');
    cy.get('@onPinSpy').should('have.been.calledWith', false);
    cy.findByText('ObjectPageHeader').should('not.be.visible');
  });

  it('programmatically pin header (`alwaysShowContentHeader`)', () => {
    const TestComp = ({ onPinnedStateChange }: ObjectPagePropTypes) => {
      const [pinned, setPinned] = useState(false);
      const handlePinChange = (pinned) => {
        onPinnedStateChange(pinned);
        setPinned(pinned);
      };
      return (
        <>
          <Button
            data-testid="btn"
            onClick={() => {
              setPinned((prev) => !prev);
            }}
          >
            toggle {`${!pinned}`}
          </Button>
          <ObjectPage
            style={{ height: '100vh' }}
            headerTitle={<DynamicPageTitle header="Heading" subHeader="SubHeading" />}
            headerContent={<DynamicPageHeader>ObjectPageHeader</DynamicPageHeader>}
            headerContentPinnable
            showHideHeaderButton
            alwaysShowContentHeader={pinned}
            onPinnedStateChange={handlePinChange}
            data-testid="op"
          >
            <ObjectPageSection id="section" titleText="Section">
              <div style={{ height: '2000px' }} />
            </ObjectPageSection>
          </ObjectPage>
        </>
      );
    };
    const pin = cy.spy().as('onPinSpy');
    cy.mount(<TestComp onPinnedStateChange={pin} />);
    cy.wait(50);

    cy.findByTestId('op').scrollTo(0, 500);
    cy.findByText('ObjectPageHeader').should('not.be.visible');

    cy.findByTestId('btn').click();
    cy.get('@onPinSpy').should('have.been.calledOnce');
    cy.get('@onPinSpy').should('have.been.calledWith', true);
    cy.findByText('ObjectPageHeader').should('be.visible');

    cy.findByTestId('op').scrollTo(0, 0);
    cy.findByText('ObjectPageHeader').should('be.visible');

    cy.findByTestId('op').scrollTo(0, 800);
    cy.findByText('ObjectPageHeader').should('be.visible');

    cy.findByTestId('btn').click();
    cy.get('@onPinSpy').should('have.been.calledTwice');
    cy.get('@onPinSpy').should('have.been.calledWith', false);
    cy.findByText('ObjectPageHeader').should('not.be.visible');

    cy.findByTestId('btn').click();
    cy.findByTestId('op').scrollTo(0, 500);
    cy.findByText('ObjectPageHeader').should('be.visible');

    cy.findByTestId('btn').click();
    cy.findByText('ObjectPageHeader').should('not.be.visible');

    cy.get('[data-component-name="DynamicPageAnchorBarExpandBtn"]').click();
    cy.findByText('ObjectPageHeader').should('be.visible');

    // wait for timeout of expand click
    cy.wait(500);

    cy.findByTestId('op').scrollTo(0, 501);
    cy.findByText('ObjectPageHeader').should('not.be.visible');

    cy.findByTestId('op').scrollTo(0, 30);
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').click();
    cy.get('@onPinSpy').should('have.callCount', 5);
    cy.findByTestId('btn').should('have.text', 'toggle false');
    cy.findByText('ObjectPageHeader').should('be.visible');

    cy.findByTestId('op').scrollTo(0, 500);
    cy.findByTestId('btn').click();
    cy.findByText('ObjectPageHeader').should('not.be.visible');

    cy.findByTestId('btn').click();
    cy.findByText('ObjectPageHeader').should('be.visible');
    cy.get('@onPinSpy').should('have.callCount', 7);
  });

  it('collapse header when partially visible', () => {
    cy.viewport(1440, 1080);
    cy.mount(
      <ObjectPage
        style={{ height: '100vh' }}
        headerTitle={<DynamicPageTitle header="Heading" subHeader="SubHeading" />}
        headerContent={
          <DynamicPageHeader>
            <div style={{ height: '400px', width: '100%', background: 'lightyellow' }}>ObjectPageHeader</div>
          </DynamicPageHeader>
        }
        headerContentPinnable
        showHideHeaderButton
        data-testid="op"
      >
        <ObjectPageSection id="section" titleText="Section">
          <div style={{ height: '2000px' }} />
        </ObjectPageSection>
      </ObjectPage>
    );
    cy.wait(50);

    cy.findByTestId('op').scrollTo(0, 400);
    cy.get('[data-component-name="DynamicPageAnchorBarExpandBtn"]').click();
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').should('not.exist');
    cy.findByText('ObjectPageHeader').should('not.be.visible');

    // wait for timeout of expand click
    cy.wait(500);

    cy.findByTestId('op').scrollTo(0, 1);
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').should('not.exist');
    cy.wait(50);
    cy.findByTestId('op').scrollTo(0, 0);
    cy.get('[data-component-name="DynamicPageAnchorBarPinBtn"]').should('be.visible');
    cy.findByText('ObjectPageHeader').should('be.visible');
  });

  it('scroll to sections - default mode', () => {
    document.body.style.margin = '0px';
    cy.mount(
      <ObjectPage headerTitle={DPTitle} headerContent={DPContent}>
        {OPContent}
      </ObjectPage>
    );
    cy.findByText('Employment').should('not.be.visible');
    cy.findByText('Test').should('be.visible');

    cy.wait(50);

    cy.get('[ui5-tabcontainer]').shadow().findByText('Employment').click({ force: true });
    cy.findByText('Employment').should('be.visible');

    cy.get('[ui5-tabcontainer]').shadow().findByText('Goals').click({ force: true });
    cy.findByText('Test').should('be.visible');

    cy.get('[ui5-tabcontainer]').shadow().get('[aria-posinset="4"] [ui5-button]').click({ force: true });

    cy.get('[ui5-static-area-item]').shadow().get('[ui5-list]').findByText('Job Relationship').click({ force: true });
    cy.findByText('Job Relationship').should('be.visible');

    cy.mount(
      <ObjectPage headerTitle={DPTitle} headerContent={DPContent} footer={Footer}>
        {OPContent}
      </ObjectPage>
    );
    cy.findByText('Employment').should('not.be.visible');
    cy.findByText('Test').should('be.visible');
    cy.findByTestId('footer').should('be.visible');

    cy.wait(50);

    cy.get('[ui5-tabcontainer]').shadow().findByText('Employment').click({ force: true });
    cy.findByText('Employment').should('be.visible');
    cy.findByTestId('footer').should('be.visible');

    cy.get('[ui5-tabcontainer]').shadow().findByText('Goals').click({ force: true });
    cy.findByText('Test').should('be.visible');
    cy.findByTestId('footer').should('be.visible');

    cy.get('[ui5-tabcontainer]').shadow().get('[aria-posinset="4"] [ui5-button]').click({ force: true });

    cy.get('[ui5-static-area-item]').shadow().get('[ui5-list]').findByText('Job Relationship').click({ force: true });
    cy.findByText('Job Relationship').should('be.visible');
    cy.findByTestId('footer').should('be.visible');
  });

  it('scroll to sections - tab mode', () => {
    document.body.style.margin = '0px';
    cy.mount(
      <ObjectPage headerTitle={DPTitle} headerContent={DPContent} mode={ObjectPageMode.IconTabBar}>
        {OPContent}
      </ObjectPage>
    );
    cy.findByText('Job Information').should('not.exist');
    cy.findByTestId('section 1').should('be.visible');

    cy.wait(50);

    cy.get('[ui5-tabcontainer]').shadow().findByText('Employment').click({ force: true });
    cy.findByText('Job Information').should('be.visible');
    cy.findByTestId('section 1').should('not.exist');

    cy.get('[ui5-tabcontainer]').shadow().findByText('Goals').click({ force: true });
    cy.findByText('section 2').should('not.exist');
    cy.findByTestId('section 1').should('be.visible');

    cy.get('[ui5-tabcontainer]').shadow().get('[aria-posinset="4"] [ui5-button]').click({ force: true });

    cy.get('[ui5-static-area-item]').shadow().get('[ui5-list]').findByText('Job Relationship').click({ force: true });
    cy.findByText('Job Information').should('not.be.visible');
    cy.findByText('Job Relationship').should('be.visible');

    cy.mount(
      <ObjectPage headerTitle={DPTitle} headerContent={DPContent} footer={Footer} mode={ObjectPageMode.IconTabBar}>
        {OPContent}
      </ObjectPage>
    );

    cy.findByText('Job Information').should('not.exist');
    cy.findByTestId('section 1').should('be.visible');
    cy.findByTestId('footer').should('be.visible');

    cy.wait(50);

    cy.get('[ui5-tabcontainer]').shadow().findByText('Employment').click({ force: true });
    cy.findByText('Job Information').should('be.visible');
    cy.findByTestId('section 1').should('not.exist');
    cy.findByTestId('footer').should('be.visible');

    cy.get('[ui5-tabcontainer]').shadow().findByText('Goals').click({ force: true });
    cy.findByText('section 2').should('not.exist');
    cy.findByTestId('section 1').should('be.visible');
    cy.findByTestId('footer').should('be.visible');

    cy.get('[ui5-tabcontainer]').shadow().get('[aria-posinset="4"] [ui5-button]').click({ force: true });

    cy.get('[ui5-static-area-item]').shadow().get('[ui5-list]').findByText('Job Relationship').click({ force: true });
    cy.findByText('Job Information').should('not.be.visible');
    cy.findByText('Job Relationship').should('be.visible');
    cy.findByTestId('footer').should('be.visible');
  });

  it('single section', () => {
    document.body.style.margin = '0px';
    const TestComp = ({
      mode,
      height,
      withFooter
    }: {
      height: CSSProperties['height'];
      withFooter?: boolean;
      mode: ObjectPageMode;
    }) => {
      const ref = useRef(null);
      const [showCurrentHeights, setShowCurrentHeights] = useState({ offset: null, scroll: null });
      return (
        <ObjectPage
          style={{ height: '100vh' }}
          headerTitle={DPTitle}
          headerContent={DPContent}
          data-testid="op"
          showHideHeaderButton
          ref={ref}
          footer={withFooter && Footer}
          mode={mode}
        >
          <ObjectPageSection key="0" titleText="Goals" id="goals" aria-label="Goals">
            <div data-testid="section 1" style={{ height, width: '100%', background: 'lightblue' }}>
              <Button
                onClick={() => {
                  setShowCurrentHeights({ offset: ref.current?.offsetHeight, scroll: ref.current?.scrollHeight });
                }}
              >
                Update Heights
              </Button>
              <div>{JSON.stringify(showCurrentHeights)}</div>
            </div>
          </ObjectPageSection>
        </ObjectPage>
      );
    };

    const item = undefined;
    cy.mount(<TestComp height="2000px" mode={item} />);
    cy.findByText('Update Heights').click();
    cy.findByText('{"offset":1080,"scroll":2281}');
    // cy.findByText('{"offset":1080,"scroll":2281}').should('exist');
    //
    // cy.findByTestId('op').scrollTo('bottom');
    // cy.findByText('Update Heights').click({ force: true });
    // cy.findByText('{"offset":1080,"scroll":2281}').should('exist');
    //
    // cy.mount(<TestComp height="2000px" withFooter mode={item} />);
    // cy.findByText('Update Heights').click();
    // cy.findByText('{"offset":1080,"scroll":2341}').should('exist');
    //
    // cy.findByTestId('op').scrollTo('bottom');
    // cy.findByText('Update Heights').click({ force: true });
    // cy.findByText('{"offset":1080,"scroll":2341}').should('exist');
    //
    // cy.mount(<TestComp height="400px" mode={item} />);
    // cy.findByText('Update Heights').click();
    // cy.findByText('{"offset":1080,"scroll":1080}').should('exist');
    //
    // cy.findByTestId('op').scrollTo('bottom', { ensureScrollable: false });
    // cy.findByText('Update Heights').click({ force: true });
    // cy.findByText('{"offset":1080,"scroll":1080}').should('exist');
    //
    // cy.get('[data-component-name="DynamicPageAnchorBarExpandBtn"]').click();
    // cy.findByText('Update Heights').click({ force: true });
    // cy.findByText('{"offset":1080,"scroll":1080}').should('exist');
    //
    // cy.mount(<TestComp height="400px" withFooter mode={item} />);
    // cy.findByText('Update Heights').click();
    // cy.findByText('{"offset":1080,"scroll":1080}').should('exist');
    //
    // cy.findByTestId('op').scrollTo('bottom', { ensureScrollable: false });
    // cy.findByText('Update Heights').click({ force: true });
    // cy.findByText('{"offset":1080,"scroll":1080}').should('exist');
    //
    // cy.get('[data-component-name="DynamicPageAnchorBarExpandBtn"]').click();
    // cy.findByText('Update Heights').click({ force: true });
    // cy.findByText('{"offset":1080,"scroll":1080}').should('exist');
    //
    // cy.mount(<TestComp height="890px" mode={item} />);
    // cy.findByText('https://github.com/SAP/ui5-webcomponents-react').should('be.visible');
    //
    // cy.findByTestId('op').scrollTo('bottom');
    // cy.findByText('https://github.com/SAP/ui5-webcomponents-react').should('not.be.visible');
    // cy.get('[data-component-name="DynamicPageAnchorBarExpandBtn"]').should('have.attr', 'icon', 'slim-arrow-down');
    //
    // cy.get('[data-component-name="DynamicPageAnchorBarExpandBtn"]').click();
    // cy.findByText('https://github.com/SAP/ui5-webcomponents-react').should('be.visible');
    //
    // cy.get('[data-component-name="DynamicPageAnchorBarExpandBtn"]').click();
    // cy.findByText('https://github.com/SAP/ui5-webcomponents-react').should('not.be.visible');
  });
});

const DPTitle = (
  <DynamicPageTitle
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
  >
    <ObjectStatus state={ValueState.Success}>employed</ObjectStatus>
  </DynamicPageTitle>
);

const DPContent = (
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
);

const OPContent = [
  <ObjectPageSection key="0" titleText="Goals" id="goals" aria-label="Goals">
    <div data-testid="section 1" style={{ height: '400px', width: '100%', background: 'lightblue' }} />
  </ObjectPageSection>,
  <ObjectPageSection key="1" titleText="Test" id="test" aria-label="Test">
    <div data-testid="section 2" style={{ height: '1200px', width: '100%', background: 'lightyellow' }}></div>
  </ObjectPageSection>,
  <ObjectPageSection key="2" titleText="Personal" id="personal" aria-label="Personal">
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
      <div style={{ height: '400px', width: '100%', background: 'black' }} />
    </ObjectPageSubSection>
    <ObjectPageSubSection
      titleText="Payment Information"
      id="personal-payment-information"
      aria-label="Payment Information"
    >
      <div style={{ height: '400px', width: '100%', background: 'blue' }} />
    </ObjectPageSubSection>
  </ObjectPageSection>,
  <ObjectPageSection key="3" titleText="Employment" id="employment" aria-label="Employment">
    <ObjectPageSubSection titleText="Job Information" id="employment-job-information" aria-label="Job Information">
      <div style={{ height: '100px', width: '100%', background: 'orange' }}></div>
    </ObjectPageSubSection>
    <ObjectPageSubSection titleText="Employee Details" id="employment-employee-details" aria-label="Employee Details">
      <div style={{ height: '100px', width: '100%', background: 'cadetblue' }}></div>
    </ObjectPageSubSection>
    <ObjectPageSubSection titleText="Job Relationship" id="employment-job-relationship" aria-label="Job Relationship">
      <div style={{ height: '100px', width: '100%', background: 'lightgrey' }}></div>
    </ObjectPageSubSection>
  </ObjectPageSection>
];

const Footer = (
  <Bar
    data-testid="footer"
    design={BarDesign.FloatingFooter}
    endContent={
      <>
        <Button design={ButtonDesign.Positive}>Accept</Button>
        <Button design={ButtonDesign.Negative}>Reject</Button>
      </>
    }
  />
);
