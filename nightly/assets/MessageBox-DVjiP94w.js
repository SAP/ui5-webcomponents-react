import{j as o}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as r}from"./index-ChplMHeC.js";import{M as p,C as t}from"./index-Z9suDlzg.js";import"./index-vS7eettY.js";import"./index-qnRJQVoQ.js";import{C as m}from"./ControlsWithNote-BLYzoChM.js";import{D as c}from"./DocsHeader-BTweCqmJ.js";import{F as a}from"./CommandsAndQueries-D9c_V-bH.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-BQdI3h8O.js";import{C as l,D as s,W as d}from"./MessageBox.stories-DBWoqSyW.js";import"./iframe-CyjXMGiF.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-DMqncVPl.js";import"./utils-C2XfIY3Y.js";import"./useIsomorphicLayoutEffect-C1EF3yoB.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-BzyjfDHJ.js";import"./Keys-Can65e7H.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-C9C2dQAU.js";import"./parameters-bundle.css-3_Pq1j61.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DFGxyfr2.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-CjsTKlnu.js";import"./decline-CB2Xqvf8.js";import"./i18n-defaults-CifGXSvE.js";import"./information-BUHLFqRk.js";import"./information-BiCqrnzz.js";import"./sys-enter-2-CHAD7uKM.js";import"./sys-enter-2-DbI-3aq9.js";import"./TagDesign-Dou_yO3g.js";import"./utils-CTiFIUnS.js";import"./main-BL2DbqAR.js";import"./index-ZH-RZJzv.js";import"./Tag-BRYgkqac.js";import"./sys-help-2-Cg3brO7T.js";import"./index-B7nGJ2tS.js";import"./Link-DuU4BxE_.js";import"./index-B20XONiy.js";import"./Popover-KVxD3zt0.js";import"./PopupsCommon.css-DbH0sKjP.js";import"./FocusableElements-BTi29GnT.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DeJaGaPJ.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-lxq_R9wx.js";import"./client-lwzJIAjg.js";import"./copy-D0YprZuO.js";import"./copy-BavmS0zW.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-DPJokzl1.js";import"./I18nStore-BFxg9tvA.js";import"./useStylesheet-4xWfxLte.js";import"./index-DvtALA7k.js";import"./index-C8zDtCGl.js";import"./Label-dsgxfrkZ.js";import"./index-DW0x8ghk.js";import"./index-CFV8P0hB.js";import"./Text-BzZxAxrt.js";import"./addCustomCSSWithScoping-BOEXtufo.js";import"./index-CwpH1SbG.js";import"./index-Ahxuog19.js";import"./BusyIndicator-B-9XtNdv.js";import"./index--3sYbX0a.js";import"./index-iU1rSOy8.js";import"./AvatarSize-BceVhWoP.js";import"./employee-CpIGAUgT.js";import"./index-CfEu6ppM.js";import"./ValueState-Bg0UWejw.js";import"./i18n-defaults-ChHTGB6j.js";import"./index-MMoIQuLH.js";import"./Dialog-BUTBf08H.js";import"./index-Btz1Ddnq.js";import"./index-FaVE-A0K.js";function i(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:l}),`
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
