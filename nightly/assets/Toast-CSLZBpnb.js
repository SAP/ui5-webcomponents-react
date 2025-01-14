import{j as o}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as m}from"./index-B7tNCeqj.js";import{ae as n,af as e}from"./index-gbm_PpJj.js";import"./index-B0ifNMuI.js";import"./index-D1Su9tdA.js";import{C as s}from"./ControlsWithNote-bCDmWE4f.js";import{D as a}from"./DocsHeader-BCU2gKYC.js";import{F as c}from"./CommandsAndQueries-BZOd3hXB.js";import"./products-B8km3JGR.js";import"./index-CjmQ2z5u.js";import"./WrappingType-CW8URInd.js";import"./Title-HEcUckFf.js";import{C as h,D as i}from"./Toast.stories-Vnx3vDZR.js";import"./iframe-Kf-3TudD.js";import"../sb-preview/runtime.js";import"./index-bI5-aUrJ.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-DbOtF11K.js";import"./utils-5ouIlTbN.js";import"./useIsomorphicLayoutEffect-U1V4gMqc.js";import"./slot-Df15G--e.js";import"./event-strict-C2lE4gn2.js";import"./i18n-BLQCbquq.js";import"./Button-BBEhHqXq.js";import"./Keys-icCwrzTr.js";import"./AccessibilityTextsHelper-DhVMExKx.js";import"./Icon-DnECHVzX.js";import"./parameters-bundle.css-BzaqQttB.js";import"./willShowContent-BOkh0bwj.js";import"./Tooltips-CxBV-rFR.js";import"./toLowercaseEnumValue-BQhMonSq.js";import"./i18n-defaults-Cyg2J0QB.js";import"./decline-Cvpxulmf.js";import"./i18n-defaults-CUGG7UPM.js";import"./information-Z-_GrMVK.js";import"./information-WFnUlRRI.js";import"./sys-enter-2-2B0zQ6hc.js";import"./sys-enter-2-BneCyVoJ.js";import"./TagDesign-Dou_yO3g.js";import"./utils-C1ab8_Nt.js";import"./fiori-BEcr7J4N.js";import"./main-rGL2KZiJ.js";import"./index-DK7pmoW6.js";import"./Tag-CGyrVfu4.js";import"./sys-help-2-b8hsY3Mo.js";import"./index-DbDAMUse.js";import"./Link-CGflddfl.js";import"./index-DA9x0mSX.js";import"./Popover-jpBWywBD.js";import"./PopupsCommon.css-C5goN-pn.js";import"./FocusableElements-DKyPTCYZ.js";import"./isElementHidden-Bpu2V8BK.js";import"./isElementClickable-C7H9UXMP.js";import"./getActiveElement-BL9Yqj8a.js";import"./ResizeHandler-y4ADtKuu.js";import"./MediaRange-CQ-a3KRn.js";import"./getEffectiveScrollbarStyle-DY0HYxPj.js";import"./chunk-NUUEMKO5-I4tI7zf8.js";import"./client-CY4f97Aa.js";import"./copy-DZD0G8JY.js";import"./copy-ByaNPW9V.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-BTksmC1d.js";import"./index-Dl7f5Tur.js";import"./I18nStore-CG8U7JCg.js";import"./useStylesheet-CGem_MOm.js";import"./index-Dhh43P9e.js";import"./index-BCOROM5X.js";import"./Label-B_m68C-w.js";import"./index-Bq0c7Dpk.js";import"./index-mePJl18F.js";import"./Text-cV8jhUFL.js";import"./addCustomCSSWithScoping-DOW-YdFK.js";import"./index-MIUva8A9.js";import"./BusyIndicator-7GyohC3D.js";import"./index-DF8djFGP.js";import"./index-V1glf46E.js";import"./AvatarSize-BceVhWoP.js";import"./employee-DorkY_DY.js";import"./index-M38VPAqz.js";function p(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:h}),`
`,o.jsx(a,{since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(e,{of:i}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(s,{of:i}),`
`,o.jsx(t.h2,{id:"show-a-toast",children:"Show a toast"}),`
`,o.jsxs(t.p,{children:["You can open and close the ",o.jsx(t.code,{children:"Toaast"})," component in a declarative way using the ",o.jsx(t.code,{children:"open"})," prop."]}),`
`,o.jsx(t.p,{children:o.jsx(t.strong,{children:"Example"})}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`export function MyComponentWithAToast() {
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setShowToast(true);
        }}
      >
        Show Toast
      </Button>
      <Toast
        open={showToast}
        onClose={() => {
          setShowToast(false);
        }}
      >
        This is my Toast!
      </Toast>
    </>
  );
}
`})}),`
`,o.jsx(c,{})]})}function qo(r={}){const{wrapper:t}={...m(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(p,{...r})}):p(r)}export{qo as default};
