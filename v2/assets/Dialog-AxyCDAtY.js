import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-B5Ip8tK9.js";import{M as n,C as e}from"./index-4yRL8OBZ.js";import"./index-BsLeVBVw.js";import"./index-OU7vbiqi.js";import{C as s}from"./ControlsWithNote-Bi647fTM.js";import{D as a}from"./DocsHeader-C42TXBSj.js";import{F as c}from"./CommandsAndQueries-CGFyjbKe.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-l18RNg85.js";import{C as l,D as i}from"./Dialog.stories-DoJ_01WJ.js";import"./iframe-Cjx8Hs1a.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-2NO35c9p.js";import"./CustomElementsScope-BZQ-yqK5.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-DsiN4KEf.js";import"./Keys-CLf_QmYW.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-Dy5MqRQN.js";import"./parameters-bundle.css-D0uTR4GL.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DqK_Zwt1.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-Wx6G1HAa.js";import"./decline-Cf8Y7eZn.js";import"./i18n-defaults-CmVK7_Fz.js";import"./information-CPeQ-J71.js";import"./information-DVtVmQQs.js";import"./sys-enter-2-DM7CihIf.js";import"./sys-enter-2-D_EhgDRM.js";import"./alert-B-6XnuHB.js";import"./Tag-B8Y5CAT_.js";import"./sys-help-2-CQSD8GDX.js";import"./utils-DmJ3DSXL.js";import"./main-Dn6sLQP9.js";import"./index-DqV79I4B.js";import"./index-D2b-19st.js";import"./Link-CIigJXcZ.js";import"./index-39R8lAwY.js";import"./Popover-DHgn1IwJ.js";import"./PopupsCommon.css-1ftV5PB8.js";import"./FocusableElements--dusX2Bm.js";import"./isElementHidden-gS67o0pl.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DGDOSiJK.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./copy--eUL3OtC.js";import"./copy-C9kEgeiD.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-BG9P-NK7.js";import"./index-ByfBOenC.js";import"./I18nStore-Bb3vbAIQ.js";import"./useStylesheet-DhspXHhi.js";import"./index-nPUXka96.js";import"./index-D9y7p1Ga.js";import"./Label-DvK4qyHf.js";import"./index-C2cs6waD.js";import"./index-Z1IFI4-r.js";import"./Text-CWzAOMGb.js";import"./preview-BwGo11LB.js";import"./DocsRenderer-CFRXHY34-D2uGPLEq.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-BPwSVJcY.js";import"./index-B-i0fidp.js";import"./BusyIndicator-kBFPsFJK.js";import"./index-B61k-92l.js";import"./index-6SfSTYbY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DTc-n_gr.js";import"./index-B23f-h2l.js";import"./Dialog-TYaONLew.js";import"./ValueState-Bg0UWejw.js";import"./index-CMVptBWg.js";import"./List-2melzpex.js";import"./ItemNavigation-D8f2eHwJ.js";import"./TableUtils-BdnmFIk7.js";import"./DropIndicator-BAXclq7I.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./ListItemGroup-CfwLEKW4.js";import"./TabbableElements-CqFMEI5U.js";import"./index-Co-ktsUT.js";import"./ListItemStandard-VHek2mXl.js";import"./ListItemTemplate-BQJ_nEnI.js";import"./edit-BOpKjwiH.js";import"./ListItemAdditionalText.css-Bw4YnmYD.js";import"./slim-arrow-right-Db6husuF.js";import"./RadioButton-k0vTSgaJ.js";import"./CheckBox-Cwy3o2MP.js";import"./accept-CcEwUC-x.js";function p(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:l}),`
`,o.jsx(a,{}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(e,{of:i}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(s,{of:i}),`
`,o.jsx(t.h2,{id:"opening-dialogs",children:"Opening Dialogs"}),`
`,o.jsxs(t.p,{children:["You can open and close the ",o.jsx(t.code,{children:"Dialog"})," component in a declarative way using the ",o.jsx(t.code,{children:"open"})," prop."]}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`const MyComponentWithDialog = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setDialogIsOpen(true);
        }}
      >
        Open Dialog
      </Button>
      <Dialog open={dialogIsOpen} />
    </>
  );
};
`})}),`
`,o.jsx(c,{})]})}function mt(r={}){const{wrapper:t}={...m(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(p,{...r})}):p(r)}export{mt as default};
