import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./MessageStrip-CfLGPDZy.js";import{i,r as a}from"./react-BOKIvUzN.js";import{_ as o,d as s,o as c,r as l,u}from"./blocks-BZbg3aby.js";import{S as d,T as f,b as p,f as m,t as h,u as g,w as _}from"./components-AtID__O7.js";import{n as v,t as y}from"./SubcomponentsSection-Kv79Q7K7.js";import{a as b,c as x,d as S,f as C,g as w,h as T,i as E,l as D,m as O,n as k,o as A,p as j,r as M,s as N,t as P,u as F}from"./ObjectPage.stories-D5JhQAk9.js";function I(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(s,{of:E}),`
`,(0,R.jsx)(m,{of:E,subComponents:[`ObjectPageTitle`,`ObjectPageHeader`,`ObjectPageSection`,`ObjectPageSubSection`]}),`
`,(0,R.jsx)(r,{hideCloseButton:!0,children:`In iframes, smooth scrolling is disabled!`}),`
`,(0,R.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,R.jsx)(l,{of:P}),`
`,(0,R.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,R.jsx)(p,{of:P}),`
`,(0,R.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,R.jsx)(t.p,{children:`This component exposes public methods. You can use them directly on the instance of the component, e.g. by using React Refs.`}),`
`,(0,R.jsxs)(`table`,{children:[(0,R.jsx)(`thead`,{children:(0,R.jsxs)(`tr`,{children:[(0,R.jsx)(`th`,{children:`Name`}),(0,R.jsx)(`th`,{children:`Parameters`}),(0,R.jsx)(`th`,{children:`Description`})]})}),(0,R.jsx)(`tbody`,{children:(0,R.jsxs)(`tr`,{children:[(0,R.jsx)(`td`,{children:(0,R.jsxs)(_,{children:[(0,R.jsx)(`span`,{style:{color:`rgb(64, 120, 242)`},children:`toggleHeaderArea`}),(0,R.jsx)(`span`,{style:{color:`rgb(56, 58, 66)`},children:`(`}),(0,R.jsx)(`span`,{style:{color:`rgb(56, 58, 66)`},children:`snapped`}),(0,R.jsx)(`span`,{style:{color:`rgb(64, 120, 242)`},children:`?`}),(0,R.jsx)(`span`,{style:{color:`rgb(64, 120, 242)`},children:`: `}),(0,R.jsx)(`span`,{style:{color:`rgb(80, 161, 79)`},children:`boolean`}),(0,R.jsx)(`span`,{style:{color:`rgb(56, 58, 66)`},children:`)`}),(0,R.jsx)(`span`,{style:{color:`rgb(64, 120, 242)`},children:`: `}),(0,R.jsx)(`span`,{style:{color:`rgb(80, 161, 79)`},children:`void`})]})}),(0,R.jsx)(`td`,{children:(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`p`,{style:{fontWeight:`bold`},children:`snapped`}),(0,R.jsx)(`p`,{style:{paddingInline:`1rem`},children:(0,R.jsxs)(t.p,{children:[`Defines if the header should be snapped or expanded. `,(0,R.jsx)(`br`,{}),` If the argument is not provided, the header is
toggled.`]})})]})}),(0,R.jsxs)(`td`,{children:[`Toggles the `,(0,R.jsx)(t.code,{children:`headerArea`}),` of the `,(0,R.jsx)(t.code,{children:`ObjectPage`}),`.`]})]})})]}),`
`,(0,R.jsxs)(t.h2,{id:`objectpage-with-illustratedmessage-unabletoload-placeholder`,children:[`ObjectPage with IllustratedMessage (`,(0,R.jsx)(t.code,{children:`UnableToLoad`}),`) placeholder`]}),`
`,(0,R.jsx)(l,{of:N}),`
`,(0,R.jsxs)(t.h2,{id:`objectpagesection-with-hidden-titletext-and-custom-header`,children:[`ObjectPageSection with hidden `,(0,R.jsx)(t.code,{children:`titleText`}),` and custom `,(0,R.jsx)(t.code,{children:`header`})]}),`
`,(0,R.jsx)(l,{of:b}),`
`,(0,R.jsx)(t.h2,{id:`icontabbar-objectpage-with-fullscreen-section`,children:`IconTabBar ObjectPage with fullscreen section`}),`
`,(0,R.jsxs)(t.p,{children:[`To render a section in fullscreen mode, so that it fills the remaining available height instead of growing with its content, set the `,(0,R.jsx)(t.code,{children:`fitContent`}),` prop on the `,(0,R.jsx)(t.code,{children:`ObjectPageSection`}),`. To make content fill or scroll within the section, wrap it in an element with `,(0,R.jsx)(t.code,{children:`flex: 1`}),` and `,(0,R.jsx)(t.code,{children:`min-height: 0`}),`.`]}),`
`,(0,R.jsxs)(t.p,{children:[(0,R.jsx)(t.strong,{children:`Note:`}),` `,(0,R.jsx)(t.code,{children:`fitContent`}),` is only supported in `,(0,R.jsx)(t.code,{children:`IconTabBar`}),` mode.`]}),`
`,(0,R.jsx)(l,{of:k}),`
`,(0,R.jsx)(t.h3,{id:`example-section`,children:`Example section`}),`
`,(0,R.jsx)(t.pre,{children:(0,R.jsx)(t.code,{className:`language-jsx`,children:`<ObjectPageSection titleText="Section with Overflow" id="section3" fitContent>
  <div style={{ flex: 1, minHeight: 0, overflow: 'auto' }}>
    <div style={{ height: '300%', background: 'lightyellow' }} />
  </div>
