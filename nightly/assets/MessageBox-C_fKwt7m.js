import{j as o}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as r}from"./index-ChplMHeC.js";import{M as p,C as t}from"./index-B7Y30QpB.js";import"./index-DuvBkkWn.js";import"./index-DbKmUOdi.js";import{C as m}from"./ControlsWithNote-CoGWEYsP.js";import{D as c}from"./DocsHeader-BHjEcH7_.js";import{F as a}from"./CommandsAndQueries-D21qUJVs.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-Bnj9fnoW.js";import{C as l,D as s,W as d}from"./MessageBox.stories-BVc5urkv.js";import"./iframe-_R4aFT0D.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-DIBLIPif.js";import"./utils-DKbukTmU.js";import"./useIsomorphicLayoutEffect-BuGJanM4.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./Button-BYnClEc8.js";import"./Keys-Df3IBHp2.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-DVlQjg5y.js";import"./parameters-bundle.css-C_3tvNHF.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-Cq5L8-91.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-Cyg2J0QB.js";import"./decline-CkvCC5iV.js";import"./i18n-defaults-CUGG7UPM.js";import"./information-aOc0GfxQ.js";import"./information-B7lIx4H4.js";import"./sys-enter-2-Cn8hrStw.js";import"./sys-enter-2-DXus7nkZ.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DU-TBzWZ.js";import"./main-rGL2KZiJ.js";import"./index-KpIA7GSc.js";import"./Tag-MzUi0FzG.js";import"./sys-help-2-COroZqns.js";import"./index-DoDMd5jQ.js";import"./Link-Cr8wHvq2.js";import"./index-CkeY3nPI.js";import"./Popover-DWH7u18I.js";import"./PopupsCommon.css-CLlsUzpB.js";import"./FocusableElements-Da8ni1pm.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Bn2o07mV.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-BNtuNZ5T.js";import"./client-lwzJIAjg.js";import"./copy-Bnrg9YBK.js";import"./copy-C92HBupN.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-Cpjnqi-b.js";import"./I18nStore-DlsSjWbm.js";import"./useStylesheet-BO3w5Xt1.js";import"./index-D9YMktiz.js";import"./index-Dbb581IU.js";import"./Label-DMEL6fX-.js";import"./index-Pj1kAMZ-.js";import"./index-Cs_Ztk0v.js";import"./Text-DZiuAp7s.js";import"./addCustomCSSWithScoping-Dkzu7Yq-.js";import"./index-B5N8tz-A.js";import"./index-D1TSxMr6.js";import"./BusyIndicator-CgjmT3Fu.js";import"./index-CKTWv80J.js";import"./index-DN8baC31.js";import"./AvatarSize-BceVhWoP.js";import"./employee-DObyMRaP.js";import"./index-itmeazOo.js";import"./ValueState-Bg0UWejw.js";import"./i18n-defaults-dxEyDKPz.js";import"./index-C8-C5GHs.js";import"./Dialog-DUUAZhby.js";import"./index-D_w2Lc5B.js";import"./index-CFoBMh9D.js";function i(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:l}),`
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
