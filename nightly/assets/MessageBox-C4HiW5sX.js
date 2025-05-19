import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-B5Ip8tK9.js";import{M as p,C as t}from"./index-Q7FyT3SY.js";import"./index-CIMhrZAh.js";import"./index-0N2PhMmL.js";import{C as m}from"./ControlsWithNote-CWv7-Usp.js";import{D as c}from"./DocsHeader-5YHyazxx.js";import{F as a}from"./CommandsAndQueries-PS4aInkb.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-Bi6E7_f2.js";import{C as l,D as s,W as d}from"./MessageBox.stories-CBgr9qzj.js";import"./iframe-1gJQdwR8.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-gx_Zcjo3.js";import"./CustomElementsScope-CjZbIYTD.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-BhunxXU0.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-CZw5gRks.js";import"./parameters-bundle.css-Dkq9X0yL.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-8xifowfb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-B158X0Y5.js";import"./decline-BwbUHmi7.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-Beb07qW6.js";import"./information-DPOcXyRn.js";import"./sys-enter-2-SJ-ADG9s.js";import"./sys-enter-2-3iNjTkh9.js";import"./alert-OoqNCaQj.js";import"./TagDesign-Ga50IS6u.js";import"./utils-DIzZGb4Q.js";import"./main-DnREbZ5I.js";import"./index-Bpis0SRi.js";import"./Tag-CEzSQIl5.js";import"./sys-help-2-RmNMPhxT.js";import"./index-DY8ctAYr.js";import"./Link-CCYqxCbK.js";import"./index-DMDy6m5O.js";import"./Popover-inHmHWag.js";import"./PopupsCommon.css-C6QW1NU3.js";import"./FocusableElements-B0ox-u2n.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DeuUg-iv.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./copy-CbwaFUHa.js";import"./copy-1xAMALOS.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-BG9P-NK7.js";import"./index-CMDnAish.js";import"./I18nStore-XmjZR7rr.js";import"./useStylesheet-DUe1LpVj.js";import"./index-BFqlvNkW.js";import"./index-DNdqOyXb.js";import"./Label-Xvb1prxJ.js";import"./index-BWd6G_fU.js";import"./index-_2xpPfjR.js";import"./Text-CkerREnW.js";import"./preview-8ANsB_CM.js";import"./DocsRenderer-CFRXHY34-CprO3KdN.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-PCpHaHtG.js";import"./index-D9fhKjZm.js";import"./BusyIndicator-DjtkhCPk.js";import"./index-DkwX2oO3.js";import"./index-DWxMKmlL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-qIXMnRwj.js";import"./index-3YmpJ0q7.js";import"./ValueState-Bg0UWejw.js";import"./i18n-defaults-DCll23ma.js";import"./index-Bon3PjF2.js";import"./Dialog-BSquvsbt.js";import"./index-BPNKDOce.js";import"./index-BRtmXPLB.js";function i(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:l}),`
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
`,o.jsx(a,{})]})}function Io(e={}){const{wrapper:n}={...r(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(i,{...e})}):i(e)}export{Io as default};