</ObjectPageSection>
`})}),`
`,(0,R.jsx)(t.h3,{id:`sections-with-subsections`,children:`Sections with subsections`}),`
`,(0,R.jsxs)(t.p,{children:[`When a `,(0,R.jsx)(t.code,{children:`fitContent`}),` section contains `,(0,R.jsx)(t.code,{children:`ObjectPageSubSection`}),`s, keep them as direct children — don't wrap them. The section becomes the scroll container itself, so overflowing subsections scroll within it while the footer stays visible.`]}),`
`,(0,R.jsx)(t.pre,{children:(0,R.jsx)(t.code,{className:`language-jsx`,children:`<ObjectPageSection titleText="Details" id="details" fitContent>
  <ObjectPageSubSection titleText="Subsection 1" id="sub1">
    <div style={{ height: '80vh' }} />
  </ObjectPageSubSection>
  <ObjectPageSubSection titleText="Subsection 2" id="sub2">
    <div style={{ height: '80vh' }} />
  </ObjectPageSubSection>
</ObjectPageSection>
`})}),`
`,(0,R.jsx)(t.h2,{id:`objectpage-with-single-section`,children:`ObjectPage with single section`}),`
`,(0,R.jsx)(t.p,{children:`When only a single section is available, the tabbar is hidden.`}),`
`,(0,R.jsx)(l,{of:A}),`
`,(0,R.jsx)(t.h2,{id:`opening-popover-components-by-pressing-an-action`,children:`Opening popover components by pressing an action`}),`
`,(0,R.jsxs)(t.p,{children:[`Please see the `,(0,R.jsx)(t.a,{href:`?path=/docs/layouts-floorplans-toolbar--docs#open-popovers-with-toolbarbutton`,children:`Docs`}),` of the `,(0,R.jsx)(t.code,{children:`Toolbar`}),` component.`]}),`
`,(0,R.jsx)(t.h2,{id:`legacy-toolbar-support`,children:`Legacy Toolbar Support`}),`
`,(0,R.jsxs)(t.p,{children:[`The ObjectPage still supports the old (React-only) `,(0,R.jsx)(t.code,{children:`Toolbar`}),` implementation. Please only use this toolbar if your app is dependent on some features the `,(0,R.jsx)(t.code,{children:`Toolbar`}),` web component is currently not offering.
Also, when using the legacy `,(0,R.jsx)(t.code,{children:`Toolbar`}),` there are some things to consider that work out of the box with the recommended Toolbar:`]}),`
`,(0,R.jsxs)(t.ul,{children:[`
`,(0,R.jsxs)(t.li,{children:[`To correctly align the actions to the end, use a legacy `,(0,R.jsx)(t.code,{children:`ToolbarSpacer`}),` as first child of the `,(0,R.jsx)(t.code,{children:`Toolbar`}),`.`]}),`
`,(0,R.jsxs)(t.li,{children:[`Toggling the `,(0,R.jsx)(t.code,{children:`headerArea`}),` by clicking on the empty space inside the legacy `,(0,R.jsx)(t.code,{children:`Toolbar`}),` has to be implemented on app side now. Please make sure to add the `,(0,R.jsx)(t.code,{children:`data-in-object-page-title`}),` prop to the toolbars, as otherwise the `,(0,R.jsx)(t.code,{children:`click`}),` event isn't fired. You can see an example of how to achieve this behavior below.`]}),`
`]}),`
`,(0,R.jsx)(l,{of:M,sourceState:`hidden`}),`
`,(0,R.jsx)(t.h3,{id:`code`,children:`Code`}),`
`,(0,R.jsxs)(`details`,{children:[(0,R.jsx)(`summary`,{children:`Show Code`}),(0,R.jsx)(t.pre,{children:(0,R.jsx)(t.code,{className:`language-tsx`,children:`import { useRef } from 'react';
import { Toolbar as LegacyToolbar } from '@ui5/webcomponents-react-compat/dist/components/Toolbar/index.js';
import { ToolbarSpacer as LegacyToolbarSpacer } from '@ui5/webcomponents-react-compat/dist/components/ToolbarSpacer/index.js';
import { Button, ButtonDesign, ObjectPage, ObjectPageSection, ObjectPageTitle } from '@ui5/webcomponents-react';
import type { ObjectPageDomRef } from '@ui5/webcomponents-react';

