import{j as o}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{useMDXComponents as r}from"./index-CcnH5Kt0.js";import{ae as p,af as t}from"./index-B_JisXEm.js";import"./index-Dbw5Efj6.js";import{C as m}from"./ControlsWithNote-3H4UQTlf.js";import{D as c}from"./DocsHeader-BetOIZJj.js";import{F as a}from"./CommandsAndQueries-CjeXxYxy.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-CE707q_n.js";import{C as l,D as s,W as d}from"./MessageBox.stories-D0Afm6FY.js";import"./iframe-hZ9PAetX.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-BBslp21L.js";import"./_overArg-Der2MB70.js";import"./_baseAssignValue-PZ39NPQP.js";import"./_getPrototype-DY0Wt4dR.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./withWebComponent-_WQ2NUTk.js";import"./utils-DNCbgL6O.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-Cey6jF2F.js";import"./decline-BO1MJY4p.js";import"./Icon-F4CTdRe4.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-B1auRMLy.js";import"./parameters-bundle.css-P4kwt3kq.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-T18VK69N.js";import"./alert-Cstw3ukw.js";import"./class-map-BevVk84l.js";import"./Button-B2giC9cI.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-QZuI92fE.js";import"./TagDesign-Dou_yO3g.js";import"./utils-j22s8sEg.js";import"./main-BPTHlokf.js";import"./index-Ccx9Q3VY.js";import"./Tag-CyMlqXkf.js";import"./sys-help-2-Dka1TfNv.js";import"./index-Csar8lRO.js";import"./Popover-BSoFyw8J.js";import"./PopupsCommon.css-CgymFC1Z.js";import"./getEffectiveScrollbarStyle-D0HAoBVS.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CdXdU0-i.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BtPMqoOr.js";import"./BrowserScrollbar.css-DMtZWp5G.js";import"./index-D0E-fN6R.js";import"./Link-D7mI2b7i.js";import"./chunk-HLWAVYOI-DNe8q3AO.js";import"./client-BZNFO7bv.js";import"./copy-ITQxovDS.js";import"./copy-Dq9dQZCS.js";import"./index-CcQSza-P.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DbWqkQQL.js";import"./index-Dxh7pR9i.js";import"./I18nStore-Dyr3cAVj.js";import"./GitHub-Mark-07DkmEp8.js";import"./TableOfContent-CGtrISih.js";import"./index-DI2hh086.js";import"./Label-COQgloJF.js";import"./index-BMoHtLal.js";import"./index-Cfo8YjkM.js";import"./addCustomCSSWithScoping-C8yl6nHi.js";import"./index-B529WYkd.js";import"./BusyIndicator-C2GpyWwn.js";import"./index-CB3FoJQs.js";import"./index-DFS-xBS1.js";import"./Avatar-DDjIX45r.js";import"./employee-BW41J3Tc.js";import"./index-Cy3T1vpP.js";import"./ValueState-Bg0UWejw.js";import"./i18n-defaults-C9NDhpzI.js";import"./index-3s-WVA69.js";import"./Dialog-B6BucGWs.js";import"./index-B5bIJhh-.js";import"./index-Cc4SEnhI.js";function i(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:l}),`
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
