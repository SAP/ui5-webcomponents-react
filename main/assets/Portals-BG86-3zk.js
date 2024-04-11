import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{useMDXComponents as i}from"./index-_byTH_QA.js";import"./chunk-HLWAVYOI-ivTWv1_t.js";import{M as r}from"./index-BEPfgvPA.js";import{F as p}from"./ProjectTemplate-BFgm0a7s.js";import"./index-Dl6G-zuu.js";import"./index-D1_ZHIBm.js";import"./copy-Dz4oTMJU.js";import{T as m}from"./TableOfContent-ObQsgB1K.js";import"./iframe-CoYB5J27.js";import"../sb-preview/runtime.js";import"./react-18-Bamk9FSf.js";import"./inheritsLoose-D8L2VVdp.js";import"./_baseForOwn-DFjKyXZi.js";import"./mapValues-BvzalXkB.js";import"./_baseUniq-DRxb5hvO.js";import"./index-2V9fy1S2.js";import"./index-DrFu-skq.js";import"./react-jss.esm-BPPChJW9.js";import"./theming.esm-5daRW75o.js";import"./index-B_adBFb1.js";import"./UI5Element-Lw3nTtTN.js";import"./Boot-B0Gt2ObV.js";import"./ManagedStyles-DX5mlBXq.js";import"./CustomElementsScopeUtils-CeSGtO6z.js";import"./withWebComponent-BF9ncEMl.js";import"./utils-D1_qxj0a.js";import"./useIsomorphicLayoutEffect-gsbYElqV.js";import"./slot-Df15G--e.js";import"./event-CegLCnR0.js";import"./i18nBundle-Duvqe7kG.js";import"./decline-TOiDlE0p.js";import"./Icons-DfCrNAdQ.js";import"./i18n-defaults-CFK4Zk7G.js";import"./information-ooFgY1vE.js";import"./alert-D4nm4k8k.js";import"./class-map-DeOlvaAn.js";import"./Icon-C20AIXTC.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./Button-D13uYO2F.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-D1sujP0E.js";import"./index-DY9D8UIw.js";import"./clsx-B-dksMZM.js";import"./index-C4HQ8Vbq.js";import"./Label-CTVRjihb.js";import"./WrappingType-CW8URInd.js";import"./index-DNwI0-c7.js";import"./index-Dh_GmrHt.js";import"./Link-B2j2s4Ih.js";import"./index-BsMLGu8H.js";import"./Popover-DXiCQ_F_.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DmBeTAQh.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-C1DKTBbu.js";import"./FocusableElements-4YGFH9ta.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-OFvM0oAF.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-O1QwFldx.js";import"./BrowserScrollbar.css-BiclUngR.js";import"./index-BjS4ztKm.js";import"./i18n-defaults-GDPbxlcd.js";import"./I18nContext-BcGksm2n.js";import"./ThemingParameters--AGRs54p.js";import"./index-BPVTr8FI.js";import"./useStylesheet-D5wp95d6.js";import"./ModalsContext-qaxSwC3j.js";import"./addCustomCSSWithScoping-DAt1aefI.js";import"./index-DvuMn_3T.js";import"./index-BdSR8mKf.js";import"./Avatar-BwXc-3ne.js";import"./employee-C3y4a2zL.js";import"./index-cLAYNbWS.js";function n(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Working with Portals"}),`
`,t.jsx(e.h1,{id:"working-with-portals",children:"Working with Portals"}),`
`,t.jsx(e.p,{children:"This entry explains why portals are used in UI5 Web Components for React components and what you need to consider when using them."}),`
`,t.jsx("br",{}),`
`,t.jsx(m,{headingSelector:"h2"}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"why-portals",children:"Why Portals?"}),`
`,t.jsxs(e.p,{children:["In most cases when a React component like the ",t.jsx(e.code,{children:"AnalyticalTable"})," implements a popover like a ",t.jsx(e.code,{children:"Dialog"})," or ",t.jsx(e.code,{children:"ResponsivePopover"}),", we use a ",t.jsx(e.a,{href:"https://react.dev/reference/react-dom/createPortal",rel:"nofollow",children:"React Portal"})," to mount it outside the parents DOM hierarchy, to prevent unwanted side effects (wrong positioning, alignment, etc.)."]}),`
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
`,t.jsx(p,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function Nt(o={}){const{wrapper:e}={...i(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(n,{...o})}):n(o)}export{Nt as default};
