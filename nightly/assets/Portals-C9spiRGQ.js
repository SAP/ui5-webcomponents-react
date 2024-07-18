import{j as e}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import{useMDXComponents as i}from"./index-yodfxRVR.js";import"./chunk-HLWAVYOI-DsVmAfnR.js";import{M as s}from"./index-eupzw27i.js";import{M as a,a as p}from"./index-Rfs5D5yi.js";import"./TagDesign-Dou_yO3g.js";import"./index-BQ1WsyJB.js";import"./index-BLtMylri.js";import"./withWebComponent-DykTwaBJ.js";import"./copy-CIslHIHM.js";import"./Button-gEiq340s.js";import{F as l}from"./CommandsAndQueries-Cd441gXK.js";import{T as m}from"./TableOfContent-WMf5spSG.js";import"./WrappingType-CW8URInd.js";import"./iframe-Da0strPg.js";import"../sb-preview/runtime.js";import"./client-CM2XqZNc.js";import"./_baseForOwn-DusBTQ6O.js";import"./mapValues-DfqGXSk1.js";import"./_baseUniq-BpWYsmmS.js";import"./index-Cagd9BgA.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CEPDwMcb.js";import"./utils-BXNPXA0w.js";import"./decline-PQHY0vmQ.js";import"./Icon-C1aVUqaK.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-Pg2MF6OO.js";import"./parameters-bundle.css-BFbT_feV.js";import"./i18n-defaults-4yB5uAXJ.js";import"./information-s0rUc520.js";import"./alert-B5x9ZRdn.js";import"./class-map-BBkLNtsu.js";import"./i18n-defaults-Ddp6Qu_n.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-Did8UXWE.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BB85D3ff.js";import"./Popover-xb-dB4fv.js";import"./PopupsCommon.css-BS0HwvId.js";import"./getEffectiveScrollbarStyle-C7TfqF8H.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CwA30WlK.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CP3POd5N.js";import"./BrowserScrollbar.css-3d9vQOhG.js";import"./index-Cnl759Il.js";import"./Label-Cn8Z-EZA.js";import"./index-BdTvKG3b.js";import"./index-DnVqtAiG.js";import"./Link-DvVq2Sbg.js";import"./index-DBm8g8Fq.js";import"./index-BsDgV4lW.js";import"./I18nStore-DkMZE6H0.js";import"./useIsomorphicId-8WwglsiH.js";import"./addCustomCSSWithScoping-CP2Nptdn.js";import"./index-Vie5zbfG.js";import"./index-h7ZFK2sv.js";import"./index-CV5tLekh.js";import"./Avatar-CTYNbiCX.js";import"./employee-CVOZDo5u.js";import"./index-SV0IDyNY.js";function n(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre","ui5-link":"ui5-link",...i(),...o.components},r=t["ui5-link"];return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Working with Portals (v1)"}),`
`,e.jsx(t.h1,{id:"working-with-portals-in-v1",children:"Working with Portals in v1"}),`
`,e.jsx(a,{hideCloseButton:!0,design:p.Critical,children:e.jsxs(e.Fragment,{children:["Since v2, it's not necessary to use portals anymore, as all popovers and dialogs are now using the"," ",e.jsx(r,{target:"_blank",href:"https://developer.mozilla.org/en-US/docs/Web/API/Popover_API",children:"Popover API"}),"."]})}),`
`,e.jsx(t.p,{children:"This entry explains why portals are used in UI5 Web Components for React components and what you need to consider when using them."}),`
`,e.jsx("br",{}),`
`,e.jsx(m,{headingSelector:"h2"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"why-portals",children:"Why Portals?"}),`
`,e.jsxs(t.p,{children:["In most cases when a React component like the ",e.jsx(t.code,{children:"AnalyticalTable"})," implements a popover like a ",e.jsx(t.code,{children:"Dialog"})," or ",e.jsx(t.code,{children:"ResponsivePopover"}),", we use a ",e.jsx(t.a,{href:"https://react.dev/reference/react-dom/createPortal",rel:"nofollow",children:"React Portal"})," to mount it outside the parents DOM hierarchy, to prevent unwanted side effects (wrong positioning, alignment, etc.)."]}),`
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
`,e.jsx(l,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function Me(o={}){const{wrapper:t}={...i(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{Me as default};