function ObjectPageWithLegacyToolbar(props) {
  const objectPageRef = useRef<ObjectPageDomRef>(null);
  const handleToolbarClick = (e) => {
    if (e.target.dataset.componentName === 'ToolbarContent') {
      objectPageRef.current.toggleHeaderArea();
    }
  };
  return (
    <ObjectPage
      {...props}
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
              <Button icon={'full-screen'} design={ButtonDesign.Transparent} />
              <Button icon={'exit-full-screen'} design={ButtonDesign.Transparent} />
              <Button icon={'decline'} design={ButtonDesign.Transparent} />
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
}
`})})]}),`
`,(0,R.jsx)(u,{children:y}),`
`,(0,R.jsx)(t.h2,{id:`objectpagetitle`,children:`ObjectPageTitle`}),`
`,(0,R.jsx)(c,{of:j}),`
`,(0,R.jsx)(d,{metaOf:E,of:j}),`
`,(0,R.jsx)(t.h2,{id:`objectpageheader`,children:`ObjectPageHeader`}),`
`,(0,R.jsx)(c,{of:T}),`
`,(0,R.jsx)(d,{metaOf:E,of:T}),`
`,(0,R.jsx)(t.h2,{id:`objectpagesection`,children:`ObjectPageSection`}),`
`,(0,R.jsx)(c,{of:S}),`
`,(0,R.jsx)(d,{metaOf:E,of:S}),`
`,(0,R.jsx)(t.h2,{id:`objectpagesubsection`,children:`ObjectPageSubSection`}),`
`,(0,R.jsx)(c,{of:D}),`
`,(0,R.jsx)(d,{metaOf:E,of:D}),`
`,(0,R.jsx)(g,{})]})}function L(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,R.jsx)(t,{...e,children:(0,R.jsx)(I,{...e})}):I(e)}var R;function z(){return(z=e((()=>{R=t(),a(),h(),o(),x(),v(),O(),w(),C(),F(),f(),n()})))()}z();export{L as default};