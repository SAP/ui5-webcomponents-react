import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,n as r,r as i,t as a}from"./MessageStrip--bSGY2HF.js";import{i as o,r as s}from"./react-fLZJfuRT.js";import{_ as c,d as l}from"./blocks-Duz4za69.js";import{g as u,t as d,u as f}from"./components-DROKtvBr.js";function p(){return(0,m.jsx)(a,{design:i.Information,hideCloseButton:!0,children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`strong`,{children:`Known Limitations`}),(0,m.jsxs)(`ul`,{children:[(0,m.jsx)(`li`,{children:`As custom elements need to be defined on the client, UI5 Web Components for React is only rendering the outer markup of the UI5 Web Component on the server. The rendering of the Web Component is still happening on the client.`}),(0,m.jsxs)(`li`,{children:[`The Next.js `,(0,m.jsx)(`code`,{children:`app`}),` directory shows some hydration warnings on the client. These warnings seem not to affect the runtime.`]})]})]})})}var m;function h(){return(h=e((()=>{n(),r(),m=t()})))()}function g(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,p:`p`,pre:`pre`,strong:`strong`,...o(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l,{title:`Server Side Rendering`}),`
`,(0,v.jsx)(u,{}),`
`,(0,v.jsx)(t.h1,{id:`server-side-rendering`,children:`Server Side Rendering`}),`
`,(0,v.jsxs)(t.p,{children:[`We're happy to announce that starting from `,(0,v.jsx)(t.strong,{children:`v1.17.0`}),`, UI5 Web Components for React is supporting Server Side Rendering Frameworks like `,(0,v.jsx)(t.a,{href:`https://nextjs.org/`,rel:`nofollow`,children:`Next.js`}),` 🎉.`]}),`
`,(0,v.jsx)(p,{}),`
`,(0,v.jsx)(`br`,{}),`
`,(0,v.jsx)(`br`,{}),`
`,(0,v.jsx)(t.h2,{id:`nextjs`,children:`Next.js`}),`
`,(0,v.jsx)(t.h3,{id:`create-a-new-project`,children:`Create a new project`}),`
`,(0,v.jsxs)(t.p,{children:[`The best way to start using UI5 Web Components in Next.js is using one of our `,(0,v.jsx)(t.a,{href:`?path=/docs/project-templates-examples--docs#templates`,children:`templates`}),`.
We have templates available for both the pages and the app router.`]}),`
`,(0,v.jsx)(t.h3,{id:`add-to-existing-project`,children:`Add to existing project`}),`
`,(0,v.jsxs)(t.p,{children:[`In case you already have an existing Next.js project and want to add UI5 Web Components for React to it, you first need to follow our `,(0,v.jsx)(t.a,{href:`?path=/docs/getting-started--docs#add-ui5webcomponents-react-to-an-existing-app`,children:`general Getting Started Guide`}),`.`]}),`
`,(0,v.jsxs)(t.p,{children:[`For better SSR support (i.a. to prevent flickering), we recommend importing our stylesheet bundle inside the `,(0,v.jsx)(t.code,{children:`_app`}),` file or the root layout (depending on whether you are using the pages or the app router) and set the `,(0,v.jsx)(t.code,{children:`staticCssInjected`}),` prop on our `,(0,v.jsx)(t.code,{children:`ThemeProvider`}),`:`]}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.strong,{children:`Note:`}),` Only import the stylesheets of the packages you are actually using.`]}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`import '@ui5/webcomponents-react/styles.css'; // main package styles
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
`,(0,v.jsx)(t.h3,{id:`common-pitfalls`,children:`Common Pitfalls`}),`
`,(0,v.jsx)(t.h4,{id:`icon-and-feature-imports-in-server-components`,children:`Icon and Feature Imports in Server Components`}),`
`,(0,v.jsxs)(t.p,{children:[`Some UI5 Web Component features rely on the registration of a component during runtime on the client.
The most common of these are icon imports (e.g. `,(0,v.jsx)(t.code,{children:`import '@ui5/webcomponents-icons/dist/add.js';`}),`) and asset imports (e.g. `,(0,v.jsx)(t.code,{children:`import '@ui5/webcomponents-react/dist/Assets.js';`}),`).`]}),`
`,(0,v.jsxs)(t.p,{children:[`In order to fulfill their purpose in your application, you must ensure that these imports are only used in client components (the file or a parent component must contain the `,(0,v.jsx)(t.code,{children:`'use client';`}),` directive).
If they are imported into server components, these imports will do nothing and you'll notice that some features or icons are not available in your application.`]}),`
`,(0,v.jsx)(t.h2,{id:`other-frameworks`,children:`Other frameworks`}),`
`,(0,v.jsxs)(t.p,{children:[`Your favorite framework is missing here? Feel free to `,(0,v.jsx)(t.a,{href:`https://github.com/UI5/webcomponents-react/blob/main/docs/knowledge-base/ServerSideRendering.mdx`,rel:`nofollow`,children:`edit this page`}),` and submit a pull request to get it added!`]}),`
`,(0,v.jsx)(f,{})]})}function _(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=t(),s(),d(),c(),h()})))()}y();export{_ as default};