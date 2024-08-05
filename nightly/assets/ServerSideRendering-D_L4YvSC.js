import{j as e}from"./useIsomorphicLayoutEffect-DCJrFAVs.js";import{useMDXComponents as n}from"./index-D3szj05g.js";import{M as i}from"./index-B4_mn1Hh.js";import{M as s,a as p}from"./index-BLuUcsLt.js";import"./TagDesign-Dou_yO3g.js";import"./index-ClU-Tc1p.js";import"./index-C3ZJCerc.js";import"./chunk-HLWAVYOI-BbzyX9Xq.js";import"./withWebComponent-Bw_l6Ewh.js";import"./copy-D_DpjAH5.js";import"./Button-Bn9nox5u.js";import{F as m}from"./CommandsAndQueries-BwQy1yTa.js";import{T as a}from"./TableOfContent-D3jBI-2R.js";import"./WrappingType-CW8URInd.js";import"./iframe-Dkk9txul.js";import"../sb-preview/runtime.js";import"./_baseForOwn-CS3BKc8p.js";import"./mapValues-DmWmqx7o.js";import"./_baseUniq-DGAWXpCf.js";import"./index-BRTKD46C.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CyjtwURt.js";import"./utils-BHgxP_Sc.js";import"./decline-BnR7C84V.js";import"./Icon-Bjam5y2n.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-mCyQq_6q.js";import"./parameters-bundle.css-BFbT_feV.js";import"./i18n-defaults-Cz0fD7oZ.js";import"./information-DR3Ry5yc.js";import"./alert-CjjdhJ65.js";import"./class-map-DoF19r8m.js";import"./i18n-defaults-BuF9xM0k.js";import"./client-B23sEKGq.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-PGreZEtb.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-waKyCe7Y.js";import"./Popover-ueRYOmZP.js";import"./PopupsCommon.css-T1OzgQOS.js";import"./getEffectiveScrollbarStyle-D1VPwmZI.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CV6FH9MC.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-Bys0Ab5G.js";import"./BrowserScrollbar.css-AwpGtRUX.js";import"./index-CKwVEm9T.js";import"./Label-C8Y7h3Z-.js";import"./index-e36eKmw_.js";import"./index-B2QrEIlk.js";import"./Link-DaxkRKad.js";import"./index-zlBnZOAf.js";import"./index-DUbI1L9X.js";import"./I18nStore-CqpKwI0j.js";import"./addCustomCSSWithScoping-ClhnucNU.js";import"./index-CSN8kS-4.js";import"./index-C7vk-n4z.js";import"./index-DrCqAKBb.js";import"./Avatar-BRGukaio.js";import"./employee-CWJksvD0.js";import"./index-Br4-FWlY.js";function d(){return e.jsx(s,{design:p.Information,hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Known Limitations"}),e.jsxs("ul",{children:[e.jsx("li",{children:"As custom elements need to be defined on the client, UI5 Web Components for React is only rendering the outer markup of the UI5 Web Component on the server. The rendering of the Web Component is still happening on the client."}),e.jsxs("li",{children:["The Next.js ",e.jsx("code",{children:"app"})," directory shows some hydration warnings on the client. These warnings seem not to affect the runtime."]})]})]})})}function r(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Server Side Rendering"}),`
`,e.jsx(a,{}),`
`,e.jsx(t.h1,{id:"server-side-rendering",children:"Server Side Rendering"}),`
`,e.jsxs(t.p,{children:["We're happy to announce that starting from ",e.jsx(t.strong,{children:"v1.17.0"}),", UI5 Web Components for React is supporting Server Side Rendering Frameworks like ",e.jsx(t.a,{href:"https://nextjs.org/",rel:"nofollow",children:"Next.js"})," 🎉."]}),`
`,e.jsx(d,{}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"nextjs",children:"Next.js"}),`
`,e.jsx(t.h3,{id:"create-a-new-project",children:"Create a new project"}),`
`,e.jsxs(t.p,{children:["The best way to start using UI5 Web Components in Next.js is using one of our ",e.jsx(t.a,{href:"?path=/docs/project-templates-examples--docs#templates",children:"templates"}),`.
We have templates available for both the pages and the app router.`]}),`
`,e.jsx(t.h3,{id:"add-to-existing-project",children:"Add to existing project"}),`
`,e.jsxs(t.p,{children:["In case you already have an existing Next.js project and want to add UI5 Web Components for React to it, you first need to follow our ",e.jsx(t.a,{href:"?path=/docs/getting-started--docs#add-ui5webcomponents-react-to-an-existing-app",children:"general Getting Started Guide"}),"."]}),`
`,e.jsxs(t.p,{children:["For a better SSR support, we recommend importing our stylesheet bundle inside the ",e.jsx(t.code,{children:"_app"})," file or the root layout (depending on whether you are using the pages or the app router) and set the ",e.jsx(t.code,{children:"staticCssInjected"})," prop on our ",e.jsx(t.code,{children:"ThemeProvider"}),":"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import '@ui5/webcomponents-react/styles.css';

export default function AppOrRootLayout() {
  // ...
  return (
    // ...
    <ThemeProvider staticCssInjected>{/* your app content */}</ThemeProvider>
  );
}
`})}),`
`,e.jsx(t.h3,{id:"common-pitfalls",children:"Common Pitfalls"}),`
`,e.jsx(t.h4,{id:"icon-and-feature-imports-in-server-components",children:"Icon and Feature Imports in Server Components"}),`
`,e.jsxs(t.p,{children:[`Some UI5 Web Component features rely on the registration of a component during runtime on the client.
The most common of these are icon imports (e.g. `,e.jsx(t.code,{children:"import '@ui5/webcomponents-icons/dist/add.js';"}),"), feature imports (e.g. ",e.jsx(t.code,{children:"import '@ui5/webcomponents/dist/features/FormSupport.js';"})," and asset imports (e.g. ",e.jsx(t.code,{children:"import '@ui5/webcomponents-react/dist/Assets.js';"}),")."]}),`
`,e.jsxs(t.p,{children:["In order to fulfill their purpose in your application, you must ensure that these imports are only used in client components (the file or a parent component must contain the ",e.jsx(t.code,{children:"'use client';"}),` directive).
If they are imported into server components, these imports will do nothing and you'll notice that some features or icons are not available in your application.`]}),`
`,e.jsx(t.h2,{id:"other-frameworks",children:"Other frameworks"}),`
`,e.jsxs(t.p,{children:["Your favorite framework is missing here? Feel free to ",e.jsx(t.a,{href:"https://github.com/SAP/ui5-webcomponents-react/blob/main/docs/knowledge-base/ServerSideRendering.mdx",rel:"nofollow",children:"edit this page"})," and submit a pull request to get it added!"]}),`
`,e.jsx(m,{})]})}function Ce(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(r,{...o})}):r(o)}export{Ce as default};
