import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-Duvwo7dg.js";import{M as n,C as s}from"./index-BRMBMncV.js";import"./index-N87cy000.js";import"./index-AfujWwtH.js";import{C as e}from"./ControlsWithNote-CelRpAmY.js";import{D as a}from"./DocsHeader-BaDJmz_X.js";import{F as c}from"./CommandsAndQueries-DdAT6Uk6.js";import"./index-CEr2UAyE.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BTb5jHlz.js";import{C as h,D as i}from"./Toast.stories-Dp6O1ojO.js";import"./iframe-CBhFd9lp.js";import"./index-7Z4Dhk6u.js";import"./index-BX0qWsV0.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-xa789Fx-.js";import"./CustomElementsScope-CraI7z9b.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-BAohpRXl.js";import"./Keys-CLf_QmYW.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-BC8KE6RK.js";import"./parameters-bundle.css-D0uTR4GL.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-CwjopbrF.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-Wx6G1HAa.js";import"./decline-BJJ7TY3L.js";import"./i18n-defaults-CmVK7_Fz.js";import"./information-jHKcowyE.js";import"./information-l0VFevGn.js";import"./sys-enter-2-vblLkH1D.js";import"./sys-enter-2-CUYL3AE0.js";import"./alert-CtWydQwI.js";import"./Tag-Ck-rQ93o.js";import"./sys-help-2-QU1zRg7_.js";import"./utils-BepPmUQ8.js";import"./main-Dn6sLQP9.js";import"./index-CfGRZDU4.js";import"./index-BxoZEFEX.js";import"./Link-DYEiCybJ.js";import"./index-BKXgMucs.js";import"./Popover-DrPdnlD_.js";import"./PopupsCommon.css-D_uQUn1t.js";import"./FocusableElements-CinXTr6J.js";import"./isElementHidden-gS67o0pl.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-OXK24k1p.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./copy-C0jPBuQX.js";import"./copy-Ce-W84Ka.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-ClPXL3dS.js";import"./index-DlyX1wkJ.js";import"./I18nStore-Bx61vi8M.js";import"./useStylesheet-Dh6tKsMV.js";import"./index-CEUkGP3J.js";import"./index-w82VAi-S.js";import"./Label-DvI9nTT8.js";import"./index-BTImLLsO.js";import"./index-g22nm93k.js";import"./Text-BhvqvgTY.js";import"./preview-Bzf-LAOf.js";import"./DocsRenderer-CFRXHY34-DEbXKXa3.js";import"./client-2ALsBH8W.js";import"./addCustomCSSWithScoping-Br5D2MMD.js";import"./index-CB6Dlc1E.js";import"./BusyIndicator-CP9fjQ10.js";import"./index-BUVDlgt4.js";import"./index-5xYsTlk-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-JpmbdEoa.js";import"./index-Dbkcovbd.js";function p(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:h}),`
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
