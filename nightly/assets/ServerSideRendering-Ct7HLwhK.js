import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-B5Ip8tK9.js";import{M as i}from"./index-BFcJ8caL.js";import{M as s,a as p}from"./index-8msv1YOk.js";import"./index-DccF1NVj.js";import"./Tag-BGp0HQg1.js";import"./index-U0ga5oGA.js";import"./index-B8m469-U.js";import{F as m}from"./CommandsAndQueries-Boi2_aR-.js";import"./Button-CddyUUJt.js";import"./jsx-runtime-CTdjW1dy.js";import"./copy-DVi57tol.js";import{T as a}from"./TableOfContent-BG9P-NK7.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-JqJU4F4n.js";import"./iframe-L-Ox0b5C.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Icon-Cq4WdPfD.js";import"./CustomElementsScope-BI7irdrP.js";import"./Keys-BxH5KEHJ.js";import"./parameters-bundle.css-CKhNLE8L.js";import"./decline-CzIZ7Vnl.js";import"./i18n-defaults-CmVK7_Fz.js";import"./information-C85sdt-6.js";import"./information-CovZJhop.js";import"./sys-enter-2-LJy9JDcm.js";import"./sys-enter-2-CUlYw7x6.js";import"./alert-DKjZxuBr.js";import"./i18n-defaults-Bwpyempw.js";import"./willShowContent-CZcfsNXp.js";import"./sys-help-2-CdqLSqXL.js";import"./index-BVR6w1bU.js";import"./preview-BNpk7lw5.js";import"./DocsRenderer-CFRXHY34-CVHliqA1.js";import"./react-18-SRpBHcoT.js";import"./Popover-D3TB1XeJ.js";import"./PopupsCommon.css-3rSjbG44.js";import"./FocusableElements-Cvm20E5b.js";import"./isElementHidden-B4HqmI2E.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-B38a0cLW.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./index-D71WPoKU.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-4DYJndCZ.js";import"./index-BNsc4RDp.js";import"./Label-CxXPup1E.js";import"./index-CK7zNLqv.js";import"./index-xR1I-Wi5.js";import"./Link-BvcafW2a.js";import"./index-DuSPh-fE.js";import"./index-OzB7lNJQ.js";import"./Text-DZG3aMF7.js";import"./addCustomCSSWithScoping-B6DvbxXy.js";import"./index-DPnISxA_.js";import"./BusyIndicator-BKaUugOY.js";import"./index-CnTKSd9L.js";import"./index-Dj0HSimA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-1lbVTklO.js";import"./index-DF9J17Qw.js";import"./I18nStore-C5X80oUZ.js";import"./index-DjYHlBL_.js";import"./Tooltips-CywStIph.js";import"./EventProvider-ChtD9rRX.js";function c(){return e.jsx(s,{design:p.Information,hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Known Limitations"}),e.jsxs("ul",{children:[e.jsx("li",{children:"As custom elements need to be defined on the client, UI5 Web Components for React is only rendering the outer markup of the UI5 Web Component on the server. The rendering of the Web Component is still happening on the client."}),e.jsxs("li",{children:["The Next.js ",e.jsx("code",{children:"app"})," directory shows some hydration warnings on the client. These warnings seem not to affect the runtime."]})]})]})})}function r(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Server Side Rendering"}),`
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
