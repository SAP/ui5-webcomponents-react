import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-B5Ip8tK9.js";import{M as p,C as t}from"./index-BkptYww8.js";import"./index-BRThQ-zg.js";import"./index-DB5XcgZE.js";import{C as m}from"./ControlsWithNote-FWqWv6dT.js";import{D as c}from"./DocsHeader-DjpdG0zS.js";import{F as a}from"./CommandsAndQueries-WZhmPGae.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-JqJU4F4n.js";import{C as l,D as s,W as d}from"./MessageBox.stories-DLDwcGMy.js";import"./iframe-CTUxjvbX.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-CTdjW1dy.js";import"./CustomElementsScope-BI7irdrP.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-CddyUUJt.js";import"./Keys-BxH5KEHJ.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-Cq4WdPfD.js";import"./parameters-bundle.css-CKhNLE8L.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-CywStIph.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-Bwpyempw.js";import"./decline-CzIZ7Vnl.js";import"./i18n-defaults-CmVK7_Fz.js";import"./information-C85sdt-6.js";import"./information-CovZJhop.js";import"./sys-enter-2-LJy9JDcm.js";import"./sys-enter-2-CUlYw7x6.js";import"./alert-DKjZxuBr.js";import"./Tag-BGp0HQg1.js";import"./sys-help-2-CdqLSqXL.js";import"./utils-B9ZyQsQN.js";import"./main-DirjBNUD.js";import"./index-twTfcK9t.js";import"./index-CnssFVF8.js";import"./Link-BvcafW2a.js";import"./index-DuSPh-fE.js";import"./Popover-D3TB1XeJ.js";import"./PopupsCommon.css-3rSjbG44.js";import"./FocusableElements-Cvm20E5b.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-B38a0cLW.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./copy-iFL-9i7I.js";import"./copy-DVi57tol.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-BG9P-NK7.js";import"./index-CYuncv_l.js";import"./I18nStore-C5X80oUZ.js";import"./useStylesheet-4DYJndCZ.js";import"./index-D8ZRqiRz.js";import"./index-BHoJB3Bj.js";import"./Label-CxXPup1E.js";import"./index-CK7zNLqv.js";import"./index-OzB7lNJQ.js";import"./Text-DZG3aMF7.js";import"./preview-BeVpLyZa.js";import"./DocsRenderer-CFRXHY34-Cltjbb6R.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-B6DvbxXy.js";import"./index-DPnISxA_.js";import"./BusyIndicator-BKaUugOY.js";import"./index-CnTKSd9L.js";import"./index-Dj0HSimA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-1lbVTklO.js";import"./index-hAIEWkeu.js";import"./ValueState-Bg0UWejw.js";import"./i18n-defaults-JJaa3qr3.js";import"./index-syzq-y0C.js";import"./Dialog-MPSfdmEc.js";import"./index-YRCeRiXb.js";import"./index-B0E-N1iR.js";function i(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:l}),`
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
