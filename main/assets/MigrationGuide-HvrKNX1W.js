import{j as r}from"./useIsomorphicLayoutEffect-J-vjyzBO.js";import{useMDXComponents as i}from"./index-Bpj30qF7.js";import{M as n}from"./index-BGPPIhb8.js";import"./index-DgydNPrY.js";import"./TagDesign-B60Yj3Pp.js";import"./index-DVqgc125.js";import"./index-oytpl9VN.js";import"./chunk-HLWAVYOI-u4kM9-ix.js";import"./Boot-DBJWGo1y.js";import"./copy-e7WxF_om.js";import"./Button-B3obxaDo.js";import{F as p}from"./ProjectTemplate-B9geGl3q.js";import{T as m}from"./TableOfContent-BAp_w_wX.js";import"./WrappingType-CW8URInd.js";import"./iframe-BvH98P4b.js";import"../sb-preview/runtime.js";import"./_baseForOwn-czysEfXW.js";import"./mapValues-DJmJhyxk.js";import"./_baseUniq-fADs2fxN.js";import"./index-MwrKYwMg.js";import"./index-DrFu-skq.js";import"./UI5Element-ZIczsayz.js";import"./CustomElementsScopeUtils-Di1jckr8.js";import"./EventProvider-CVfkyUHo.js";import"./withWebComponent-CZCh4Hye.js";import"./utils-xoLr7-0V.js";import"./slot--DoKcWSY.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-Baemx9Ir.js";import"./decline-iFbg0EvE.js";import"./Icons-VTGLGKPM.js";import"./i18n-defaults-C2wY9l8t.js";import"./information-DBr1nnf3.js";import"./alert-CRLi12vy.js";import"./class-map-7Nty0QHu.js";import"./Icon-bm18Wc8p.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-B_nLitlw.js";import"./i18n-defaults-BBSxky5H.js";import"./client-5PD-IPQ1.js";import"./AriaLabelHelper-LMIEtYQL.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-Bo6CU_bj.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DGwRvl1X.js";import"./Popover-CiDK1VtS.js";import"./Integer-WDQzHAdZ.js";import"./PopupsCommon.css-BU4M9Cwb.js";import"./FocusableElements-xn9p5spb.js";import"./isElementHidden-B4HqmI2E.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-D26-bsEk.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-H4TARQHt.js";import"./BrowserScrollbar.css-DkjKirWP.js";import"./index-BNqEw21-.js";import"./Label-BcDuAK9i.js";import"./index-El8wsCbc.js";import"./index-szvHrz99.js";import"./Link-CM0QSx8V.js";import"./index-Du6xKB7b.js";import"./index-CUZZ9nZS.js";import"./i18n-defaults-CNyODxfy.js";import"./I18nContext-BrA05J-F.js";import"./index-DoUANS_S.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-DrY1dyul.js";import"./useIsomorphicId-B7SE6ZVh.js";import"./addCustomCSSWithScoping-D0vrnlbk.js";import"./index-4eQD1Xi9.js";import"./index-Decb0PcY.js";import"./index-jPWG4tlh.js";import"./Avatar-BQsj5wMZ.js";import"./employee-DN6CdZzr.js";function e(t){const o={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{title:"Migration Guide"}),`
`,r.jsx(o.h1,{id:"migration-guide-v1-to-v2",children:"Migration Guide (v1 to v2)"}),`
`,r.jsx(o.p,{children:r.jsxs(o.em,{children:[`The most important breaking changes of the corresponding releases are outlined here.
For a full list of all changes, please refer to `,r.jsx(o.a,{href:"https://github.com/SAP/ui5-webcomponents-react/releases",rel:"nofollow",children:"the list of releases"}),`
or the `,r.jsx(o.a,{href:"?path=/docs/change-log--page",children:"changelog"}),"."]})}),`
`,r.jsxs(o.blockquote,{children:[`
`,r.jsxs(o.p,{children:[r.jsx(o.strong,{children:"Older releases"}),r.jsx(o.br,{}),`
`,`This migration guide only covers breaking changes when updating from v1 to v2.
For migration guides for older releases, please refer to our `,r.jsx(o.a,{href:"https://github.com/SAP/ui5-webcomponents-react/blob/main/docs/MigrationGuide.archive.md",rel:"nofollow",children:"Migration Guide Archive"}),"."]}),`
`]}),`
`,r.jsx("br",{}),`
`,r.jsx(m,{headingSelector:"h2"}),`
`,r.jsx(o.h2,{id:"replaced-components",children:"Replaced Components"}),`
`,r.jsx(o.h3,{id:"analyticalcard",children:"AnalyticalCard"}),`
`,r.jsxs(o.p,{children:["The deprecated ",r.jsx(o.code,{children:"AnalyticalCard"})," component has been replaced with the ",r.jsx(o.code,{children:"Card"})," web component as a drop-in replacement:"]}),`
`,r.jsx(o.pre,{children:r.jsx(o.code,{className:"language-tsx",children:`// v1
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
`,r.jsx(p,{})]})}function qr(t={}){const{wrapper:o}={...i(),...t.components};return o?r.jsx(o,{...t,children:r.jsx(e,{...t})}):e(t)}export{qr as default};
