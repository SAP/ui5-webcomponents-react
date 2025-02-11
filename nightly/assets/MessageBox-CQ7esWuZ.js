import{j as o}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as r}from"./index-ChplMHeC.js";import{M as p,C as t}from"./index-CUKrsg70.js";import"./index-BB5moKBb.js";import"./index-DWEXEIyt.js";import{C as m}from"./ControlsWithNote-BrG2apEg.js";import{D as c}from"./DocsHeader-CN747YVW.js";import{F as a}from"./CommandsAndQueries-Dl6FkOAj.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-BR0HRFMn.js";import{C as l,D as s,W as d}from"./MessageBox.stories-C9B11Ca7.js";import"./iframe-bgOVjlir.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./jsx-runtime-DJfzgo3Z.js";import"./CustomElementsScope-Cnxnu_QK.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-ClmCy2Cm.js";import"./Keys-Can65e7H.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-9zGTEZoy.js";import"./parameters-bundle.css-3_Pq1j61.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BdH9fu8C.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-CjsTKlnu.js";import"./decline-CK9cTtHa.js";import"./i18n-defaults-CifGXSvE.js";import"./information-DJOHIqln.js";import"./information-ix6q05KE.js";import"./sys-enter-2-FqE9Jd9Z.js";import"./sys-enter-2-FVzsVtg3.js";import"./TagDesign-Dou_yO3g.js";import"./utils-RUpTJAr1.js";import"./main-CiDzSAAF.js";import"./index-CQ01seJN.js";import"./Tag-5S7Tw76M.js";import"./sys-help-2-Bc0SeYbg.js";import"./index-DhvWoo7_.js";import"./Link-BMGGPz7B.js";import"./index-K4JCeZsD.js";import"./Popover-ChT-u0ao.js";import"./PopupsCommon.css-_Z_CYCJm.js";import"./FocusableElements-BnnVWUNQ.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-C0NcOxBw.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-DLEuULsM.js";import"./client-lwzJIAjg.js";import"./copy-SwveN06M.js";import"./copy-BHzTzCpZ.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-DVcw1VdZ.js";import"./I18nStore-Ck_ZDoO_.js";import"./useStylesheet-D6kLlLz-.js";import"./index-q6568XuN.js";import"./index-BmN7WUzF.js";import"./Label-Cv3ZI2wV.js";import"./index-DGXqCTmO.js";import"./index-DSrRVUVn.js";import"./Text-Bdc-nFmb.js";import"./addCustomCSSWithScoping-e6wN0F3P.js";import"./index-BTrRnRp2.js";import"./BusyIndicator-D3N-k1mY.js";import"./index-Bur18C1c.js";import"./index-S7gxAvta.js";import"./AvatarSize-BceVhWoP.js";import"./employee-Bfg7DU9E.js";import"./index-D2XCxGrh.js";import"./ValueState-Bg0UWejw.js";import"./i18n-defaults-Ju5_TAzg.js";import"./index-DHbvQVx5.js";import"./Dialog-CLQZBkJ1.js";import"./index-B8vN9zcs.js";import"./index-CLDJ4mlq.js";function i(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:l}),`
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
