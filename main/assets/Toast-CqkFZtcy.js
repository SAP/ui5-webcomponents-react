import{j as o}from"./jsx-runtime-Du8NFWEI.js";import{useMDXComponents as p}from"./index-_byTH_QA.js";import{F as e}from"./ProjectTemplate-CZMk4x2-.js";import{C as n}from"./ControlsWithNote-DAZLx57g.js";import{D as s}from"./DocsHeader-e6uZcIO7.js";import"./index-Dl6G-zuu.js";import{M as a,d as c}from"./index-DXfTYDN1.js";import{C as h,D as i}from"./Toast.stories-BtEsdxCF.js";import"./react-jss.esm-BLS6mvEP.js";import"./inheritsLoose-D8L2VVdp.js";import"./ThemingParameters-CmCBq50F.js";import"./index-BDrS7_T6.js";import"./iframe-Bpir1E0L.js";import"../sb-preview/runtime.js";import"./UI5Element-Lw3nTtTN.js";import"./Boot-B0Gt2ObV.js";import"./ManagedStyles-DX5mlBXq.js";import"./CustomElementsScopeUtils-CeSGtO6z.js";import"./withWebComponent-zM8JcmxY.js";import"./utils-syHHPmsO.js";import"./useIsomorphicLayoutEffect-gsbYElqV.js";import"./slot-Df15G--e.js";import"./event-CegLCnR0.js";import"./i18nBundle-Duvqe7kG.js";import"./decline-D5dgPGzi.js";import"./Icons-DfCrNAdQ.js";import"./i18n-defaults-BdfZArTM.js";import"./information-BLcQOnlv.js";import"./alert-D4nm4k8k.js";import"./class-map-mIG3ftuK.js";import"./Icon-Dbo8BIv6.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./Button-BFndOBlc.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-D1sujP0E.js";import"./chunk-HLWAVYOI-Bxl00jJ0.js";import"./react-18-Bamk9FSf.js";import"./index-D1_ZHIBm.js";import"./index-DC8WEI0Q.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-D5wp95d6.js";import"./index-DfdXOs_5.js";import"./Label-D6k6fzJu.js";import"./WrappingType-CW8URInd.js";import"./index-CL0MRgMK.js";import"./index-Dg-es6SQ.js";import"./Link-G_0GWmft.js";import"./index-BSsDq1DG.js";import"./Popover-B7UMWr5A.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DmBeTAQh.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-BmjVxBVQ.js";import"./FocusableElements-4YGFH9ta.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-OFvM0oAF.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-CweQHFZo.js";import"./BrowserScrollbar.css-B3MoNUKh.js";import"./index-qBp3IRVS.js";import"./i18n-defaults-DkhM4WLz.js";import"./I18nContext-BcGksm2n.js";import"./index-BfGKgmQa.js";import"./ModalsContext-qaxSwC3j.js";import"./addCustomCSSWithScoping-de5_lUMj.js";import"./index-CF1jgLDK.js";import"./index-p8gH0rsp.js";import"./Avatar-CHcvLeex.js";import"./employee-C3y4a2zL.js";import"./index-Cz6loQ4r.js";import"./utils-CKNryn9b.js";import"./main-HWtSBowW.js";import"./index-BOkcqR-d.js";import"./sys-help-2-Dp_ZH8Yt.js";import"./copy-Dz4oTMJU.js";import"./GitHub-Mark-EHn_tOX6.js";import"./TableOfContent-BuJdCH3S.js";import"./_baseForOwn-DFjKyXZi.js";import"./mapValues-BvzalXkB.js";import"./_baseUniq-DRxb5hvO.js";import"./index-DTQpHR-X.js";import"./index-DrFu-skq.js";import"./index-CM52qWkZ.js";function m(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...p(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{of:h}),`
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
`,o.jsx(e,{})]})}function Jo(r={}){const{wrapper:t}={...p(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(m,{...r})}):m(r)}export{Jo as default};
