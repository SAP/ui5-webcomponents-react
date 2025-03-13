import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-zdXs1Etw.js";import{M as n,C as s}from"./index-BxWrc7MZ.js";import"./index-DNTLYVLP.js";import"./index-BzuNhS44.js";import{C as e}from"./ControlsWithNote-CVDCQbcI.js";import{D as a}from"./DocsHeader-CWpwa_Hb.js";import{F as c}from"./CommandsAndQueries-Mdin3UBF.js";import"./index-C--kS4iy.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BZr7m-U9.js";import{C as h,D as i}from"./Toast.stories-Bp0Bn8d1.js";import"./iframe-DUJf1H9K.js";import"./index-DJcrgQOn.js";import"./index-B-pEBbkX.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-TYk6ziax.js";import"./CustomElementsScope-BUTWMsdD.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-CDUAIOHY.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-CJfyoCyo.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DGo6fNOA.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-BXUwkpCs.js";import"./decline-Ctf1iLC2.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-CaDfZmsc.js";import"./information-axph4kwY.js";import"./sys-enter-2-W20sQgrM.js";import"./sys-enter-2-Dj0rlhGw.js";import"./TagDesign-Ga50IS6u.js";import"./utils-BP6ziVZ_.js";import"./main-BZcY5MQX.js";import"./index-CaDFDEaV.js";import"./Tag-DIF-afEZ.js";import"./sys-help-2-3dHH1qFA.js";import"./index-DG9f8b92.js";import"./Link-DJmP58JE.js";import"./index-C4AHKFdV.js";import"./Popover-CYWkC5M7.js";import"./PopupsCommon.css-C4odaWdv.js";import"./FocusableElements-B0h6XdH-.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BhhEdsAZ.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./copy-CzED_nep.js";import"./copy-BIm13QSs.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-Bzt3eeAv.js";import"./index-DfZ2IpZQ.js";import"./I18nStore-DdNtknPF.js";import"./useStylesheet-D-3zc5-n.js";import"./index-BrwMjXl-.js";import"./index-BxZpBR5v.js";import"./Label-CNIQ9f-B.js";import"./index-DmVWxwwF.js";import"./index-DA4Nf3tz.js";import"./Text-BE7aNcNC.js";import"./preview-BEJnvG7R.js";import"./DocsRenderer-CFRXHY34-DFT4oPgo.js";import"./react-18-DGA_MWY9.js";import"./addCustomCSSWithScoping-_tNs8Q2d.js";import"./index-CkLIGxQ0.js";import"./BusyIndicator-DRlXpx-R.js";import"./index-PdcYfHMq.js";import"./index-BGMpZMYY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCPNHV1H.js";import"./index-D36di1NY.js";function p(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:h}),`
`,o.jsx(a,{since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{of:i}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(e,{of:i}),`
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
`,o.jsx(c,{})]})}function Po(r={}){const{wrapper:t}={...m(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(p,{...r})}):p(r)}export{Po as default};
