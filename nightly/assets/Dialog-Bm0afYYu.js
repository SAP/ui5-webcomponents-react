import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as m}from"./index-BxVt_j7t.js";import{ae as n,af as e}from"./index-DrPPJeWU.js";import"./index-Ds-D_dgM.js";import"./index-B_V1OSs2.js";import{C as s}from"./ControlsWithNote-B9zta-KW.js";import{D as a}from"./DocsHeader-DT-5cbfm.js";import{F as c}from"./CommandsAndQueries-DVkBGiHg.js";import"./index-B7gF9TUu.js";import"./WrappingType-CW8URInd.js";import"./Title-Cg15KVE0.js";import{C as l,D as i}from"./Dialog.stories-B3SKMMZe.js";import"./iframe-CMv9echg.js";import"../sb-preview/runtime.js";import"./index-CE_NGgsP.js";import"./index-DHaMx3uI.js";import"./index-DrFu-skq.js";import"./withWebComponent-CT6sGXpP.js";import"./utils-B6HmSsR9.js";import"./useIsomorphicLayoutEffect-CPnToY9g.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./Button-W0cWTBMa.js";import"./Keys-D3vKxxqj.js";import"./AccessibilityTextsHelper-Beeze-lh.js";import"./Icon-Bi16vwdR.js";import"./parameters-bundle.css-BzaqQttB.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-vhX1-CiW.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-Do22Zz-4.js";import"./decline-DUPuUXel.js";import"./i18n-defaults-CUGG7UPM.js";import"./information-CS9fXslf.js";import"./information-BsqVeb3I.js";import"./sys-enter-2-CVBeUzlC.js";import"./sys-enter-2-CkrUrPs2.js";import"./TagDesign-Dou_yO3g.js";import"./utils-D9fGPoT4.js";import"./main-BxOG2qYD.js";import"./index-CquvF64q.js";import"./Tag-BjPnfSgo.js";import"./sys-help-2-gwkXZKN7.js";import"./index-BdmnTn09.js";import"./Link-D_K-FEuO.js";import"./index-BnqhWvMZ.js";import"./Popover-DvifCVMh.js";import"./PopupsCommon.css-DbrNyYP7.js";import"./FocusableElements-BL5Nu5KZ.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BMwFvnQB.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./chunk-NUUEMKO5-DpoE0f2X.js";import"./client-DPlujwLe.js";import"./copy-CEy-JxjH.js";import"./copy-CJontbyU.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-D5efYGjp.js";import"./TableOfContent-DCqtbPc-.js";import"./index-C8a0kiSy.js";import"./I18nStore-CxkIikp_.js";import"./useStylesheet-Dh9nQNvU.js";import"./index-vkiV4B2u.js";import"./index-DLhgh7pX.js";import"./Label-DxVZab8w.js";import"./index-BTnNaaMX.js";import"./index-tU3gglsM.js";import"./Text-DlA3cMIs.js";import"./addCustomCSSWithScoping-DS2p-yck.js";import"./index-DZ9AgWRI.js";import"./BusyIndicator-DZaR2rPi.js";import"./index-DuEzSjuU.js";import"./index-DFjoDZxe.js";import"./AvatarSize-BceVhWoP.js";import"./employee-JxeorwAe.js";import"./BarDesign-BLoXVb05.js";import"./index-Dcmuf62T.js";import"./Dialog-CBulCKRO.js";import"./ValueState-Bg0UWejw.js";import"./index-BC0OYNTg.js";import"./ListItemStandard-CVkma7fg.js";import"./ListItemTemplate-CkJTHh1L.js";import"./List-CIfGukHL.js";import"./ItemNavigation-D44tNNZq.js";import"./DropIndicator-NlYOnboQ.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./ListItemAdditionalText.css-B7tteb8L.js";import"./slim-arrow-right-CvUethEd.js";import"./RadioButton-DNTv52kR.js";import"./CheckBox-ZxvHNVoJ.js";import"./accept-wrewqbO5.js";import"./index-B1unmU3b.js";import"./index-EXktoL7B.js";import"./Bar-BLnU6FrV.js";function p(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:l}),`
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
