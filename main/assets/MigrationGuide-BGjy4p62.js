import{j as e}from"./useIsomorphicLayoutEffect-CJg151Ok.js";import{useMDXComponents as t}from"./index-Bql5lgBm.js";import{M as i}from"./index-BPV5VOMo.js";import"./index-CZvp3XW2.js";import"./TagDesign-B60Yj3Pp.js";import"./index-CP2MHerv.js";import"./index-CUD6gg2y.js";import"./chunk-HLWAVYOI-Boga8wdQ.js";import"./Boot-CUKJMqeB.js";import"./copy-BR6xdeTx.js";import"./Button-DOCBygoe.js";import{F as m}from"./ProjectTemplate-DHa8Dpzs.js";import{T as s}from"./TableOfContent-u5p3Cw7B.js";import"./WrappingType-CW8URInd.js";import"./iframe-GGPqKdIo.js";import"../sb-preview/runtime.js";import"./_baseForOwn-39ViRbo3.js";import"./mapValues-BafCeOy3.js";import"./_baseUniq-D4fCGXIX.js";import"./index-DBvbnR2h.js";import"./index-DrFu-skq.js";import"./UI5Element-D1gTBhJw.js";import"./CustomElementsScopeUtils-Br5bzw3_.js";import"./EventProvider-CVfkyUHo.js";import"./withWebComponent-BqYi3caL.js";import"./utils-BVRly08L.js";import"./slot--DoKcWSY.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-DqiJMVwP.js";import"./decline-24gJ_QVD.js";import"./Icons-DKhvPm64.js";import"./i18n-defaults-C2wY9l8t.js";import"./information-B_T0tfhv.js";import"./alert-CCqY5Vji.js";import"./class-map-CsNukgzr.js";import"./Icon-DybkHgDw.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-B_nLitlw.js";import"./i18n-defaults-C9rtXNtx.js";import"./client-CeotCdvV.js";import"./AriaLabelHelper-LMIEtYQL.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-CBgVz2ct.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BYE0j0VN.js";import"./Popover-CLYhCt6_.js";import"./Integer-WDQzHAdZ.js";import"./PopupsCommon.css-DS4aznhi.js";import"./FocusableElements-BqtokFct.js";import"./isElementHidden-B4HqmI2E.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Cj9P7VXu.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-Blizc8Vd.js";import"./BrowserScrollbar.css-CWM6CH73.js";import"./index-CA0BVAa0.js";import"./Label-BUCQCjYm.js";import"./index-CfeQC8c4.js";import"./index-BEiqleH4.js";import"./Link-ZaeZ1ck_.js";import"./index-C3Pnpg1E.js";import"./index-DymV_ww8.js";import"./i18n-defaults-DO_muapi.js";import"./I18nContext-BwNxpyJO.js";import"./index-C7ubApS_.js";import"./ModalsContext-CA2qjtQ6.js";import"./useIsomorphicId-BGiUoP5x.js";import"./addCustomCSSWithScoping-Cb1z8mH0.js";import"./index-CKlGhIW6.js";import"./index-Cdqk9Xdq.js";import"./index-CTjiTjyP.js";import"./Avatar-gXHHVTDv.js";import"./employee-CKaAdAd4.js";function r(o){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Migration Guide"}),`
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
`,e.jsx(s,{headingSelector:"h2"}),`
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
`,e.jsx(m,{})]})}function Pe(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{Pe as default};
