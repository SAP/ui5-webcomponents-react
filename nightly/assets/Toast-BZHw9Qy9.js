import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-zdXs1Etw.js";import{M as n,C as s}from"./index-Lg_2O2zk.js";import"./index-18Ltli4F.js";import"./index-DgCc58qg.js";import{C as e}from"./ControlsWithNote-D3oEa-6p.js";import{D as a}from"./DocsHeader-CqkXnssZ.js";import{F as c}from"./CommandsAndQueries-CUnE92IA.js";import"./index-C--kS4iy.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BDxE6jlm.js";import{C as h,D as i}from"./Toast.stories-Bw_4N1h8.js";import"./iframe-DLprI1_C.js";import"./index-DJcrgQOn.js";import"./index-B-pEBbkX.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-28PG-PhA.js";import"./CustomElementsScope-D32jWln6.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-BJcyuOZ-.js";import"./Keys-BF9NgJbR.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-BA-Z5X-C.js";import"./parameters-bundle.css-Ct2Rzfjz.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DBaa6sR8.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-DIUd5-_G.js";import"./decline-B-7r8h1x.js";import"./i18n-defaults-u2_1ijdO.js";import"./information-DKw70c9J.js";import"./information-CDoXjDdi.js";import"./sys-enter-2-DBhtllGR.js";import"./sys-enter-2-BRVWDnOR.js";import"./TagDesign-Ga50IS6u.js";import"./utils-DXTZdXzx.js";import"./main-CiDzSAAF.js";import"./index-D6ACqdwe.js";import"./Tag-B3qkhm6Z.js";import"./sys-help-2-BfevxhM3.js";import"./index-CBa4g496.js";import"./Link-wJsXaU9N.js";import"./index-BvrMpJPf.js";import"./Popover-vrquhgcM.js";import"./PopupsCommon.css-CFYCSkNV.js";import"./FocusableElements-Clvab7V1.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-C5DtzTqb.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-C3topnbf.js";import"./react-18-CYWbi7Zg.js";import"./copy-CiJ_0mNd.js";import"./copy-C343vs9R.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-Bzt3eeAv.js";import"./index-Co4fJDqd.js";import"./I18nStore-CY8kcvKW.js";import"./useStylesheet-B5S_P2i6.js";import"./index-DuGhTxf5.js";import"./index-7k5z3473.js";import"./Label-D_KOrpSt.js";import"./index-BERigoy7.js";import"./index-u200OysQ.js";import"./Text-BCbUq7g2.js";import"./addCustomCSSWithScoping-Cml1L90m.js";import"./index-BFa74pi2.js";import"./BusyIndicator-BZvDM_dq.js";import"./index-DeJkSj18.js";import"./index-BaltLl-X.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CmJW4hiT.js";import"./index-Ccb1T7-X.js";function p(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:h}),`
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
