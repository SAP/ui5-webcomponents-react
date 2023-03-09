import{j as o,a as e,F as p}from"./jsx-runtime-670450c2.js";import{C as c}from"./DomRefTable.module-a2b8366a.js";import{D as m}from"./DocsHeader-556684e7.js";import{F as h}from"./Footer-6c35a37d.js";import"./index-f1f749bf.js";import{D as d}from"./DomRefTable-7a4abf02.js";import{M as g,C as a,a as u}from"./index-0889bfe2.js";import{C as f,D as l,W as D}from"./Dialog.stories-f013b3f1.js";import{D as C}from"./DialogDomRef-ffa73df1.js";import{u as s}from"./index-4fb8b842.js";import"./chunk-QDOP3WTA-072d2e4a.js";import"./iframe-f79c6b50.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-fe4dc3ff.js";import"./inheritsLoose-93e09647.js";import"./index-86de54c1.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-c82262ef.js";import"./MarkedEvents-8627ed01.js";import"./decline-0a03b0b0.js";import"./Icons-7b82f601.js";import"./class-map-5d8e4b2b.js";import"./Button-e27d9549.js";import"./Keys-3acbae73.js";import"./Device-208919c6.js";import"./index-cbb29537.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-d69a8ef7.js";import"./TableOfContent-5134c19b.js";import"./index-36611ecc.js";import"./WrappingType-b81e595a.js";import"./index-beb5e350.js";import"./Label-040efebd.js";import"./Footer.module-c4f3b823.js";import"./index-c14ea3e5.js";import"./Popover-cbbb060d.js";import"./Integer-d9976c13.js";import"./PopupsCommon.css-ab0735c6.js";import"./FocusableElements-c2f39514.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./settings-d520586c.js";import"./index-7da5e57a.js";import"./Dialog-0097f4e9.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-9843fe17.js";import"./index-3c00af8a.js";import"./Bar-2267974f.js";import"./fastNavigation-8b41cdda.js";import"./parameters-bundle.css-6b4a2ffb.js";import"./index-1868d73b.js";import"./index-397cbe09.js";import"./Title-b986a4bd.js";import"./index-c8d2d6b6.js";import"./ListItemBase-9f62536c.js";import"./ItemNavigation-9e1aa83a.js";import"./TabbableElements-0285a530.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-b3c085b8.js";import"./index-ecd61e6a.js";import"./StandardListItem-0b926583.js";import"./ListItem-b545bc6e.js";import"./RadioButton-4ed70174.js";import"./CheckBox-2761aa24.js";import"./accept-a98baca8.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-bbef5919.js";import"./Avatar-358386af.js";import"./employee-98ce1b38.js";const w=`## Structure

A \`Dialog\` consists of a header, content, and a footer for action buttons. The \`Dialog\` is usually displayed at the center of the screen. Its position can be changed by the user. To enable this, you need to set the property \`draggable\` accordingly.

## Responsive Behavior

The \`stretch\` property can be used to stretch the \`Dialog\` on full screen.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`Dialog\` exposes the following CSS Shadow Parts:

*   header - Used to style the header of the component
*   content - Used to style the content of the component
*   footer - Used to style the footer of the component`;function en(t={}){const{wrapper:i}=Object.assign({},s(),t.components);return i?o(i,Object.assign({},t,{children:o(r,{})})):r();function r(){const n=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",a:"a",h1:"h1"},s(),t.components);return e(p,{children:[o(g,{of:f}),`
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
`,o(h,{})]})}}export{en as default};
//# sourceMappingURL=Dialog-0ec20cb3.js.map
