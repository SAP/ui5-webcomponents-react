import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-BxVt_j7t.js";import{ae as p,af as t}from"./index-DmFLHL1H.js";import"./index-Ds-D_dgM.js";import"./index-BQwShcWx.js";import{C as m}from"./ControlsWithNote-CgWSKmFI.js";import{D as c}from"./DocsHeader-BRSQeXwg.js";import{F as a}from"./CommandsAndQueries-CgULAo7G.js";import"./index-B7gF9TUu.js";import"./WrappingType-CW8URInd.js";import"./Title-Cg15KVE0.js";import{C as l,D as s,W as d}from"./MessageBox.stories-C6SaFet0.js";import"./iframe-Ch0MIHMs.js";import"../sb-preview/runtime.js";import"./index-CE_NGgsP.js";import"./index-DHaMx3uI.js";import"./index-DrFu-skq.js";import"./withWebComponent-CT6sGXpP.js";import"./utils-B6HmSsR9.js";import"./useIsomorphicLayoutEffect-CPnToY9g.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./Button-W0cWTBMa.js";import"./Keys-D3vKxxqj.js";import"./AccessibilityTextsHelper-Beeze-lh.js";import"./Icon-Bi16vwdR.js";import"./parameters-bundle.css-BzaqQttB.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-vhX1-CiW.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-Do22Zz-4.js";import"./decline-DUPuUXel.js";import"./i18n-defaults-CUGG7UPM.js";import"./information-CS9fXslf.js";import"./information-BsqVeb3I.js";import"./sys-enter-2-CVBeUzlC.js";import"./sys-enter-2-CkrUrPs2.js";import"./TagDesign-Dou_yO3g.js";import"./utils-BDGwSrv1.js";import"./main-BxOG2qYD.js";import"./index-CquvF64q.js";import"./Tag-BjPnfSgo.js";import"./sys-help-2-gwkXZKN7.js";import"./index-BdmnTn09.js";import"./Link-D_K-FEuO.js";import"./index-BnqhWvMZ.js";import"./Popover-DvifCVMh.js";import"./PopupsCommon.css-DbrNyYP7.js";import"./FocusableElements-BL5Nu5KZ.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BMwFvnQB.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./chunk-NUUEMKO5-OBxVOJSq.js";import"./client-DPlujwLe.js";import"./copy-CEy-JxjH.js";import"./copy-CJontbyU.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-D5efYGjp.js";import"./TableOfContent-DCqtbPc-.js";import"./index-C0KOEO5C.js";import"./I18nStore-CxkIikp_.js";import"./useStylesheet-Dh9nQNvU.js";import"./index-vZm3PJfn.js";import"./index-DLhgh7pX.js";import"./Label-DxVZab8w.js";import"./index-BTnNaaMX.js";import"./index-tU3gglsM.js";import"./Text-DlA3cMIs.js";import"./addCustomCSSWithScoping-DS2p-yck.js";import"./index-DZ9AgWRI.js";import"./BusyIndicator-DZaR2rPi.js";import"./index-DuEzSjuU.js";import"./index-DFjoDZxe.js";import"./AvatarSize-BceVhWoP.js";import"./employee-JxeorwAe.js";import"./index-CVUhhBN5.js";import"./ValueState-Bg0UWejw.js";import"./i18n-defaults-CYX8P-xo.js";import"./index-Dcmuf62T.js";import"./Dialog-CBulCKRO.js";import"./index-DntVHVyG.js";import"./index-Cr9-d14n.js";function i(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:l}),`
`,o.jsx(c,{}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"example",children:"Example"}),`
`,o.jsx(t,{of:s}),`
`,o.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(m,{of:s}),`
`,o.jsx(n.h2,{id:"opening-and-closing-messageboxes",children:"Opening and Closing MessageBoxes"}),`
`,o.jsxs(n.p,{children:["You can open and close the ",o.jsx(n.code,{children:"MessageBox"})," with the ",o.jsx(n.code,{children:"open"})," prop."]}),`
`,o.jsxs(n.p,{children:[o.jsx(n.strong,{children:"Note:"})," ",o.jsx(n.code,{children:"onClose"})," is either called by clicking on one of the action buttons in the footer or by pressing the ",o.jsx(n.code,{children:"ESC"})," key."]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-jsx",children:`const MessageBoxComponent = () => {
  const [open, setOpen] = useState(false);
  const onButtonClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open Messagebox</Button>
      <MessageBox open={open} onClose={handleClose}>
        Content
      </MessageBox>
    </>
  );
};
`})}),`
`,o.jsx(n.h2,{id:"accessing-actions-in-the-onclose-callback",children:"Accessing actions in the onClose callback"}),`
`,o.jsxs(n.p,{children:["To add some logic to the respective actions you can use first parameter of the ",o.jsx(n.code,{children:"onClose"})," event handler which contains the name of the clicked action."]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-jsx",children:`const MessageBoxComponent = () => {
  const [open, setOpen] = useState(false);
  const onButtonClick = () => {
    setOpen(true);
  };
  // in case the MessageBox was closed by pressing \`ESC\`, \`action\` will be undefined and \`escapedPressed\` will be true.
  const handleClose = (action, escapedPressed) => {
    if (escapedPressed) {
      // escape button was pressed
    } else if (action === MessageBoxAction.OK) {
      // do something on "Ok" button click
    } else if (action === 'Custom Action') {
      // do something on "Custom Action" click
    } else {
      // do something on "Cancel" or "Abort" button click
    }
    setOpen(false);
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open Messagebox</Button>
      <MessageBox
        open={open}
        onClose={handleClose}
        actions={[MessageBoxAction.OK, 'Custom Action', MessageBoxAction.Cancel, MessageBoxAction.Abort]}
      >
        Content
      </MessageBox>
    </>
  );
};
`})}),`
`,o.jsx(n.h1,{id:"more-examples",children:"More Examples"}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"messagebox-with-custom-actions",children:"MessageBox with custom actions"}),`
`,o.jsx(t,{of:d}),`
`,o.jsx(a,{})]})}function Go(e={}){const{wrapper:n}={...r(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(i,{...e})}):i(e)}export{Go as default};
