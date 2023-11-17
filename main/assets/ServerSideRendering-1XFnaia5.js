import{j as e}from"./jsx-runtime-DtaoT6pD.js";import"./DomRefTable.module-rVGi012t.js";import{M as s}from"./chunk-HLWAVYOI-UeCpg4wL.js";import"./index-OjgoNOWw.js";import{T as p}from"./TableOfContent-bZnE1URh.js";import{F as a}from"./Footer-jfdx2u5v.js";import{M as m,a as c}from"./index-visvyNcT.js";import{u as i}from"./index-RwE9nQVW.js";import"./react-jss.esm-AmlvxLhk.js";import"./index-S1zyQWjr.js";import"./clsx-2Jv0kmJG.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-PxRYiixA.js";import"./UI5Element-51XrG2PJ.js";import"./CustomElementsScopeUtils-FvbtGFoH.js";import"./utils-CrDMzPRG.js";import"./index-WbINX23N.js";import"./iframe-_OlRtZJR.js";import"../sb-preview/runtime.js";import"./withWebComponent-ceo0jn6D.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-HNXZSIOG.js";import"./Icons-3pbvVZUr.js";import"./Integer-kog98579.js";import"./class-map-JXa0-u4l.js";import"./i18n-defaults-RBzcmDt8.js";import"./index-F2xDrKNT.js";import"./Avatar-hI9OSh5N.js";import"./ResizeHandler-9pqGT1BJ.js";import"./employee-QIf_hgHb.js";import"./alert-TGfQazfI.js";import"./index-06AsSkAh.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./index-pvnqkZ_E.js";import"./Link-DluRE2Z1.js";import"./MarkedEvents-aYv14vsS.js";import"./WrappingType-avPrqc94.js";import"./index--F0XPsCm.js";import"./index-QYh6idnL.js";import"./mapValues-TkJEqHhn.js";import"./_baseForOwn-SiKZKQog.js";import"./_baseUniq-frCQiV_D.js";import"./index-PPLHz8o0.js";import"./index-ZYxd7chN.js";import"./index-nNeIKPnb.js";import"./Label-z__cPwIf.js";import"./index-2S6zoQWg.js";import"./Button-a5xMWTkk.js";import"./index-f2x4nzdX.js";import"./Popover-pPQH5XeW.js";import"./PopupUtils-JhQDb1QD.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-q9U65Wkb.js";import"./FocusableElements-W9IwOAGU.js";import"./isElementHidden-d3-Fo4V6.js";import"./decline-Q45dXYUl.js";import"./i18n-defaults-n2A5pq_J.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-uWW-8QIe.js";import"./BrowserScrollbar.css-HfEGARrw.js";import"./information-WfdY8QHP.js";function h(){return e.jsx(m,{design:c.Information,hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Known Limitations"}),e.jsxs("ul",{children:[e.jsx("li",{children:"As custom elements need to be defined on the client, UI5 Web Components for React is only rendering the outer markup of the UI5 Web Component on the server. The rendering of the Web Component is still happening on the client."}),e.jsxs("li",{children:["The Next.js ",e.jsx("code",{children:"app"})," directory shows some hydration warnings on the client. These warnings seem not to affect the runtime."]})]})]})})}function we(r={}){const{wrapper:o}=Object.assign({},i(),r.components);return o?e.jsx(o,Object.assign({},r,{children:e.jsx(n,{})})):n();function n(){const t=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",h2:"h2",h3:"h3",code:"code"},i(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Server Side Rendering"}),`
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
//# sourceMappingURL=ServerSideRendering-1XFnaia5.js.map
