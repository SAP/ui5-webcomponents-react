import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-B5Ip8tK9.js";import{M as n,C as s}from"./index-DukfgG46.js";import"./index-BWKPikEH.js";import"./index-DG4SW1Na.js";import{C as e}from"./ControlsWithNote-DWvUN5HF.js";import{D as a}from"./DocsHeader-C0GiLIwp.js";import{F as c}from"./CommandsAndQueries-Dnz_Hw6e.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BHqLOn3P.js";import{C as h,D as i}from"./Toast.stories-6AkvYyPH.js";import"./iframe-DwIyAsRF.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-2URiGFD4.js";import"./CustomElementsScope-BI7irdrP.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-Bjd4zYvH.js";import"./Keys-CLyAIm0c.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-B0-3JSbm.js";import"./parameters-bundle.css-CKhNLE8L.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-B60tbUjG.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-D-4MAilP.js";import"./decline-Dy3AHuu2.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-CT1WFsrs.js";import"./information-BNPlHszt.js";import"./sys-enter-2-Dn3JsYB_.js";import"./sys-enter-2-CVLhpz1T.js";import"./alert-DsnWREGh.js";import"./Tag-CFnuOVXp.js";import"./sys-help-2-D2pBj4rZ.js";import"./utils-C_2ddFCI.js";import"./main-DirjBNUD.js";import"./index-BkMq5NNM.js";import"./index-DQrDl5DZ.js";import"./Link-B2LlQwpl.js";import"./index-DVo4jJWd.js";import"./Popover-C0YXxup5.js";import"./PopupsCommon.css-Fn6w0Ixx.js";import"./FocusableElements-CQV0UnrP.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DtxVwfCt.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./copy-Dfs1YfRy.js";import"./copy-CiPkc0hO.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-BG9P-NK7.js";import"./index-C9pVJkR7.js";import"./I18nStore-CIGTIwFZ.js";import"./useStylesheet-4DYJndCZ.js";import"./index-D71WPoKU.js";import"./index-C4Jitp5p.js";import"./Label-XJ1zprNH.js";import"./index-Bd-rK44S.js";import"./index-D3evOh0J.js";import"./Text-CA10hASc.js";import"./preview-CXjsfKgV.js";import"./DocsRenderer-CFRXHY34-DiZSQ5cR.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-CKnDw5_z.js";import"./index-YPb1U1C6.js";import"./BusyIndicator-DWZUs86e.js";import"./index-D4tId3DQ.js";import"./index-69BlU8QT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CRL-E5Mm.js";import"./index-CFx1AVPJ.js";function p(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:h}),`
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
