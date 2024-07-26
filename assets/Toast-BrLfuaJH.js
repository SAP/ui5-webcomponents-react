import{j as o}from"./useIsomorphicLayoutEffect-BZqdrUgG.js";import{useMDXComponents as p}from"./index-3-_tf5dF.js";import{M as e,C as n}from"./index-Ha3Eymnb.js";import{C as s}from"./ControlsWithNote-DnSsDLIA.js";import{D as a}from"./DocsHeader-CwvvpvBd.js";import{F as c}from"./ProjectTemplate-5GlQDb_i.js";import"./index-BP8_t0zE.js";import{C as h,D as i}from"./Toast.stories-CLoNl1CJ.js";import"./iframe-0t0bluh7.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-BJrzIWg9.js";import"./main-HWtSBowW.js";import"./index-AcmEfHsG.js";import"./UI5Element-DH5oRWb7.js";import"./Boot-DdVREbXE.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScope-5eeswjJY.js";import"./withWebComponent-CFCcsgaR.js";import"./utils-B_1Wl3Io.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-VKnKJfRd.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-5sSxuG1B.js";import"./Icons-Ce4pu5im.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-BZWwXjHP.js";import"./sys-help-2-B8iW5g3p.js";import"./information-B6WCub9Q.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-sERyhXNI.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-B3SMwW1O.js";import"./index-BP3GWWnk.js";import"./decline-BKu2yS0R.js";import"./class-map-BVs8Mnz-.js";import"./Button-C7MkX4Mc.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./index-n0fkOAT5.js";import"./Popover-DRLSd65f.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-BU2QZN3s.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-DFDsyNUc.js";import"./FocusableElements-DPTH-2DQ.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-SVe57yR2.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-4J279J6B.js";import"./BrowserScrollbar.css-RQCcsA_4.js";import"./index-BowageyY.js";import"./Link-iD7tARGw.js";import"./chunk-HLWAVYOI-BPnhSji2.js";import"./client-Di-4O7We.js";import"./copy-G9rVuVfS.js";import"./index-BpzLxWcJ.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DdJpFDQo.js";import"./index-DXYWpQLV.js";import"./i18n-defaults-CNtbapJN.js";import"./I18nContext-RJHUyvz-.js";import"./index-BYuIjXoA.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./GitHub-Mark-BxlqkPuV.js";import"./TableOfContent-C5W6TYrc.js";import"./index-DxJV5SPg.js";import"./Label-CxCcCr4B.js";import"./index-CKBLKqiI.js";import"./addCustomCSSWithScoping-DdG0dXFN.js";import"./index-Ef76ooZA.js";import"./index-Bgmqgcz3.js";import"./Avatar-C7-CIAtb.js";import"./employee-CZvuBdeB.js";import"./index-CRQsAHr7.js";import"./index-BYV83dEn.js";function m(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...p(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:h}),`
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
