import{j as o}from"./useIsomorphicLayoutEffect-kTr5k6y8.js";import{useMDXComponents as r}from"./index-yodfxRVR.js";import{M as p,C as e}from"./index-DmkH-BTr.js";import"./index-OdvdSMwT.js";import{C as m}from"./ControlsWithNote-qPkLYbrM.js";import{D as c}from"./DocsHeader-1Z-PgoyB.js";import{F as a}from"./CommandsAndQueries-D6Lk-cRz.js";import"./index-BQ1WsyJB.js";import"./WrappingType-CW8URInd.js";import{C as l,D as i,W as d}from"./MessageBox.stories-0UaJAL1h.js";import"./iframe-BSNFX450.js";import"../sb-preview/runtime.js";import"./index-BLtMylri.js";import"./_baseForOwn-DusBTQ6O.js";import"./mapValues-DfqGXSk1.js";import"./_baseUniq-BpWYsmmS.js";import"./index-Cagd9BgA.js";import"./index-DrFu-skq.js";import"./UI5Element-CpDKvy14.js";import"./CustomElementsScopeUtils-CUyxdJhU.js";import"./withWebComponent-BS5KmJ8y.js";import"./utils-BKwn1mod.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BnWtnlV0.js";import"./decline-U1USmITW.js";import"./Icons-CXhWYR-U.js";import"./i18n-defaults-eVMsPoDe.js";import"./information-Tp9XErmR.js";import"./alert-CzwHodYh.js";import"./class-map-C2xEFFE_.js";import"./if-defined-fOOg8zCW.js";import"./Icon-B_ypp_jl.js";import"./Device-RcFucVeJ.js";import"./Keys-pFVWso__.js";import"./parameters-bundle.css-BFbT_feV.js";import"./Button-BNnZDQ19.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-CTWfTbaq.js";import"./TagDesign-Dou_yO3g.js";import"./utils-D-tdANCf.js";import"./main-CzLLrZqh.js";import"./index-DhCHwPtd.js";import"./Tag-CEZ3zqRQ.js";import"./sys-help-2-BHmG1jpg.js";import"./index-7aWEaJDN.js";import"./Popover-qZ8usbia.js";import"./PopupsCommon.css-Dy04e_xP.js";import"./FocusableElements-Bv7oiNdI.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DrydYuxf.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BYlmazPT.js";import"./BrowserScrollbar.css-BHkuoGam.js";import"./index-CIJQg1Ki.js";import"./Link-qJoZgSbT.js";import"./chunk-HLWAVYOI-C5dzl8Li.js";import"./client-CM2XqZNc.js";import"./copy-BAvEiGLT.js";import"./copy-SEOB1pIL.js";import"./index-DrLbuP9z.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-CLr2-W5J.js";import"./index-DxXMIf9X.js";import"./I18nStore-CUUv0VZ2.js";import"./ModalsContext-BoMRhsMb.js";import"./useIsomorphicId-8WwglsiH.js";import"./GitHub-Mark-D3Wkw5er.js";import"./TableOfContent-CKdjdhd9.js";import"./index-CCsDBC37.js";import"./Label-q6_PzA5e.js";import"./index-Bfa5x2b5.js";import"./index-ByRYBZQz.js";import"./addCustomCSSWithScoping-CgvYqGaR.js";import"./index-CN3pSlNl.js";import"./index-BNQ1hpRL.js";import"./index-bpjiqcBd.js";import"./Avatar-3swUBYi8.js";import"./employee-BYHCCK7_.js";import"./index-DLosum7a.js";import"./Title-B_zpGxqG.js";import"./ValueState-Bg0UWejw.js";import"./i18n-defaults-IgB10zhP.js";import"./index-1Y9ZQ24t.js";import"./Dialog-D9IwuRsq.js";import"./index-DITg_8gn.js";import"./index-D4amESi-.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:l}),`
`,o.jsx(c,{}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"example",children:"Example"}),`
`,o.jsx(e,{of:i}),`
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
`,o.jsx(e,{of:d}),`
`,o.jsx(a,{})]})}function Zo(t={}){const{wrapper:n}={...r(),...t.components};return n?o.jsx(n,{...t,children:o.jsx(s,{...t})}):s(t)}export{Zo as default};
