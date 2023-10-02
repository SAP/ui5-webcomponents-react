import{j as t}from"./jsx-runtime-d079401a.js";import{M as a}from"./chunk-S4VUQJ4A-aa8bbc14.js";import"./DomRefTable.module-7e5b3ff6.js";import"./index-f1f2c4b1.js";import{T as s}from"./TableOfContent-0cd31373.js";import{F as p}from"./Footer-3ffae1ff.js";import{u as r}from"./index-59d6410c.js";import"./iframe-174a0e51.js";import"../sb-preview/runtime.js";import"./index-92d824d3.js";import"./index-c74c9f7f.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./react-jss.esm-2e5f50f2.js";import"./index-d6910adc.js";import"./UI5Element-fe43d284.js";import"./CustomElementsScopeUtils-7e643eaa.js";import"./withWebComponent-40b4b429.js";import"./utils-64df43e3.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-4b8e6c3e.js";import"./Icons-1d0bcfc0.js";import"./decline-6c7fc0a2.js";import"./i18n-defaults-bdef1cce.js";import"./information-5d7a8806.js";import"./alert-1b225bb9.js";import"./class-map-c90b90b7.js";import"./Button-ca10e4c6.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-d5195a49.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-0dcb0e40.js";import"./index-75eac066.js";import"./Integer-f7f172c9.js";import"./index-7e54d59e.js";import"./Avatar-b61e760c.js";import"./ResizeHandler-c2d89e75.js";import"./employee-6f8dc3b6.js";import"./index-69c6fd40.js";import"./index-40728f1b.js";import"./Link-39a6449b.js";import"./WrappingType-b81e595a.js";import"./index-12e0da73.js";import"./index-65aa6e2e.js";import"./Label-44520d2b.js";import"./index-8e334614.js";import"./index-4fbe5b1e.js";import"./Popover-e0a9892e.js";import"./PopupUtils-6f7aa5d8.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-20392ac5.js";import"./FocusableElements-81dc3a15.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-26bcc635.js";import"./BrowserScrollbar.css-6733af99.js";function yt(o={}){const{wrapper:n}=Object.assign({},r(),o.components);return n?t.jsx(n,Object.assign({},o,{children:t.jsx(i,{})})):i();function i(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",pre:"pre"},r(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"Working with Portals"}),`
`,t.jsx(e.h1,{id:"working-with-portals",children:"Working with Portals"}),`
`,t.jsx(e.p,{children:"This entry explains why portals are used in UI5 Web Components for React components and what you need to consider when using them."}),`
`,t.jsx("br",{}),`
`,t.jsx(s,{headingSelector:"h2"}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"why-portals",children:"Why Portals?"}),`
`,t.jsxs(e.p,{children:["In most cases when a React component like the ",t.jsx(e.code,{children:"AnalyticalTable"})," implements a popover like a ",t.jsx(e.code,{children:"Dialog"})," or ",t.jsx(e.code,{children:"ResponsivePopover"}),", we use a ",t.jsx(e.a,{href:"https://react.dev/reference/react-dom/createPortal",target:"_blank",rel:"nofollow noopener noreferrer",children:"React Portal"})," to mount it outside the parents DOM hierarchy, to prevent unwanted side effects (wrong positioning, alignment, etc.)."]}),`
`,t.jsx(e.p,{children:"For example:"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`const DialogComponent = () => {
  const dialogRef = useRef(null);
  const onButtonClick = () => {
    dialogRef.current.show();
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open Dialog</Button>
      {createPortal(<Dialog ref={dialogRef} />, document.body)}
    </>
  );
};
`})}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"pitfalls",children:"Pitfalls"}),`
`,t.jsxs(e.p,{children:[`In some cases you may want to add a class or attribute that is affecting all the components HTML elements. Since the popover is outside the DOM hierarchy of the most outer element of the component, the class/attribute/etc. will not be applied to it.
Or maybe you just don't want the popover to be mounted on the `,t.jsx(e.code,{children:"body"}),` element (which is the default).
For this we offer the `,t.jsx(e.code,{children:"portalContainer"})," prop. This prop is available on all components that implement a popover, and with its help you can define the container into which the popover is mounted."]}),`
`,t.jsxs(e.p,{children:["For example, if you want to display the ",t.jsx(e.code,{children:"AnalyticalTable"})," in compact mode, while the rest of the app stays in cozy mode, then you could achieve that like this:"]}),`
`,t.jsx(e.p,{children:"Define a container somewhere in your DOM tree, where the portal should be rendered into and add the respective attribute/class/etc. to it."}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<div id="modalContainer" class="ui5-content-density-compact" />
`})}),`
`,t.jsxs(e.p,{children:["Then, set the ",t.jsx(e.code,{children:"portalContainer"})," to the respective element."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`<AnalyticalTable
  className="ui5-content-density-compact"
  portalContainer={document.getElementById('modalContainer')}
  data={data}
  columns={columns}
/>
`})}),`
`,t.jsx(p,{style:{position:"fixed",bottom:0,zIndex:2}})]})}}export{yt as default};
//# sourceMappingURL=Portals-f5d13c1a.js.map
