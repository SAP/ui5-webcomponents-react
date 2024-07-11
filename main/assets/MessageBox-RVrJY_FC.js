import{j as o}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import{useMDXComponents as r}from"./index-yodfxRVR.js";import{M as p,C as t}from"./index-Bf1c7Mt6.js";import"./index-DXr0vy18.js";import{C as m}from"./ControlsWithNote-BKkTUkpj.js";import{D as c}from"./DocsHeader-BXj47gnE.js";import{F as a}from"./CommandsAndQueries-C0rRpFD_.js";import"./index-BQ1WsyJB.js";import"./WrappingType-CW8URInd.js";import{C as l,D as i,W as d}from"./MessageBox.stories-UYJMgxk9.js";import"./iframe-BwxJ3pXh.js";import"../sb-preview/runtime.js";import"./index-BLtMylri.js";import"./_baseForOwn-DusBTQ6O.js";import"./mapValues-DfqGXSk1.js";import"./_baseUniq-BpWYsmmS.js";import"./index-Cagd9BgA.js";import"./index-DrFu-skq.js";import"./withWebComponent-DykTwaBJ.js";import"./utils-BXNPXA0w.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CEPDwMcb.js";import"./decline-PQHY0vmQ.js";import"./Icon-C1aVUqaK.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-Pg2MF6OO.js";import"./parameters-bundle.css-BFbT_feV.js";import"./i18n-defaults-4yB5uAXJ.js";import"./information-s0rUc520.js";import"./alert-B5x9ZRdn.js";import"./class-map-BBkLNtsu.js";import"./Button-gEiq340s.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-Ddp6Qu_n.js";import"./TagDesign-Dou_yO3g.js";import"./utils-CufwspCM.js";import"./main-CzLLrZqh.js";import"./index-BvLw7F-u.js";import"./Tag-BkeKwJ-5.js";import"./sys-help-2-CnqpxX4c.js";import"./index-BQmRbu3J.js";import"./Popover-xb-dB4fv.js";import"./PopupsCommon.css-BS0HwvId.js";import"./getEffectiveScrollbarStyle-C7TfqF8H.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CwA30WlK.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CP3POd5N.js";import"./BrowserScrollbar.css-3d9vQOhG.js";import"./index-CobuMNAm.js";import"./Link-DvVq2Sbg.js";import"./chunk-HLWAVYOI-yOl12oZX.js";import"./client-CM2XqZNc.js";import"./copy-CR8fi4tI.js";import"./copy-CIslHIHM.js";import"./index-Did8UXWE.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BB85D3ff.js";import"./index-BsDgV4lW.js";import"./I18nStore-DkMZE6H0.js";import"./useIsomorphicId-8WwglsiH.js";import"./GitHub-Mark-08X1RYCA.js";import"./TableOfContent-bVo8HMe2.js";import"./index-DUR8esmO.js";import"./Label-Cn8Z-EZA.js";import"./index-DXLJS-Jo.js";import"./index-CVvdPFjH.js";import"./addCustomCSSWithScoping-CP2Nptdn.js";import"./index-D-YjU-fH.js";import"./index-DWEk247T.js";import"./index-DvQmjdp3.js";import"./Avatar-CTYNbiCX.js";import"./employee-CVOZDo5u.js";import"./index-bokD1XWO.js";import"./Title-B8CZCSNg.js";import"./ValueState-Bg0UWejw.js";import"./i18n-defaults-Cq32WUv5.js";import"./index-Chbb80RJ.js";import"./Dialog-KG2OBlTm.js";import"./index-DNSny9VS.js";import"./index-DSr8imlt.js";function s(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:l}),`
`,o.jsx(c,{}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"example",children:"Example"}),`
`,o.jsx(t,{of:i}),`
`,o.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(m,{of:i}),`
`,o.jsx(n.h2,{id:"opening-and-closing-messageboxes",children:"Opening and Closing MessageBoxes"}),`
`,o.jsxs(n.p,{children:["Unlike ",o.jsx(n.code,{children:"Popovers"})," or ",o.jsx(n.code,{children:"Dialogs"}),", ",o.jsx(n.code,{children:"MessageBoxes"})," do not need to be provided with a ",o.jsx(n.code,{children:"ref"})," to be opened or closed. Instead, the ",o.jsx(n.code,{children:"open"})," prop can be used for this."]}),`
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
`,o.jsxs(n.p,{children:["To add some logic to the respective actions you can use ",o.jsx(n.code,{children:"event.detail.action"})," inside ",o.jsx(n.code,{children:"onClose"})," which contains the name of the clicked action."]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-jsx",children:`const MessageBoxComponent = () => {
  const [open, setOpen] = useState(false);
  const onButtonClick = () => {
    setOpen(true);
  };
  const handleClose = (event) => {
    if (event.detail.action === MessageBoxAction.OK) {
      // do something on "Ok" button click
    } else if (event.detail.action === 'Custom Action') {
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
`,o.jsx(a,{})]})}function zo(e={}){const{wrapper:n}={...r(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(s,{...e})}):s(e)}export{zo as default};
