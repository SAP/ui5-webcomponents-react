import{j as e}from"./jsx-runtime-d079401a.js";import"./DomRefTable.module-9354891f.js";import{M as s}from"./chunk-HLWAVYOI-6129ee23.js";import"./index-f1f2c4b1.js";import{T as p}from"./TableOfContent-33f47fed.js";import{F as a}from"./Footer-da72b5e3.js";import{M as m,a as c}from"./index-20ae81fd.js";import{u as i}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-b7e0672b.js";import"./UI5Element-d089e658.js";import"./CustomElementsScopeUtils-90546106.js";import"./utils-85c0effb.js";import"./index-938186ae.js";import"./iframe-d9777174.js";import"../sb-preview/runtime.js";import"./withWebComponent-f146e44d.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-dc979b51.js";import"./Icons-d115de21.js";import"./Integer-f7f172c9.js";import"./class-map-5b190712.js";import"./i18n-defaults-a1ecaff4.js";import"./index-5cf58464.js";import"./Avatar-d6a8bd34.js";import"./ResizeHandler-36d5a74c.js";import"./employee-0930782f.js";import"./alert-fa33aca2.js";import"./index-7123ddcd.js";import"./AriaLabelHelper-43a261ec.js";import"./index-709cad78.js";import"./Link-0dce4afc.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./index-f82c8853.js";import"./index-c74c9f7f.js";import"./mapValues-6da481dc.js";import"./_baseForOwn-62af832b.js";import"./_baseUniq-27dbdc21.js";import"./index-356e4a49.js";import"./index-12e0da73.js";import"./index-9e2b458d.js";import"./Label-025b0296.js";import"./index-05152d12.js";import"./Button-f20bbbdf.js";import"./index-61fcb073.js";import"./Popover-84fe14ea.js";import"./PopupUtils-caf3caee.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-070f9d59.js";import"./FocusableElements-320054f2.js";import"./isElementHidden-01c07146.js";import"./decline-a017ea5c.js";import"./i18n-defaults-bdef1cce.js";import"./MediaRange-25b98f31.js";import"./style-map-2f7624b7.js";import"./BrowserScrollbar.css-e63eefff.js";import"./information-ff75d6c3.js";function h(){return e.jsx(m,{design:c.Information,hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Known Limitations"}),e.jsxs("ul",{children:[e.jsx("li",{children:"As custom elements need to be defined on the client, UI5 Web Components for React is only rendering the outer markup of the UI5 Web Component on the server. The rendering of the Web Component is still happening on the client."}),e.jsxs("li",{children:["The Next.js ",e.jsx("code",{children:"app"})," directory shows some hydration warnings on the client. These warnings seem not to affect the runtime."]})]})]})})}function we(r={}){const{wrapper:o}=Object.assign({},i(),r.components);return o?e.jsx(o,Object.assign({},r,{children:e.jsx(n,{})})):n();function n(){const t=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",h2:"h2",h3:"h3",code:"code"},i(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Server Side Rendering"}),`
`,e.jsx(p,{}),`
`,e.jsx(t.h1,{id:"server-side-rendering",children:"Server Side Rendering"}),`
`,e.jsxs(t.p,{children:["We're happy to announce that starting from ",e.jsx(t.strong,{children:"v1.17.0"}),", UI5 Web Components for React is supporting Server Side Rendering Frameworks like ",e.jsx(t.a,{href:"https://nextjs.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Next.js"})," 🎉."]}),`
`,e.jsx(h,{}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"nextjs",children:"Next.js"}),`
`,e.jsx(t.h3,{id:"create-a-new-project",children:"Create a new project"}),`
`,e.jsxs(t.p,{children:["The best way to start using UI5 Web Components in Next.js is using one of our ",e.jsx(t.a,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/project-templates--docs",target:"_blank",rel:"nofollow noopener noreferrer",children:"templates"}),`.
We have templates available for both the pages and the app router.`]}),`
`,e.jsx(t.h3,{id:"add-to-existing-project",children:"Add to existing project"}),`
`,e.jsxs(t.p,{children:["In case you already have an existing Next.js project and want to add UI5 Web Components for React to it, you first need to follow our ",e.jsx(t.a,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/getting-started--docs#add-ui5webcomponents-react-to-an-existing-app",target:"_blank",rel:"nofollow noopener noreferrer",children:"general Getting Started Guide"}),"."]}),`
`,e.jsxs(t.p,{children:["As UI5 Web Components for React is using ",e.jsx(t.code,{children:"react-jss"})," internally, you need to apply some changes to your ",e.jsx(t.code,{children:"_app"})," and ",e.jsx(t.code,{children:"_document"}),` file (in case you are using the pages router).
You can copy these changes either from the official `,e.jsx(t.a,{href:"https://github.com/vercel/next.js/tree/canary/examples/with-react-jss",target:"_blank",rel:"nofollow noopener noreferrer",children:"next.js-react-jss example"})," or from our ",e.jsx(t.a,{href:"https://github.com/SAP/ui5-webcomponents-react/tree/main/examples/nextjs-pages",target:"_blank",rel:"nofollow noopener noreferrer",children:"pages router template"}),"."]}),`
`,e.jsxs(t.p,{children:["In case you are already using the app router, you can copy the ",e.jsx(t.code,{children:"react-jss"})," setup from the ",e.jsx(t.code,{children:"app/CssRegistry.tsx"})," in our ",e.jsx(t.a,{href:"https://github.com/SAP/ui5-webcomponents-react/tree/main/examples/nextjs-app",target:"_blank",rel:"nofollow noopener noreferrer",children:"app router template"}),". Make sure to add this component to your root layout!"]}),`
`,e.jsx(t.h2,{id:"other-frameworks",children:"Other frameworks"}),`
`,e.jsxs(t.p,{children:["Your favorite framework is missing here? Feel free to ",e.jsx(t.a,{href:"https://github.com/SAP/ui5-webcomponents-react/blob/main/docs/knowledge-base/ServerSideRendering.mdx",target:"_blank",rel:"nofollow noopener noreferrer",children:"edit this page"})," and submit a pull request to get it added!"]}),`
`,e.jsx(a,{})]})}}export{we as default};
//# sourceMappingURL=ServerSideRendering-85521a78.js.map
