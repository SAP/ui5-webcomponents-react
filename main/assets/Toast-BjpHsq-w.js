import{j as o}from"./jsx-runtime-Du8NFWEI.js";import{useMDXComponents as p}from"./index-_byTH_QA.js";import{F as e}from"./ProjectTemplate-B1OteAf2.js";import{C as n}from"./ControlsWithNote-Dil4El15.js";import{D as s}from"./DocsHeader-bfPv9D2A.js";import"./index-Dl6G-zuu.js";import{M as a,d as c}from"./index-DeKFTZKG.js";import{C as h,D as i}from"./Toast.stories-C4uHJMcj.js";import"./react-jss.esm-BPPChJW9.js";import"./inheritsLoose-D8L2VVdp.js";import"./theming.esm-5daRW75o.js";import"./index-DQhIqreQ.js";import"./iframe-8IfVR183.js";import"../sb-preview/runtime.js";import"./UI5Element-DtnZiShc.js";import"./Boot-DwA_pgKp.js";import"./VersionInfo-Bnh5Htkx.js";import"./CustomElementsScopeUtils-BkU30VC6.js";import"./withWebComponent-DRPzk8yN.js";import"./utils-BopS74sX.js";import"./useIsomorphicLayoutEffect-gsbYElqV.js";import"./slot-Df15G--e.js";import"./event-CegLCnR0.js";import"./i18nBundle-CW3QmvUh.js";import"./decline-DqGOoHuM.js";import"./Icons-Dptlkq46.js";import"./i18n-defaults-BdfZArTM.js";import"./information-CElEnJTC.js";import"./alert-BU8JezYB.js";import"./class-map-DOxVO0GK.js";import"./Icon-DvcRDrqS.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./Button-L0N45cMZ.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-ByZSnYVg.js";import"./chunk-HLWAVYOI-BGgepx67.js";import"./react-18-Bamk9FSf.js";import"./index-D1_ZHIBm.js";import"./index-loc45roa.js";import"./clsx-B-dksMZM.js";import"./index-n9w8jFKp.js";import"./Label-BgNHvv84.js";import"./WrappingType-CW8URInd.js";import"./index-D3RQ8m5E.js";import"./index-t5DyZr5T.js";import"./Link-RzzTDKIU.js";import"./index-BeJ5rHzn.js";import"./Popover-DmSynMj1.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DV-WEd1e.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-BPk9bxJK.js";import"./FocusableElements-D39FYWGM.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-CBU2dt4G.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-COTFu3zX.js";import"./BrowserScrollbar.css-BtosXvtb.js";import"./index-C3N6u2gC.js";import"./i18n-defaults-BV9KeZ-W.js";import"./I18nContext-BcGksm2n.js";import"./ThemingParameters--AGRs54p.js";import"./index-CiTIhke1.js";import"./useStylesheet-BNfFiS2u.js";import"./ModalsContext-qaxSwC3j.js";import"./addCustomCSSWithScoping-BngKgOcf.js";import"./index-5fYqVccT.js";import"./index-CVlb4stu.js";import"./Avatar-BX5t-LjK.js";import"./employee-BdaP6Y8j.js";import"./index-DcVWIXXR.js";import"./utils-DhshM7Vz.js";import"./main-HWtSBowW.js";import"./index-Df18Jubt.js";import"./sys-help-2-3w6M8wZl.js";import"./copy-CM5pqsHd.js";import"./GitHub-Mark-EHn_tOX6.js";import"./TableOfContent-DGzOUGWp.js";import"./_baseForOwn-DFjKyXZi.js";import"./mapValues-BvzalXkB.js";import"./_baseUniq-DRxb5hvO.js";import"./index-2V9fy1S2.js";import"./index-DrFu-skq.js";import"./index-AOknTeQI.js";function m(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...p(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{of:h}),`
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
