import{j as t}from"./useIsomorphicLayoutEffect-BpDYIkAV.js";import{useMDXComponents as i}from"./index-44b7z5bc.js";import"./chunk-HLWAVYOI-Coc2dbv7.js";import{M as r}from"./index-DRz2hk48.js";import"./index-Bk8Ithva.js";import"./TagDesign-Dou_yO3g.js";import"./index-DEe9W-hO.js";import"./index-D6UH2S5y.js";import"./UI5Element-Cjk_cKug.js";import"./copy-_3t6R87k.js";import"./Button-BzvkKBmq.js";import{F as p}from"./CommandsAndQueries-DfO_EoOU.js";import{T as a}from"./TableOfContent-7Ygrv8G1.js";import"./WrappingType-CW8URInd.js";import"./iframe-0howv_Dp.js";import"../sb-preview/runtime.js";import"./client-BEgA9EFc.js";import"./_baseForOwn-DVWQo5xw.js";import"./mapValues-DXlf5GIm.js";import"./_baseUniq-BqAhPu7p.js";import"./index-Ba91SQPT.js";import"./index-DrFu-skq.js";import"./withWebComponent-ZLYt6Z72.js";import"./utils-Cjkb-4uz.js";import"./CustomElementsScopeUtils-CJFx-0ms.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-DTd686OT.js";import"./decline-CnfxIuyS.js";import"./Icons-bHVDH2o-.js";import"./i18n-defaults-eVMsPoDe.js";import"./information-Ds_NTOym.js";import"./alert-5g0GnjXW.js";import"./class-map-Dho2ozJ6.js";import"./if-defined-9iVrMyiP.js";import"./Icon-CzTkrOrA.js";import"./Device-RcFucVeJ.js";import"./Keys-pFVWso__.js";import"./parameters-bundle.css-BFbT_feV.js";import"./i18n-defaults-BPJU920w.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-ldWqkrC3.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-CBVvS9lW.js";import"./Popover-5eNGP7Bf.js";import"./PopupsCommon.css-C9rG7FRw.js";import"./FocusableElements-Dst-wEMC.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BX_Vwu-f.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-ZLasDAym.js";import"./BrowserScrollbar.css-DPWlQluy.js";import"./index-BDFEWlxK.js";import"./Label-BCs7fK18.js";import"./index-B4H3qawp.js";import"./index-vgsGM25s.js";import"./Link-CoCG3JZh.js";import"./index-D3UTY3No.js";import"./index-BgM2iT7f.js";import"./I18nStore-DimJQVWm.js";import"./ModalsContext-C4nEcU7T.js";import"./useIsomorphicId-CULvwDT0.js";import"./addCustomCSSWithScoping-B_dl8XEe.js";import"./index-DW2xgIbK.js";import"./index-D8ggj6z5.js";import"./index-BUDWBPQn.js";import"./Avatar-DoGtfKYI.js";import"./employee-BgURwoFi.js";import"./index-DfcSCthV.js";function n(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Working with Portals"}),`
`,t.jsx(e.h1,{id:"working-with-portals",children:"Working with Portals"}),`
`,t.jsx(e.p,{children:"This entry explains why portals are used in UI5 Web Components for React components and what you need to consider when using them."}),`
`,t.jsx("br",{}),`
`,t.jsx(a,{headingSelector:"h2"}),`
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
`,t.jsx(p,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function Tt(o={}){const{wrapper:e}={...i(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(n,{...o})}):n(o)}export{Tt as default};
