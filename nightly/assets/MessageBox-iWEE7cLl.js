import{j as o}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{useMDXComponents as r}from"./index-CcnH5Kt0.js";import{ae as p,af as t}from"./index-COejnvpL.js";import"./index-DRfkeUYX.js";import{C as m}from"./ControlsWithNote-C3IMP4bq.js";import{D as c}from"./DocsHeader-5_7Xg_CH.js";import{F as a}from"./CommandsAndQueries-csBpDEqC.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-VVPV2V2E.js";import{C as l,D as s,W as d}from"./MessageBox.stories-OWREfEoK.js";import"./iframe-NZMCJ6Ha.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-DGDOfdbw.js";import"./_getPrototype-B0L0C3AT.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";import"./withWebComponent-6t4MTiZ-.js";import"./utils-DNCbgL6O.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BwSTHZvs.js";import"./decline-Chobtb_o.js";import"./Icon-CX51DRZ7.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-B1auRMLy.js";import"./parameters-bundle.css-P4kwt3kq.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-CqSTuHKy.js";import"./alert-B73TZsJE.js";import"./class-map-D9jLILSY.js";import"./Button-ein9a_YJ.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-sl2p4TZC.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DaZ1DVkg.js";import"./main-BPTHlokf.js";import"./index-Cm_tUheZ.js";import"./Tag-c1CyRsEh.js";import"./sys-help-2-7U7Pl5Aq.js";import"./index-vpkDktJu.js";import"./Popover-GyfEL2jk.js";import"./PopupsCommon.css-BGI8Fb7B.js";import"./getEffectiveScrollbarStyle-77nvIAYC.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BL_t98Y7.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CAZGB3vF.js";import"./BrowserScrollbar.css-BVuR1u6R.js";import"./index-B0scv0mR.js";import"./Link-CUceCK4r.js";import"./chunk-HLWAVYOI-CmRH-zCD.js";import"./client-BZNFO7bv.js";import"./copy-DHLQo4vt.js";import"./copy-CiUq4Sby.js";import"./index-DXbGRngL.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DKtOrKyD.js";import"./index-BJ8B3rVx.js";import"./I18nStore-BIJrl7SC.js";import"./GitHub-Mark-07DkmEp8.js";import"./TableOfContent-B7cg-o8h.js";import"./index-DW76Co1x.js";import"./Label-tm0HKFXd.js";import"./index-Byuai5Dz.js";import"./index-F_io_HrK.js";import"./addCustomCSSWithScoping-Cr3Tnfsf.js";import"./index-DJqlzZjw.js";import"./BusyIndicator-DZWv4Y44.js";import"./index-C73Y2rlh.js";import"./index-v2bCH09b.js";import"./Avatar-Dqp3bR5c.js";import"./employee-B_Kids1O.js";import"./index-BrgD2yob.js";import"./ValueState-Bg0UWejw.js";import"./i18n-defaults-BX478RQX.js";import"./index-Brt65Qac.js";import"./Dialog-CivsYkRJ.js";import"./index-C_Autpj5.js";import"./index-DNzGZa-l.js";function i(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:l}),`
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
`,o.jsx(a,{})]})}function zo(e={}){const{wrapper:n}={...r(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(i,{...e})}):i(e)}export{zo as default};
