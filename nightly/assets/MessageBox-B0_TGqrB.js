import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-zdXs1Etw.js";import{M as p,C as t}from"./index-gj8_CuD2.js";import"./index-BSyUicdy.js";import"./index-p0g9WRuw.js";import{C as m}from"./ControlsWithNote-B6R51w4_.js";import{D as c}from"./DocsHeader-DWonkNmL.js";import{F as a}from"./CommandsAndQueries-SpSNH3NH.js";import"./index-C--kS4iy.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BOwCdWYi.js";import{C as l,D as s,W as d}from"./MessageBox.stories-AC-Z7PuG.js";import"./iframe-u-x51KPK.js";import"./index-DJcrgQOn.js";import"./index-B-pEBbkX.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-D97XV8sh.js";import"./EventProvider-ChtD9rRX.js";import"./ManagedStyles-BCO68z9u.js";import"./CustomElementsScope-DUj-UV8m.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-ByA1SsYZ.js";import"./Keys-DjLYsotv.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-BCDdExWr.js";import"./parameters-bundle.css-Ct2Rzfjz.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-CYRaZPq9.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-CmQf_FFT.js";import"./decline-B6jD48Ye.js";import"./i18n-defaults-DCrxyi3I.js";import"./information-DV2AGhUW.js";import"./information-B_fD0mel.js";import"./sys-enter-2-8yiHyFC4.js";import"./sys-enter-2-3FJ7denB.js";import"./withWebComponent-BfnST9Sw.js";import"./TagDesign-Ga50IS6u.js";import"./utils-qlvtd81G.js";import"./main-CiDzSAAF.js";import"./index-w8-6vkV6.js";import"./Tag-DZx-ABN6.js";import"./sys-help-2-2925v-Sa.js";import"./index-DygVgSN6.js";import"./Link-DksYOIa5.js";import"./index-BtffljRr.js";import"./Popover-RfvVyLvj.js";import"./PopupsCommon.css-CWTNNGZS.js";import"./FocusableElements-GjzXbghM.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-pRnz8BGg.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-Brj3_5R6.js";import"./react-18-CYWbi7Zg.js";import"./copy-BHbbPm9C.js";import"./copy-DTrJKJyj.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-Bzt3eeAv.js";import"./index-DAWhuSyo.js";import"./I18nStore-SPUtoouk.js";import"./useStylesheet-D5Lehdk0.js";import"./index-XkaT5vRD.js";import"./index-BBE5vJrD.js";import"./Label-B_yE8MRJ.js";import"./index-Dno20kSL.js";import"./index-B5cMioGG.js";import"./Text-DVHHInte.js";import"./addCustomCSSWithScoping-CDsicyAT.js";import"./index-aJHEJiAx.js";import"./BusyIndicator-CjR-E_fs.js";import"./index-BsfhEIY9.js";import"./index-C0zzG69g.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Boc3Tmse.js";import"./index-UaaEtoXd.js";import"./ValueState-Bg0UWejw.js";import"./i18n-defaults-DYqo1pyk.js";import"./index-Bho4Sedd.js";import"./Dialog-uPNAE_TY.js";import"./index-DEWCPgAg.js";import"./index-C73hJAMc.js";function i(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:l}),`
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
`,o.jsx(a,{})]})}function Jo(e={}){const{wrapper:n}={...r(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(i,{...e})}):i(e)}export{Jo as default};
