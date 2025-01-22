import{j as o}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as r}from"./index-ChplMHeC.js";import{M as p,C as t}from"./index-Blx4j4sZ.js";import"./index-CdHGgSNR.js";import"./index-um0BACm9.js";import{C as m}from"./ControlsWithNote-DIEQKRGE.js";import{D as c}from"./DocsHeader-DJhyDby1.js";import{F as a}from"./CommandsAndQueries-CIDAhjIv.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-D0oe8JHs.js";import{C as l,D as s,W as d}from"./MessageBox.stories-Bwj1QU5h.js";import"./iframe-DDffKqyL.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-DfVDXLfc.js";import"./utils-C9_9ShpY.js";import"./useIsomorphicLayoutEffect-Clyi7m9u.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./Button-Bn6Q5CAy.js";import"./Keys-Df3IBHp2.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-DVzRT9Bg.js";import"./parameters-bundle.css-BzaqQttB.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-ifklPEaK.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-Cyg2J0QB.js";import"./decline-BOQDYlzc.js";import"./i18n-defaults-CUGG7UPM.js";import"./information-CuCY0lV7.js";import"./information-Cak16zSA.js";import"./sys-enter-2-XqI4eejo.js";import"./sys-enter-2-Dcza6can.js";import"./TagDesign-Dou_yO3g.js";import"./utils-C-WE68U-.js";import"./main-rGL2KZiJ.js";import"./index-BJBneuZj.js";import"./Tag-PldDXJ8h.js";import"./sys-help-2-vfGQ4D_d.js";import"./index-Dh-Pr-fK.js";import"./Link-C6yBf8L4.js";import"./index-DgTgpO-4.js";import"./Popover-D2H5tr2x.js";import"./PopupsCommon.css-BjjP0aIP.js";import"./FocusableElements-DmMpNXMH.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DlOwLzX7.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-B7Me4Rxw.js";import"./client-lwzJIAjg.js";import"./copy-BscPHKJH.js";import"./copy-BzOp45rx.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-DUFCY91z.js";import"./I18nStore-DzsPQ4Pu.js";import"./useStylesheet-DNyxTWaC.js";import"./index-DlWYL6lf.js";import"./index-DVZh2p7o.js";import"./Label-C5k308Ss.js";import"./index-DaCk7tY-.js";import"./index-DgufeG-1.js";import"./Text-BgOY5gTt.js";import"./addCustomCSSWithScoping-DJgtY14Y.js";import"./index-BQ73vKGB.js";import"./index-pRRfesa_.js";import"./BusyIndicator-DpBDtyrv.js";import"./index-C1yRVqRl.js";import"./index-DZyogJjo.js";import"./AvatarSize-BceVhWoP.js";import"./employee-Dre3WUSG.js";import"./index-DtW4jgUQ.js";import"./ValueState-Bg0UWejw.js";import"./i18n-defaults-CoZOvFer.js";import"./index-CegvHMDS.js";import"./Dialog-BNz6iBJ1.js";import"./index-BJJjzqf0.js";import"./index-DFqCSedi.js";function i(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:l}),`
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
