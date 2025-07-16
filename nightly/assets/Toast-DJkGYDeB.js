import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-B5Ip8tK9.js";import{M as n,C as s}from"./index-C_SKcqSz.js";import"./index-Bh0L8GxH.js";import"./index-PZoHAA8T.js";import{C as e}from"./ControlsWithNote-B4n2pUB4.js";import{D as a}from"./DocsHeader-DCpRIpQk.js";import{F as c}from"./CommandsAndQueries-BeD7J8WM.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-l18RNg85.js";import{C as h,D as i}from"./Toast.stories-B2NlHY6u.js";import"./iframe-DJ7xYQfh.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-2NO35c9p.js";import"./CustomElementsScope-BZQ-yqK5.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-DsiN4KEf.js";import"./Keys-CLf_QmYW.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-Dy5MqRQN.js";import"./parameters-bundle.css-D0uTR4GL.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DqK_Zwt1.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-Wx6G1HAa.js";import"./decline-Cf8Y7eZn.js";import"./i18n-defaults-CmVK7_Fz.js";import"./information-CPeQ-J71.js";import"./information-DVtVmQQs.js";import"./sys-enter-2-DM7CihIf.js";import"./sys-enter-2-D_EhgDRM.js";import"./alert-B-6XnuHB.js";import"./Tag-B8Y5CAT_.js";import"./sys-help-2-CQSD8GDX.js";import"./utils-D6Bt9tvG.js";import"./main-Dn6sLQP9.js";import"./index-WWlNSEWj.js";import"./index-28AZPOp1.js";import"./Link-CIigJXcZ.js";import"./index-39R8lAwY.js";import"./Popover-DHgn1IwJ.js";import"./PopupsCommon.css-1ftV5PB8.js";import"./FocusableElements--dusX2Bm.js";import"./isElementHidden-gS67o0pl.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DGDOSiJK.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./copy--eUL3OtC.js";import"./copy-C9kEgeiD.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-BG9P-NK7.js";import"./index-BO1wru2W.js";import"./I18nStore-Bb3vbAIQ.js";import"./useStylesheet-DhspXHhi.js";import"./index-C2w1dnoB.js";import"./index-49bJeJce.js";import"./Label-DvK4qyHf.js";import"./index-C2cs6waD.js";import"./index-Z1IFI4-r.js";import"./Text-CWzAOMGb.js";import"./preview-Iav3-8tF.js";import"./DocsRenderer-CFRXHY34-BoM9Ip9D.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-BPwSVJcY.js";import"./index-B-i0fidp.js";import"./BusyIndicator-kBFPsFJK.js";import"./index-B61k-92l.js";import"./index-6SfSTYbY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DTc-n_gr.js";import"./index-D4EjkVV7.js";function p(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:h}),`
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
