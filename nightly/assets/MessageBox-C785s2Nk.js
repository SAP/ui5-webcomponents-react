import{j as n}from"./iframe-D3WSfxnn.js";import{useMDXComponents as r}from"./index-INJaxUMc.js";import{M as a,C as s}from"./blocks-BRQLHU1o.js";import"./Tag-tOepiG2u.js";import"./index-BVrxhT_e.js";import{C as l}from"./ControlsWithNote-bBb_VS4m.js";import{D as p}from"./DocsHeader-i6mSv8qc.js";import{F as m}from"./CommandsAndQueries-D0ehjJEo.js";import{C as t,D as i,W as d}from"./MessageBox.stories-Csg0Z_un.js";import"./preload-helper-D9Z9MdNV.js";import"./i18n-DSpjDgSK.js";import"./information-DM4h4iXJ.js";import"./sys-enter-2-U9KscTjZ.js";import"./alert-CfwYPci7.js";import"./index-BE0SODKX.js";import"./index-5wzk8jTN.js";import"./Link-C5psU7y5.js";import"./copy-CY1Urzho.js";import"./copy-B0_WxO9i.js";import"./GitHub-Mark-B9By78RC.js";import"./TableOfContent-D7UH4733.js";import"./index-C6MhXGTg.js";import"./index-RQ3mlM3E.js";import"./addCustomCSSWithScoping-CLwDIOC8.js";import"./index-BnnkB59L.js";import"./index-BSvrPTPm.js";import"./index-BedbyZ7Q.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-kG1BPZBl.js";function c(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:t}),`
`,n.jsx(p,{of:t}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"example",children:"Example"}),`
`,n.jsx(s,{of:i}),`
`,n.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(l,{of:i}),`
`,n.jsx(e.h2,{id:"opening-and-closing-messageboxes",children:"Opening and Closing MessageBoxes"}),`
`,n.jsxs(e.p,{children:["You can open and close the ",n.jsx(e.code,{children:"MessageBox"})," with the ",n.jsx(e.code,{children:"open"})," prop."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Note:"})," ",n.jsx(e.code,{children:"onClose"})," is either called by clicking on one of the action buttons in the footer or by pressing the ",n.jsx(e.code,{children:"ESC"})," key."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const MessageBoxComponent = () => {
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
`,n.jsx(e.h2,{id:"accessing-actions-in-the-onclose-callback",children:"Accessing actions in the onClose callback"}),`
`,n.jsxs(e.p,{children:["To add some logic to the respective actions you can use first parameter of the ",n.jsx(e.code,{children:"onClose"})," event handler which contains the name of the clicked action."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const MessageBoxComponent = () => {
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
`,n.jsx(e.h1,{id:"more-examples",children:"More Examples"}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"messagebox-with-custom-actions",children:"MessageBox with custom actions"}),`
`,n.jsx(s,{of:d}),`
`,n.jsx(m,{})]})}function T(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(c,{...o})}):c(o)}export{T as default};
