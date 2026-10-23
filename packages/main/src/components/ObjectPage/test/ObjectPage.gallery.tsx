import { ObjectPageMode } from '../../../enums/ObjectPageMode.js';
import { Link } from '../../../webComponents/Link/index.js';
import { MessageStrip } from '../../../webComponents/MessageStrip/index.js';
import { Title } from '../../../webComponents/Title/index.js';
import { FlexBox } from '../../FlexBox/index.js';
import { ObjectPageHeader } from '../../ObjectPageHeader/index.js';
import { ObjectPageSection } from '../../ObjectPageSection/index.js';
import { ObjectPageSubSection } from '../../ObjectPageSubSection/index.js';
import { ObjectPageTitle } from '../../ObjectPageTitle/index.js';
import { ObjectPage } from '../index.js';

// long expandable header + a last section shorter than the viewport (relies on the bottom spacer)
export const ObjectPageLongHeaderTestComp = () => {
  return (
    <ObjectPage
      style={{ height: '100vh' }}
      titleArea={
        <ObjectPageTitle
          header={<Title>Denise Smith</Title>}
          snappedHeader={<Title>Denise Smith (snapped)</Title>}
          subHeader="Senior UI Developer"
          snappedSubHeader="Senior UI Developer (snapped)"
          expandedContent={
            <MessageStrip hideCloseButton>
              {Array.from({ length: 18 }, () => 'Information (only visible if header content is expanded)').join(' ')}
            </MessageStrip>
          }
          snappedContent={
            <MessageStrip hideCloseButton>Information (only visible if header content is snapped)</MessageStrip>
          }
        />
      }
      headerArea={
        <ObjectPageHeader>
          <FlexBox direction="Column">
            <Link>+33 6 4512 5158</Link>
            <Link href="mailto:ui5-webcomponents-react@sap.com">DeniseSmith@sap.com</Link>
          </FlexBox>
        </ObjectPageHeader>
      }
    >
      <ObjectPageSection titleText="Goals" id="goals" aria-label="Goals">
        <div style={{ height: '120px', width: '100%', background: 'lightblue' }} />
      </ObjectPageSection>
      <ObjectPageSection titleText="Personal" id="personal" aria-label="Personal">
        <div style={{ height: '400px', width: '100%', background: 'lightyellow' }} />
      </ObjectPageSection>
      <ObjectPageSection titleText="Employment" id="employment" aria-label="Employment">
        <div style={{ height: '120px', width: '100%', background: 'orange' }} />
      </ObjectPageSection>
    </ObjectPage>
  );
};

// IconTabBar + fitContent sections: switching tabs while the header is collapsed must not
// reintroduce the top header spacer, which would otherwise leave a gap above the content.
export const ObjectPageFitContentTabSwitchTestComp = () => {
  return (
    <ObjectPage
      mode={ObjectPageMode.IconTabBar}
      style={{ height: '600px' }}
      titleArea={
        <ObjectPageTitle
          header={<Title>Denise Smith</Title>}
          snappedHeader={<Title>Denise Smith (snapped)</Title>}
          subHeader="Senior UI Developer"
        />
      }
      headerArea={
        <ObjectPageHeader>
          <div style={{ height: '200px', width: '100%', background: 'lightyellow' }}>Header content</div>
        </ObjectPageHeader>
      }
    >
      <ObjectPageSection titleText="Fit 1" id="fit1" aria-label="Fit 1" fitContent>
        <div style={{ flex: 1, minHeight: 0, background: 'lightblue' }}>Fit section 1</div>
      </ObjectPageSection>
      <ObjectPageSection titleText="Fit 2" id="fit2" aria-label="Fit 2" fitContent>
        <div style={{ flex: 1, minHeight: 0, background: 'lightgreen' }}>Fit section 2</div>
      </ObjectPageSection>
      <ObjectPageSection titleText="Normal" id="normal" aria-label="Normal">
        <div style={{ height: '2000px', width: '100%', background: 'lightsalmon' }}>Normal section</div>
      </ObjectPageSection>
    </ObjectPage>
  );
};

// IconTabBar + non-fitContent sections: after collapsing the header and switching to a section shorter than the
// viewport, the top header spacer must not remain as dead space above the section (it can't be scrolled away).
// A tall section keeps the spacer so scroll-up can re-expand the collapsed header.
export const ObjectPageShortSectionTabSwitchTestComp = () => {
  return (
    <ObjectPage
      mode={ObjectPageMode.IconTabBar}
      style={{ height: '600px' }}
      titleArea={
        <ObjectPageTitle
          header={<Title>Denise Smith</Title>}
          snappedHeader={<Title>Denise Smith (snapped)</Title>}
          subHeader="Senior UI Developer"
        />
      }
      headerArea={
        <ObjectPageHeader>
          <div style={{ height: '200px', width: '100%', background: 'lightyellow' }}>Header content</div>
        </ObjectPageHeader>
      }
    >
      <ObjectPageSection titleText="Short" id="short" aria-label="Short">
        <div style={{ height: '40px', width: '100%', background: 'lightblue' }}>Short section</div>
      </ObjectPageSection>
      <ObjectPageSection titleText="Tall" id="tall" aria-label="Tall">
        <div style={{ height: '2000px', width: '100%', background: 'lightsalmon' }}>Tall section</div>
      </ObjectPageSection>
    </ObjectPage>
  );
};

export const ObjectPageAccessibleNameTestComp = () => {
  return (
    <>
      <span id="external-section-label">External section label</span>
      <ObjectPageSection id="automatic" titleText="Automatic section">
        <ObjectPageSubSection id="automatic-subsection" titleText="Automatic subsection">
          Content
        </ObjectPageSubSection>
      </ObjectPageSection>
      <ObjectPageSection id="aria-label" titleText="Section with aria-label" aria-label="Custom section label">
        Content
      </ObjectPageSection>
      <ObjectPageSection
        id="aria-labelledby"
        titleText="Section with aria-labelledby"
        aria-labelledby="external-section-label"
      >
        Content
      </ObjectPageSection>
    </>
  );
};

export const ObjectPageSingleSectionTestComp = () => {
  return (
    <>
      <ObjectPage>
        <ObjectPageSection id="single" titleText="Single section">
          <ObjectPageSubSection id="first" titleText="First subsection">
            First subsection content
          </ObjectPageSubSection>
          <ObjectPageSubSection id="second" titleText="Second subsection">
            Second subsection content
          </ObjectPageSubSection>
        </ObjectPageSection>
      </ObjectPage>
      <button type="button">After ObjectPage</button>
    </>
  );
};

export const ObjectPageSingleSectionIconTabBarTestComp = () => {
  return (
    <ObjectPage mode={ObjectPageMode.IconTabBar}>
      <ObjectPageSection id="single" titleText="Single section">
        Single section content
      </ObjectPageSection>
    </ObjectPage>
  );
};
