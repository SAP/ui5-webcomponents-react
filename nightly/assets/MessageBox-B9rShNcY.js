import{j as o}from"./useIsomorphicLayoutEffect-DOdM5Kf8.js";import{useMDXComponents as r}from"./index-BrB9znxi.js";import{ae as p,af as t}from"./index-DgR7kD53.js";import"./index-DG5wIRS0.js";import{C as m}from"./ControlsWithNote-BKpo5Vt_.js";import{D as c}from"./DocsHeader-DkVjIC5D.js";import{F as a}from"./CommandsAndQueries-D01TK3Jo.js";import"./index-CMKoANNR.js";import"./WrappingType-CW8URInd.js";import{C as l,D as s,W as d}from"./MessageBox.stories-BwEQ9sH-.js";import"./iframe-B0gnQx9g.js";import"../sb-preview/runtime.js";import"./index-CJugYjqS.js";import"./_baseUniq-qZQRvdR-.js";import"./_overArg-Mt7ZKpko.js";import"./_baseAssignValue-680W1HJy.js";import"./_getPrototype-CvhAe9S0.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./withWebComponent-Bvd6GsxT.js";import"./utils-B91Jjtng.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-DyvSagx7.js";import"./decline-DI0qcVtv.js";import"./Icon-iJ5XkFd9.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-BJMHgp7g.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CEQaAj6E.js";import"./information-B954FDjj.js";import"./alert-XemOvmut.js";import"./class-map-izHjq-7_.js";import"./Button-DFUJoV2f.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-CcfWlpG-.js";import"./TagDesign-Dou_yO3g.js";import"./utils-6bzgVNvU.js";import"./main-BPTHlokf.js";import"./index-Ctf0nu10.js";import"./Tag-BfVSSKMv.js";import"./sys-help-2-DL9x_pH7.js";import"./index-B8Ao9AF9.js";import"./Popover-BQ0u1cZY.js";import"./PopupsCommon.css-DYqWK7NT.js";import"./getEffectiveScrollbarStyle-B3XuleRv.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DLtaLMaj.js";import"./MediaRange-Bnzt26Xb.js";import"./Title-CLsYVLHg.js";import"./style-map-CJSYxNSP.js";import"./BrowserScrollbar.css-D0ty1KEr.js";import"./index-wU7rnEKO.js";import"./Link-DSM5xQ_2.js";import"./chunk-HLWAVYOI-DLoljdqs.js";import"./client-DpDvupH-.js";import"./copy-0vVSQk-U.js";import"./copy-BHpcHI8d.js";import"./index-DNwR1bnO.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BdPJGR6W.js";import"./index-Ch5aExGr.js";import"./I18nStore-qPt-PKca.js";import"./GitHub-Mark-DCDQJZl8.js";import"./TableOfContent-DYSF1A7E.js";import"./index-TBbxbPqC.js";import"./Label-CuT9KatJ.js";import"./index-CQthuhK-.js";import"./index-DJSoW-8A.js";import"./addCustomCSSWithScoping-BIONmqoK.js";import"./index-D4-ksBQe.js";import"./BusyIndicator-Cx-S6BZJ.js";import"./index-DXgOcH1d.js";import"./index-CiBowirN.js";import"./Avatar-DBJmGUf1.js";import"./employee-CB0X-WXT.js";import"./index-CVpq8flu.js";import"./ValueState-Bg0UWejw.js";import"./i18n-defaults-CN8GwttT.js";import"./index-mJp2-__G.js";import"./Dialog-ChhXL7p5.js";import"./index-CE22HMDN.js";import"./index-BHhWaCvR.js";function i(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:l}),`
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
