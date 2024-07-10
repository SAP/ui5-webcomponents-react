import{j as o}from"./useIsomorphicLayoutEffect-CC_9R8NV.js";import{useMDXComponents as p}from"./index-3-_tf5dF.js";import{M as e,C as n}from"./index-DCe9hKTd.js";import{C as s}from"./ControlsWithNote-CNwziGBl.js";import{D as a}from"./DocsHeader-CLeE0F-e.js";import{F as c}from"./ProjectTemplate-CnfFx7fc.js";import"./index-BP8_t0zE.js";import{C as h,D as i}from"./Toast.stories-CjciLzMg.js";import"./iframe-K9ZPOBS-.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-DoXAX_z0.js";import"./main-HWtSBowW.js";import"./index-DsOqujCP.js";import"./UI5Element-DYuDwSfb.js";import"./Boot--nQrAl1V.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScope-muWBOMD2.js";import"./withWebComponent-BtiFbjTX.js";import"./utils-A9XecSn_.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-zzLYNekx.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-D7AkHrnr.js";import"./Icons-Bp1YSqwb.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-P3lSuE--.js";import"./sys-help-2-w5eNxsCQ.js";import"./information-C8CMIM2W.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-GCtO51nh.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-B_qME8Ot.js";import"./index-0sOo1Jhc.js";import"./decline-BAFEOGpp.js";import"./class-map-DRsidP3Z.js";import"./Button-CWBaZ7ro.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./index-weJqy25G.js";import"./Popover-fF8jtMoy.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-BKIoEsVZ.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-CjoatB38.js";import"./FocusableElements-Duwi--Bv.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-CI3zUPmr.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-Cq34otsJ.js";import"./BrowserScrollbar.css-DtDsFaw-.js";import"./index-lqfu6sXD.js";import"./Link-C6bYFqpr.js";import"./chunk-HLWAVYOI-DOGZlFEp.js";import"./client-Di-4O7We.js";import"./copy-C3s9MmBF.js";import"./index-CzPEDdfg.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BSPa2dAP.js";import"./index-WspRYDV-.js";import"./i18n-defaults-BqW0kOHN.js";import"./I18nContext-RJHUyvz-.js";import"./index-Cqf388Vu.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./GitHub-Mark-CwcbC11_.js";import"./TableOfContent-3S1XAVFG.js";import"./index-DRuGOEJb.js";import"./Label-BsQWgLJi.js";import"./index-Cqc2lMTm.js";import"./addCustomCSSWithScoping-BbKd266_.js";import"./index-DIKijyLT.js";import"./index-ClldIo8k.js";import"./Avatar-BS_WXaxR.js";import"./employee-CGxftPv4.js";import"./index-CXTSylkh.js";import"./index-BeW54Ukm.js";function m(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...p(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:h}),`
`,o.jsx(a,{since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(n,{of:i}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(s,{of:i}),`
`,o.jsx(t.h2,{id:"show-a-toast",children:"Show a toast"}),`
`,o.jsxs(t.p,{children:["The ",o.jsx(t.code,{children:"Toast"}),` component has an imperative API for getting displayed. It will not be displayed just because it is part of the DOM.
In order to show the Toast, you have to get a reference to the `,o.jsx(t.code,{children:"Toast"})," DOM element and call the ",o.jsx(t.code,{children:"show"}),`-method.
You can either access the DOM element by using a React `,o.jsx(t.code,{children:"ref"})," or work with IDs."]}),`
`,o.jsx(t.p,{children:o.jsx(t.strong,{children:"Example"})}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`export const MyComponentWithAToast() {
  const toast = useRef(null);

  const showToast = () => {
    toast.current.show();
  };
  return (
    <ThemeProvider>
      <Button onClick={showToast}>Show Toast</Button>
      <Toast ref={toast}>This is my Toast!</Toast>
    </ThemeProvider>
  );
}
`})}),`
`,o.jsx(c,{})]})}function zo(r={}){const{wrapper:t}={...p(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(m,{...r})}):m(r)}export{zo as default};
