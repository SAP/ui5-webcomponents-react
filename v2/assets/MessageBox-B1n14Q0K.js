import{j as o}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as r}from"./index-ChplMHeC.js";import{M as p,C as t}from"./index-Cf9TdiSk.js";import"./index-DBDmnX-z.js";import"./index-_PTNq6DX.js";import{C as m}from"./ControlsWithNote-WceZMqCl.js";import{D as c}from"./DocsHeader-DUz5nbfp.js";import{F as a}from"./CommandsAndQueries-D27DZ2Ym.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-DXDOdGV-.js";import{C as l,D as s,W as d}from"./MessageBox.stories-bbuqpwst.js";import"./iframe-DP2L8rW1.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./jsx-runtime--4q9epG_.js";import"./CustomElementsScope-CyyomP-e.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-DiEZky6d.js";import"./Keys-Can65e7H.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-CqWzJ5OD.js";import"./parameters-bundle.css-Ct2Rzfjz.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-D7wkQClO.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-B3xVhWeJ.js";import"./decline-WqXclzji.js";import"./i18n-defaults-u2_1ijdO.js";import"./information-Cg0Ur4-J.js";import"./information-BgTcHNBm.js";import"./sys-enter-2-CpRj5F0h.js";import"./sys-enter-2-sAwqztpn.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DyHtJFx0.js";import"./main-CiDzSAAF.js";import"./index-DPPrIwN-.js";import"./Tag-B0hWUzaX.js";import"./sys-help-2-B0EpPzfO.js";import"./index-qDH2MiBo.js";import"./Link-D6TMlpbu.js";import"./index-FpWZEnTM.js";import"./Popover-BM5bmFmi.js";import"./PopupsCommon.css-BST0NkVW.js";import"./FocusableElements-BH98Clrf.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Cy2YVXLr.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-D-3X29ML.js";import"./client-lwzJIAjg.js";import"./copy-CofIAqn3.js";import"./copy-CpGuQhie.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-DSNhfjyG.js";import"./I18nStore-DM4coTEA.js";import"./useStylesheet-B1BKTlQ6.js";import"./index-lBbqciF7.js";import"./index-Wfe8JoJe.js";import"./Label-5DArBtCG.js";import"./index-iR9PNDcN.js";import"./index-PYuf3Agp.js";import"./Text-pu3koT6Q.js";import"./addCustomCSSWithScoping-lI9D75_A.js";import"./index-BWkycj8K.js";import"./BusyIndicator-CYJz71Ps.js";import"./index-C-pEC8LU.js";import"./index-kg5gipTY.js";import"./AvatarSize-BceVhWoP.js";import"./employee-D8p98cWt.js";import"./index-Z1OjBYhn.js";import"./ValueState-Bg0UWejw.js";import"./i18n-defaults-DM4q4ZP6.js";import"./index-B0Qfqq7w.js";import"./Dialog-D5Yh429K.js";import"./index-CGnN2KUf.js";import"./index-CSH6rE0O.js";function i(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:l}),`
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
