import{j as o}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as r}from"./index-CcnH5Kt0.js";import{ae as p,af as t}from"./index-_yeQ_S-9.js";import"./index-DTeI0hvp.js";import"./index-aAaeEP-L.js";import{C as m}from"./ControlsWithNote-BedT59DM.js";import{D as c}from"./DocsHeader-BEDC7Yok.js";import{F as a}from"./CommandsAndQueries-Bg3Yxewb.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-CbLKT2ZM.js";import{C as l,D as s,W as d}from"./MessageBox.stories-DT_OLLjI.js";import"./iframe-xb-Jn2d8.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./withWebComponent-m_Fq5lNf.js";import"./utils-DzvJSare.js";import"./useIsomorphicLayoutEffect-Dm78g2BF.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18n-DEVDpFvK.js";import"./decline-C1nyYXx8.js";import"./Icon-CqlVqIII.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-BOSi_lPd.js";import"./i18n-defaults-CzsryEvw.js";import"./information-BCemT9Q2.js";import"./alert-RTfmNTjg.js";import"./class-map-De2mf49U.js";import"./Button-D-clZqqQ.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-RVqvTAYx.js";import"./i18n-defaults-BOjDFSS8.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DR9Wm9jM.js";import"./main-r7D-Vqmb.js";import"./index-D1wQpcsi.js";import"./Tag-C7VVIUe2.js";import"./sys-help-2-TCPa0dFt.js";import"./index-DRQZYbIB.js";import"./Popover-CSyvOuD4.js";import"./PopupsCommon.css-C0UbsxGP.js";import"./FocusableElements-3aC5Xvwv.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DIO-YqVA.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-TzMr6uTh.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-Cg3b7YA_.js";import"./Link-CHy7h4h1.js";import"./chunk-NUUEMKO5-yqgJSSbQ.js";import"./client-BzooOYO_.js";import"./copy-Bps3bwPx.js";import"./copy-9aGvoyGQ.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-TNI-4ed_.js";import"./index-CfhJl0EN.js";import"./I18nStore-C2pCP-g5.js";import"./useStylesheet-DPBS0l4j.js";import"./index-DwKqG2yd.js";import"./index-BoCz3Ejb.js";import"./Label-CILeKjmV.js";import"./index-CFCIjETS.js";import"./index-DlCwds3V.js";import"./addCustomCSSWithScoping-D6Q9hDjm.js";import"./index-BKGkUclu.js";import"./BusyIndicator-DiGmt9EG.js";import"./index-DQ1nU61M.js";import"./index-BVLWJSIa.js";import"./Avatar-DQMXMvsK.js";import"./employee-q-Be_VIK.js";import"./index-8_GrwN1M.js";import"./ValueState-Bg0UWejw.js";import"./i18n-defaults-Bc5wpF8S.js";import"./index-y64W25Tf.js";import"./Dialog-w7klcLgB.js";import"./index-Dnt2M25B.js";import"./index-BVI8Mxx2.js";function i(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:l}),`
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
