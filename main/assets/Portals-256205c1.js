import{j as e}from"./jsx-runtime-5926aa06.js";import{M as s}from"./chunk-PCJTTTQV-994f0cbc.js";import"./DomRefTable.module-ad47dab3.js";import"./index-ebeaab24.js";import{T as a}from"./TableOfContent-c76a74b2.js";import{F as p}from"./Footer-f528fa13.js";import{u as r}from"./index-bda0bad7.js";import"./iframe-1f7bc337.js";import"../sb-preview/runtime.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./react-jss.esm-022ab528.js";import"./index-e3b2ee5c.js";import"./UI5Element-533070c8.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-2e16c08b.js";import"./Icons-67fab4b0.js";import"./decline-1d33941a.js";import"./i18n-defaults-80781f7e.js";import"./information-e88b206d.js";import"./class-map-6a9bd920.js";import"./Button-21e98691.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-2f9956dc.js";import"./index-4c0ab015.js";import"./clsx.m-1229b3e0.js";import"./index-ddd6f982.js";import"./Label-94e3ba9d.js";import"./WrappingType-b81e595a.js";import"./index-73c8b848.js";import"./Link-08f0fbaf.js";import"./index-e9ea925e.js";import"./Popover-167ff704.js";import"./Integer-f7f172c9.js";import"./PopupUtils-ba2b770f.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-97917f6d.js";import"./FocusableElements-eec123c0.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-aaf74c24.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";function ce(o={}){const{wrapper:n}=Object.assign({},r(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(i,{})})):i();function i(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",pre:"pre"},r(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Working with Portals"}),`
`,e.jsx(t.h1,{id:"working-with-portals",children:"Working with Portals"}),`
`,e.jsx(t.p,{children:"This entry explains why portals are used in UI5 Web Components for React components and what you need to consider when using them."}),`
`,e.jsx("br",{}),`
`,e.jsx(a,{headingSelector:"h2"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"why-portals",children:"Why Portals?"}),`
`,e.jsxs(t.p,{children:["In most cases when a React component like the ",e.jsx(t.code,{children:"AnalyticalTable"})," implements a popover like a ",e.jsx(t.code,{children:"Dialog"})," or ",e.jsx(t.code,{children:"ResponsivePopover"}),", we use a ",e.jsx(t.a,{href:"https://reactjs.org/docs/portals.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"React Portal"})," to mount it outside the parents DOM hierarchy, to prevent unwanted side effects (wrong positioning, alignment, etc.)."]}),`
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
`,e.jsx(p,{style:{position:"fixed",bottom:0,zIndex:2,maxHeight:"var(--_ui5_bar_base_height)"}})]})}}export{ce as default};
//# sourceMappingURL=Portals-256205c1.js.map
