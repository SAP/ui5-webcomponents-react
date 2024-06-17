import{j as e}from"./useIsomorphicLayoutEffect-CJg151Ok.js";import{useMDXComponents as t}from"./index-Bql5lgBm.js";import{M as i}from"./index-BcesyvNo.js";import"./index-BrzlRZx6.js";import"./TagDesign-B60Yj3Pp.js";import"./index-CP2MHerv.js";import"./index-CUD6gg2y.js";import"./chunk-HLWAVYOI-5AW6xoa1.js";import"./Boot-CUKJMqeB.js";import"./copy-BR6xdeTx.js";import"./Button-BJ75y3Nh.js";import{F as s}from"./ProjectTemplate-BXXfi1SO.js";import{T as a}from"./TableOfContent-CzIM5YyN.js";import"./WrappingType-CW8URInd.js";import"./iframe-Bpg9eTUf.js";import"../sb-preview/runtime.js";import"./_baseForOwn-39ViRbo3.js";import"./mapValues-BafCeOy3.js";import"./_baseUniq-D4fCGXIX.js";import"./index-DBvbnR2h.js";import"./index-DrFu-skq.js";import"./UI5Element-D1gTBhJw.js";import"./CustomElementsScopeUtils-Br5bzw3_.js";import"./EventProvider-CVfkyUHo.js";import"./withWebComponent-BqYi3caL.js";import"./utils-BVRly08L.js";import"./slot--DoKcWSY.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-DqiJMVwP.js";import"./decline-24gJ_QVD.js";import"./Icons-DKhvPm64.js";import"./i18n-defaults-C2wY9l8t.js";import"./information-B_T0tfhv.js";import"./alert-CCqY5Vji.js";import"./class-map-CsNukgzr.js";import"./Icon-DybkHgDw.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-B_nLitlw.js";import"./i18n-defaults-DUapXIrq.js";import"./client-CeotCdvV.js";import"./AriaLabelHelper-LMIEtYQL.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-CExtPKKn.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BYE0j0VN.js";import"./Popover-CLYhCt6_.js";import"./Integer-WDQzHAdZ.js";import"./PopupsCommon.css-DS4aznhi.js";import"./FocusableElements-BqtokFct.js";import"./isElementHidden-B4HqmI2E.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Cj9P7VXu.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-Blizc8Vd.js";import"./BrowserScrollbar.css-CWM6CH73.js";import"./index-CyzYONVb.js";import"./Label-aqqXsG4M.js";import"./index-c6D3qpy5.js";import"./index-2i_XbQjJ.js";import"./Link-D4QFbUsq.js";import"./index-CrJ5gNPa.js";import"./index-DymV_ww8.js";import"./i18n-defaults-DO_muapi.js";import"./I18nContext-BwNxpyJO.js";import"./index-C7ubApS_.js";import"./ModalsContext-CA2qjtQ6.js";import"./useIsomorphicId-BGiUoP5x.js";import"./addCustomCSSWithScoping-Cb1z8mH0.js";import"./index-DIV8pFHv.js";import"./index-CPlNFy0c.js";import"./index-DxZixt0G.js";import"./Avatar-BFwygaOl.js";import"./employee-CKaAdAd4.js";function n(o){const r={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Migration Guide"}),`
`,e.jsx(r.h1,{id:"migration-guide-v1-to-v2",children:"Migration Guide (v1 to v2)"}),`
`,e.jsx(r.p,{children:e.jsxs(r.em,{children:[`The most important breaking changes of the corresponding releases are outlined here.
For a full list of all changes, please refer to `,e.jsx(r.a,{href:"https://github.com/SAP/ui5-webcomponents-react/releases",rel:"nofollow",children:"the list of releases"}),`
or the `,e.jsx(r.a,{href:"?path=/docs/change-log--page",children:"changelog"}),"."]})}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Older releases"}),e.jsx(r.br,{}),`
`,`This migration guide only covers breaking changes when updating from v1 to v2.
For migration guides for older releases, please refer to our `,e.jsx(r.a,{href:"https://github.com/SAP/ui5-webcomponents-react/blob/main/docs/MigrationGuide.archive.md",rel:"nofollow",children:"Migration Guide Archive"}),"."]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(a,{headingSelector:"h2"}),`
`,e.jsx(r.h2,{id:"general-changes",children:"General changes"}),`
`,e.jsxs(r.h3,{id:"removed-react-jss",children:["Removed ",e.jsx(r.code,{children:"react-jss"})]}),`
`,e.jsxs(r.p,{children:["UI5 Web Components for React is no longer relying on ",e.jsx(r.code,{children:"react-jss"})," internally, hence the dependency is now removed and the ",e.jsx(r.code,{children:"react-jss"})," ThemeProvider is no longer rendered as part of our ",e.jsx(r.code,{children:"ThemeProvider"}),`.
If you are relying on `,e.jsx(r.code,{children:"react-jss"})," in your application, please make sure to render your own ",e.jsx(r.code,{children:"react-jss"})," ThemeProvider:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { ThemeProvider } from '@ui5/webcomponents-react';
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
`,e.jsx(r.h2,{id:"removed-hooks",children:"Removed hooks"}),`
`,e.jsx(r.h3,{id:"useresponsivecontentpadding",children:e.jsx(r.code,{children:"useResponsiveContentPadding"})}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"useResponsiveContentPadding"}),` hook has been removed.
You can now apply responsive content paddings by applying the `,e.jsx(r.code,{children:"sap-content-paddings-container"})," class from ",e.jsx(r.code,{children:"@sap-ui/common-css"}),` package to your element.
You can find a more detailed documentation `,e.jsx(r.a,{href:"https://sap.github.io/ui5-webcomponents-react/main/?path=/docs/knowledge-base-common-css--docs#content-paddings",rel:"nofollow",children:"here"}),"."]}),`
`,e.jsx(r.h2,{id:"replaced-components",children:"Replaced Components"}),`
`,e.jsx(r.h3,{id:"analyticalcard",children:"AnalyticalCard"}),`
`,e.jsxs(r.p,{children:["The deprecated ",e.jsx(r.code,{children:"AnalyticalCard"})," component has been replaced with the ",e.jsx(r.code,{children:"Card"})," web component as a drop-in replacement:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`// v1
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
`,e.jsx(s,{})]})}function Fe(o={}){const{wrapper:r}={...t(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(n,{...o})}):n(o)}export{Fe as default};
