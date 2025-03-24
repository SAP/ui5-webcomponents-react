import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-Ddg-oX0k.js";import{M as p,C as t}from"./index-DM-PQeCZ.js";import"./index-CB2NJyj5.js";import"./index-BKAx7q_3.js";import{C as m}from"./ControlsWithNote-CQYILQSo.js";import{D as c}from"./DocsHeader-Zi7VOv5m.js";import{F as a}from"./CommandsAndQueries-Bf80nBJR.js";import"./index-Bi_W_Jd4.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-Dw2clFwJ.js";import{C as l,D as s,W as d}from"./MessageBox.stories-B8f1GeOu.js";import"./iframe-C0FP295u.js";import"./index-C1S0AQHK.js";import"./index-C2EHZYIs.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-ByLklLy6.js";import"./CustomElementsScope-BJCkQSHf.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-CVhFbCad.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-CGby3L9v.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-CFLTQoOV.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-BXUwkpCs.js";import"./decline-U8TXFXmv.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-CmvYYEtw.js";import"./information-DWKEhq3n.js";import"./sys-enter-2-DfvUZ16A.js";import"./sys-enter-2-DLBOjKNS.js";import"./TagDesign-Ga50IS6u.js";import"./utils-MfgsyqdK.js";import"./main-BZcY5MQX.js";import"./index-BwuPsjtr.js";import"./Tag-B3GqqYCx.js";import"./sys-help-2-Cui80jVv.js";import"./index-V8njyB6i.js";import"./Link-7OPDvJp0.js";import"./index-V9E_9yBg.js";import"./Popover-BgaZr5c3.js";import"./PopupsCommon.css-D4-KdmWM.js";import"./FocusableElements-Bof-Jfi5.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-D-iSdYn6.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./copy-C0TcgQvK.js";import"./copy-BPa3OsAo.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-rwZqpKzI.js";import"./index-1x_xMzNI.js";import"./I18nStore-BuTcnDwi.js";import"./useStylesheet-jv87nE5t.js";import"./index-DkLUlqZo.js";import"./index-CTl4EJPq.js";import"./Label-42unHoL8.js";import"./index-q_xBifsn.js";import"./index-D1NZoOym.js";import"./Text-BYHe0rMB.js";import"./preview-DM0o_rDm.js";import"./DocsRenderer-CFRXHY34-Boyb1u06.js";import"./react-18-B98GjGe7.js";import"./addCustomCSSWithScoping-CRaJDqw6.js";import"./index-sxpf8z2p.js";import"./BusyIndicator-cXtbXcMV.js";import"./index-D-QlfT-1.js";import"./index-BBw2fVoz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DP6pBYCZ.js";import"./index-BOMtNjem.js";import"./ValueState-Bg0UWejw.js";import"./i18n-defaults-DyGSzYzE.js";import"./index-BvbCgXgE.js";import"./Dialog-CRHAE-yP.js";import"./index-BR8Tg3so.js";import"./index-Blw57xH1.js";function i(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:l}),`
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
