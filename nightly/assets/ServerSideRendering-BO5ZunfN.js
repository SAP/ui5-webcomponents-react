import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-Duvwo7dg.js";import{M as i}from"./index-fDLPgWZl.js";import"./Tag-Ck-rQ93o.js";import"./index-sk8J2Ps8.js";import"./index-CEr2UAyE.js";import"./index-7Z4Dhk6u.js";import{M as s,a as p}from"./index-CD3cnlhM.js";import{F as m}from"./CommandsAndQueries-DPW9fmtR.js";import"./Button-BAohpRXl.js";import"./jsx-runtime-xa789Fx-.js";import"./copy-Ce-W84Ka.js";import{T as a}from"./TableOfContent-ClPXL3dS.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BTb5jHlz.js";import"./iframe-BipPbKR0.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./event-strict-DgQLNDEV.js";import"./slot-_4yKMUwC.js";import"./i18n-CjR4HGlq.js";import"./willShowContent-CZcfsNXp.js";import"./sys-help-2-QU1zRg7_.js";import"./Icon-BC8KE6RK.js";import"./CustomElementsScope-CraI7z9b.js";import"./Keys-CLf_QmYW.js";import"./parameters-bundle.css-D0uTR4GL.js";import"./sys-enter-2-CUYL3AE0.js";import"./i18n-defaults-CmVK7_Fz.js";import"./information-l0VFevGn.js";import"./i18n-defaults-Wx6G1HAa.js";import"./index-BX0qWsV0.js";import"./decline-BJJ7TY3L.js";import"./information-jHKcowyE.js";import"./sys-enter-2-vblLkH1D.js";import"./alert-CtWydQwI.js";import"./preview-CthheWh5.js";import"./DocsRenderer-CFRXHY34-DOxBUe-c.js";import"./client-2ALsBH8W.js";import"./Popover-DrPdnlD_.js";import"./PopupsCommon.css-D_uQUn1t.js";import"./FocusableElements-CinXTr6J.js";import"./isElementHidden-gS67o0pl.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-OXK24k1p.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./index-CjMOgMwR.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-Dh6tKsMV.js";import"./index-w82VAi-S.js";import"./Label-DvI9nTT8.js";import"./index-BTImLLsO.js";import"./index-BxoZEFEX.js";import"./Link-DYEiCybJ.js";import"./index-DOeHcXKd.js";import"./index-g22nm93k.js";import"./Text-BhvqvgTY.js";import"./addCustomCSSWithScoping-Br5D2MMD.js";import"./index-CB6Dlc1E.js";import"./BusyIndicator-CP9fjQ10.js";import"./index-BUVDlgt4.js";import"./index-5xYsTlk-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-JpmbdEoa.js";import"./index-BYYirJq1.js";import"./I18nStore-Bx61vi8M.js";import"./index-CfGRZDU4.js";import"./Tooltips-CwjopbrF.js";import"./EventProvider-ChtD9rRX.js";function c(){return e.jsx(s,{design:p.Information,hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Known Limitations"}),e.jsxs("ul",{children:[e.jsx("li",{children:"As custom elements need to be defined on the client, UI5 Web Components for React is only rendering the outer markup of the UI5 Web Component on the server. The rendering of the Web Component is still happening on the client."}),e.jsxs("li",{children:["The Next.js ",e.jsx("code",{children:"app"})," directory shows some hydration warnings on the client. These warnings seem not to affect the runtime."]})]})]})})}function r(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Server Side Rendering"}),`
`,e.jsx(a,{}),`
`,e.jsx(t.h1,{id:"server-side-rendering",children:"Server Side Rendering"}),`
`,e.jsxs(t.p,{children:["We're happy to announce that starting from ",e.jsx(t.strong,{children:"v1.17.0"}),", UI5 Web Components for React is supporting Server Side Rendering Frameworks like ",e.jsx(t.a,{href:"https://nextjs.org/",rel:"nofollow",children:"Next.js"})," 🎉."]}),`
`,e.jsx(c,{}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"nextjs",children:"Next.js"}),`
`,e.jsx(t.h3,{id:"create-a-new-project",children:"Create a new project"}),`
`,e.jsxs(t.p,{children:["The best way to start using UI5 Web Components in Next.js is using one of our ",e.jsx(t.a,{href:"?path=/docs/project-templates-examples--docs#templates",children:"templates"}),`.
We have templates available for both the pages and the app router.`]}),`
`,e.jsx(t.h3,{id:"add-to-existing-project",children:"Add to existing project"}),`
`,e.jsxs(t.p,{children:["In case you already have an existing Next.js project and want to add UI5 Web Components for React to it, you first need to follow our ",e.jsx(t.a,{href:"?path=/docs/getting-started--docs#add-ui5webcomponents-react-to-an-existing-app",children:"general Getting Started Guide"}),"."]}),`
`,e.jsxs(t.p,{children:["For better SSR support (i.a. to prevent flickering), we recommend importing our stylesheet bundle inside the ",e.jsx(t.code,{children:"_app"})," file or the root layout (depending on whether you are using the pages or the app router) and set the ",e.jsx(t.code,{children:"staticCssInjected"})," prop on our ",e.jsx(t.code,{children:"ThemeProvider"}),":"]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," Only import the stylesheets of the packages you are actually using."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import '@ui5/webcomponents-react/styles.css'; // main package styles
// Required only when using the corresponding package
import '@ui5/webcomponents-react-charts/styles.css'; // chart package styles
import '@ui5/webcomponents-react-compat/styles.css'; // compat package styles


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
`,e.jsx(m,{})]})}function Fe(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(r,{...o})}):r(o)}export{Fe as default};
