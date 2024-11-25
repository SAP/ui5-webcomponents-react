import{j as o}from"./useIsomorphicLayoutEffect-DxKEogMX.js";import{useMDXComponents as p}from"./index-3-_tf5dF.js";import{M as e,C as n}from"./index-BOi21w4D.js";import{C as s}from"./ControlsWithNote-CzYenpMt.js";import{D as a}from"./DocsHeader-DK9Xdbvc.js";import{F as c}from"./ProjectTemplate-BFHCf6FF.js";import"./index-BP8_t0zE.js";import{C as h,D as i}from"./Toast.stories-CKx3sZSL.js";import"./iframe-Co-P4KbE.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-hMDnJ3TJ.js";import"./main-HWtSBowW.js";import"./index-D_Bz9ZZc.js";import"./UI5Element-CTUeyjn-.js";import"./Boot-HIcYreCJ.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScope-OuufJIgt.js";import"./withWebComponent-iwEMLCwM.js";import"./utils-BWz0JEZ6.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-DAKTKoOS.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-snMa4zXw.js";import"./Icons-Cd2oYa75.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-Dq8i2jqa.js";import"./sys-help-2-Bb9UOdy0.js";import"./information-ByKCPUae.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-DgMNwF9A.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-bByU6Tgp.js";import"./index-BNpp4-T0.js";import"./decline-2wLd8OXz.js";import"./class-map-BOjq1HnK.js";import"./Button-gvhXfHAu.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./Tooltips-BagSeUK-.js";import"./HasPopup-Cecjtg2t.js";import"./index-C8gI4cdy.js";import"./Popover-AhBPjl_E.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-BSU3X0q-.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-82AGaEWQ.js";import"./FocusableElements-j-RSUQUA.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DXT2JxMm.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-lexY8e40.js";import"./BrowserScrollbar.css-CW1dP_e5.js";import"./index-BMTNm_Uu.js";import"./Link-Cg6JYAUZ.js";import"./chunk-HLWAVYOI-VoP3JNxp.js";import"./client-Di-4O7We.js";import"./copy-BxM08Fv1.js";import"./index-D5jmPUux.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-CKNtzFUp.js";import"./index-BHtFRKyY.js";import"./i18n-defaults-eAAV7luf.js";import"./I18nContext-RJHUyvz-.js";import"./index-BqUQYiOk.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./GitHub-Mark-BWdgVHQx.js";import"./TableOfContent-Cl_A24yJ.js";import"./index-D4Q2hLLw.js";import"./Label-CLIt97QH.js";import"./index-ByFdKTQR.js";import"./addCustomCSSWithScoping-BqDpVQ5B.js";import"./index--eaR6fCE.js";import"./index-D_vIOS9q.js";import"./Avatar-DYKhGiN9.js";import"./employee-DOMuhFXQ.js";import"./index-B9T3hOIL.js";import"./index-UNES7gMv.js";function m(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...p(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:h}),`
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
