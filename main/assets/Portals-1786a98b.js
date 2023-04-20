import{j as t,a as o,F as p}from"./jsx-runtime-670450c2.js";import{M as l}from"./chunk-PCJTTTQV-817285ad.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./DomRefTable.module-9b23eb8e.js";import"./index-f1f749bf.js";import"./Import-b47efb64.js";import{T as m}from"./TableOfContent-17e8805e.js";import{F as c}from"./Footer-0ce8e133.js";import{u as a}from"./index-4fb8b842.js";import"./iframe-47eb2c93.js";import"../sb-preview/runtime.mjs";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./react-jss.esm-2e28eff7.js";import"./index-187c3334.js";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-76e48863.js";import"./Icon-27a81412.js";import"./Icons-5b18f7d2.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./class-map-6d48ebd3.js";import"./Button-fa05cadd.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./index-44cc9c22.js";import"./clsx.m-1229b3e0.js";import"./index-8aef4b01.js";import"./Label-528b8168.js";import"./WrappingType-b81e595a.js";import"./index-deda40ad.js";import"./Link-3b8926df.js";import"./index-67e197ac.js";import"./Popover-824d4d7c.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7f720278.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-382f34a2.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";function yt(n={}){const{wrapper:i}=Object.assign({},a(),n.components);return i?t(i,Object.assign({},n,{children:t(r,{})})):r();function r(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",pre:"pre"},a(),n.components);return o(p,{children:[t(l,{title:"Working with Portals"}),`
`,t(e.h1,{id:"working-with-portals",children:"Working with Portals"}),`
`,t(e.p,{children:"This entry explains why portals are used in UI5 Web Components for React components and what you need to consider when using them."}),`
`,t("br",{}),`
`,t(m,{headingSelector:"h2"}),`
`,t("br",{}),`
`,t(e.h2,{id:"why-portals",children:"Why Portals?"}),`
`,o(e.p,{children:["In most cases when a React component like the ",t(e.code,{children:"AnalyticalTable"})," implements a popover like a ",t(e.code,{children:"Dialog"})," or ",t(e.code,{children:"ResponsivePopover"}),", we use a ",t(e.a,{href:"https://reactjs.org/docs/portals.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"React Portal"})," to mount it outside the parents DOM hierarchy, to prevent unwanted side effects (wrong positioning, alignment, etc.)."]}),`
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
`,t(e.h2,{id:"pitfalls",children:"Pitfalls"}),`
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
`,t(c,{style:{position:"fixed",bottom:0,zIndex:2,maxHeight:"var(--_ui5_bar_base_height)"}})]})}}export{yt as default};
//# sourceMappingURL=Portals-1786a98b.js.map
