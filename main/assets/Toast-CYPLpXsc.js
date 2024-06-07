import{j as o}from"./useIsomorphicLayoutEffect-Cdhcir-A.js";import{useMDXComponents as p}from"./index-DcZOShwE.js";import{M as e,C as n}from"./index-CI-A2PSh.js";import{C as s}from"./ControlsWithNote-O8kTicZ4.js";import{D as a}from"./DocsHeader-fDCnoTcF.js";import{F as c}from"./ProjectTemplate-DoVRxTna.js";import"./index-gJgmXzrm.js";import{C as h,D as i}from"./Toast.stories-Clu9WCLe.js";import"./iframe-CVI4SSEA.js";import"../sb-preview/runtime.js";import"./index-DjqRnomV.js";import"./_baseForOwn-CLRePLhI.js";import"./mapValues-B_fQXYuL.js";import"./_baseUniq-C22BvjpN.js";import"./index-DPb1xiaU.js";import"./index-DrFu-skq.js";import"./utils-Dj_FLTrM.js";import"./main-HWtSBowW.js";import"./index-Mbi4iokj.js";import"./UI5Element-CzMfQqnP.js";import"./Boot-DutchAmg.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-HfHyyjXv.js";import"./withWebComponent-B-q4dpqR.js";import"./utils-CzTHXoYc.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-C7Xi0JmF.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-Czk9o4-x.js";import"./Icons-DOypJ1ey.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-kZpvVQc-.js";import"./sys-help-2-JVQsHWLX.js";import"./information-Bz3ag37N.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-Cx3mJvyk.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-iTMd0Np9.js";import"./index-DBFr8Wnc.js";import"./decline-DCttDR6b.js";import"./class-map-D3G_ubmA.js";import"./Button-BzKON9jh.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./index-Cy4Z53Fx.js";import"./Popover-CgEuE7bG.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-_doHq5C_.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-3JkkzoGu.js";import"./FocusableElements-CGV1dSWU.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DQKG4dIE.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-5kI6_gZF.js";import"./BrowserScrollbar.css-opuuJdpl.js";import"./index-DxJcSMNg.js";import"./Link-BpvJx02W.js";import"./chunk-HLWAVYOI-CThJqSGt.js";import"./client-DNfJn3vO.js";import"./copy-DwYLhAbQ.js";import"./index-CZBHbdAV.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BapCJMzX.js";import"./index-BJXBoxs7.js";import"./i18n-defaults-BFgjw7fK.js";import"./I18nContext-D8i4N15C.js";import"./index-CqL1iFrm.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-BWMWV5L6.js";import"./useIsomorphicId-BEB4eg8l.js";import"./GitHub-Mark-hv4rNEh_.js";import"./TableOfContent-B9dccB54.js";import"./index-s4Zyw0Uk.js";import"./Label-COhM1iHW.js";import"./index-M_ml1KrB.js";import"./addCustomCSSWithScoping-E64gwvMe.js";import"./index-jXCyAPRh.js";import"./index-BIen9AxK.js";import"./Avatar-B4OEebUt.js";import"./employee-B43YsEH_.js";import"./index-B58AD2YM.js";import"./index-DndKmUmm.js";function m(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...p(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:h}),`
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
