import{j as t}from"./useIsomorphicLayoutEffect-DxKEogMX.js";import{useMDXComponents as n}from"./index-3-_tf5dF.js";import"./chunk-HLWAVYOI-DWr2Fk3L.js";import{M as r}from"./index-BSAHFUXL.js";import{F as p}from"./ProjectTemplate-Dm7554A_.js";import"./copy-BxM08Fv1.js";import"./index-BP8_t0zE.js";import{T as m}from"./TableOfContent-9p1o5MmN.js";import"./iframe-BjMoupZq.js";import"../sb-preview/runtime.js";import"./client-Di-4O7We.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-DgeZdg6V.js";import"./main-HWtSBowW.js";import"./index-BBpaOH7t.js";import"./UI5Element-CTUeyjn-.js";import"./Boot-HIcYreCJ.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScope-OuufJIgt.js";import"./withWebComponent-iwEMLCwM.js";import"./utils-BWz0JEZ6.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-DAKTKoOS.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-snMa4zXw.js";import"./Icons-Cd2oYa75.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-Dq8i2jqa.js";import"./sys-help-2-Bb9UOdy0.js";import"./information-ByKCPUae.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-DgMNwF9A.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-DI58k5rQ.js";import"./index-SvvSoH13.js";import"./Link-CS4JDN8g.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./index-BtNKI908.js";import"./decline-2wLd8OXz.js";import"./class-map-BOjq1HnK.js";import"./Button-DH5lF6fZ.js";import"./Tooltips-BagSeUK-.js";import"./index-BZUWesjH.js";import"./Popover-AhBPjl_E.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-BSU3X0q-.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-82AGaEWQ.js";import"./FocusableElements-j-RSUQUA.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DXT2JxMm.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-lexY8e40.js";import"./BrowserScrollbar.css-CW1dP_e5.js";import"./index-D32Kf0i8.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-CKNtzFUp.js";import"./index-CO4Ta_X3.js";import"./Label-4lKVr1TQ.js";import"./index-Rbdud6do.js";import"./index-BHtFRKyY.js";import"./i18n-defaults-eAAV7luf.js";import"./I18nContext-RJHUyvz-.js";import"./index-BqUQYiOk.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./addCustomCSSWithScoping-BqDpVQ5B.js";import"./index-CHZ2gPzb.js";import"./index-BElfjaV9.js";import"./Avatar-BucQZ245.js";import"./employee-DOMuhFXQ.js";import"./index-BAE7Wj2f.js";function i(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Working with Portals"}),`
`,t.jsx(o.h1,{id:"working-with-portals",children:"Working with Portals"}),`
`,t.jsx(o.p,{children:"This entry explains why portals are used in UI5 Web Components for React components and what you need to consider when using them."}),`
`,t.jsx("br",{}),`
`,t.jsx(m,{headingSelector:"h2"}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"why-portals",children:"Why Portals?"}),`
`,t.jsxs(o.p,{children:["In most cases when a React component like the ",t.jsx(o.code,{children:"AnalyticalTable"})," implements a popover like a ",t.jsx(o.code,{children:"Dialog"})," or ",t.jsx(o.code,{children:"ResponsivePopover"}),", we use a ",t.jsx(o.a,{href:"https://react.dev/reference/react-dom/createPortal",rel:"nofollow",children:"React Portal"})," to mount it outside the parents DOM hierarchy, to prevent unwanted side effects (wrong positioning, alignment, etc.)."]}),`
`,t.jsx(o.p,{children:"For example:"}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const DialogComponent = () => {
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
`,t.jsx(o.h2,{id:"pitfalls",children:"Pitfalls"}),`
`,t.jsxs(o.p,{children:[`In some cases you may want to add a class or attribute that is affecting all the components HTML elements. Since the popover is outside the DOM hierarchy of the most outer element of the component, the class/attribute/etc. will not be applied to it.
Or maybe you just don't want the popover to be mounted on the `,t.jsx(o.code,{children:"body"}),` element (which is the default).
For this we offer the `,t.jsx(o.code,{children:"portalContainer"})," prop. This prop is available on all components that implement a popover, and with its help you can define the container into which the popover is mounted."]}),`
`,t.jsxs(o.p,{children:["For example, if you want to display the ",t.jsx(o.code,{children:"AnalyticalTable"})," in compact mode, while the rest of the app stays in cozy mode, then you could achieve that like this:"]}),`
`,t.jsx(o.p,{children:"Define a container somewhere in your DOM tree, where the portal should be rendered into and add the respective attribute/class/etc. to it."}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-html",children:`<div id="modalContainer" class="ui5-content-density-compact" />
`})}),`
`,t.jsxs(o.p,{children:["Then, set the ",t.jsx(o.code,{children:"portalContainer"})," to the respective element."]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`<AnalyticalTable
  className="ui5-content-density-compact"
  portalContainer={document.getElementById('modalContainer')}
  data={data}
  columns={columns}
/>
`})}),`
`,t.jsx(p,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function At(e={}){const{wrapper:o}={...n(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(i,{...e})}):i(e)}export{At as default};
