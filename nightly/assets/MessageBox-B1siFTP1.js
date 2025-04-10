import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-B5Ip8tK9.js";import{M as p,C as t}from"./index-BvqoMzkp.js";import"./index-WB2XAxZ3.js";import"./index-BbscQeIv.js";import{C as m}from"./ControlsWithNote-CYbdH1Zp.js";import{D as c}from"./DocsHeader-f8YIaeqb.js";import{F as a}from"./CommandsAndQueries-B5GSrUPG.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-C1L07-tE.js";import{C as l,D as s,W as d}from"./MessageBox.stories-tx4E4AVW.js";import"./iframe-CQI_YO8A.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-BvNWHM6A.js";import"./CustomElementsScope-lRvT7iCm.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-COW9sgS-.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-Cx68SyXj.js";import"./parameters-bundle.css-BLEjIEH9.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BSX3YpE0.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-B8cpOtV2.js";import"./decline-B3prtgTL.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-C2QpdGW_.js";import"./information-DpRbDwJs.js";import"./sys-enter-2-BNMrwyXi.js";import"./sys-enter-2-38y2ESjX.js";import"./alert-oRgA-QL-.js";import"./TagDesign-Ga50IS6u.js";import"./utils-7pz-UjyQ.js";import"./main-DXdDxF5b.js";import"./index-C8MrfO_3.js";import"./Tag-FveMH3pg.js";import"./sys-help-2-DtkETXXa.js";import"./index-BgcTZP3t.js";import"./Link-Aflf_nDA.js";import"./index-CkquY_70.js";import"./Popover-B5iz04rB.js";import"./PopupsCommon.css-Cwh_2soo.js";import"./FocusableElements-B2W9U87f.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-ClsBPvBy.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./copy-CihNYBWc.js";import"./copy-gHwufZZP.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-lIiVb8Ys.js";import"./index-BwqFCqzu.js";import"./I18nStore-C3xHSFao.js";import"./useStylesheet-N7C2bzZq.js";import"./index-CRT1e2Cp.js";import"./index-COG6YSxr.js";import"./Label-CzWydTHE.js";import"./index-CefQb58Z.js";import"./index-BxL7GqHK.js";import"./Text-DKB2PakJ.js";import"./preview-DilTqjQn.js";import"./DocsRenderer-CFRXHY34-PokkMZB9.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-CzgbjJA9.js";import"./index-DlkEG479.js";import"./BusyIndicator-DTKZVX1f.js";import"./index-JrV9twbC.js";import"./index-DGjbv2L7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bi9EDez9.js";import"./index-zVP4lNyd.js";import"./ValueState-Bg0UWejw.js";import"./i18n-defaults-D9IRU8Fs.js";import"./index-DS0O5KIJ.js";import"./Dialog-D-Z-sDmC.js";import"./index-Dbsbfh9e.js";import"./index-HjnsKsTs.js";function i(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:l}),`
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
