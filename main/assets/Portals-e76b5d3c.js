import{j as t,a as o,F as p}from"./jsx-runtime-670450c2.js";import"./chunk-PCJTTTQV-b2f0d83c.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{M as m}from"./index-5a28dc6e.js";import"./DomRefTable.module-c577c592.js";import"./index-f1f749bf.js";import"./Import-848f489d.js";import{T as c}from"./TableOfContent-b85e6b9b.js";import{F as l}from"./Footer-c04c65a8.js";import{u as a}from"./index-4fb8b842.js";import"./iframe-297991cd.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./react-jss.esm-e54d2f1d.js";import"./index-ed0b3c55.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./event-97133b94.js";import"./decline-f2b294b3.js";import"./Icons-7b82f601.js";import"./i18n-defaults-80781f7e.js";import"./information-50e1ad0f.js";import"./class-map-5d8e4b2b.js";import"./Icon-459702a7.js";import"./Keys-3acbae73.js";import"./Button-04bad9a0.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-d66b3d5e.js";import"./index-da505e61.js";import"./clsx.m-1229b3e0.js";import"./Footer.module-f90cad7d.js";import"./index-ae7f496c.js";import"./Link-6d546ee9.js";import"./WrappingType-b81e595a.js";import"./index-bccdf6fc.js";import"./Label-040efebd.js";import"./index-81717726.js";import"./Popover-907d427e.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7d9fbba1.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";function xt(n={}){const{wrapper:i}=Object.assign({},a(),n.components);return i?t(i,Object.assign({},n,{children:t(r,{})})):r();function r(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",pre:"pre"},a(),n.components);return o(p,{children:[t(m,{title:"Working with Portals"}),`
`,t(e.h1,{children:"Working with Portals"}),`
`,t(e.p,{children:"This entry explains why portals are used in UI5 Web Components for React components and what you need to consider when using them."}),`
`,t("br",{}),`
`,t(c,{headingSelector:"h2"}),`
`,t("br",{}),`
`,t(e.h2,{children:"Why Portals?"}),`
`,o(e.p,{children:["In most cases when a React component like the ",t(e.code,{children:"AnalyticalTable"})," implements a popover like a ",t(e.code,{children:"Dialog"})," or ",t(e.code,{children:"ResponsivePopover"}),", we use a ",t(e.a,{href:"https://reactjs.org/docs/portals.html",children:"React Portal"})," to mount it outside the parents DOM hierarchy, to prevent unwanted side effects (wrong positioning, alignment, etc.)."]}),`
`,t(e.p,{children:"For example:"}),`
`,t(e.pre,{children:t(e.code,{className:"language-jsx",children:`const DialogComponent = () => {
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
`,t("br",{}),`
`,t(e.h2,{children:"Pitfalls"}),`
`,o(e.p,{children:[`In some cases you may want to add a class or attribute that is affecting all the components HTML elements. Since the popover is outside the DOM hierarchy of the most outer element of the component, the class/attribute/etc. will not be applied to it.
Or maybe you just don't want the popover to be mounted on the `,t(e.code,{children:"body"}),` element (which is the default).
For this we offer the `,t(e.code,{children:"portalContainer"})," prop. This prop is available on all components that implement a popover, and with its help you can define the container into which the popover is mounted."]}),`
`,o(e.p,{children:["For example, if you want to display the ",t(e.code,{children:"AnalyticalTable"})," in compact mode, while the rest of the app stays in cozy mode, then you could achieve that like this:"]}),`
`,t(e.p,{children:"Define a container somewhere in your DOM tree, where the portal should be rendered into and add the respective attribute/class/etc. to it."}),`
`,t(e.pre,{children:t(e.code,{className:"language-html",children:`<div id="modalContainer" class="ui5-content-density-compact" />
`})}),`
`,o(e.p,{children:["Then, set the ",t(e.code,{children:"portalContainer"})," to the respective element."]}),`
`,t(e.pre,{children:t(e.code,{className:"language-jsx",children:`<AnalyticalTable
  className="ui5-content-density-compact"
  portalContainer={document.getElementById('modalContainer')}
  data={data}
  columns={columns}
/>
`})}),`
`,t("div",{style:{height:"var(--_ui5_bar_base_height)"}}),`
`,t(l,{style:{position:"fixed",bottom:0,zIndex:2,maxHeight:"var(--_ui5_bar_base_height)"}})]})}}export{xt as default};
//# sourceMappingURL=Portals-e76b5d3c.js.map
