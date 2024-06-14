import{j as e}from"./useIsomorphicLayoutEffect-J-vjyzBO.js";import{useMDXComponents as t}from"./index-Bpj30qF7.js";import{M as i}from"./index-a-7h2Way.js";import"./index-D_fE5mlE.js";import"./TagDesign-B60Yj3Pp.js";import"./index-DVqgc125.js";import"./index-oytpl9VN.js";import"./chunk-HLWAVYOI-bfdLbd9k.js";import"./Boot-DBJWGo1y.js";import"./copy-e7WxF_om.js";import"./Button-B3obxaDo.js";import{F as s}from"./ProjectTemplate-BqTx9Mza.js";import{T as a}from"./TableOfContent-DzjsZYee.js";import"./WrappingType-CW8URInd.js";import"./iframe-CD3rruG0.js";import"../sb-preview/runtime.js";import"./_baseForOwn-czysEfXW.js";import"./mapValues-DJmJhyxk.js";import"./_baseUniq-fADs2fxN.js";import"./index-MwrKYwMg.js";import"./index-DrFu-skq.js";import"./UI5Element-ZIczsayz.js";import"./CustomElementsScopeUtils-Di1jckr8.js";import"./EventProvider-CVfkyUHo.js";import"./withWebComponent-CZCh4Hye.js";import"./utils-xoLr7-0V.js";import"./slot--DoKcWSY.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-Baemx9Ir.js";import"./decline-iFbg0EvE.js";import"./Icons-VTGLGKPM.js";import"./i18n-defaults-C2wY9l8t.js";import"./information-DBr1nnf3.js";import"./alert-CRLi12vy.js";import"./class-map-7Nty0QHu.js";import"./Icon-bm18Wc8p.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-B_nLitlw.js";import"./i18n-defaults-BBSxky5H.js";import"./client-5PD-IPQ1.js";import"./AriaLabelHelper-LMIEtYQL.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-B_zaPyDm.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DGwRvl1X.js";import"./Popover-CiDK1VtS.js";import"./Integer-WDQzHAdZ.js";import"./PopupsCommon.css-BU4M9Cwb.js";import"./FocusableElements-xn9p5spb.js";import"./isElementHidden-B4HqmI2E.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-D26-bsEk.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-H4TARQHt.js";import"./BrowserScrollbar.css-DkjKirWP.js";import"./index-BiYRYNgb.js";import"./Label-BcDuAK9i.js";import"./index-DO9yHLTi.js";import"./index-CGSfjGAv.js";import"./Link-CM0QSx8V.js";import"./index-oipy57sT.js";import"./index-CUZZ9nZS.js";import"./i18n-defaults-CNyODxfy.js";import"./I18nContext-BrA05J-F.js";import"./index-HPMelgu7.js";import"./ModalsContext-DrY1dyul.js";import"./useIsomorphicId-B7SE6ZVh.js";import"./addCustomCSSWithScoping-D0vrnlbk.js";import"./index-DH00vO1q.js";import"./index-Db41lVPN.js";import"./index-DX5QKLL6.js";import"./Avatar-BQsj5wMZ.js";import"./employee-DN6CdZzr.js";function n(o){const r={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Migration Guide"}),`
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
