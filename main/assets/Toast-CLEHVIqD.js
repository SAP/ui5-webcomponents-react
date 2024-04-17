import{j as o}from"./ManagedStyles-CGOl3myG.js";import{useMDXComponents as p}from"./index-_byTH_QA.js";import{F as e}from"./ProjectTemplate-Cel5mfGV.js";import{C as n}from"./ControlsWithNote-0d3epS9e.js";import{D as s}from"./DocsHeader-DmAlIMqv.js";import"./index-Dl6G-zuu.js";import{M as a,d as c}from"./index-CzTmKjWu.js";import{C as h,D as i}from"./Toast.stories-CfgEd-vu.js";import"./index-I94jMuNY.js";import"./Boot-Cnne3s27.js";import"./EventProvider-B3ZIXKWe.js";import"./useStylesheet-CxAEQokk.js";import"./ThemingParameters--AGRs54p.js";import"./i18nBundle-Bsmczzvl.js";import"./I18nContext-BcGksm2n.js";import"./index-D1_ZHIBm.js";import"./ModalsContext-qaxSwC3j.js";import"./useIsomorphicLayoutEffect-gsbYElqV.js";import"./index-R6uRzpud.js";import"./iframe-mx9Cs_dO.js";import"../sb-preview/runtime.js";import"./UI5Element-tLl76uRl.js";import"./CustomElementsScopeUtils-B75AoQkl.js";import"./withWebComponent-DJIp_RUs.js";import"./utils-CeXI0Hi-.js";import"./slot-Df15G--e.js";import"./event-CegLCnR0.js";import"./decline-BbDtzwS9.js";import"./Icons-CBAKipU6.js";import"./i18n-defaults-BdfZArTM.js";import"./information-I51WcrjF.js";import"./alert-aIGc7Sj9.js";import"./class-map-Cu2l68a-.js";import"./Icon-D1vK26qK.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./Button-Dh-otWwk.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-BS_6etQn.js";import"./chunk-HLWAVYOI-oX9fedy6.js";import"./react-18-Bamk9FSf.js";import"./index-ByYU1K04.js";import"./clsx-B-dksMZM.js";import"./index-C4cSObg_.js";import"./Label-DppxBELH.js";import"./WrappingType-CW8URInd.js";import"./index-qkbFvGnV.js";import"./index-BpSQ2deJ.js";import"./Link-Bz4pS2E4.js";import"./index-Cd_-mw_D.js";import"./Popover-wWOUXlEf.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-ChEyoFp6.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-CM5pfEqV.js";import"./FocusableElements-B13w0nQJ.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DFfXzzyE.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-ZAvUrcXy.js";import"./BrowserScrollbar.css-CZDKAGTv.js";import"./index-DlUnVxaj.js";import"./i18n-defaults-z_6XcBmn.js";import"./addCustomCSSWithScoping-BzrCsXtN.js";import"./index-Ds83oQtI.js";import"./index-IStBxi_i.js";import"./Avatar-CDGo5C_y.js";import"./employee-BBO6Qv_x.js";import"./index-ChRo0APt.js";import"./utils-Bjl8p5t4.js";import"./main-HWtSBowW.js";import"./index-CC0qv4s4.js";import"./sys-help-2-DBxBNdVt.js";import"./copy-D4uznMtW.js";import"./GitHub-Mark-cyXF45vO.js";import"./TableOfContent-CqZunpIm.js";import"./_baseForOwn-DFjKyXZi.js";import"./mapValues-BvzalXkB.js";import"./_baseUniq-DRxb5hvO.js";import"./index-DTQpHR-X.js";import"./index-DrFu-skq.js";import"./index-D1C-0-_F.js";function m(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...p(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{of:h}),`
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
`,o.jsx(e,{})]})}function zo(r={}){const{wrapper:t}={...p(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(m,{...r})}):m(r)}export{zo as default};
