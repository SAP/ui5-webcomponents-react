import{j as e}from"./jsx-runtime-5926aa06.js";import{M as a}from"./chunk-PCJTTTQV-d3c2c893.js";import"./DomRefTable.module-8bb2cc9c.js";import"./index-ebeaab24.js";import{T as s}from"./TableOfContent-a6135d52.js";import{F as p}from"./Footer-a66983eb.js";import{u as r}from"./index-bda0bad7.js";import"./iframe-ef582881.js";import"../sb-preview/runtime.js";import"./react-18-95218780.js";import"./mapValues-f5a21168.js";import"./_baseForOwn-8b0cf1d5.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-20c8b51e.js";import"./_baseUniq-8051c65b.js";import"./index-356e4a49.js";import"./react-jss.esm-022ab528.js";import"./index-b374007c.js";import"./UI5Element-fb9ecf93.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d4224c1c.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-ef594e9f.js";import"./Icons-2c98f222.js";import"./decline-3df8c953.js";import"./i18n-defaults-80781f7e.js";import"./information-451d615b.js";import"./class-map-18f572ce.js";import"./Button-4160b137.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-99b8bbf4.js";import"./i18n-defaults-a58643fd.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-9af65fbe.js";import"./index-ea035418.js";import"./Integer-f7f172c9.js";import"./index-e8782cbc.js";import"./Avatar-3c16d274.js";import"./ResizeHandler-36560530.js";import"./employee-f2f473ef.js";import"./index-a6e91fba.js";import"./index-91489cf8.js";import"./Link-057b3642.js";import"./WrappingType-b81e595a.js";import"./index-2c77de22.js";import"./index-c9e548a1.js";import"./Label-7f4aa83d.js";import"./index-8e7563b0.js";import"./index-5e3d3a36.js";import"./Popover-510446d9.js";import"./PopupsCommon.css-f7aa7df0.js";import"./FocusableElements-6f0cd02a.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-54298215.js";import"./BrowserScrollbar.css-0e9b1550.js";function ye(o={}){const{wrapper:n}=Object.assign({},r(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(i,{})})):i();function i(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",pre:"pre"},r(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Working with Portals"}),`
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
//# sourceMappingURL=Portals-75e60f9f.js.map
