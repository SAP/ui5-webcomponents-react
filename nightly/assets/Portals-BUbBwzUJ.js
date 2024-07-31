import{j as e}from"./useIsomorphicLayoutEffect-DCJrFAVs.js";import{useMDXComponents as i}from"./index-D3szj05g.js";import"./chunk-HLWAVYOI-BQdg4wEi.js";import{M as s}from"./index-DBPFp6bc.js";import{M as a,a as p}from"./index-NgvRqGLd.js";import"./TagDesign-Dou_yO3g.js";import"./index-ClU-Tc1p.js";import"./index-C3ZJCerc.js";import"./withWebComponent-Bw_l6Ewh.js";import"./copy-D_DpjAH5.js";import"./Button-Bn9nox5u.js";import{F as l}from"./CommandsAndQueries-BkYSpK87.js";import{T as m}from"./TableOfContent-BUy-NgzT.js";import"./WrappingType-CW8URInd.js";import"./iframe-B_yGee5r.js";import"../sb-preview/runtime.js";import"./client-B23sEKGq.js";import"./_baseForOwn-CS3BKc8p.js";import"./mapValues-DmWmqx7o.js";import"./_baseUniq-DGAWXpCf.js";import"./index-BRTKD46C.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CyjtwURt.js";import"./utils-BHgxP_Sc.js";import"./decline-BnR7C84V.js";import"./Icon-Bjam5y2n.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-mCyQq_6q.js";import"./parameters-bundle.css-BFbT_feV.js";import"./i18n-defaults-Cz0fD7oZ.js";import"./information-DR3Ry5yc.js";import"./alert-CjjdhJ65.js";import"./class-map-DoF19r8m.js";import"./i18n-defaults-BuF9xM0k.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-PGreZEtb.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-waKyCe7Y.js";import"./Popover-ueRYOmZP.js";import"./PopupsCommon.css-T1OzgQOS.js";import"./getEffectiveScrollbarStyle-D1VPwmZI.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CV6FH9MC.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-Bys0Ab5G.js";import"./BrowserScrollbar.css-AwpGtRUX.js";import"./index-xIuJTprD.js";import"./Label-C8Y7h3Z-.js";import"./index-CyXKya3l.js";import"./index-ETJSVRe0.js";import"./Link-DaxkRKad.js";import"./index-BS_Y1CDZ.js";import"./index-6v2Oy41S.js";import"./I18nStore-CqpKwI0j.js";import"./addCustomCSSWithScoping-ClhnucNU.js";import"./index-C_2FGMDq.js";import"./index-CicW97oq.js";import"./index-BX_f8U7K.js";import"./Avatar-BRGukaio.js";import"./employee-CWJksvD0.js";import"./index-DKajcjWO.js";function n(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre","ui5-link":"ui5-link",...i(),...o.components},r=t["ui5-link"];return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Working with Portals (v1)"}),`
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
`,e.jsx(l,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function ke(o={}){const{wrapper:t}={...i(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{ke as default};
