import{j as e}from"./useIsomorphicLayoutEffect-CpdNMtv3.js";import{useMDXComponents as s}from"./index-44b7z5bc.js";import{M as i}from"./index-CBIwcddH.js";import"./index-BFoCI_-w.js";import"./TagDesign-Dou_yO3g.js";import"./index-DEe9W-hO.js";import"./index-D6UH2S5y.js";import"./chunk-HLWAVYOI-DfaEm5jZ.js";import"./UI5Element-B4CRQCUa.js";import"./copy-CgbAc49M.js";import"./Button-C_Cuoo5O.js";import{F as t}from"./ProjectTemplate-Cz3WZgkK.js";import{T as d}from"./TableOfContent-Ih9maikN.js";import"./WrappingType-CW8URInd.js";import"./iframe-DrZU0el_.js";import"../sb-preview/runtime.js";import"./_baseForOwn-DVWQo5xw.js";import"./mapValues-DXlf5GIm.js";import"./_baseUniq-BqAhPu7p.js";import"./index-Ba91SQPT.js";import"./index-DrFu-skq.js";import"./withWebComponent-DVfwWPVB.js";import"./utils-CKbRNFS-.js";import"./CustomElementsScopeUtils-C6IqSY4u.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-NJJr-Wgh.js";import"./decline-BWlX1wee.js";import"./Icons-CwMCtZ-T.js";import"./i18n-defaults-CXs2tJOZ.js";import"./information-Dhbw5K85.js";import"./alert-7wwKJW96.js";import"./class-map-nHH1vjEv.js";import"./if-defined-BG38O0o4.js";import"./Icon-R7_7gBpk.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-DQGkr9pp.js";import"./i18n-defaults-vwvk3Exl.js";import"./client-BEgA9EFc.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-CLdwWUG3.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-B1i3sL0q.js";import"./Popover-CA74kJve.js";import"./Integer-DgRYWdxf.js";import"./PopupsCommon.css-C85aKd3d.js";import"./FocusableElements-bN8doqn4.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Bwj_klJ5.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-Chhl6hRu.js";import"./BrowserScrollbar.css-Dn2WHWng.js";import"./index-rDrF4wjJ.js";import"./Label-BA6opWOJ.js";import"./index-ESfUDnIX.js";import"./index-CnepguqB.js";import"./Link-CjU86A1I.js";import"./index-CSNRLAGK.js";import"./index-DNgsHEOA.js";import"./I18nContext-qX06pm-v.js";import"./ModalsContext-C4nEcU7T.js";import"./useIsomorphicId-CULvwDT0.js";import"./addCustomCSSWithScoping-DtQWRUC7.js";import"./index-D1eErJqF.js";import"./index-B19LD4Io.js";import"./index-CYMWM2M2.js";import"./Avatar-5-z1ijpg.js";import"./employee-CMmC12VS.js";import"./index-Dvs4Bux0.js";function r(o){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Migration Guide"}),`
`,e.jsx(n.h1,{id:"migration-guide-v1-to-v2",children:"Migration Guide (v1 to v2)"}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[`The most important breaking changes of the corresponding releases are outlined here.
For a full list of all changes, please refer to `,e.jsx(n.a,{href:"https://github.com/SAP/ui5-webcomponents-react/releases",rel:"nofollow",children:"the list of releases"}),`
or the `,e.jsx(n.a,{href:"?path=/docs/change-log--page",children:"changelog"}),"."]})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Older releases"}),e.jsx(n.br,{}),`
`,`This migration guide only covers breaking changes when updating from v1 to v2.
For migration guides for older releases, please refer to our `,e.jsx(n.a,{href:"https://github.com/SAP/ui5-webcomponents-react/blob/main/docs/MigrationGuide.archive.md",rel:"nofollow",children:"Migration Guide Archive"}),"."]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(d,{headingSelector:"h2, h3"}),`
`,e.jsx(n.h2,{id:"general-changes",children:"General changes"}),`
`,e.jsxs(n.h3,{id:"removed-react-jss",children:["Removed ",e.jsx(n.code,{children:"react-jss"})]}),`
`,e.jsxs(n.p,{children:["UI5 Web Components for React is no longer relying on ",e.jsx(n.code,{children:"react-jss"})," internally, hence the dependency is now removed and the ",e.jsx(n.code,{children:"react-jss"})," ThemeProvider is no longer rendered as part of our ",e.jsx(n.code,{children:"ThemeProvider"}),`.
If you are relying on `,e.jsx(n.code,{children:"react-jss"})," in your application, please make sure to render your own ",e.jsx(n.code,{children:"react-jss"})," ThemeProvider:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ThemeProvider } from '@ui5/webcomponents-react';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { ThemeProvider as ReactJssThemeProvider } from 'react-jss';

function MyRootComponent() {
  return (
    <ThemeProvider>
      <ReactJssThemeProvider theme={ThemingParameters}>{/* your app content goes here */}</ReactJssThemeProvider>
    </ThemeProvider>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"changes-exclusive-to-typescript",children:"Changes Exclusive to TypeScript"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Removed ",e.jsx(n.code,{children:"dangerouslySetInnerHTML"}),` from general prop types since it was never intended to be used with our library.
If you've previously used this prop and the component didn't change with the update, then it might still work, but you'll probably need to suppress the TypeScript error.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"scrollbar-styling",children:"Scrollbar Styling"}),`
`,e.jsxs(n.p,{children:["Starting with v2, the ",e.jsx(n.code,{children:"ThemeProvider"}),` will apply the Fiori styles to all scrollbars on the page.
If you have previously used our global style classes `,e.jsx(n.code,{children:"sapScrollBar"})," or ",e.jsx(n.code,{children:"inheritingSapScrollBar"}),", you can now remove them."]}),`
`,e.jsxs(n.p,{children:["To opt-out of this behavior, you can add the ",e.jsx(n.code,{children:".ui5-content-native-scrollbars"})," class to the element to prevent the scrollbar styling from being applied."]}),`
`,e.jsxs(n.p,{children:["More details can be found in our ",e.jsx(n.a,{href:"?path=/docs/knowledge-base-styling--docs#scrollbars",children:"Styling Knowledge Base"}),"."]}),`
`,e.jsx(n.h2,{id:"removed-hooks",children:"Removed hooks"}),`
`,e.jsx(n.h3,{id:"useresponsivecontentpadding",children:e.jsx(n.code,{children:"useResponsiveContentPadding"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useResponsiveContentPadding"}),` hook has been removed.
You can now apply responsive content paddings by applying the `,e.jsx(n.code,{children:"sap-content-paddings-container"})," class from ",e.jsx(n.code,{children:"@sap-ui/common-css"}),` package to your element.
You can find a more detailed documentation `,e.jsx(n.a,{href:"https://sap.github.io/ui5-webcomponents-react/main/?path=/docs/knowledge-base-common-css--docs#content-paddings",rel:"nofollow",children:"here"}),"."]}),`
`,e.jsx(n.h2,{id:"replaced-components",children:"Replaced Components"}),`
`,e.jsx(n.h3,{id:"analyticalcard",children:"AnalyticalCard"}),`
`,e.jsxs(n.p,{children:["The deprecated ",e.jsx(n.code,{children:"AnalyticalCard"})," component has been replaced with the ",e.jsx(n.code,{children:"Card"})," web component as a drop-in replacement:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v1
import { AnalyticalCard, AnalyticalCardHeader } from '@ui5/webcomponents-react';

function MyComponent() {
  return (
    <AnalyticalCard header={<AnalyticalCardHeader />}>
      <span>My Content</span>
    </AnalyticalCard>
  );
}

// v2
import { AnalyticalCardHeader, Card } from '@ui5/webcomponents-react';

function MyComponent() {
  return (
    <Card header={<AnalyticalCardHeader />}>
      <span>My Content</span>
    </Card>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"dynamicpage",children:"DynamicPage"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"DynamicPage"})," component has been replaced with the ",e.jsx(n.code,{children:"ui5-dynamic-page"})," web component. This comes with a few breaking changes:"]}),`
`,e.jsx(n.h4,{id:"replaced-props",children:"Replaced Props"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"backgroundDesign"})," is not available anymore. To set the background of the page you can use standard CSS and the respective CSS variables instead:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"List:"})," ",e.jsx(n.code,{children:"var(--sapGroup_ContentBackground)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Solid:"})," ",e.jsx(n.code,{children:"var(--sapBackgroundColor)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Transparent:"})," ",e.jsx(n.code,{children:"transparent"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"alwaysShowContentHeader"})," has been renamed to ",e.jsx(n.code,{children:"headerPinned"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"headerCollapsed"})," has been renamed to ",e.jsx(n.code,{children:"headerSnapped"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"headerContentPinnable"})," (default: ",e.jsx(n.code,{children:"true"}),") has been replaced by ",e.jsx(n.code,{children:"hidePinButton"})," (default: ",e.jsx(n.code,{children:"false"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"footer"})," has been replaced by ",e.jsx(n.code,{children:"footerArea"})," and is now a ",e.jsx(n.code,{children:"slot"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"headerContent"})," has been replaced by ",e.jsx(n.code,{children:"headerArea"})," and is now a ",e.jsx(n.code,{children:"slot"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"headerTitle"})," has been replaced by ",e.jsx(n.code,{children:"titleArea"})," and is now a ",e.jsx(n.code,{children:"slot"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Events:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onPinnedStateChange"})," has been replaced by ",e.jsx(n.code,{children:"onPinButtonToggle"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onToggleHeaderContent"})," has been replaced by ",e.jsx(n.code,{children:"onTitleToggle"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// v1
function DynamicPageComponent(props) {
  const [pinned, setPinned] = useState(false);
  const [expanded, setExpanded] = useState(true);
  return (
    <DynamicPage
      {...props}
      onPinnedStateChange={(pinned) => setPinned(pinned)}
      onToggleHeaderContent={(visible) => {
        setExpanded(visible);
      }}
    />
  );
}

// v2
function DynamicPageComponent(props) {
  const [pinned, setPinned] = useState(false);
  const [expanded, setExpanded] = useState(true);
  return (
    <DynamicPage
      {...props}
      onPinButtonToggle={(event) => setPinned(event.target.headerPinned)}
      onTitleToggle={(event) => {
        setExpanded(!event.target.headerSnapped);
      }}
    />
  );
}
`})}),`
`]}),`
`]}),`
`,e.jsx(n.h4,{id:"removed-props",children:"Removed Props"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"preserveHeaderStateOnScroll"}),": You should be able to achieve the same behavior with the ",e.jsx(n.code,{children:"headerPinned"})," prop."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"showHideHeaderButton"}),": Hiding the expand/collapse button is not supported by design anymore."]}),`
`]}),`
`,e.jsx(n.h3,{id:"dynamicpageheader",children:"DynamicPageHeader"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"DynamicPageHeader"})," component has been replaced with the ",e.jsx(n.code,{children:"ui5-dynamic-page-header"}),` web component.
Since the `,e.jsx(n.code,{children:"ObjectPage"})," isn't compatible with the ",e.jsx(n.code,{children:"DynamicPageHeader"})," web component, please use the ",e.jsx(n.code,{children:"ObjectPageHeader"})," component in the ",e.jsx(n.code,{children:"ObjectPage"})," instead."]}),`
`,e.jsx(n.h3,{id:"dynamicpagetitle",children:"DynamicPageTitle"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"DynamicPageTitle"})," component has been replaced with the ",e.jsx(n.code,{children:"ui5-dynamic-page-title"}),` web component. This comes with a few breaking changes listed below.
Since the `,e.jsx(n.code,{children:"ObjectPage"})," isn't compatible with the ",e.jsx(n.code,{children:"DynamicPageTitle"})," web component, please use the ",e.jsx(n.code,{children:"ObjectPageTitle"})," component in the ",e.jsx(n.code,{children:"ObjectPage"})," instead."]}),`
`,e.jsx(n.h4,{id:"replaced-props-1",children:"Replaced Props"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"actions"})," has been replaced by ",e.jsx(n.code,{children:"actionsBar"})," and is now a ",e.jsx(n.code,{children:"slot"}),". Instead of passing actions (e.g. ",e.jsx(n.code,{children:"Buttons"}),") directly, it is now recommended to use the ",e.jsx(n.code,{children:"Toolbar"})," component in order to preserve the intended design."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"navigationActions"})," has been replaced by ",e.jsx(n.code,{children:"navigationBar"})," and is now a ",e.jsx(n.code,{children:"slot"}),". Instead of passing actions (e.g. ",e.jsx(n.code,{children:"Buttons"}),") directly, it is now recommended to use the ",e.jsx(n.code,{children:"Toolbar"})," component in order to preserve the intended design."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"subHeader"})," has been renamed to ",e.jsx(n.code,{children:"subheading"})," and is now a slot."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"header"})," has been renamed to ",e.jsx(n.code,{children:"heading"})," and is now a ",e.jsx(n.code,{children:"slot"}),". The ",e.jsx(n.code,{children:"font-size"})," isn't automatically adjusted anymore, so to keep the intended design you can leverage the new ",e.jsx(n.code,{children:"snappedHeading"})," prop and apply the corresponding CSS Variables yourself. (see example below)"]}),`
`,e.jsx(n.p,{children:"Example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<DynamicPageTitle
  heading={<Title style={{ fontSize: 'var(--sapObjectHeader_Title_FontSize)' }}>Header Title</Title>}
  snappedHeading={
    <Title style={{ fontSize: 'var(--sapObjectHeader_Title_SnappedFontSize)' }}>Snapped Header Title</Title>
  }
/>
`})}),`
`]}),`
`]}),`
`,e.jsx(n.h4,{id:"removed-props-1",children:"Removed Props"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"showSubHeaderRight"})," is not defined by the global design guidelines and is therefore not available with the new web component."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"actionsToolbarProps"})," is not necessary anymore, as you now can pass a ",e.jsx(n.code,{children:"Toolbar"})," yourself."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"navigationActionsToolbarProps"})," is not necessary anymore, as you now can pass a ",e.jsx(n.code,{children:"Toolbar"})," yourself."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"expandedContent"})," is now part of the ",e.jsx(n.code,{children:"subheading"})," prop, so if you've rendered a ",e.jsx(n.code,{children:"MessageStrip"})," below the ",e.jsx(n.code,{children:"subHeader"})," for example, you can now render the subheading and additional content both in the same slot."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"snappedContent"})," is now part of the ",e.jsx(n.code,{children:"snappedSubheading"})," prop, so if you've rendered a ",e.jsx(n.code,{children:"MessageStrip"})," below the ",e.jsx(n.code,{children:"subHeader"})," for example, you can now render the subheading and additional content both in the same slot."]}),`
`,e.jsxs(n.p,{children:["Example for combined ",e.jsx(n.code,{children:"subHeader"})," and ",e.jsx(n.code,{children:"expanded/snappedContent"})," in ",e.jsx(n.code,{children:"subheading"}),"/",e.jsx(n.code,{children:"snappedSubheading"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<DynamicPageTitle
  subheading={
    <>
      <Label>Subheader</Label>
      <MessageStrip>Information (only visible if header content is expanded)</MessageStrip>
    </>
  }
  snappedSubheading={
    <>
      <Label>Snapped Subheader</Label>
      <MessageStrip>Information (only visible if header content is collapsed (snapped))</MessageStrip>
    </>
  }
/>
`})}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"form",children:"Form"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Form"})," component has been replaced with the ",e.jsx(n.code,{children:"ui5-form"}),` Web Component.
You can use the new `,e.jsx(n.code,{children:"Form"})," component as a feature complete replacement of the old Form component with the important differences to mention:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["You can't mix ",e.jsx(n.code,{children:"FormGroup"}),"s and ",e.jsx(n.code,{children:"FormItem"}),"s as children of the Form. Either only use ",e.jsx(n.code,{children:"FormItem"}),"s or only ",e.jsx(n.code,{children:"FormGroup"}),"s with ",e.jsx(n.code,{children:"FormItem"}),"s inside."]}),`
`,e.jsxs(n.li,{children:["Additional HTML elements between ",e.jsx(n.code,{children:"Form / FormGroup / FormItem"})," are not allowed. You can still use custom React components if they render a ",e.jsx(n.code,{children:"FormGroup"})," or ",e.jsx(n.code,{children:"FormItem"})," as most outer element (or a fragment)."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v1
import { Form, FormGroup, FormItem } from '@ui5/webcomponents-react';

function MyComponent() {
  return (
    <Form
      backgroundDesign="Solid"
      titleText="My Form"
      labelSpanS={1}
      labelSpanM={2}
      labelSpanL={3}
      labelSpanXL={4}
      columnsS={1}
      columnsM={2}
      columnsL={3}
      columnsXL={4}
      as={'form'}
    >
      <FormGroup titleText="My Form Group" as="h5">
        <FormItem label={'MyLabel'}>{/* FormItem Content */}</FormItem>
      </FormGroup>
    </Form>
  );
}

// v2
import { Form, FormGroup, FormItem, Label } from '@ui5/webcomponents-react';

function MyComponent() {
  return (
    // \`backgroundDesign\` and \`as\` have been removed without replacement
    <Form
      // \`titleText\` has been renamed to \`headerText\`
      headerText="My Form"
      // the \`columnsX\` props have been merged into the \`layout\` string
      layout="S1 M2 L3 XL4"
      // the \`labelSpanX\` props have been merged into the \`labelSpan\` string
      labelSpan="S1 M2 L3 XL4"
    >
      {/* \`titleText\` has been renamed to \`headerText\`, \`as\` has been removed */}
      <FormGroup headerText="My Form Group">
        {/* the \`label\` prop has been renamed to a \`labelContent\` slot.
             It doesn't support strings anymore, it's recommended to use the \`Label\` component in this slot. */}
        <FormItem labelContent={<Label>MyLabel</Label>}>{/* FormItem Content */}</FormItem>
      </FormGroup>
    </Form>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"messagebox",children:"MessageBox"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onClose"})," is now a plain callback function and no ",e.jsx(n.code,{children:"CustomEvent"})," anymore. It receives two parameters, ",e.jsx(n.code,{children:"action"})," and ",e.jsx(n.code,{children:"escPressed"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// v1
// onClose?: (event: CustomEvent<{ action: MessageBoxAction }>) => void;

<MessageBox
  onClose={(event) => {
    console.log(event.detail.action);
  }}
>
  {children}
</MessageBox>

// v2
// onClose?: (action: MessageBoxActionType | undefined, escPressed?: true) => void;

<MessageBox
  onClose={(action, escPressed) => {
    console.log(action, escPressed);
  }}
>
  {children}
</MessageBox>

`})}),`
`,e.jsx(n.h3,{id:"objectpage",children:"ObjectPage"}),`
`,e.jsxs(n.p,{children:["The newly introduced ",e.jsx(n.code,{children:"DynamicPage"})," web component comes with its own ",e.jsx(n.code,{children:"DynamicPageHeader"})," and ",e.jsx(n.code,{children:"DynamicPageTitle"})," components, which are unfortunately incompatible with our ",e.jsx(n.code,{children:"ObjectPage"}),` implementation.
Please use the following components instead:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"headerContent"})," now only accepts the ",e.jsx(n.code,{children:"ObjectPageHeader"})," component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"headerTitle"})," now only accepts the ",e.jsx(n.code,{children:"ObjectPageTitle"})," component."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Renamed props:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"a11yConfig.dynamicPageAnchorBar"})," has been renamed to ",e.jsx(n.code,{children:"a11yConfig.objectPageAnchorBar"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Also, the namings of internal ",e.jsx(n.code,{children:"data-component-name"})," attributes have been adjusted accordingly. E.g. ",e.jsx(n.code,{children:'data-component-name="DynamicPageTitleSubHeader"'})," has been renamed to ",e.jsx(n.code,{children:'data-component-name="ObjectPageTitleSubHeader"'})]}),`
`,e.jsx(n.h3,{id:"text",children:"Text"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Text"})," component has been replaced with the ",e.jsx(n.code,{children:"ui5-text"})," Web Component."]}),`
`,e.jsx(n.p,{children:"The following props have been removed:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"wrapping"}),`
Can be achieved via the `,e.jsx(n.code,{children:"maxLines"})," property. If ",e.jsx(n.code,{children:"maxLines"})," is set to ",e.jsx(n.code,{children:"1"}),", the text will not wrap, otherwise it will wrap."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"renderWhitespace"}),`
Can be achieved by adding `,e.jsx(n.code,{children:"white-space: pre-wrap;"})," via inline styles or ",e.jsx(n.code,{children:"className"})," to the ",e.jsx(n.code,{children:"Text"})," component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hyphenated"})," and ",e.jsx(n.code,{children:"emptyIndicator"}),`
These props are currently not supported by the new `,e.jsx(n.code,{children:"ui5-text"})," component. You can follow this ",e.jsx(n.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/9244",rel:"nofollow",children:"feature request"})," for updates."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v1
import { Text } from '@ui5/webcomponents-react';

function MyComponent() {
  return <Text wrapping={false}>Lorem Impsum</Text>;
}

// v2
import { Text } from '@ui5/webcomponents-react';

function MyComponent() {
  return <Text maxLines={1}>Lorem Impsum</Text>;
}
`})}),`
`,e.jsx(n.h2,{id:"components-with-api-changes",children:"Components with API Changes"}),`
`,e.jsx(n.h3,{id:"actionsheet",children:"ActionSheet"}),`
`,e.jsxs(n.p,{children:["The prop ",e.jsx(n.code,{children:"portalContainer"})," has been removed as it is no longer needed due to the ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Popover_API",rel:"nofollow",children:"popover API"}),` which is now used in the UI5 Web Components.
For a better aligned API, the `,e.jsx(n.code,{children:"showCancelButton"})," prop has been replaced wih the ",e.jsx(n.code,{children:"hideCancelButton"}),` prop and the logic has been inverted.
You only need to apply changes to your code if `,e.jsx(n.code,{children:"showCancelButton"})," has been set to ",e.jsx(n.code,{children:"false"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v1
import { ActionSheet, Button } from '@ui5/webcomponents-react';

function MyComponent() {
  return (
    <ActionSheet showCancelButton={false}>
      <Button>Action 1</Button>
    </ActionSheet>
  );
}

// v2
import { ActionSheet, Button } from '@ui5/webcomponents-react';

function MyComponent() {
  return (
    <ActionSheet hideCancelButton>
      <Button>Action 1</Button>
    </ActionSheet>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"expandable-text",children:"Expandable Text"}),`
`,e.jsxs(n.p,{children:["The prop ",e.jsx(n.code,{children:"portalContainer"})," has been removed as it is no longer needed due to the ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Popover_API",rel:"nofollow",children:"popover API"}),` which is now used in the UI5 Web Components.
As the underlying `,e.jsx(n.code,{children:"Text"})," component has been replaced with the UI5 Web Component, some inherited props ",e.jsx(n.code,{children:"hyphenated"})," and ",e.jsx(n.code,{children:"emptyIndicator"})," from the ",e.jsx(n.code,{children:"Text"}),` component have been removed.
You can follow this `,e.jsx(n.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/9244",rel:"nofollow",children:"feature request"})," for updates."]}),`
`,e.jsx(n.h2,{id:"enum-changes",children:"Enum Changes"}),`
`,e.jsx(n.p,{children:"For a better alignment with the UI5 Web Components, the following enums have been renamed:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MessageBoxActions"})," has been renamed to ",e.jsx(n.code,{children:"MessageBoxAction"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MessageBoxTypes"})," has been renamed to ",e.jsx(n.code,{children:"MessageBoxType"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Themes"})," has been renamed to ",e.jsx(n.code,{children:"Theme"})]}),`
`]}),`
`,e.jsx(t,{})]})}function Ae(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{Ae as default};
