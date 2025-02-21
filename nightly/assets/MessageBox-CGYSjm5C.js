import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-zdXs1Etw.js";import{M as p,C as t}from"./index-CHbnX5Nd.js";import"./index-CCpUMy6k.js";import"./index-DZ9w-IIc.js";import{C as m}from"./ControlsWithNote-BmAubNNt.js";import{D as c}from"./DocsHeader-B_dwpMev.js";import{F as a}from"./CommandsAndQueries-BUzyErj8.js";import"./index-C--kS4iy.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BDxE6jlm.js";import{C as l,D as s,W as d}from"./MessageBox.stories-BFxw8el9.js";import"./iframe-ifiTus_3.js";import"./index-DJcrgQOn.js";import"./index-B-pEBbkX.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-28PG-PhA.js";import"./CustomElementsScope-D32jWln6.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-BJcyuOZ-.js";import"./Keys-BF9NgJbR.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-BA-Z5X-C.js";import"./parameters-bundle.css-Ct2Rzfjz.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DBaa6sR8.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-DIUd5-_G.js";import"./decline-B-7r8h1x.js";import"./i18n-defaults-u2_1ijdO.js";import"./information-DKw70c9J.js";import"./information-CDoXjDdi.js";import"./sys-enter-2-DBhtllGR.js";import"./sys-enter-2-BRVWDnOR.js";import"./TagDesign-Ga50IS6u.js";import"./utils-Cajikij1.js";import"./main-CiDzSAAF.js";import"./index-Bt1-BK1s.js";import"./Tag-B3qkhm6Z.js";import"./sys-help-2-BfevxhM3.js";import"./index-CBa4g496.js";import"./Link-wJsXaU9N.js";import"./index-BvrMpJPf.js";import"./Popover-vrquhgcM.js";import"./PopupsCommon.css-CFYCSkNV.js";import"./FocusableElements-Clvab7V1.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-C5DtzTqb.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-p1NviWee.js";import"./react-18-CYWbi7Zg.js";import"./copy-CiJ_0mNd.js";import"./copy-C343vs9R.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-Bzt3eeAv.js";import"./index-D3-sr5K6.js";import"./I18nStore-CY8kcvKW.js";import"./useStylesheet-B5S_P2i6.js";import"./index-DTnh-9zO.js";import"./index-7k5z3473.js";import"./Label-D_KOrpSt.js";import"./index-BERigoy7.js";import"./index-u200OysQ.js";import"./Text-BCbUq7g2.js";import"./addCustomCSSWithScoping-Cml1L90m.js";import"./index-BFa74pi2.js";import"./BusyIndicator-BZvDM_dq.js";import"./index-DeJkSj18.js";import"./index-BaltLl-X.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CmJW4hiT.js";import"./index-CBwD6mmF.js";import"./ValueState-Bg0UWejw.js";import"./i18n-defaults-D2m6uH24.js";import"./index-C1a5x492.js";import"./Dialog-xFDT8izC.js";import"./index-BIn0gi5T.js";import"./index-pRZxLfoI.js";function i(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:l}),`
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
