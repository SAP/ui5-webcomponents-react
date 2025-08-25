import{j as e}from"./iframe-Y9u60a80.js";import{useMDXComponents as r}from"./index-Bori-Nod.js";import{M as s}from"./blocks-C6Tkp4w5.js";import"./Tag-CuXUrZqk.js";import{M as i,a}from"./index-CpV662zw.js";import"./copy-DwFBIccM.js";import{F as p}from"./CommandsAndQueries-eYIoXNgT.js";import{T as c}from"./TableOfContent-C0xGCGUb.js";import"./preload-helper-Ct5FWWRu.js";import"./information-CTNCAXjf.js";import"./sys-enter-2-74mIu9T9.js";import"./alert-BGr6HL7r.js";import"./index-mYcBdhJ9.js";import"./index-Pi4X_Zbo.js";import"./index-CUsGpwJ8.js";import"./Link-BOuAWn99.js";import"./addCustomCSSWithScoping-CQXmy_CC.js";import"./index-C29vYmbK.js";import"./index-D4D-S1j7.js";import"./index-CGgIhjAE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DKtovAer.js";import"./index-BUCogs4k.js";function d(){return e.jsx(i,{design:a.Information,hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Known Limitations"}),e.jsxs("ul",{children:[e.jsx("li",{children:"As custom elements need to be defined on the client, UI5 Web Components for React is only rendering the outer markup of the UI5 Web Component on the server. The rendering of the Web Component is still happening on the client."}),e.jsxs("li",{children:["The Next.js ",e.jsx("code",{children:"app"})," directory shows some hydration warnings on the client. These warnings seem not to affect the runtime."]})]})]})})}function o(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Server Side Rendering"}),`
`,e.jsx(c,{}),`
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
`,e.jsx(p,{})]})}function A(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{A as default};
