import{j as o}from"./useIsomorphicLayoutEffect-BDy32gDd.js";import{useMDXComponents as r}from"./index-D3szj05g.js";import{M as p,C as t}from"./index-09hDp6L5.js";import"./index-9tXoQmF3.js";import{C as m}from"./ControlsWithNote-CIcnBpV0.js";import{D as c}from"./DocsHeader-CMwJMYgF.js";import{F as a}from"./CommandsAndQueries-CBaXIS_z.js";import"./index-ClU-Tc1p.js";import"./WrappingType-CW8URInd.js";import{C as l,D as s,W as d}from"./MessageBox.stories-BT3IyYSn.js";import"./iframe-BZrRFXFz.js";import"../sb-preview/runtime.js";import"./index-C3ZJCerc.js";import"./_baseForOwn-CS3BKc8p.js";import"./mapValues-DmWmqx7o.js";import"./_baseUniq-DGAWXpCf.js";import"./index-BRTKD46C.js";import"./index-DrFu-skq.js";import"./withWebComponent-CPW0iYAf.js";import"./utils-B4B9qFe5.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-shm5Q6c6.js";import"./decline-P6ltvR0I.js";import"./Icon-BIxZr4TA.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-BCPYWAh1.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CEQaAj6E.js";import"./information-B1l_cM6v.js";import"./alert-C2BbHj1C.js";import"./class-map-CQfLTfub.js";import"./Button-BsDFAdhY.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-DRoh8QZU.js";import"./TagDesign-Dou_yO3g.js";import"./utils-N016ZRyJ.js";import"./main-BPTHlokf.js";import"./index-DXi_is5n.js";import"./Tag-DtnL08Wh.js";import"./sys-help-2-BBmaRS7Q.js";import"./index-CHMYHF9d.js";import"./Popover-C804Stt9.js";import"./PopupsCommon.css-C-wswpgh.js";import"./getEffectiveScrollbarStyle-BsLHc2Qj.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-TnLd8hOy.js";import"./MediaRange-Bnzt26Xb.js";import"./Title-qjobRWCv.js";import"./style-map-Do0KrzH5.js";import"./BrowserScrollbar.css-Cvy61GCB.js";import"./index-BZhAWsou.js";import"./Link-B2-sZImF.js";import"./chunk-HLWAVYOI-C6td9IEi.js";import"./client-B23sEKGq.js";import"./copy-CGC9ELhw.js";import"./copy-alp5yJPT.js";import"./index-DG6x88aM.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-Dw38joME.js";import"./index-BeBqIGFU.js";import"./I18nStore-e1UZgw_b.js";import"./GitHub-Mark-9wNGlhWh.js";import"./TableOfContent-CyTKjbA1.js";import"./index-CWEkIPVL.js";import"./Label-BcgafC0L.js";import"./index-DCpCJrjS.js";import"./index-CMZ1DBSA.js";import"./addCustomCSSWithScoping-BIehpVOD.js";import"./index-D0F_bbvr.js";import"./BusyIndicator-C9Q0CDgp.js";import"./index-BMCOa5Px.js";import"./index-BCT1urH2.js";import"./Avatar-DrCFK53V.js";import"./employee-Bjf4oLVT.js";import"./index-Z6iak9p_.js";import"./ValueState-Bg0UWejw.js";import"./i18n-defaults-DsJMQecB.js";import"./index-BlaH46kG.js";import"./Dialog-BhrO_1Jd.js";import"./index-CGFVmXMg.js";import"./index-CIbjKDLQ.js";function i(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:l}),`
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
