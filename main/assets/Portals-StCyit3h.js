import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{M as a}from"./chunk-HLWAVYOI-Fsp-hxMS.js";import"./DomRefTable.module-V_iz5pw3.js";import"./index-OjgoNOWw.js";import{T as s}from"./TableOfContent-E9FhblW9.js";import{F as p}from"./Footer-eFiH6U5V.js";import{u as r}from"./index-RwE9nQVW.js";import"./iframe-Lw9Evt3s.js";import"../sb-preview/runtime.js";import"./index--F0XPsCm.js";import"./index-QYh6idnL.js";import"./mapValues-TkJEqHhn.js";import"./_baseForOwn-SiKZKQog.js";import"./_baseUniq-frCQiV_D.js";import"./index-PPLHz8o0.js";import"./react-jss.esm-AmlvxLhk.js";import"./index-9Rd_IMLD.js";import"./UI5Element-66_7Xn_3.js";import"./i18nBundle-Q0g0h3jg.js";import"./VersionInfo-pP_ltRZs.js";import"./CustomElementsScopeUtils-EW5YHFd4.js";import"./withWebComponent-2sjwM42G.js";import"./utils-QJOW-WwB.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-Pjew2RCR.js";import"./Icons-nm0Q71Sx.js";import"./decline-qJ6wR11R.js";import"./i18n-defaults-n2A5pq_J.js";import"./information-ME8CmmmC.js";import"./alert-Ymv9FYbl.js";import"./class-map--IQ_mtyb.js";import"./Button-mmkHl5a0.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./i18n-defaults-RBzcmDt8.js";import"./index-qkhvCaCQ.js";import"./clsx-2Jv0kmJG.js";import"./i18n-defaults-iuWYBGeC.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-57oB5XHU.js";import"./index-74gTEkhE.js";import"./Integer-kog98579.js";import"./index-jnaUnQ4S.js";import"./Avatar-AvAtElJx.js";import"./ResizeHandler-hw9R1O21.js";import"./employee-AJKdaGgo.js";import"./index-FGcl4OpY.js";import"./index-ElgmpuNv.js";import"./Link-4yu6Lagp.js";import"./WrappingType-avPrqc94.js";import"./index-ZYxd7chN.js";import"./index-lbOevkjn.js";import"./Label-h0RP0plm.js";import"./index-yQJZHkj2.js";import"./index-mV7dNsSC.js";import"./Popover-9STvCKGK.js";import"./PopupUtils-yApLm5YW.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-dDtjLgUi.js";import"./FocusableElements-yzAVBk6R.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-Pb14hoiG.js";import"./BrowserScrollbar.css-F0Fjr-0B.js";function bt(o={}){const{wrapper:n}=Object.assign({},r(),o.components);return n?t.jsx(n,Object.assign({},o,{children:t.jsx(i,{})})):i();function i(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",pre:"pre"},r(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"Working with Portals"}),`
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
`,t.jsx(p,{style:{position:"fixed",bottom:0,zIndex:2}})]})}}export{bt as default};
//# sourceMappingURL=Portals-StCyit3h.js.map
