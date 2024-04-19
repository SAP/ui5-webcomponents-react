import{j as o}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as p}from"./index-DtGqrCZN.js";import{F as e}from"./ProjectTemplate-zZw9Vs6U.js";import{C as n}from"./ControlsWithNote-BMDje6eH.js";import{D as s}from"./DocsHeader-DGC9tNNJ.js";import"./index-Cu9bd8lq.js";import{M as a,d as c}from"./index-DI6VfJam.js";import{C as h,D as i}from"./Toast.stories-ejb-_8j4.js";import"./react-jss.esm-BpNdaHSZ.js";import"./inheritsLoose-D8L2VVdp.js";import"./theming.esm-BaGMLphO.js";import"./index-CD3vby3i.js";import"./iframe-BwYX9Hla.js";import"../sb-preview/runtime.js";import"./UI5Element-DtnZiShc.js";import"./Boot-DwA_pgKp.js";import"./VersionInfo-Bnh5Htkx.js";import"./CustomElementsScopeUtils-BkU30VC6.js";import"./withWebComponent-B8IC4jtY.js";import"./utils-CiHlOjk7.js";import"./useIsomorphicLayoutEffect-CDseMwwv.js";import"./slot-Df15G--e.js";import"./event-CegLCnR0.js";import"./i18nBundle-CW3QmvUh.js";import"./decline-DqGOoHuM.js";import"./Icons-Dptlkq46.js";import"./i18n-defaults-BdfZArTM.js";import"./information-CElEnJTC.js";import"./alert-BU8JezYB.js";import"./class-map-m3fFtNZw.js";import"./Icon-BSolOZRA.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./Button-CVOwl4eG.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-ByZSnYVg.js";import"./chunk-HLWAVYOI-Ck7AfsuC.js";import"./react-18-CyVMVvrE.js";import"./index-Ckls47V4.js";import"./index-CrxHuApl.js";import"./clsx-B-dksMZM.js";import"./index-CCP14paK.js";import"./Label-BBrs9RjN.js";import"./WrappingType-CW8URInd.js";import"./index-CyJY5mpX.js";import"./index-CP4DwF4n.js";import"./Link-DlttXuw3.js";import"./index-Bu7HVzj5.js";import"./Popover-jLsmKY5f.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DV-WEd1e.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-D4CwgKUt.js";import"./FocusableElements-D39FYWGM.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-CBU2dt4G.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-CtdHLryf.js";import"./BrowserScrollbar.css-Dc6KEEQV.js";import"./index-BO8bU_Iz.js";import"./i18n-defaults-k3KOTM4I.js";import"./I18nContext-lEOM8vPx.js";import"./ThemingParameters--AGRs54p.js";import"./index-CIus2qXS.js";import"./useStylesheet-BSfe7C-7.js";import"./ModalsContext-DDUwbLsf.js";import"./useIsomorphicId-CHfKDsSO.js";import"./addCustomCSSWithScoping-D1RPuXTz.js";import"./index-DPQTQdMk.js";import"./index-AfRP8CNA.js";import"./Avatar-BlVXo_BW.js";import"./employee-BdaP6Y8j.js";import"./index-BHAGY1XH.js";import"./utils-M8GzF_cN.js";import"./main-HWtSBowW.js";import"./index-CMYCtUTI.js";import"./sys-help-2-3w6M8wZl.js";import"./copy-CM5pqsHd.js";import"./GitHub-Mark-Cz0z7Mur.js";import"./TableOfContent-D0HrRMLy.js";import"./_baseForOwn-CD7metVA.js";import"./mapValues-DbyeKAf9.js";import"./_baseUniq-Dmu8z6NP.js";import"./index-D-lniKcH.js";import"./index-DrFu-skq.js";import"./index-DeG7dcAB.js";function m(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...p(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{of:h}),`
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
`,o.jsx(e,{})]})}function Qo(r={}){const{wrapper:t}={...p(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(m,{...r})}):m(r)}export{Qo as default};
