import{j as t}from"./useIsomorphicLayoutEffect-kTr5k6y8.js";import{useMDXComponents as i}from"./index-yodfxRVR.js";import"./chunk-HLWAVYOI-C5dzl8Li.js";import{M as s}from"./index-DmkH-BTr.js";import{M as a,a as p}from"./index-OdvdSMwT.js";import"./TagDesign-Dou_yO3g.js";import"./index-BQ1WsyJB.js";import"./index-BLtMylri.js";import"./UI5Element-CpDKvy14.js";import"./copy-SEOB1pIL.js";import"./Button-BNnZDQ19.js";import{F as m}from"./CommandsAndQueries-D6Lk-cRz.js";import{T as l}from"./TableOfContent-CKdjdhd9.js";import"./WrappingType-CW8URInd.js";import"./iframe-BSNFX450.js";import"../sb-preview/runtime.js";import"./client-CM2XqZNc.js";import"./_baseForOwn-DusBTQ6O.js";import"./mapValues-DfqGXSk1.js";import"./_baseUniq-BpWYsmmS.js";import"./index-Cagd9BgA.js";import"./index-DrFu-skq.js";import"./withWebComponent-BS5KmJ8y.js";import"./utils-BKwn1mod.js";import"./CustomElementsScopeUtils-CUyxdJhU.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BnWtnlV0.js";import"./decline-U1USmITW.js";import"./Icons-CXhWYR-U.js";import"./i18n-defaults-eVMsPoDe.js";import"./information-Tp9XErmR.js";import"./alert-CzwHodYh.js";import"./class-map-C2xEFFE_.js";import"./if-defined-fOOg8zCW.js";import"./Icon-B_ypp_jl.js";import"./Device-RcFucVeJ.js";import"./Keys-pFVWso__.js";import"./parameters-bundle.css-BFbT_feV.js";import"./i18n-defaults-CTWfTbaq.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-DrLbuP9z.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-CLr2-W5J.js";import"./Popover-qZ8usbia.js";import"./PopupsCommon.css-Dy04e_xP.js";import"./FocusableElements-Bv7oiNdI.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DrydYuxf.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BYlmazPT.js";import"./BrowserScrollbar.css-BHkuoGam.js";import"./index-CCsDBC37.js";import"./Label-q6_PzA5e.js";import"./index-Bfa5x2b5.js";import"./index-CIJQg1Ki.js";import"./Link-qJoZgSbT.js";import"./index-7aWEaJDN.js";import"./index-DxXMIf9X.js";import"./I18nStore-CUUv0VZ2.js";import"./ModalsContext-BoMRhsMb.js";import"./useIsomorphicId-8WwglsiH.js";import"./addCustomCSSWithScoping-CgvYqGaR.js";import"./index-CN3pSlNl.js";import"./index-BNQ1hpRL.js";import"./index-bpjiqcBd.js";import"./Avatar-3swUBYi8.js";import"./employee-BYHCCK7_.js";import"./index-ByRYBZQz.js";function n(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre","ui5-link":"ui5-link",...i(),...o.components},r=e["ui5-link"];return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Working with Portals (v1)"}),`
`,t.jsx(e.h1,{id:"working-with-portals-in-v1",children:"Working with Portals in v1"}),`
`,t.jsx(a,{hideCloseButton:!0,design:p.Critical,children:t.jsxs(t.Fragment,{children:["Since v2, it's not necessary to use portals anymore, as all popovers and dialogs are now using the"," ",t.jsx(r,{target:"_blank",href:"https://developer.mozilla.org/en-US/docs/Web/API/Popover_API",children:"Popover API"}),"."]})}),`
`,t.jsx(e.p,{children:"This entry explains why portals are used in UI5 Web Components for React components and what you need to consider when using them."}),`
`,t.jsx("br",{}),`
`,t.jsx(l,{headingSelector:"h2"}),`
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
`,t.jsx(m,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function Ft(o={}){const{wrapper:e}={...i(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(n,{...o})}):n(o)}export{Ft as default};
