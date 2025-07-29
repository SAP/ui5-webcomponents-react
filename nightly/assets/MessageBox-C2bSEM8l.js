import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-Duvwo7dg.js";import{M as p,C as t}from"./index-r_31mxfN.js";import"./index-N87cy000.js";import"./index-BeVZ985M.js";import{C as m}from"./ControlsWithNote-DEJEHBWp.js";import{D as c}from"./DocsHeader-D7A6fUCg.js";import{F as a}from"./CommandsAndQueries-C48bfVA9.js";import"./index-CEr2UAyE.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BTb5jHlz.js";import{C as l,D as s,W as d}from"./MessageBox.stories-BmWziSB5.js";import"./iframe-B_POwpwF.js";import"./index-7Z4Dhk6u.js";import"./index-BX0qWsV0.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-xa789Fx-.js";import"./CustomElementsScope-CraI7z9b.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-BAohpRXl.js";import"./Keys-CLf_QmYW.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-BC8KE6RK.js";import"./parameters-bundle.css-D0uTR4GL.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-CwjopbrF.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-Wx6G1HAa.js";import"./decline-BJJ7TY3L.js";import"./i18n-defaults-CmVK7_Fz.js";import"./information-jHKcowyE.js";import"./information-l0VFevGn.js";import"./sys-enter-2-vblLkH1D.js";import"./sys-enter-2-CUYL3AE0.js";import"./alert-CtWydQwI.js";import"./Tag-Ck-rQ93o.js";import"./sys-help-2-QU1zRg7_.js";import"./utils-CHXZvwrF.js";import"./main-Dn6sLQP9.js";import"./index-CY4hIywU.js";import"./index-BqqAHTof.js";import"./Link-DYEiCybJ.js";import"./index-DOeHcXKd.js";import"./Popover-DrPdnlD_.js";import"./PopupsCommon.css-D_uQUn1t.js";import"./FocusableElements-CinXTr6J.js";import"./isElementHidden-gS67o0pl.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-OXK24k1p.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./copy-C0jPBuQX.js";import"./copy-Ce-W84Ka.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-ClPXL3dS.js";import"./index-COqY4iNg.js";import"./I18nStore-Bx61vi8M.js";import"./useStylesheet-Dh6tKsMV.js";import"./index-p-Ero6xF.js";import"./index-DspB395S.js";import"./Label-DvI9nTT8.js";import"./index-BTImLLsO.js";import"./index-g22nm93k.js";import"./Text-BhvqvgTY.js";import"./preview-M5VYAgVN.js";import"./DocsRenderer-CFRXHY34-Do6hYqM6.js";import"./client-2ALsBH8W.js";import"./addCustomCSSWithScoping-Br5D2MMD.js";import"./index-CB6Dlc1E.js";import"./BusyIndicator-CP9fjQ10.js";import"./index-BUVDlgt4.js";import"./index-5xYsTlk-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-JpmbdEoa.js";import"./index-BtS86Ybv.js";import"./ValueState-Bg0UWejw.js";import"./i18n-defaults-C7-7PsiF.js";import"./index-BJ8iR2dq.js";import"./Dialog-DV9znwaF.js";import"./index-DvktgRJV.js";import"./index-BBl34Qwo.js";function i(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:l}),`
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
