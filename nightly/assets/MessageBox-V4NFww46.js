import{j as o}from"./jsx-runtime-D6fbYt3N.js";import{useMDXComponents as r}from"./index-DyCphG7h.js";import{ae as p,af as t}from"./index-CP1cdnr2.js";import"./index-CCF_Nqfq.js";import"./index-C9yjNDam.js";import{C as m}from"./ControlsWithNote-CjsoNJ36.js";import{D as c}from"./DocsHeader-BrS3hH40.js";import{F as a}from"./CommandsAndQueries-UdEdT6P-.js";import"./index-DysCNOs_.js";import"./WrappingType-CW8URInd.js";import"./Title-CfsRC4A5.js";import{C as l,D as s,W as d}from"./MessageBox.stories-Cb-aULfU.js";import"./iframe-BRuL0-s8.js";import"../sb-preview/runtime.js";import"./index-C4cLd1FO.js";import"./index-BcsOxL0D.js";import"./index-DrFu-skq.js";import"./withWebComponent-De1aKRdZ.js";import"./utils-D0KbkLTK.js";import"./useIsomorphicLayoutEffect-m1Y1SyRb.js";import"./slot-_4yKMUwC.js";import"./event-BX8i4Y_x.js";import"./i18n-DEVDpFvK.js";import"./decline-BQlFLB9d.js";import"./Icon-D5-_6Id1.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-R51uC6BG.js";import"./i18n-defaults-neJWcM66.js";import"./information-jop4MMmq.js";import"./alert-DvgF7qhQ.js";import"./class-map-Bnbjx3OQ.js";import"./Button-KJt5TdaB.js";import"./AriaLabelHelper-C5uDZewF.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BtcFvs45.js";import"./i18n-defaults-CMHHS2wK.js";import"./TagDesign-Dou_yO3g.js";import"./utils-CJ6lKsG5.js";import"./main-Dcm2jhNK.js";import"./index-5MeDKPL8.js";import"./Tag-MITF22Wo.js";import"./sys-help-2-dTYFqJDl.js";import"./index-RaHuZLhN.js";import"./Popover-CjT0D3fA.js";import"./PopupsCommon.css-Bz-EF7PV.js";import"./FocusableElements-CRBMDNv2.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BehhMu6Y.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-D6VK90q7.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-ARMOpZ_f.js";import"./Link-Dgxh_lXY.js";import"./chunk-NUUEMKO5-CuNMgEsK.js";import"./client-CqEfiX9M.js";import"./copy-DbIR3NTj.js";import"./copy-DL61w25d.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DLtQKbjK.js";import"./TableOfContent-DRym89KV.js";import"./index-DWFED4jC.js";import"./I18nStore-QcXEI0Jp.js";import"./useStylesheet-9EPR2ucC.js";import"./index-c-ui4WSs.js";import"./index-D2qI6nMR.js";import"./Label-VsV_UpQE.js";import"./index-BwHAVSFf.js";import"./index-ZkmNu-JV.js";import"./addCustomCSSWithScoping-BPWKraku.js";import"./index-CIk6P_fC.js";import"./BusyIndicator-DW1-q5Ls.js";import"./index-CAmAWMmr.js";import"./index-D8X14Ybw.js";import"./Avatar-Kl9ImEjS.js";import"./employee-BzTDAMVi.js";import"./index-C3VzTfmi.js";import"./ValueState-Bg0UWejw.js";import"./i18n-defaults-DRf_ur_y.js";import"./index-BbqBqFIY.js";import"./Dialog-DUHeHLP-.js";import"./index-D8ZB43Gf.js";import"./index-DIy9HO5V.js";function i(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:l}),`
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
`,o.jsx(a,{})]})}function qo(e={}){const{wrapper:n}={...r(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(i,{...e})}):i(e)}export{qo as default};
