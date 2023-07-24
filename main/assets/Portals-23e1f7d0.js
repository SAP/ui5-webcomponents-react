import{j as e}from"./jsx-runtime-d079401a.js";import{M as a}from"./chunk-PCJTTTQV-a4763065.js";import"./DomRefTable.module-fd4c838f.js";import"./index-f1f2c4b1.js";import{T as s}from"./TableOfContent-ede5568f.js";import{F as p}from"./Footer-dba3e2ae.js";import{u as r}from"./index-59d6410c.js";import"./iframe-7c1f16f0.js";import"../sb-preview/runtime.js";import"./react-18-50d7df5e.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./index-c74c9f7f.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./react-jss.esm-c310038c.js";import"./index-6804988c.js";import"./UI5Element-11982a12.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-99b005ba.js";import"./utils-626dc1bf.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-31253496.js";import"./Icons-234bf59e.js";import"./decline-c1cc2557.js";import"./i18n-defaults-837f5aed.js";import"./information-2644a02f.js";import"./class-map-b4d8f3b0.js";import"./Button-0b5fe0db.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-1a83921e.js";import"./index-47d0a85a.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-783dc33d.js";import"./index-c38f0a73.js";import"./Integer-f7f172c9.js";import"./index-e3c81f35.js";import"./Avatar-813f92b3.js";import"./ResizeHandler-9ebe913c.js";import"./employee-e34ffee2.js";import"./index-5f47c237.js";import"./index-7883aaf5.js";import"./Link-b0328393.js";import"./WrappingType-b81e595a.js";import"./index-13bed04c.js";import"./index-bbe669f1.js";import"./Label-62dd8470.js";import"./index-13209c12.js";import"./index-aa4358e7.js";import"./Popover-f3103b78.js";import"./PopupsCommon.css-552c6676.js";import"./FocusableElements-708d1a4e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-56038137.js";import"./BrowserScrollbar.css-527f9f64.js";function ye(o={}){const{wrapper:n}=Object.assign({},r(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(i,{})})):i();function i(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",pre:"pre"},r(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Working with Portals"}),`
`,e.jsx(t.h1,{id:"working-with-portals",children:"Working with Portals"}),`
`,e.jsx(t.p,{children:"This entry explains why portals are used in UI5 Web Components for React components and what you need to consider when using them."}),`
`,e.jsx("br",{}),`
`,e.jsx(s,{headingSelector:"h2"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"why-portals",children:"Why Portals?"}),`
`,e.jsxs(t.p,{children:["In most cases when a React component like the ",e.jsx(t.code,{children:"AnalyticalTable"})," implements a popover like a ",e.jsx(t.code,{children:"Dialog"})," or ",e.jsx(t.code,{children:"ResponsivePopover"}),", we use a ",e.jsx(t.a,{href:"https://react.dev/reference/react-dom/createPortal",target:"_blank",rel:"nofollow noopener noreferrer",children:"React Portal"})," to mount it outside the parents DOM hierarchy, to prevent unwanted side effects (wrong positioning, alignment, etc.)."]}),`
`,e.jsx(t.p,{children:"For example:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const DialogComponent = () => {
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
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"pitfalls",children:"Pitfalls"}),`
`,e.jsxs(t.p,{children:[`In some cases you may want to add a class or attribute that is affecting all the components HTML elements. Since the popover is outside the DOM hierarchy of the most outer element of the component, the class/attribute/etc. will not be applied to it.
Or maybe you just don't want the popover to be mounted on the `,e.jsx(t.code,{children:"body"}),` element (which is the default).
For this we offer the `,e.jsx(t.code,{children:"portalContainer"})," prop. This prop is available on all components that implement a popover, and with its help you can define the container into which the popover is mounted."]}),`
`,e.jsxs(t.p,{children:["For example, if you want to display the ",e.jsx(t.code,{children:"AnalyticalTable"})," in compact mode, while the rest of the app stays in cozy mode, then you could achieve that like this:"]}),`
`,e.jsx(t.p,{children:"Define a container somewhere in your DOM tree, where the portal should be rendered into and add the respective attribute/class/etc. to it."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<div id="modalContainer" class="ui5-content-density-compact" />
`})}),`
`,e.jsxs(t.p,{children:["Then, set the ",e.jsx(t.code,{children:"portalContainer"})," to the respective element."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`<AnalyticalTable
  className="ui5-content-density-compact"
  portalContainer={document.getElementById('modalContainer')}
  data={data}
  columns={columns}
/>
`})}),`
`,e.jsx("div",{style:{height:"var(--_ui5_bar_base_height)"}}),`
`,e.jsx(p,{style:{position:"fixed",bottom:0,zIndex:2,maxHeight:"var(--_ui5_bar_base_height)"}})]})}}export{ye as default};
//# sourceMappingURL=Portals-23e1f7d0.js.map
