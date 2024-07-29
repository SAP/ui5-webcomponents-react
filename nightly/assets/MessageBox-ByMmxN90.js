import{j as o}from"./useIsomorphicLayoutEffect-DCJrFAVs.js";import{useMDXComponents as r}from"./index-D3szj05g.js";import{M as p,C as t}from"./index-D0GVYvzD.js";import"./index-CwoBJrCh.js";import{C as m}from"./ControlsWithNote-CxxVn5ib.js";import{D as c}from"./DocsHeader-D8BDJL7_.js";import{F as a}from"./CommandsAndQueries-DphjKfcX.js";import"./index-ClU-Tc1p.js";import"./WrappingType-CW8URInd.js";import{C as l,D as i,W as d}from"./MessageBox.stories-CmkkSRDr.js";import"./iframe-BS2b97k4.js";import"../sb-preview/runtime.js";import"./index-C3ZJCerc.js";import"./_baseForOwn-CS3BKc8p.js";import"./mapValues-DmWmqx7o.js";import"./_baseUniq-DGAWXpCf.js";import"./index-BRTKD46C.js";import"./index-DrFu-skq.js";import"./withWebComponent-Bw_l6Ewh.js";import"./utils-BHgxP_Sc.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CyjtwURt.js";import"./decline-BnR7C84V.js";import"./Icon-Bjam5y2n.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-mCyQq_6q.js";import"./parameters-bundle.css-BFbT_feV.js";import"./i18n-defaults-Cz0fD7oZ.js";import"./information-DR3Ry5yc.js";import"./alert-CjjdhJ65.js";import"./class-map-DoF19r8m.js";import"./Button-Bn9nox5u.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-BuF9xM0k.js";import"./TagDesign-Dou_yO3g.js";import"./utils-3Fu9DapI.js";import"./main-CzLLrZqh.js";import"./index-CJBPR3cq.js";import"./Tag-oXDdtvF6.js";import"./sys-help-2-BRv5pQ3O.js";import"./index-CpYQHJhC.js";import"./Popover-ueRYOmZP.js";import"./PopupsCommon.css-T1OzgQOS.js";import"./getEffectiveScrollbarStyle-D1VPwmZI.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CV6FH9MC.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-Bys0Ab5G.js";import"./BrowserScrollbar.css-AwpGtRUX.js";import"./index-BuTNZ0nO.js";import"./Link-DaxkRKad.js";import"./chunk-HLWAVYOI-7N7C70Vr.js";import"./client-B23sEKGq.js";import"./copy-DLiPdfEP.js";import"./copy-D_DpjAH5.js";import"./index-PGreZEtb.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-waKyCe7Y.js";import"./index-6v2Oy41S.js";import"./I18nStore-CqpKwI0j.js";import"./GitHub-Mark-CULGv64g.js";import"./TableOfContent-C8kKIWdA.js";import"./index-CxBMiMEJ.js";import"./Label-C8Y7h3Z-.js";import"./index-Cyq9JBqo.js";import"./index-96FE_bEc.js";import"./addCustomCSSWithScoping-ClhnucNU.js";import"./index-BSFzkqrX.js";import"./index-CC4z8v6N.js";import"./index-D3tAyMPq.js";import"./Avatar-BRGukaio.js";import"./employee-CWJksvD0.js";import"./index-DEmv9jds.js";import"./Title-DlbwpOq2.js";import"./ValueState-Bg0UWejw.js";import"./i18n-defaults-BCbbGYDh.js";import"./index-BAFq7ug0.js";import"./Dialog-C0sQq9aS.js";import"./index-C5xYph9R.js";import"./index-jYYNjkLY.js";function s(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:l}),`
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
`,o.jsx(a,{})]})}function qo(e={}){const{wrapper:n}={...r(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(s,{...e})}):s(e)}export{qo as default};
