import{j as o,a as e,F as p}from"./jsx-runtime-670450c2.js";import{C as c}from"./DomRefTable.module-3d3cc401.js";import{D as m}from"./DocsHeader-8c958d98.js";import{F as h}from"./Footer-ae97b86f.js";import"./index-f1f749bf.js";import{D as d}from"./DomRefTable-d18b536f.js";import{M as g,C as a,a as u}from"./index-4c1eaed3.js";import{C as f,D as l,W as D}from"./Dialog.stories-e10c189b.js";import{D as C}from"./DialogDomRef-ffa73df1.js";import{u as s}from"./index-4fb8b842.js";import"./chunk-4XCFV5WA-7b93fc87.js";import"./iframe-abee3a6a.js";import"../sb-preview/runtime.mjs";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-41bcce99.js";import"./UI5Element-727d48d7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-63dd52a0.js";import"./utils-ed90fb1b.js";import"./AriaLabelHelper-dee23f38.js";import"./MarkedEvents-f33713fa.js";import"./decline-ff534003.js";import"./Icons-5bcf1e3f.js";import"./class-map-abcca105.js";import"./Button-e1b15b5b.js";import"./Keys-50a1cb5a.js";import"./index-6923d62a.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-c0095e75.js";import"./TableOfContent-785675c3.js";import"./index-06a57b02.js";import"./WrappingType-b81e595a.js";import"./index-b411694d.js";import"./Label-6707bdfc.js";import"./Media-6b270b80.js";import"./MediaRange-25b98f31.js";import"./index-79349d08.js";import"./Popover-5336e3a5.js";import"./Integer-a72984d1.js";import"./FocusableElements-5a723910.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-c56abc92.js";import"./style-map-7b3eb5df.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./settings-259db384.js";import"./index-e5075f06.js";import"./Dialog-fe19aed2.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-59996dda.js";import"./index-50f7b4c4.js";import"./Bar-b4a14d85.js";import"./fastNavigation-ebf07f1c.js";import"./parameters-bundle.css-0c974f42.js";import"./index-7f5e74af.js";import"./index-1f160d88.js";import"./Title-18f6d5a1.js";import"./index-2b9f02fd.js";import"./ListItemBase-948677f0.js";import"./ItemNavigation-4b509b49.js";import"./TabbableElements-21c27087.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-39ca40d3.js";import"./index-55c83f68.js";import"./StandardListItem-b3f5cad6.js";import"./ListItem-d264515d.js";import"./RadioButton-a7b6e11f.js";import"./CheckBox-61258afb.js";import"./accept-70258933.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-a1b07349.js";import"./Avatar-68f47788.js";import"./employee-10cd14ab.js";const w=`## Structure

A \`Dialog\` consists of a header, content, and a footer for action buttons. The \`Dialog\` is usually displayed at the center of the screen. Its position can be changed by the user. To enable this, you need to set the property \`draggable\` accordingly.

## Responsive Behavior

The \`stretch\` property can be used to stretch the \`Dialog\` on full screen.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`Dialog\` exposes the following CSS Shadow Parts:

*   header - Used to style the header of the component
*   content - Used to style the content of the component
*   footer - Used to style the footer of the component`;function $o(t={}){const{wrapper:i}=Object.assign({},s(),t.components);return i?o(i,Object.assign({},t,{children:o(r,{})})):r();function r(){const n=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",a:"a",h1:"h1"},s(),t.components);return e(p,{children:[o(g,{of:f}),`
`,o(m,{}),`
`,o("br",{}),`
`,o(n.h2,{children:"Example"}),`
`,o(a,{of:l}),`
`,o(n.h2,{children:"Properties"}),`
`,o(c,{of:l}),`
`,o(u,{children:w}),`
`,o(d,{rows:C}),`
`,o(n.h2,{children:"Opening Dialogs"}),`
`,o("br",{}),`
`,o(n.h4,{children:"since 0.22.0"}),`
`,e(n.p,{children:["We recommend opening and closing the ",o(n.code,{children:"Dialog"})," component in a declarative way using the ",o(n.code,{children:"open"}),` prop.
You can still use the imperative way which is outlined below.`]}),`
`,o(n.pre,{children:o(n.code,{className:"language-jsx",children:`const MyComponentWithDialog = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setDialogIsOpen(true);
        }}
      >
        Open Dialog
      </Button>
      <Dialog open={dialogIsOpen} />
    </>
  );
};
`})}),`
`,o(n.h4,{children:"before 0.22.0"}),`
`,e(n.p,{children:[o(n.code,{children:"Dialogs"})," can be opened by attaching a ",o(n.code,{children:"ref"})," to the component and then calling the corresponding ",o(n.strong,{children:o(n.code,{children:"show"})})," method."]}),`
`,o(n.pre,{children:o(n.code,{className:"language-jsx",children:`const DialogComponent = () => {
  const dialogRef = useRef(null);
  const onButtonClick = () => {
    dialogRef.current.show();
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open Dialog</Button>
      <Dialog ref={dialogRef}>Some Content</Dialog>
    </>
  );
};
`})}),`
`,o(n.h2,{children:"Using Dialogs inside other components"}),`
`,e(n.p,{children:[o(n.code,{children:"Dialogs"}),` are often used within other components, when opened this could sometimes have unwanted side effects.
In this case, we recommend using `,o(n.a,{href:"https://reactjs.org/docs/portals.html",children:"createPortal"})," to mount the ",o(n.code,{children:"Dialog"})," outside of the DOM hierarchy of the parent component."]}),`
`,o(n.pre,{children:o(n.code,{className:"language-jsx",children:`const DialogComponent = () => {
  const dialogRef = useRef(null);
  const onButtonClick = () => {
    dialogRef.current.show();
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open Dialog</Button>
      {createPortal(<Dialog ref={dialogRef} />, document.body)}
    </>
  );
};
`})}),`
`,o(n.h2,{children:"Closing Dialogs"}),`
`,e(n.p,{children:["Closing ",o(n.code,{children:"Dialogs"}),` works in the same way as opening them.
You can either set the `,o(n.code,{children:"open"})," prop to ",o(n.code,{children:"false"})," or attaching a ",o(n.code,{children:"ref"})," on which the corresponding ",o(n.code,{children:"close"})," method is called."]}),`
`,o(n.pre,{children:o(n.code,{className:"language-jsx",children:`const DialogComponent = () => {
  const dialogRef = useRef(null);
  const handleOpen = (e) => {
    dialogRef.current.show();
  };
  const handleClose = () => {
    dialogRef.current.close();
  };
  return (
    <>
      <Button onClick={handleOpen}>Open Dialog</Button>
      <Dialog ref={dialogRef}>
        <Button onClick={handleClose}>Close Dialog</Button>
      </Dialog>
    </>
  );
};
`})}),`
`,o(n.h1,{children:"More Examples"}),`
`,o(n.h2,{children:"Dialog with content"}),`
`,o(a,{of:D}),`
`,o(h,{})]})}}export{$o as default};
//# sourceMappingURL=Dialog-660321e9.js.map
