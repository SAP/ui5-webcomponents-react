import{j as o}from"./useIsomorphicLayoutEffect-kTr5k6y8.js";import{useMDXComponents as r}from"./index-yodfxRVR.js";import{M as p,C as t}from"./index-BnKJrDrT.js";import"./index-Dr767vWE.js";import{C as c}from"./ControlsWithNote-CmDlbeKT.js";import{D as m}from"./DocsHeader-CqqzRRy3.js";import{F as a}from"./CommandsAndQueries-DI5XyRZa.js";import"./index-BQ1WsyJB.js";import"./WrappingType-CW8URInd.js";import{C as l,D as s,W as d}from"./MessageBox.stories-By6PQr8I.js";import"./iframe-DSY2u4nw.js";import"../sb-preview/runtime.js";import"./index-BLtMylri.js";import"./_baseForOwn-DusBTQ6O.js";import"./mapValues-DfqGXSk1.js";import"./_baseUniq-BpWYsmmS.js";import"./index-Cagd9BgA.js";import"./index-DrFu-skq.js";import"./UI5Element-CpDKvy14.js";import"./CustomElementsScopeUtils-CUyxdJhU.js";import"./withWebComponent-BS5KmJ8y.js";import"./utils-BKwn1mod.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BnWtnlV0.js";import"./decline-U1USmITW.js";import"./Icons-CXhWYR-U.js";import"./i18n-defaults-eVMsPoDe.js";import"./information-Tp9XErmR.js";import"./alert-CzwHodYh.js";import"./class-map-C2xEFFE_.js";import"./if-defined-fOOg8zCW.js";import"./Icon-B_ypp_jl.js";import"./Device-RcFucVeJ.js";import"./Keys-pFVWso__.js";import"./parameters-bundle.css-BFbT_feV.js";import"./Button-BNnZDQ19.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-CTWfTbaq.js";import"./TagDesign-Dou_yO3g.js";import"./utils-cOAgcv71.js";import"./main-CzLLrZqh.js";import"./index-8cofChYn.js";import"./Tag-CEZ3zqRQ.js";import"./sys-help-2-BHmG1jpg.js";import"./index-CLvSIE45.js";import"./Popover-qZ8usbia.js";import"./PopupsCommon.css-Dy04e_xP.js";import"./FocusableElements-Bv7oiNdI.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DrydYuxf.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BYlmazPT.js";import"./BrowserScrollbar.css-BHkuoGam.js";import"./index-1PiQ4fof.js";import"./Link-qJoZgSbT.js";import"./chunk-HLWAVYOI-D59b4eZt.js";import"./client-CM2XqZNc.js";import"./copy-BAvEiGLT.js";import"./copy-SEOB1pIL.js";import"./index-DrLbuP9z.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-CLr2-W5J.js";import"./index-DxXMIf9X.js";import"./I18nStore-CUUv0VZ2.js";import"./ModalsContext-BoMRhsMb.js";import"./useIsomorphicId-8WwglsiH.js";import"./GitHub-Mark-D3Wkw5er.js";import"./TableOfContent-F0yicvL_.js";import"./index-Zhn8S82z.js";import"./Label-q6_PzA5e.js";import"./index-Cwb37R1p.js";import"./index-DhSsqwHT.js";import"./addCustomCSSWithScoping-CgvYqGaR.js";import"./index-DeDIcOBk.js";import"./index-DooJVriu.js";import"./index-CJe2gumX.js";import"./Avatar-3swUBYi8.js";import"./employee-BYHCCK7_.js";import"./index-GCjbQLby.js";import"./Title-B_zpGxqG.js";import"./ValueState-Bg0UWejw.js";import"./i18n-defaults-IgB10zhP.js";import"./index-BTuMV0Dr.js";import"./Dialog-D9IwuRsq.js";import"./index-CK2u7mIU.js";import"./index-7niR0t1J.js";function i(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:l}),`
`,o.jsx(m,{}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(t,{of:s}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(c,{of:s}),`
`,o.jsx(e.h2,{id:"opening-and-closing-messageboxes",children:"Opening and Closing MessageBoxes"}),`
`,o.jsxs(e.p,{children:["Unlike ",o.jsx(e.code,{children:"Popovers"})," or ",o.jsx(e.code,{children:"Dialogs"}),", ",o.jsx(e.code,{children:"MessageBoxes"})," do not need to be provided with a ",o.jsx(e.code,{children:"ref"})," to be opened or closed. Instead, the ",o.jsx(e.code,{children:"open"})," prop can be used for this."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.strong,{children:"Note:"})," ",o.jsx(e.code,{children:"onClose"})," is either called by clicking on one of the action buttons in the footer or by pressing the ",o.jsx(e.code,{children:"ESC"})," key."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const MessageBoxComponent = () => {
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
`,o.jsx(e.h2,{id:"accessing-actions-in-the-onclose-callback",children:"Accessing actions in the onClose callback"}),`
`,o.jsxs(e.p,{children:["To add some logic to the respective actions you can use ",o.jsx(e.code,{children:"event.detail.action"})," inside ",o.jsx(e.code,{children:"onClose"})," which contains the name of the clicked action."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const MessageBoxComponent = () => {
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
`,o.jsx(e.h2,{id:"using-messageboxes-inside-other-components",children:"Using MessageBoxes inside other components"}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"MessageBoxes"}),` are often used within other components, when opened this could sometimes have unwanted side effects.
In this case, we recommend using `,o.jsx(e.a,{href:"https://reactjs.org/docs/portals.html",rel:"nofollow",children:"createPortal"})," to mount the ",o.jsx(e.code,{children:"MessageBox"})," outside of the DOM hierarchy of the parent component."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-JSX",children:`const MessageBoxComponent = () => {
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
      {createPortal(
        <MessageBox open={open} onClose={handleClose}>
          Content
        </MessageBox>,
        document.body
      )}
    </>
  );
};
`})}),`
`,o.jsx(e.h1,{id:"more-examples",children:"More Examples"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"messagebox-with-custom-actions",children:"MessageBox with custom actions"}),`
`,o.jsx(t,{of:d}),`
`,o.jsx(a,{})]})}function Zo(n={}){const{wrapper:e}={...r(),...n.components};return e?o.jsx(e,{...n,children:o.jsx(i,{...n})}):i(n)}export{Zo as default};
