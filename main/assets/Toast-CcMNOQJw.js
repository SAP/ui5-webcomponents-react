import{j as o}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as p}from"./index-DtGqrCZN.js";import{F as e}from"./ProjectTemplate-D3C3BSxf.js";import{C as n}from"./ControlsWithNote-Cawfscj7.js";import{D as s}from"./DocsHeader-BVNU0V9G.js";import"./index-Cu9bd8lq.js";import{M as a,C as c}from"./index-DC29CwUg.js";import{C as h,D as i}from"./Toast.stories-DZjYsmpO.js";import"./react-jss.esm-BpNdaHSZ.js";import"./inheritsLoose-D8L2VVdp.js";import"./theming.esm-BaGMLphO.js";import"./index-CRVwdb_7.js";import"./iframe-K7CbHSSV.js";import"../sb-preview/runtime.js";import"./UI5Element-TZfj5eGG.js";import"./Boot-CiW9Yqx0.js";import"./VersionInfo-BESRVDo6.js";import"./CustomElementsScopeUtils-Brq83ayG.js";import"./withWebComponent-CmHHCrVX.js";import"./utils-CnhbIiu8.js";import"./useIsomorphicLayoutEffect-CDseMwwv.js";import"./slot-Df15G--e.js";import"./event-CegLCnR0.js";import"./i18nBundle-C2WczoLt.js";import"./decline-D6EEqVrc.js";import"./Icons-Bz_R9SHk.js";import"./i18n-defaults-BdfZArTM.js";import"./information-DW1Al7d0.js";import"./alert-CXHMnQvw.js";import"./class-map-CmJPAu_C.js";import"./Icon-xNvpL1oe.js";import"./Keys-BiUfzlGt.js";import"./parameters-bundle.css-B6zgRRib.js";import"./Button-BzhOkI6c.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-weVOdquz.js";import"./chunk-HLWAVYOI-Cbe2dIWg.js";import"./client-Cby6Sz3m.js";import"./index-Ckls47V4.js";import"./index-D3mGywtH.js";import"./clsx-B-dksMZM.js";import"./index-k025iqiX.js";import"./Label-ps0cWtHP.js";import"./WrappingType-CW8URInd.js";import"./index-jLapLn2t.js";import"./index-Dj5rZC_g.js";import"./Link-Ckf4Uxns.js";import"./index-gs15y4cl.js";import"./Popover-Jk90pyiT.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-FBsPN5sA.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-1-Fx8yKA.js";import"./FocusableElements-DLk5IaaK.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DDqpi34j.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-DseTvTa6.js";import"./BrowserScrollbar.css-0WwBRmTe.js";import"./index-Clgb5PFv.js";import"./i18n-defaults-DcbMYOf3.js";import"./I18nContext-lEOM8vPx.js";import"./ThemingParameters--AGRs54p.js";import"./index-CvWpx1AF.js";import"./useStylesheet-CLZMRdPE.js";import"./ModalsContext-DDUwbLsf.js";import"./addCustomCSSWithScoping-CWznCzZ1.js";import"./index-BdnBeVv8.js";import"./index-DzQxos5D.js";import"./Avatar-DrytwCNY.js";import"./employee-BRu8U1FM.js";import"./index-CVhEvXRm.js";import"./utils-DFWFumEJ.js";import"./index-DKYMDwHC.js";import"./sys-help-2-DXsgVRAc.js";import"./copy-ChpJf3sv.js";import"./GitHub-Mark-Cz0z7Mur.js";import"./TableOfContent-D3jF3LCs.js";import"./_baseForOwn-CD7metVA.js";import"./mapValues-DbyeKAf9.js";import"./_baseUniq-Dmu8z6NP.js";import"./index-D-lniKcH.js";import"./index-DrFu-skq.js";import"./index-BLWW_0-Z.js";function m(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...p(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{of:h}),`
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
