import{j as r}from"./useIsomorphicLayoutEffect-CZEdMYkS.js";import{useMDXComponents as i}from"./index-DcZOShwE.js";import{M as n}from"./index-ZM-57o7g.js";import"./index-T89MH8VM.js";import"./TagDesign-B60Yj3Pp.js";import"./index-gJgmXzrm.js";import"./index-DjqRnomV.js";import"./chunk-HLWAVYOI-DT-o1I1W.js";import"./Boot-Bi0-wsLc.js";import"./copy-CtgKK3fC.js";import"./Button-g4Bi3K-W.js";import{F as p}from"./ProjectTemplate-CVCMjdRb.js";import{T as m}from"./TableOfContent-D6dbLPi8.js";import"./WrappingType-CW8URInd.js";import"./iframe-Cdu6IyIp.js";import"../sb-preview/runtime.js";import"./_baseForOwn-CLRePLhI.js";import"./mapValues-B_fQXYuL.js";import"./_baseUniq-C22BvjpN.js";import"./index-DPb1xiaU.js";import"./index-DrFu-skq.js";import"./UI5Element-BSD7m3Nn.js";import"./CustomElementsScopeUtils-DQm3oQ75.js";import"./EventProvider-CVfkyUHo.js";import"./withWebComponent-DbBZwVV6.js";import"./utils-D-LpYKBL.js";import"./slot--DoKcWSY.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-D-vhNEte.js";import"./decline-CbvxqJl_.js";import"./Icons-DNVx3qDv.js";import"./i18n-defaults-C2wY9l8t.js";import"./information-BBm6bxfd.js";import"./alert-C_nh5Qt7.js";import"./class-map-CgjcvVes.js";import"./Icon-CxSx41s_.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-B_nLitlw.js";import"./i18n-defaults-5yojRpQ-.js";import"./client-DNfJn3vO.js";import"./AriaLabelHelper-LMIEtYQL.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-BPwAjkf8.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-IiibRSM5.js";import"./Popover-XR-C8_HJ.js";import"./Integer-WDQzHAdZ.js";import"./PopupsCommon.css-BweN9FxF.js";import"./FocusableElements-PMYTkUzF.js";import"./isElementHidden-B4HqmI2E.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BZa0Uicw.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-D9IWnstk.js";import"./BrowserScrollbar.css-YdZmbuMe.js";import"./index-DFf4EEFj.js";import"./Label-fn3eGIhh.js";import"./index-Dp8IwEPL.js";import"./index-CBVsOu0_.js";import"./Link-COfapY2z.js";import"./index-BNTlSUiU.js";import"./index-CPNTbpoD.js";import"./i18n-defaults-DXj3O94t.js";import"./I18nContext-D8i4N15C.js";import"./index-D-IgYp8E.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-BWMWV5L6.js";import"./useIsomorphicId-BEB4eg8l.js";import"./addCustomCSSWithScoping-DAUcWKpH.js";import"./index-C1t_cci-.js";import"./index-EmuVuczB.js";import"./index-DLqSBOZb.js";import"./Avatar-C8BgJzhJ.js";import"./employee-CU0PuroF.js";function e(t){const o={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{title:"Migration Guide"}),`
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
