import{j as o}from"./useIsomorphicLayoutEffect-DCJrFAVs.js";import{useMDXComponents as r}from"./index-D3szj05g.js";import{M as p,C as t}from"./index-Bdi8YhVx.js";import"./index-evewZYN6.js";import{C as m}from"./ControlsWithNote-zsBDyhlJ.js";import{D as c}from"./DocsHeader-CamJUDW7.js";import{F as a}from"./CommandsAndQueries-Ck8HLIx5.js";import"./index-ClU-Tc1p.js";import"./WrappingType-CW8URInd.js";import{C as l,D as s,W as d}from"./MessageBox.stories-CREiHfO6.js";import"./iframe-Cpwv2kZr.js";import"../sb-preview/runtime.js";import"./index-C3ZJCerc.js";import"./_baseForOwn-CS3BKc8p.js";import"./mapValues-DmWmqx7o.js";import"./_baseUniq-DGAWXpCf.js";import"./index-BRTKD46C.js";import"./index-DrFu-skq.js";import"./withWebComponent-Dj0CMfaz.js";import"./utils-B21VtmG1.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-vPfkXYRc.js";import"./decline-Dtt8f7gG.js";import"./Icon-8rAbDJhl.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-B8mU3KX1.js";import"./parameters-bundle.css-BFbT_feV.js";import"./i18n-defaults-Cz0fD7oZ.js";import"./information-pNQtyMX0.js";import"./alert-D6VWtbrR.js";import"./class-map-DwAhupCS.js";import"./Button-LAxw2z5E.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-BrbxGX_s.js";import"./TagDesign-Dou_yO3g.js";import"./utils-Pzg-4hDJ.js";import"./main-CzLLrZqh.js";import"./index-zhh5wtul.js";import"./Tag-DOc2KdyV.js";import"./sys-help-2-CBpcyxoA.js";import"./index-lUF5OGIV.js";import"./Popover-C3k48onv.js";import"./PopupsCommon.css-CL-yqmiO.js";import"./getEffectiveScrollbarStyle-CFKww5-v.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CuRzO4ve.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CpZMqJvf.js";import"./BrowserScrollbar.css-C7k9hgHd.js";import"./index-oMrLWbiO.js";import"./Link-B1bLgUAx.js";import"./chunk-HLWAVYOI-BT0LMQ_Z.js";import"./client-B23sEKGq.js";import"./copy-DzY-XerN.js";import"./copy-eLLizoPG.js";import"./index-PGreZEtb.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-waKyCe7Y.js";import"./index-BZAvLi5K.js";import"./I18nStore-D1uEcPVD.js";import"./GitHub-Mark-CULGv64g.js";import"./TableOfContent-CMIG7w1r.js";import"./index-CZOyK1t3.js";import"./Label-DYSmE5xX.js";import"./index-NmxPYmSL.js";import"./index-DxE19OZ0.js";import"./addCustomCSSWithScoping-B01F51vr.js";import"./index-C_Lm8VTo.js";import"./index-Bu9ywWCe.js";import"./index-z--DETqp.js";import"./Avatar-CTO3QSeR.js";import"./employee-CIkKCEkx.js";import"./index-B2Da-9lv.js";import"./Title-CUVSx8J8.js";import"./ValueState-Bg0UWejw.js";import"./i18n-defaults-Dq9YWl3p.js";import"./index-7E-7LyP7.js";import"./Dialog-Fj3WCMI6.js";import"./index-DlOta8fc.js";import"./index-M64eZgbY.js";function i(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:l}),`
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
