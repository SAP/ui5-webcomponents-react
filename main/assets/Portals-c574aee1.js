import{j as e,a as o,F as p}from"./jsx-runtime-670450c2.js";import"./chunk-PCJTTTQV-b0832a2e.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{M as m}from"./index-10343285.js";import"./DomRefTable.module-cfd794f9.js";import"./index-f1f749bf.js";import"./Import-0b6fa56b.js";import{T as c}from"./TableOfContent-8fa697be.js";import{F as l}from"./Footer-640a9f68.js";import{u as a}from"./index-4fb8b842.js";import"./iframe-e9a69322.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./react-jss.esm-fe4dc3ff.js";import"./index-6436bc2b.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-c82262ef.js";import"./i18n-defaults-ffd92f69.js";import"./decline-66da1fc6.js";import"./Icons-7b82f601.js";import"./i18n-defaults-8c9b7f08.js";import"./class-map-5d8e4b2b.js";import"./Icon-ce854b74.js";import"./Keys-3acbae73.js";import"./Button-b2f5d653.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./index-ffc1363e.js";import"./clsx.m-1229b3e0.js";import"./Footer.module-f90cad7d.js";import"./index-333b46ad.js";import"./WrappingType-b81e595a.js";import"./index-76de7cc5.js";import"./Label-040efebd.js";import"./index-3d262420.js";import"./Popover-93eeebac.js";import"./Integer-d9976c13.js";import"./PopupsCommon.css-72d38d0e.js";import"./FocusableElements-c2f39514.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";function ue(n={}){const{wrapper:i}=Object.assign({},a(),n.components);return i?e(i,Object.assign({},n,{children:e(r,{})})):r();function r(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",pre:"pre"},a(),n.components);return o(p,{children:[e(m,{title:"Working with Portals"}),`
`,e(t.h1,{children:"Working with Portals"}),`
`,e(t.p,{children:"This entry explains why portals are used in UI5 Web Components for React components and what you need to consider when using them."}),`
`,e("br",{}),`
`,e(c,{headingSelector:"h2"}),`
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
`,e(l,{style:{position:"fixed",bottom:0,zIndex:2,maxHeight:"var(--_ui5_bar_base_height)"}})]})}}export{ue as default};
//# sourceMappingURL=Portals-c574aee1.js.map
