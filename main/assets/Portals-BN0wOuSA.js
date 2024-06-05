import{j as t}from"./useIsomorphicLayoutEffect-VT0hzFUo.js";import{useMDXComponents as i}from"./index-3-_tf5dF.js";import"./chunk-HLWAVYOI-CoYialVj.js";import{M as r}from"./index-B6nrNYOe.js";import"./index-BP8_t0zE.js";import"./index-BxmsGmlx.js";import"./copy-AJFuNtDX.js";import{F as p}from"./ProjectTemplate-CaUSXQZH.js";import{T as a}from"./TableOfContent-DKuhQ5dr.js";import"./iframe-DBY450V3.js";import"../sb-preview/runtime.js";import"./client-Di-4O7We.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./Boot-BVnGU0ip.js";import"./EventProvider-B3ZIXKWe.js";import"./Icons-DyBGPyMo.js";import"./i18nBundle-DbWkXQeQ.js";import"./index-Dp6KfAFn.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DovReOaw.js";import"./index-DQs6Ypy4.js";import"./Label-8bLCWgMU.js";import"./UI5Element-DwbFyBon.js";import"./CustomElementsScopeUtils-B2x3tIsm.js";import"./withWebComponent-DvmwIdUK.js";import"./utils-neMnggoA.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-CqU3c0Xc.js";import"./parameters-bundle.css-kZpvVQc-.js";import"./index-CJep7e_E.js";import"./Button-BsmQPuS3.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-_9Cp-e0V.js";import"./HasPopup-Cecjtg2t.js";import"./index-CHqHHRdF.js";import"./Link-DIcSBYfZ.js";import"./index-DBWZ9gDv.js";import"./Popover-ComfN-sG.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-CoIIx-oA.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-BspShIhm.js";import"./FocusableElements-DEjr2b5c.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DPru0u-P.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-RUCW1mQv.js";import"./class-map-CS8eahb3.js";import"./BrowserScrollbar.css-BTaDXFx1.js";import"./index-CNIrU-iy.js";import"./i18n-defaults-DgugUEvt.js";import"./I18nContext-RJHUyvz-.js";import"./index-CL_5mZ89.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./addCustomCSSWithScoping-VI82Stk0.js";import"./index-CXVGh6-l.js";import"./index-BoYH-i_e.js";import"./Avatar-Czn1NGIX.js";import"./employee-wCGkTOTe.js";import"./alert-CJTybc-z.js";import"./index-CRO125q2.js";import"./index-DAXiXxHH.js";import"./decline-CHA057wR.js";import"./i18n-defaults-BdfZArTM.js";import"./information-5jLlktsT.js";function n(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Working with Portals"}),`
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
