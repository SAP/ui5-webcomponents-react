import{j as o}from"./useIsomorphicLayoutEffect-Dhma_bjk.js";import{useMDXComponents as r}from"./index-CcnH5Kt0.js";import{ae as p,af as t}from"./index-B-1a6k0v.js";import"./index-CGD6y5QJ.js";import"./index-Bezg6zKD.js";import{C as m}from"./ControlsWithNote-zT1FoODD.js";import{D as c}from"./DocsHeader-DYqnjWNq.js";import{F as a}from"./CommandsAndQueries-OaNRawAu.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-ZqK5PCI6.js";import{C as l,D as s,W as d}from"./MessageBox.stories-CQVPqaNa.js";import"./iframe-VZyvr0fH.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-DGDOfdbw.js";import"./_getPrototype-B0L0C3AT.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";import"./withWebComponent-DUIvHLMA.js";import"./utils-CKNAmS37.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-DMA-_yLC.js";import"./decline-CHk4a2e7.js";import"./Icon-C44BwzQ8.js";import"./Keys-D1SxbTOd.js";import"./parameters-bundle.css-Bga-3Zi8.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-Sy77r2nJ.js";import"./alert-cQZYHoWK.js";import"./class-map-BJErPj2t.js";import"./Button-CxQnwzDr.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BzCnTBef.js";import"./i18n-defaults-DTxNk1Ll.js";import"./TagDesign-Dou_yO3g.js";import"./utils-C4M9Gqbc.js";import"./main-C6oD7XT2.js";import"./index-D8yCSEP8.js";import"./Tag-CPIJx4VG.js";import"./sys-help-2-Bvq59Jti.js";import"./index-WEA3P0fF.js";import"./Popover-BePXU9v3.js";import"./PopupsCommon.css-DBrv9Ok7.js";import"./FocusableElements-19hFFt5Q.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-ufE0tBOz.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-Bd8TDVwu.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-DI2d1WHF.js";import"./Link-CiJW-swg.js";import"./chunk-HLWAVYOI-BV8hTK1B.js";import"./client-BZNFO7bv.js";import"./copy-CYHXqHWb.js";import"./copy-pca8p_zU.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-CnYostSV.js";import"./TableOfContent-J0xBpY2P.js";import"./index-15JG8Y5_.js";import"./I18nStore-B2w4xK_s.js";import"./useStylesheet-DcbwKAeb.js";import"./index-3WD7if5i.js";import"./index-D_wOg0B-.js";import"./Label-BAMwsHnp.js";import"./index-CF8fMoC4.js";import"./index-9j-aR15A.js";import"./addCustomCSSWithScoping-BRJo9-6E.js";import"./index-DhepUemJ.js";import"./BusyIndicator-BGYa7yRK.js";import"./index-BNERneIU.js";import"./index-4YU2sHPi.js";import"./Avatar-C5E79jBl.js";import"./employee-DWCutjal.js";import"./index-MconURP1.js";import"./ValueState-Bg0UWejw.js";import"./i18n-defaults-DMLFl-9E.js";import"./index-DKYGgsQz.js";import"./Dialog-C_-Hi_6c.js";import"./index-BjFL-9Jp.js";import"./index-B2JiavCR.js";function i(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:l}),`
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
