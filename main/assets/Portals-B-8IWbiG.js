import{j as t}from"./useIsomorphicLayoutEffect-J-vjyzBO.js";import{useMDXComponents as i}from"./index-Bpj30qF7.js";import"./chunk-HLWAVYOI-CGxSQk5C.js";import{M as r}from"./index-BL3MocwW.js";import"./index-B7zegQ7L.js";import"./TagDesign-B60Yj3Pp.js";import"./index-DVqgc125.js";import"./index-oytpl9VN.js";import"./Boot-DBJWGo1y.js";import"./copy-e7WxF_om.js";import"./Button-B3obxaDo.js";import{F as p}from"./ProjectTemplate-CveI0i3m.js";import{T as a}from"./TableOfContent-kHwhsg6d.js";import"./WrappingType-CW8URInd.js";import"./iframe-B84mfQK4.js";import"../sb-preview/runtime.js";import"./client-5PD-IPQ1.js";import"./_baseForOwn-czysEfXW.js";import"./mapValues-DJmJhyxk.js";import"./_baseUniq-fADs2fxN.js";import"./index-MwrKYwMg.js";import"./index-DrFu-skq.js";import"./UI5Element-ZIczsayz.js";import"./CustomElementsScopeUtils-Di1jckr8.js";import"./EventProvider-CVfkyUHo.js";import"./withWebComponent-CZCh4Hye.js";import"./utils-xoLr7-0V.js";import"./slot--DoKcWSY.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-Baemx9Ir.js";import"./decline-iFbg0EvE.js";import"./Icons-VTGLGKPM.js";import"./i18n-defaults-C2wY9l8t.js";import"./information-DBr1nnf3.js";import"./alert-CRLi12vy.js";import"./class-map-7Nty0QHu.js";import"./Icon-bm18Wc8p.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-B_nLitlw.js";import"./i18n-defaults-BBSxky5H.js";import"./AriaLabelHelper-LMIEtYQL.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-C4tKiJwu.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DGwRvl1X.js";import"./Popover-CiDK1VtS.js";import"./Integer-WDQzHAdZ.js";import"./PopupsCommon.css-BU4M9Cwb.js";import"./FocusableElements-xn9p5spb.js";import"./isElementHidden-B4HqmI2E.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-D26-bsEk.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-H4TARQHt.js";import"./BrowserScrollbar.css-DkjKirWP.js";import"./index-CuwioZPY.js";import"./Label-BcDuAK9i.js";import"./index-DJ5L8y-0.js";import"./index-Dccl7bU_.js";import"./Link-CM0QSx8V.js";import"./index-D0N00bvv.js";import"./index-CUZZ9nZS.js";import"./i18n-defaults-CNyODxfy.js";import"./I18nContext-BrA05J-F.js";import"./index-DoUANS_S.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-DrY1dyul.js";import"./useIsomorphicId-B7SE6ZVh.js";import"./addCustomCSSWithScoping-D0vrnlbk.js";import"./index-IGbS6e4w.js";import"./index-fOa8eJr7.js";import"./index-CKf3seen.js";import"./Avatar-BQsj5wMZ.js";import"./employee-DN6CdZzr.js";function n(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Working with Portals"}),`
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
`,t.jsx(p,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function Ot(o={}){const{wrapper:e}={...i(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(n,{...o})}):n(o)}export{Ot as default};
