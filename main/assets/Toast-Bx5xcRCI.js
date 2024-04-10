import{j as o}from"./jsx-runtime-Du8NFWEI.js";import{useMDXComponents as p}from"./index-_byTH_QA.js";import{F as e}from"./ProjectTemplate-Bt5UEaU9.js";import{C as n}from"./ControlsWithNote-B7VhUhg7.js";import{D as s}from"./DocsHeader-CFOEUhZm.js";import"./index-Dl6G-zuu.js";import{M as a,d as c}from"./index-YJTG0wfp.js";import{C as h,D as i}from"./Toast.stories-BjHQrd0m.js";import"./react-jss.esm-BPPChJW9.js";import"./inheritsLoose-D8L2VVdp.js";import"./theming.esm-5daRW75o.js";import"./index-BnuS7xgk.js";import"./iframe-udgYZNfT.js";import"../sb-preview/runtime.js";import"./UI5Element-Lw3nTtTN.js";import"./Boot-B0Gt2ObV.js";import"./ManagedStyles-DX5mlBXq.js";import"./CustomElementsScopeUtils-CeSGtO6z.js";import"./withWebComponent-BF9ncEMl.js";import"./utils-D1_qxj0a.js";import"./useIsomorphicLayoutEffect-gsbYElqV.js";import"./slot-Df15G--e.js";import"./event-CegLCnR0.js";import"./i18nBundle-Duvqe7kG.js";import"./decline-D5dgPGzi.js";import"./Icons-DfCrNAdQ.js";import"./i18n-defaults-BdfZArTM.js";import"./information-BLcQOnlv.js";import"./alert-D4nm4k8k.js";import"./class-map-DeOlvaAn.js";import"./Icon-C20AIXTC.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./Button-D13uYO2F.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-D1sujP0E.js";import"./chunk-HLWAVYOI-B1nY2_bt.js";import"./react-18-Bamk9FSf.js";import"./index-D1_ZHIBm.js";import"./index-t2jtc2K4.js";import"./clsx-B-dksMZM.js";import"./index-CgOD0Mal.js";import"./Label-CTVRjihb.js";import"./WrappingType-CW8URInd.js";import"./index-bbyWMTIJ.js";import"./index-uaX6y-MT.js";import"./Link-B2j2s4Ih.js";import"./index-DPRL__Mv.js";import"./Popover-DXiCQ_F_.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DmBeTAQh.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-C1DKTBbu.js";import"./FocusableElements-4YGFH9ta.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-OFvM0oAF.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-O1QwFldx.js";import"./BrowserScrollbar.css-BiclUngR.js";import"./index-BjS4ztKm.js";import"./i18n-defaults-GDPbxlcd.js";import"./I18nContext-BcGksm2n.js";import"./ThemingParameters--AGRs54p.js";import"./index-BPVTr8FI.js";import"./useStylesheet-D5wp95d6.js";import"./ModalsContext-qaxSwC3j.js";import"./addCustomCSSWithScoping-DAt1aefI.js";import"./index-DaL7ZY-p.js";import"./index-CVQH7GRT.js";import"./Avatar-BwXc-3ne.js";import"./employee-C3y4a2zL.js";import"./index-CeS9Dk93.js";import"./utils-D_q80NlE.js";import"./main-HWtSBowW.js";import"./index-C9XnIHOh.js";import"./sys-help-2-Dp_ZH8Yt.js";import"./copy-Dz4oTMJU.js";import"./GitHub-Mark-EHn_tOX6.js";import"./TableOfContent-BXF2tgJB.js";import"./_baseForOwn-DFjKyXZi.js";import"./mapValues-BvzalXkB.js";import"./_baseUniq-DRxb5hvO.js";import"./index-2V9fy1S2.js";import"./index-DrFu-skq.js";import"./index-C3GxPXce.js";function m(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...p(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{of:h}),`
`,o.jsx(s,{since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(c,{of:i}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(n,{of:i}),`
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
`,o.jsx(e,{})]})}function Ko(r={}){const{wrapper:t}={...p(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(m,{...r})}):m(r)}export{Ko as default};
