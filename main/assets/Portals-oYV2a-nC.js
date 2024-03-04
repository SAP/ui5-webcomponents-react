import{j as t}from"./jsx-runtime-DtaoT6pD.js";import"./chunk-HLWAVYOI-leDQRv8t.js";import{M as p}from"./index-w_KNYzdC.js";import{F as a}from"./ProjectTemplate-mXcs-h4m.js";import"./index-OjgoNOWw.js";import"./index-QYh6idnL.js";import"./copy-PqQY0mDn.js";import{T as s}from"./TableOfContent-R4gYEGDe.js";import{u as r}from"./index-RwE9nQVW.js";import"./iframe-w7CQ-D9r.js";import"../sb-preview/runtime.js";import"./react-18-1WT2dSvK.js";import"./_baseForOwn-a7AeJH13.js";import"./mapValues-_kP3xGjM.js";import"./_baseUniq-_JZHYp0e.js";import"./index-PPLHz8o0.js";import"./index-7I0hdIjK.js";import"./react-jss.esm-fzYOEaou.js";import"./theming.esm-g_6oAtQL.js";import"./index-4uMXiAEG.js";import"./UI5Element-ZYvPEp0D.js";import"./Language-JQ3LAQtE.js";import"./VersionInfo-zmLW7G4m.js";import"./CustomElementsScopeUtils-StEZUlti.js";import"./withWebComponent-c-uI2wMj.js";import"./utils-_oNUceU3.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./event-lM5HanI-.js";import"./i18nBundle-1RfbKOQr.js";import"./decline-U1O_cqCB.js";import"./Icons-cAVhCySg.js";import"./i18n-defaults-SIMqfZL6.js";import"./information-QdD8C0Qh.js";import"./alert-dBb1Jp03.js";import"./class-map-kWxrnrVL.js";import"./Icon-7RzQfNaI.js";import"./Keys-ZEuNsqmZ.js";import"./parameters-bundle.css-mPCp9TQx.js";import"./Button-6A8kFSGe.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./willShowContent-MSvI8sYo.js";import"./HasPopup-9BAMrqbD.js";import"./i18n-defaults-5NJLMpyi.js";import"./index-9TkWQxrR.js";import"./clsx-Zbgk8kpT.js";import"./index-p8XZVIs1.js";import"./Label-fARuFZ49.js";import"./WrappingType-avPrqc94.js";import"./index-qR-aVK57.js";import"./index-wW3Slwi7.js";import"./Link-HKW89dQ_.js";import"./index-8wSULvld.js";import"./Popover-UsQMNwiB.js";import"./Integer-kog98579.js";import"./PopupUtils-ihEiSFJi.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-ITzmnbbD.js";import"./FocusableElements-vlqyWKZU.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./ResizeHandler-YURVNHbB.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-5XXpitLE.js";import"./BrowserScrollbar.css-za47fcqD.js";import"./index-SpQb4Cav.js";import"./i18n-defaults-8iJXv8tC.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-O-3hYuZs.js";import"./useStylesheet-2TpYMoe1.js";import"./ModalsContext-T9gUbaXC.js";import"./addCustomCSSWithScoping-tGNiKL_K.js";import"./index-3ZkuyFOy.js";import"./index-puIsBbBq.js";import"./Avatar-W7sCbj87.js";import"./employee-LTkoba5Z.js";import"./index-KHhuXy4B.js";function Nt(o={}){const{wrapper:n}=Object.assign({},r(),o.components);return n?t.jsx(n,Object.assign({},o,{children:t.jsx(i,{})})):i();function i(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",pre:"pre"},r(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Working with Portals"}),`
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
`,t.jsx(a,{style:{position:"fixed",bottom:0,zIndex:2}})]})}}export{Nt as default};
