import{j as e}from"./useIsomorphicLayoutEffect-DOdM5Kf8.js";import{useMDXComponents as i}from"./index-BrB9znxi.js";import"./chunk-HLWAVYOI-BVuMpOZH.js";import{ae as s}from"./index-Dj55yAE_.js";import{M as a,a as p}from"./index-DsQzPF0V.js";import"./TagDesign-Dou_yO3g.js";import"./index-CMKoANNR.js";import"./index-CJugYjqS.js";import"./withWebComponent-BbgN5sxI.js";import"./copy-BYxOf-QH.js";import"./Button-cuQy5RCN.js";import{F as l}from"./CommandsAndQueries-D8ZxOXoQ.js";import{T as m}from"./TableOfContent-DYSF1A7E.js";import"./WrappingType-CW8URInd.js";import"./iframe-B2H21ULc.js";import"../sb-preview/runtime.js";import"./client-DpDvupH-.js";import"./_baseUniq-qZQRvdR-.js";import"./_overArg-Mt7ZKpko.js";import"./_baseAssignValue-680W1HJy.js";import"./_getPrototype-CvhAe9S0.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CwTDKhhX.js";import"./utils-B91Jjtng.js";import"./decline-CRs0CuFn.js";import"./Icon-ClAYWRjo.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-BJMHgp7g.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CEQaAj6E.js";import"./information-DxOUV61z.js";import"./alert-QN-C0-di.js";import"./class-map-DWnotN9Q.js";import"./i18n-defaults-jWmICHmQ.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-DNwR1bnO.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BdPJGR6W.js";import"./Popover-CNg3OGLR.js";import"./PopupsCommon.css-F2oSnJih.js";import"./getEffectiveScrollbarStyle-BM2MSN9M.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DghOwUYf.js";import"./MediaRange-Bnzt26Xb.js";import"./Title-RCwOVsWq.js";import"./style-map-D73I43XI.js";import"./BrowserScrollbar.css-CNIKbe81.js";import"./index-CTsi4uQY.js";import"./Label-B16HW9k1.js";import"./index-DSuKgQ5a.js";import"./index-BqbhDUVa.js";import"./Link-DDy4Rfx-.js";import"./index-5sCFwZnk.js";import"./index-CGvbx4PR.js";import"./I18nStore-3tee64za.js";import"./addCustomCSSWithScoping-CgCJVuIw.js";import"./index-ByNuaVji.js";import"./BusyIndicator-DYwg6ta4.js";import"./index-BXJSmV2K.js";import"./index-C1AGseFA.js";import"./Avatar-Dkq5x8aO.js";import"./employee-bAM6jRYC.js";import"./index-D8td3AVt.js";function n(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre","ui5-link":"ui5-link",...i(),...o.components},r=t["ui5-link"];return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Working with Portals (v1)"}),`
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
