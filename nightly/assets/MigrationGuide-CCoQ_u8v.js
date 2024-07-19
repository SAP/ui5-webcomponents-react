import{j as e}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import{useMDXComponents as o}from"./index-yodfxRVR.js";import{M as r}from"./index-C4kcoLbH.js";import"./index-D3xHN5-V.js";import"./TagDesign-Dou_yO3g.js";import"./index-BQ1WsyJB.js";import"./index-BLtMylri.js";import"./chunk-HLWAVYOI-DRx3MmX0.js";import"./withWebComponent-DykTwaBJ.js";import"./copy-CIslHIHM.js";import"./Button-gEiq340s.js";import{F as d}from"./CommandsAndQueries-DOf67UCZ.js";import{T as t}from"./TableOfContent-CRwOwmsJ.js";import"./WrappingType-CW8URInd.js";import"./iframe-Cpc9qfja.js";import"../sb-preview/runtime.js";import"./_baseForOwn-DusBTQ6O.js";import"./mapValues-DfqGXSk1.js";import"./_baseUniq-BpWYsmmS.js";import"./index-Cagd9BgA.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CEPDwMcb.js";import"./utils-BXNPXA0w.js";import"./decline-idEM43Jr.js";import"./Icon-C1aVUqaK.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-Pg2MF6OO.js";import"./parameters-bundle.css-BFbT_feV.js";import"./i18n-defaults-Cz0fD7oZ.js";import"./information-BaUVjT6k.js";import"./alert-B5x9ZRdn.js";import"./class-map-BBkLNtsu.js";import"./i18n-defaults-Ddp6Qu_n.js";import"./client-CM2XqZNc.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-Did8UXWE.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BB85D3ff.js";import"./Popover-xb-dB4fv.js";import"./PopupsCommon.css-BS0HwvId.js";import"./getEffectiveScrollbarStyle-C7TfqF8H.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CwA30WlK.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CP3POd5N.js";import"./BrowserScrollbar.css-3d9vQOhG.js";import"./index-xqgF1Ty6.js";import"./Label-Cn8Z-EZA.js";import"./index-BM7lsTdU.js";import"./index-DAuk1dG7.js";import"./Link-DvVq2Sbg.js";import"./index-zvxceOMd.js";import"./index-BsDgV4lW.js";import"./I18nStore-DkMZE6H0.js";import"./useIsomorphicId-8WwglsiH.js";import"./addCustomCSSWithScoping-CP2Nptdn.js";import"./index-DGOTIV8c.js";import"./index-BS-nVxuM.js";import"./index-HJp9Zdwb.js";import"./Avatar-CTYNbiCX.js";import"./employee-CVOZDo5u.js";import"./index-CK5mWkeW.js";function s(i){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Migration Guide"}),`
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
`,e.jsx(t,{headingSelector:"h2, h3"}),`
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
`,e.jsx(n.h2,{id:"spacing",children:"Spacing"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"spacing"})," variables of our base package (",e.jsx(n.code,{children:"@ui5/webcomponents-react-base"}),`) have been removed.
Most variables can be replaced by applying the corresponding CSS classes from the `,e.jsx(n.code,{children:"@sap-ui/common-css"})," package to your element, for all others you can find the respective CSS properties and values below."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Full Documentation of Common CSS classes:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://sap.github.io/fundamental-styles/?path=/docs/common-css-margins--docs",rel:"nofollow",children:"Margins"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://sap.github.io/fundamental-styles/?path=/docs/common-css-padding--docs",rel:"nofollow",children:"Paddings"})}),`
`]}),`
`,e.jsx(n.h3,{id:"common-css-substitute-classes",children:"Common CSS substitute classes"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show"}),e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Removed Variable"}),e.jsx(n.th,{children:"Equivalent Common CSS Class"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"All Around Margins"})}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiTinyMargin"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-tiny"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiSmallMargin"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-small"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiMediumMargin"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-medium"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiLargeMargin"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-large"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Single Side Margins"})}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiTinyMarginTop"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-top-tiny"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiSmallMarginTop"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-top-small"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiMediumMarginTop"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-top-medium"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiLargeMarginTop"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-top-large"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiTinyMarginBottom"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-bottom-tiny"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiSmallMarginBottom"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-bottom-small"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiMediumMarginBottom"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-bottom-medium"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiLargeMarginBottom"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-bottom-large"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiTinyMarginBegin"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-begin-tiny"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiSmallMarginBegin"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-begin-small"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiMediumMarginBegin"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-begin-medium"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiLargeMarginBegin"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-begin-large"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiTinyMarginEnd"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-end-tiny"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiSmallMarginEnd"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-end-small"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiMediumMarginEnd"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-end-medium"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiLargeMarginEnd"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-end-large"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Horizontal Margins"})}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiTinyMarginBeginEnd"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-x-tiny"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiSmallMarginBeginEnd"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-x-small"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiMediumMarginBeginEnd"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-x-medium"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiLargeMarginBeginEnd"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-x-large"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Vertical Margins"})}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiTinyMarginTopBottom"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-y-tiny"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiSmallMarginBeginEnd"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-y-small"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiMediumMarginTopBottom"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-y-medium"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiLargeMarginTopBottom"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-y-large"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Responsive Margins"})}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiResponsiveMargin"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-responsive"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Negative Margins"})}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiTinyNegativeMarginBeginEnd"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-tiny-negative"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiSmallNegativeMarginBeginEnd"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-small-negative"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiMediumNegativeMarginBeginEnd"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-medium-negative"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiLargeNegativeMarginBeginEnd"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-margin-large-negative"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"All Around Padding"})}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiContentPadding"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-padding"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Responsive Paddings"})}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiResponsiveContentPadding"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-padding-responsive"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Horizontal Paddings"})}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiTinyPaddingBeginEnd"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-padding-x-tiny"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiSmallPaddingBeginEnd"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-padding-x-small"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiMediumPaddingBeginEnd"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-padding-x-medium"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiLargePaddingBeginEnd"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-padding-x-large"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"No Padding"})}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiNoContentPadding"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:".sap-padding-none"})})]})]})]})]}),`
`,e.jsx(n.h3,{id:"removed-variables-without-substitute",children:"Removed variables without substitute"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show"}),e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Removed Variable"}),e.jsx(n.th,{children:"Property and Value"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiNoMargin"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"margin: 0 !important;"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiNoMarginTop"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"margin-top: 0 !important;"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiNoMarginBottom"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"margin-bottom: 0 !important;"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sapUiForceWidthAuto"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"width: auto !important;"})})]})]})]})]}),`
`,e.jsx(n.h2,{id:"removed-hooks",children:"Removed hooks"}),`
`,e.jsx(n.h3,{id:"useresponsivecontentpadding",children:e.jsx(n.code,{children:"useResponsiveContentPadding"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useResponsiveContentPadding"}),` hook has been removed.
You can now apply responsive content paddings by applying the `,e.jsx(n.code,{children:"sap-content-paddings-container"})," class from ",e.jsx(n.code,{children:"@sap-ui/common-css"}),` package to your element.
You can find a more detailed documentation `,e.jsx(n.a,{href:"?path=/docs/knowledge-base-common-css--docs#content-paddings",children:"here"}),"."]}),`
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
`,e.jsx(n.h3,{id:"loader",children:"Loader"}),`
`,e.jsxs(n.p,{children:["There is no longer a concept of a Loader component defined by the UX guidelines. To indicate a loading state, it is now recommended using the ",e.jsx(n.code,{children:"BusyIndicator"}),` instead.
For backwards compatibility, the Loader is still available in the `,e.jsx(n.code,{children:"@ui5/webcomponents-react-compat"})," package, but it may lack accessibility features and no longer receives feature updates."]}),`
`,e.jsxs(n.h4,{id:"replacing-loader-with-busyindicator",children:["Replacing ",e.jsx(n.code,{children:"Loader"})," with ",e.jsx(n.code,{children:"BusyIndicator"})]}),`
`,e.jsxs(n.p,{children:["Unfortunately, there is no general rule of thumb for how to replace the ",e.jsx(n.code,{children:"Loader"})," component with the ",e.jsx(n.code,{children:"BusyIndicator"})," component. In most cases it should be sufficient wrapping your component inside the ",e.jsx(n.code,{children:"BusyIndicator"}),", as shown below:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// v1

<Card header={<CardHeader titleText="Card Header" />}>
  <Loader />
  <div style={{ height: '400px', padding: '1rem' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed felis tristique, molestie tellus id, rutrum
    urna. Quisque mattis risus imperdiet gravida accumsan. Proin elementum efficitur diam eu interdum.
  </div>
</Card>

// v2

<Card header={<CardHeader titleText="Card Header" />}>
  <BusyIndicator active delay={0}>
    <div style={{ height: '400px', padding: '1rem' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed felis tristique, molestie tellus id,
      rutrum urna. Quisque mattis risus imperdiet gravida accumsan. Proin elementum efficitur diam eu interdum.
    </div>
  </BusyIndicator>
</Card>
`})}),`
`,e.jsxs(n.p,{children:["However, for components that apply complex styles such as ",e.jsx(n.code,{children:"absolute/fixed"})," positioning, this might not be the case, as the ",e.jsx(n.code,{children:"BusyIndicator"}),` brings its own set of styles.
In such instances, we recommend positioning the `,e.jsx(n.code,{children:"BusyIndicator"})," above the element that should receive a loading indicator e.g. via ",e.jsx(n.code,{children:"position: absolute"}),`.
If you encounter any issues migrating to the `,e.jsx(n.code,{children:"BusyIndicator"}),", please feel free to reach out via ",e.jsx(n.a,{href:"https://github.com/SAP/ui5-webcomponents-react/discussions",rel:"nofollow",children:"GitHub Discussions"})," or create an ",e.jsx(n.a,{href:"https://github.com/SAP/ui5-webcomponents-react/issues/new/choose",rel:"nofollow",children:"Issue"})," if the behavior seems like a bug."]}),`
`,e.jsxs(n.h4,{id:"keep-the-loader",children:["Keep the ",e.jsx(n.code,{children:"Loader"})]}),`
`,e.jsxs(n.p,{children:["If you'd like to keep the ",e.jsx(n.code,{children:"Loader"})," component instead of the ",e.jsx(n.code,{children:"BusyIndicator"})," component, you now need to include the ",e.jsx(n.code,{children:"@ui5/webcomponents-react-compat"})," package in your dependencies and adjust all import paths accordingly:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// v1
import { Loader } from '@ui5/webcomponents-react';

// v2
import { Loader } from '@ui5/webcomponents-react-compat';
`})}),`
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
`,e.jsx(n.h3,{id:"toolbar",children:"Toolbar"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Toolbar"})," component has been replaced with the UI5 Web Components Toolbar component (which was previously exported in this project as ",e.jsx(n.code,{children:"ToolbarV2"}),`).
The old `,e.jsx(n.code,{children:"Toolbar"})," implementation has been moved to the ",e.jsx(n.code,{children:"@ui5/webcomponents-react-compat"})," package with all its subcomponents:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"ToolbarSeparator"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"ToolbarSpacer"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"OverflowToolbarButton"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"OverflowToolbarToggleButton"})}),`
`,e.jsxs(n.li,{children:["enum ",e.jsx(n.code,{children:"ToolbarDesign"})]}),`
`,e.jsxs(n.li,{children:["enum ",e.jsx(n.code,{children:"ToolbarStyle"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Although the old ",e.jsx(n.code,{children:"Toolbar"})," is still available in the ",e.jsx(n.code,{children:"@ui5/webcomponents-react-compat"})," package, we strongly recommend to migrate to the new ",e.jsx(n.code,{children:"Toolbar"})," instead."]}),`
`,e.jsxs(n.p,{children:["As the new ",e.jsx(n.code,{children:"Toolbar"})," is a completely different component, we can't offer a proper migration guide, so it's best to check the ",e.jsx(n.a,{href:"?path=/docs/layouts-floorplans-toolbar--docs",children:"Toolbar documentation"})," and update your implementation accordingly with the new components."]}),`
`,e.jsx(n.h2,{id:"components-with-api-changes",children:"Components with API Changes"}),`
`,e.jsx(n.h3,{id:"actionsheet",children:"ActionSheet"}),`
`,e.jsxs(n.p,{children:["The prop ",e.jsx(n.code,{children:"portalContainer"})," has been removed as it is no longer needed due to the ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Popover_API",rel:"nofollow",children:"popover API"}),` which is now used in the UI5 Web Components.
For a better aligned API, the `,e.jsx(n.code,{children:"showCancelButton"})," prop has been replaced wih the ",e.jsx(n.code,{children:"hideCancelButton"})," prop and the logic has been inverted. Also, the ",e.jsx(n.code,{children:"a11yConfig"})," prop has been renamed to ",e.jsx(n.code,{children:"accessibilityAttributes"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v1
import { ActionSheet, Button } from '@ui5/webcomponents-react';

function MyComponent() {
  return (
    <ActionSheet showCancelButton={false} a11yConfig={{ actionSheetMobileContent: { role: 'menu' } }}>
      <Button>Action 1</Button>
    </ActionSheet>
  );
}

// v2
import { ActionSheet, Button } from '@ui5/webcomponents-react';

function MyComponent() {
  return (
    <ActionSheet hideCancelButton accessibilityAttributes={{ actionSheetMobileContent: { role: 'menu' } }}>
      <Button>Action 1</Button>
    </ActionSheet>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"analyticaltable",children:"AnalyticalTable"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Renamed or Changed Props:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"alwaysShowSubComponent"})," has been removed, please use ",e.jsx(n.code,{children:"subComponentsBehavior"})," with ",e.jsx(n.code,{children:"AnalyticalTableSubComponentsBehavior.Visibe"})," instead."]}),`
`,e.jsxs(n.li,{children:["The default value of ",e.jsx(n.code,{children:"sortable"})," (",e.jsx(n.code,{children:"true"}),") has been removed. To allow sorting in your table please set ",e.jsx(n.code,{children:"sorting"})," to ",e.jsx(n.code,{children:"true"})," yourself."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Removed Props:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"portalContainer"})," has been removed as it's no longer needed due to the ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Popover_API",rel:"nofollow",children:"Popover API"})," used in the ",e.jsx(n.code,{children:"Popover"})," ui5 web component."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Renamed Enums:"})}),`
`,e.jsx(n.p,{children:"Names of the following enums have changed:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TableScaleWidthMode"})," is now ",e.jsx(n.code,{children:"AnalyticalTableScaleWidthMode"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TableSelectionBehavior"})," is now ",e.jsx(n.code,{children:"AnalyticalTableSelectionBehavior"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TableSelectionMode"})," is now ",e.jsx(n.code,{children:"AnalyticalTableSelectionMode"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TableVisibleRowCountMode"})," is now ",e.jsx(n.code,{children:"AnalyticalTableVisibleRowCountMode"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Changed Enums:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The properties and values for the ",e.jsx(n.code,{children:"AnalyticalTableSelectionMode"})," enum has been changed.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"SingleSelect"})," is now ",e.jsx(n.code,{children:"Single"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MultiSelect"})," is now ",e.jsx(n.code,{children:"Multiple"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:[e.jsx(n.a,{href:"?path=/docs/data-display-analyticaltable--docs#column-properties",children:"Column Properties"})," Changes"]})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"canReorder"})," has been removed, please use ",e.jsx(n.code,{children:"disableDragAndDrop"})," instead."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// v1
const columns = [{ ...otherProperties, canReorder: false }];

<AnalyticalTable
  {...otherProps}
  columns={columns}
  alwaysShowSubComponent
  scaleWidthMode={TableScaleWidthMode.Grow}
  selectionBehavior={TableSelectionBehavior.Row}
  selectionMode={TableSelectionMode.MultiSelect}
  // selectionMode={TableSelectionMode.SingleSelect}
  visibleRowCountMode={TableVisibleRowCountMode.Interactive}
/>;

// v2
const columns = [{ ...otherProps, disableDragAndDrop: true }];

<AnalyticalTable
  {...otherProps}
  columns={columns}
  subComponentsBehavior={AnalyticalTableSubComponentsBehavior.Visible}
  scaleWidthMode={AnalyticalTableScaleWidthMode.Grow}
  selectionBehavior={AnalyticalTableSelectionBehavior.Row}
  selectionMode={AnalyticalTableSelectionMode.Multiple}
  // selectionMode={AnalyticalTableSelectionMode.Single}
  visibleRowCountMode={AnalyticalTableVisibleRowCountMode.Interactive}
/>;
`})}),`
`,e.jsx(n.h3,{id:"expandable-text",children:"Expandable Text"}),`
`,e.jsxs(n.p,{children:["The prop ",e.jsx(n.code,{children:"portalContainer"})," has been removed as it is no longer needed due to the ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Popover_API",rel:"nofollow",children:"popover API"}),` which is now used in the UI5 Web Components.
As the underlying `,e.jsx(n.code,{children:"Text"})," component has been replaced with the UI5 Web Component, some inherited props ",e.jsx(n.code,{children:"hyphenated"})," and ",e.jsx(n.code,{children:"emptyIndicator"})," from the ",e.jsx(n.code,{children:"Text"}),` component have been removed.
You can follow this `,e.jsx(n.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/9244",rel:"nofollow",children:"feature request"})," for updates."]}),`
`,e.jsx(n.h3,{id:"filtergroupitem",children:"FilterGroupItem"}),`
`,e.jsxs(n.p,{children:["For a better aligned API, the ",e.jsx(n.code,{children:"visible"})," and ",e.jsx(n.code,{children:"visibleInFilterBar"})," (defaulted to ",e.jsx(n.code,{children:"true)"})," props has been replaced with ",e.jsx(n.code,{children:"hidden"})," and ",e.jsx(n.code,{children:"hiddenInFilterBar"}),` (no default value).
You only need to apply changes to your code if `,e.jsx(n.code,{children:"visible"})," or ",e.jsx(n.code,{children:"visibleInFilterBar"})," have been set to ",e.jsx(n.code,{children:"false"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// v1
import { FilterBar, FilterGroupItem, Input } from '@ui5/webcomponents-react';

function MyComponent() {
  return (
    <FilterBar>
      <FilterGroupItem visible={false}>
        <Input />
      </FilterGroupItem>
      <FilterGroupItem visibleInFilterBar={false}>
        <Input />
      </FilterGroupItem>
      <FilterGroupItem>
        <Input />
      </FilterGroupItem>
    </FilterBar>
  );
}

// v2
import { FilterBar, FilterGroupItem, Input } from '@ui5/webcomponents-react';

function MyComponent() {
  return (
    <FilterBar>
      <FilterGroupItem hidden>
        <Input />
      </FilterGroupItem>
      <FilterGroupItem hiddenInFilterBar>
        <Input />
      </FilterGroupItem>
      <FilterGroupItem>
        <Input />
      </FilterGroupItem>
    </FilterBar>
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
`,e.jsx(n.h3,{id:"modals",children:"Modals"}),`
`,e.jsx(n.p,{children:"All Modal helper hooks have been removed. They can be replaced with the regular methods:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useShowDialog"})," --> ",e.jsx(n.code,{children:"showDialog"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useShowPopover"})," --> ",e.jsx(n.code,{children:"showPopover"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useShowResponsivePopover"})," --> ",e.jsx(n.code,{children:"showResponsivePopover"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useShowMenu"})," --> ",e.jsx(n.code,{children:"showMenu"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useShowMessageBox"})," --> ",e.jsx(n.code,{children:"showMessageBox"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useShowToast"})," --> ",e.jsx(n.code,{children:"showToast"})]}),`
`]}),`
`,e.jsx(n.p,{children:"The regular methods are now general purpose, so they can be used both inside the React content (components) as well as outside of the React context (redux, redux-saga, etc.)."}),`
`,e.jsx(n.h3,{id:"objectpage",children:"ObjectPage"}),`
`,e.jsxs(n.p,{children:["The newly introduced ",e.jsx(n.code,{children:"DynamicPage"})," web component comes with its own ",e.jsx(n.code,{children:"DynamicPageHeader"})," and ",e.jsx(n.code,{children:"DynamicPageTitle"})," components, which are unfortunately incompatible with our ",e.jsx(n.code,{children:"ObjectPage"}),` implementation.
Please use the `,e.jsx(n.code,{children:"ObjectPageHeader"})," or ",e.jsx(n.code,{children:"ObjectPageTitle"})," component instead."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Removed Props:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"showHideHeaderButton"}),": Hiding the expand/collapse button is not supported by design anymore."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"showTitleInHeaderContent"}),": Showing the ",e.jsx(n.code,{children:"headerTitle"})," as part of the ",e.jsx(n.code,{children:"headerContent"})," is ",e.jsx(n.a,{href:"https://experience.sap.com/fiori-design-web/object-page/#dynamic-page-header-mandatory",rel:"nofollow",children:"not supported by design anymore"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Refactored Props:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"headerContent"})," has been renamed to ",e.jsx(n.code,{children:"headerArea"})," and now only accepts the ",e.jsx(n.code,{children:"ObjectPageHeader"})," component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"headerTitle"})," has been renamed to ",e.jsx(n.code,{children:"titleArea"})," and now only accepts the ",e.jsx(n.code,{children:"ObjectPageTitle"})," component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"headerContentPinnable"})," has been renamed to ",e.jsx(n.code,{children:"hidePinButton"})," and the logic has been inverted. The pin button is now shown by default."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Renamed Props:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"a11yConfig"})," has been renamed to ",e.jsx(n.code,{children:"accessibilityAttributes"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"a11yConfig.dynamicPageAnchorBar"})," has been renamed to ",e.jsx(n.code,{children:"accessibilityAttributes.objectPageAnchorBar"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"alwaysShowContentHeader"})," has been renamed to ",e.jsx(n.code,{children:"headerPinned"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"footer"})," has been renamed to ",e.jsx(n.code,{children:"footerArea"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onToggleHeaderContent"})," has been renamed to ",e.jsx(n.code,{children:"onToggleHeaderArea"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onPinnedStateChange"})," has been renamed to ",e.jsx(n.code,{children:"onPinButtonToggle"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Also, the namings of internal ",e.jsx(n.code,{children:"data-component-name"})," attributes have been adjusted accordingly. E.g. ",e.jsx(n.code,{children:'data-component-name="DynamicPageTitleSubHeader"'})," has been renamed to ",e.jsx(n.code,{children:'data-component-name="ObjectPageTitleSubHeader"'})]}),`
`,e.jsx(n.h3,{id:"objectpagetitle-fka-dynamicpagetitle",children:"ObjectPageTitle (f.k.a. DynamicPageTitle)"}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["The ",e.jsx(n.code,{children:"ObjectPageTitle"})," component is the renamed implementation of the old (React only) ",e.jsx(n.code,{children:"DynamicPageTitle"})," component. Now, it should only be used in the ",e.jsx(n.code,{children:"ObjectPage"}),"."]})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Removed Props:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"actionsToolbarProps"}),": Since it's now recommended passing the ",e.jsx(n.code,{children:"Toolbar"})," component directly, this prop is redundant."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"navigationActionsToolbarProps"}),": Since it's now recommended passing the ",e.jsx(n.code,{children:"Toolbar"})," component directly, this prop is redundant."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"showSubHeaderRight"}),": Displaying the subheader in the same line as the header is not supported by design anymore."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Refactored Props:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"actions"})," has been renamed to ",e.jsx(n.code,{children:"actionsBar"}),". Instead of single actions, the ",e.jsx(n.code,{children:"Toolbar"})," component should now be passed."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"navigationActions"})," has been renamed to ",e.jsx(n.code,{children:"navigationBar"}),". Instead of single actions, the ",e.jsx(n.code,{children:"Toolbar"})," component should now be passed. The ",e.jsx(n.code,{children:"ObjectPageTitle"})," still offers support for the legacy ",e.jsx(n.code,{children:"Toolbar"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["The ",e.jsx(n.code,{children:"ObjectPageTitle"})," still offers support for the legacy ",e.jsx(n.code,{children:"Toolbar"}),". You can find out more about this ",e.jsx(n.a,{href:"?path=/docs/layouts-floorplans-objectpage--docs#legacy-toolbar-support",children:"here"}),"."]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// v1
<DynamicPageTitle
  showSubHeaderRight
  actionsToolbarProps={{ style: { background: 'red' } }}
  navigationActionsToolbarProps={{ style: { background: 'red' } }}
  actions={
    <>
      <Button>Action 1</Button>
      <Button>Action 2</Button>
    </>
  }
  navigationActions={
    <>
      <Button>Navigation-Action 1</Button>
      <Button>Navigation-Action 2</Button>
    </>
  }
/>

// v2
<ObjectPageTitle
  // \`showSubHeaderRight\` has been removed without replacement

  // You can now pass all toolbar props directly to the toolbar,
  // making \`actionsToolbarProps\` and \`navigationActionsToolbarProps\` redundant
  actionsBar={
    <Toolbar design="Transparent" style={{ background: 'red' }}>
      <ToolbarButton text="Action 1" />
      <ToolbarButton text="Action 2" />
    </Toolbar>
  }
  navigationBar={
    <Toolbar design="Transparent" style={{ background: 'red' }}>
      <ToolbarButton text="Navigation-Action 1" />
      <ToolbarButton text="Navigation-Action 2" />
    </Toolbar>
  }
/>
`})}),`
`,e.jsx(n.h3,{id:"objectpagesection",children:"ObjectPageSection"}),`
`,e.jsxs(n.p,{children:["The prop ",e.jsx(n.code,{children:"titleText"})," is now required and the default value ",e.jsx(n.code,{children:"true"})," has been removed for the ",e.jsx(n.code,{children:"titleTextUppercase"})," prop to comply with the updated Fiori design guidelines."]}),`
`,e.jsx(n.h3,{id:"objectpagesubsection",children:"ObjectPageSubSection"}),`
`,e.jsxs(n.p,{children:["The prop ",e.jsx(n.code,{children:"titleText"})," is now required."]}),`
`,e.jsx(n.h3,{id:"objectstatus",children:"ObjectStatus"}),`
`,e.jsxs(n.p,{children:["For better alignment with the UI5 Web Components the ",e.jsx(n.code,{children:"active"})," prop has been renamed to ",e.jsx(n.code,{children:"interactive"}),"."]}),`
`,e.jsx(n.h3,{id:"themeprovider",children:"ThemeProvider"}),`
`,e.jsxs(n.p,{children:["The prop ",e.jsx(n.code,{children:"withoutModalsProvider"}),` has been removed.
In order to provide a place for the `,e.jsx(n.code,{children:"Modals"})," helper to mount the popovers, you have to render the new ",e.jsx(n.code,{children:"Modals"})," component in your application tree."]}),`
`,e.jsx(n.h2,{id:"enum-changes",children:"Enum Changes"}),`
`,e.jsx(n.p,{children:"For better alignment with the UI5 Web Components, the following enums have been renamed:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MessageBoxActions"})," has been renamed to ",e.jsx(n.code,{children:"MessageBoxAction"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MessageBoxTypes"})," has been renamed to ",e.jsx(n.code,{children:"MessageBoxType"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Themes"})," has been renamed to ",e.jsx(n.code,{children:"Theme"})]}),`
`]}),`
`,e.jsx(d,{})]})}function fe(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{fe as default};
