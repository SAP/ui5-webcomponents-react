import{j as e,a as o,F as p}from"./jsx-runtime-670450c2.js";import"./chunk-G4YQS2SV-b9ac4f89.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{M as c}from"./index-e4fcead0.js";import"./DomRefTable.module-1b79c6b3.js";import"./index-f1f749bf.js";import"./Import-01116ee1.js";import{T as l}from"./TableOfContent-88fbd465.js";import{F as m}from"./Footer-b76d0352.js";import{u as a}from"./index-4fb8b842.js";import"./iframe-c524cba9.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./react-jss.esm-e54d2f1d.js";import"./index-cf6105bc.js";import"./UI5Element-727d48d7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-63dd52a0.js";import"./utils-ed90fb1b.js";import"./AriaLabelHelper-dee23f38.js";import"./MarkedEvents-0e37da6f.js";import"./decline-ff534003.js";import"./Icons-5bcf1e3f.js";import"./class-map-abcca105.js";import"./Button-2e5054c2.js";import"./Keys-50a1cb5a.js";import"./index-6923d62a.js";import"./clsx.m-1229b3e0.js";import"./Footer.module-c4f3b823.js";import"./index-dc1c3c21.js";import"./Label-6707bdfc.js";import"./WrappingType-b81e595a.js";import"./index-fdf6cf85.js";import"./index-e315734d.js";import"./Popover-97ca01c1.js";import"./Integer-8010a7ae.js";import"./FocusableElements-5a723910.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-c56abc92.js";import"./MediaRange-25b98f31.js";import"./style-map-7b3eb5df.js";function le(n={}){const{wrapper:i}=Object.assign({},a(),n.components);return i?e(i,Object.assign({},n,{children:e(r,{})})):r();function r(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",pre:"pre"},a(),n.components);return o(p,{children:[e(c,{title:"Working with Portals"}),`
`,e(t.h1,{children:"Working with Portals"}),`
`,e(t.p,{children:"This entry explains why portals are used in UI5 Web Components for React components and what you need to consider when using them."}),`
`,e("br",{}),`
`,e(l,{headingSelector:"h2"}),`
`,e("br",{}),`
`,e(t.h2,{children:"Why Portals?"}),`
`,o(t.p,{children:["In most cases when a React component like the ",e(t.code,{children:"AnalyticalTable"})," implements a popover like a ",e(t.code,{children:"Dialog"})," or ",e(t.code,{children:"ResponsivePopover"}),", we use a ",e(t.a,{href:"https://reactjs.org/docs/portals.html",children:"React Portal"})," to mount it outside the parents DOM hierarchy, to prevent unwanted side effects (wrong positioning, alignment, etc.)."]}),`
`,e(t.p,{children:"For example:"}),`
`,e(t.pre,{children:e(t.code,{className:"language-jsx",children:`const DialogComponent = () => {
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
`,e("br",{}),`
`,e(t.h2,{children:"Pitfalls"}),`
`,o(t.p,{children:[`In some cases you may want to add a class or attribute that is affecting all the components HTML elements. Since the popover is outside the DOM hierarchy of the most outer element of the component, the class/attribute/etc. will not be applied to it.
Or maybe you just don't want the popover to be mounted on the `,e(t.code,{children:"body"}),` element (which is the default).
For this we offer the `,e(t.code,{children:"portalContainer"})," prop. This prop is available on all components that implement a popover, and with its help you can define the container into which the popover is mounted."]}),`
`,o(t.p,{children:["For example, if you want to display the ",e(t.code,{children:"AnalyticalTable"})," in compact mode, while the rest of the app stays in cozy mode, then you could achieve that like this:"]}),`
`,e(t.p,{children:"Define a container somewhere in your DOM tree, where the portal should be rendered into and add the respective attribute/class/etc. to it."}),`
`,e(t.pre,{children:e(t.code,{className:"language-html",children:`<div id="modalContainer" class="ui5-content-density-compact" />
`})}),`
`,o(t.p,{children:["Then, set the ",e(t.code,{children:"portalContainer"})," to the respective element."]}),`
`,e(t.pre,{children:e(t.code,{className:"language-jsx",children:`<AnalyticalTable
  className="ui5-content-density-compact"
  portalContainer={document.getElementById('modalContainer')}
  data={data}
  columns={columns}
/>
`})}),`
`,e("div",{style:{height:"var(--_ui5_bar_base_height)"}}),`
`,e(m,{style:{position:"fixed",bottom:0,zIndex:2,maxHeight:"var(--_ui5_bar_base_height)"}})]})}}export{le as default};
//# sourceMappingURL=Portals-4c909fcf.js.map
