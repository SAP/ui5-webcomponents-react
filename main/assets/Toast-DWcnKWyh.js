import{j as o}from"./ManagedStyles-DBz9b8_7.js";import{useMDXComponents as p}from"./index-DtGqrCZN.js";import{M as e,d as n}from"./index-8sMg4zFU.js";import{C as s}from"./ControlsWithNote-DdwHm4s5.js";import{D as a}from"./DocsHeader-CLaN7WZ1.js";import{F as c}from"./ProjectTemplate-DQbVNXQs.js";import"./index-Cu9bd8lq.js";import{C as h,D as i}from"./Toast.stories-WNnPriDb.js";import"./iframe-DppkCPbE.js";import"../sb-preview/runtime.js";import"./index-Ckls47V4.js";import"./_baseForOwn-CD7metVA.js";import"./mapValues-DbyeKAf9.js";import"./_baseUniq-Dmu8z6NP.js";import"./index-CdnsVG_W.js";import"./index-DrFu-skq.js";import"./utils-gNxdmned.js";import"./main-HWtSBowW.js";import"./index-DEWwNpfg.js";import"./UI5Element-C4mSOhNA.js";import"./Boot-Biwz_Caq.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-48ratPWk.js";import"./withWebComponent-C_dYwLuv.js";import"./utils--_sL0meP.js";import"./useIsomorphicLayoutEffect-CDseMwwv.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-Dr6PGakp.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-Clr9g2fS.js";import"./Icons-DjI__-3J.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./sys-help-2-CYHXlBDZ.js";import"./information-_3DJs868.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-BU0AsmHE.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-DyNPhf0P.js";import"./index-BMTIYx3a.js";import"./decline-b84495rg.js";import"./class-map-Cfio9s54.js";import"./Button-BAj8jTq4.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./index-Dch7Pu0E.js";import"./Popover-DNMeFD1A.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-ApBaW5cX.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-1I1Br736.js";import"./FocusableElements-BYZ07gKz.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DG5rdHnC.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-DouRFD4_.js";import"./BrowserScrollbar.css-rLpJ_tAN.js";import"./index-B9vV0M-J.js";import"./Link-CMvBWZzp.js";import"./chunk-HLWAVYOI-xsLbOqJm.js";import"./react-18-CyVMVvrE.js";import"./copy-Cu_ZU0U0.js";import"./index-h8mMc9-D.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-Emr_nFue.js";import"./index-DkTfA-Yk.js";import"./i18n-defaults-DVTRFCa9.js";import"./I18nContext-lEOM8vPx.js";import"./index-CzirVdIS.js";import"./ThemingParameters--AGRs54p.js";import"./ModalsContext-DDUwbLsf.js";import"./useIsomorphicId-CHfKDsSO.js";import"./GitHub-Mark-DqU93U5N.js";import"./TableOfContent-DL8rzHAE.js";import"./index-Bw2fG2FP.js";import"./Label-CkBRSGa0.js";import"./index-CDYbESaI.js";import"./addCustomCSSWithScoping-BxGdOQ6d.js";import"./index-BKzcCC2_.js";import"./index-3ScwKvr-.js";import"./Avatar-DrQd1eyL.js";import"./employee-BUX20iaG.js";import"./index-DJN62Ggf.js";import"./index-DSercVO2.js";function m(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...p(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:h}),`
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
`,o.jsx(c,{})]})}function Go(r={}){const{wrapper:t}={...p(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(m,{...r})}):m(r)}export{Go as default};
