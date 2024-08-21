import{j as o}from"./useIsomorphicLayoutEffect-7J8kFyWS.js";import{useMDXComponents as r}from"./index-CcnH5Kt0.js";import{ae as p,af as t}from"./index-B-AngSPK.js";import"./index-Ch-3pTRx.js";import{C as m}from"./ControlsWithNote-CpOEJXkb.js";import{D as c}from"./DocsHeader-DYY-sRhn.js";import{F as a}from"./CommandsAndQueries-BSQYQ84a.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-CPfyDR0N.js";import{C as l,D as s,W as d}from"./MessageBox.stories-luIgHkb2.js";import"./iframe-X6OaFm5F.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-BBslp21L.js";import"./_overArg-Der2MB70.js";import"./_baseAssignValue-PZ39NPQP.js";import"./_getPrototype-DY0Wt4dR.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./withWebComponent-BleJzMHW.js";import"./utils-CbJpFptd.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-KW-CiiAm.js";import"./decline-DaNSpODU.js";import"./Icon-cdsHodQj.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-BI-0aVN0.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-Bqpi1ZNd.js";import"./alert-Dp7xx3y-.js";import"./class-map-YSvXIJay.js";import"./Button-CzQBqyV3.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-BcJ5FyXk.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DiipWok5.js";import"./main-BPTHlokf.js";import"./index-DExzD3yc.js";import"./Tag-slJw32D6.js";import"./sys-help-2-CqKkuKIb.js";import"./index-Cp80_wRL.js";import"./Popover-Ct8sSLXj.js";import"./PopupsCommon.css-CsQvfR_e.js";import"./getEffectiveScrollbarStyle-rfURrg3V.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BHDEwerY.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-d6w1xEQV.js";import"./BrowserScrollbar.css-BhKYIigu.js";import"./index-BXhdr5Bu.js";import"./Link-CBIZg36-.js";import"./chunk-HLWAVYOI-DiXkNbzq.js";import"./client-BZNFO7bv.js";import"./copy-DUwpd8zK.js";import"./copy-DTSjPlEM.js";import"./index-CLe8_13Z.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BgRQTyXM.js";import"./index-BOF0KrAg.js";import"./I18nStore-CNuzcpPo.js";import"./GitHub-Mark-CQnSG1yZ.js";import"./TableOfContent-B6vxzEs5.js";import"./index-DErfyCMe.js";import"./Label-T0qa9MPE.js";import"./index-DblZcT2P.js";import"./index-_qk-Qxu8.js";import"./addCustomCSSWithScoping-_XdCpGk6.js";import"./index-gsw8a_fJ.js";import"./BusyIndicator-BjQNe4BH.js";import"./index-prJb6WTu.js";import"./index-Cbf91Cs_.js";import"./Avatar-DNQIjfCz.js";import"./employee-DbTd0Cfn.js";import"./index-CYu7XaE1.js";import"./ValueState-Bg0UWejw.js";import"./i18n-defaults-CCkZO5TM.js";import"./index-Dwl7-riL.js";import"./Dialog-3AY38fjT.js";import"./index-BDrst-wa.js";import"./index-BV56A1ZX.js";function i(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:l}),`
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
