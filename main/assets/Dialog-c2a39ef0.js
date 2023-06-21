import{j as o}from"./jsx-runtime-5926aa06.js";import{C as a}from"./DomRefTable.module-44637620.js";import{D as l}from"./DocsHeader-0eb8ea09.js";import{F as c}from"./Footer-3bdcbbce.js";import"./index-ebeaab24.js";import{D as m}from"./DomRefTable-68393901.js";import{M as d,C as r,a as h}from"./chunk-PCJTTTQV-4c7c3ff9.js";import{C as g,D as s,W as u}from"./Dialog.stories-4c5c46c9.js";import{D as f}from"./DialogDomRef-ffa73df1.js";import{u as p}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-36bd6bdc.js";import"./iframe-d36f930a.js";import"../sb-preview/runtime.js";import"./UI5Element-b6f0d493.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-bd7f152d.js";import"./Icons-bac066a4.js";import"./decline-e64814d9.js";import"./i18n-defaults-80781f7e.js";import"./information-f9c20ced.js";import"./class-map-6a9bd920.js";import"./Button-37628041.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-99b8bbf4.js";import"./i18n-defaults-ac1c9dde.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-aaf25c56.js";import"./index-821a493f.js";import"./Integer-f7f172c9.js";import"./index-3239e080.js";import"./Avatar-a8f74fed.js";import"./ResizeHandler-021ae412.js";import"./employee-a1fe0822.js";import"./index-af3f16ac.js";import"./index-d6ef0668.js";import"./Link-fd0c7f1f.js";import"./WrappingType-b81e595a.js";import"./index-b9e92427.js";import"./TableOfContent-4f7e6f22.js";import"./index-02dce122.js";import"./Label-77c4efbc.js";import"./index-9c09ad76.js";import"./index-fd45151c.js";import"./index-019ba423.js";import"./Popover-ceaaf26b.js";import"./PopupUtils-46fb16e4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-27fb56a9.js";import"./FocusableElements-6ebe483a.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./settings-bc9c7eeb.js";import"./CodeGen-22fa1a2f.js";import"./index-bdb09933.js";import"./Dialog-da422c24.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-29b59243.js";import"./Bar-c671d5aa.js";import"./parameters-bundle.css-5626463c.js";import"./index-0cf5c89f.js";import"./index-6256ec3b.js";import"./Title-6c23a67a.js";import"./index-f09c060b.js";import"./ListItemBase-d9c7b338.js";import"./ItemNavigation-9c411313.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-0490e909.js";import"./index-17071b08.js";import"./StandardListItem-a8677076.js";import"./ListItem-833837ab.js";import"./RadioButton-ac0d39a7.js";import"./CheckBox-0289245d.js";import"./accept-549e2cca.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-9332e21e.js";const x=`## Structure

A \`Dialog\` consists of a header, content, and a footer for action buttons. The \`Dialog\` is usually displayed at the center of the screen. Its position can be changed by the user. To enable this, you need to set the property \`draggable\` accordingly.

## Responsive Behavior

The \`stretch\` property can be used to stretch the \`Dialog\` on full screen.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`Dialog\` exposes the following CSS Shadow Parts:

- header - Used to style the header of the component
- content - Used to style the content of the component
- footer - Used to style the footer of the component
`;function pn(e={}){const{wrapper:t}=Object.assign({},p(),e.components);return t?o.jsx(t,Object.assign({},e,{children:o.jsx(i,{})})):i();function i(){const n=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",a:"a",h1:"h1"},p(),e.components);return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:g}),`
`,o.jsx(l,{}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"example",children:"Example"}),`
`,o.jsx(r,{of:s}),`
`,o.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(a,{of:s}),`
`,o.jsx(h,{children:x}),`
`,o.jsx(m,{rows:f}),`
`,o.jsx(n.h2,{id:"opening-dialogs",children:"Opening Dialogs"}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h4,{id:"since-0220",children:"since 0.22.0"}),`
`,o.jsxs(n.p,{children:["We recommend opening and closing the ",o.jsx(n.code,{children:"Dialog"})," component in a declarative way using the ",o.jsx(n.code,{children:"open"}),` prop.
You can still use the imperative way which is outlined below.`]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-jsx",children:`const MyComponentWithDialog = () => {
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
`,o.jsx(n.h4,{id:"before-0220",children:"before 0.22.0"}),`
`,o.jsxs(n.p,{children:[o.jsx(n.code,{children:"Dialogs"})," can be opened by attaching a ",o.jsx(n.code,{children:"ref"})," to the component and then calling the corresponding ",o.jsx(n.strong,{children:o.jsx(n.code,{children:"show"})})," method."]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-jsx",children:`const DialogComponent = () => {
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
`,o.jsx(n.h2,{id:"using-dialogs-inside-other-components",children:"Using Dialogs inside other components"}),`
`,o.jsxs(n.p,{children:[o.jsx(n.code,{children:"Dialogs"}),` are often used within other components, when opened this could sometimes have unwanted side effects.
In this case, we recommend using `,o.jsx(n.a,{href:"https://reactjs.org/docs/portals.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"createPortal"})," to mount the ",o.jsx(n.code,{children:"Dialog"})," outside of the DOM hierarchy of the parent component."]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-jsx",children:`const DialogComponent = () => {
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
`,o.jsx(n.h2,{id:"closing-dialogs",children:"Closing Dialogs"}),`
`,o.jsxs(n.p,{children:["Closing ",o.jsx(n.code,{children:"Dialogs"}),` works in the same way as opening them.
You can either set the `,o.jsx(n.code,{children:"open"})," prop to ",o.jsx(n.code,{children:"false"})," or attaching a ",o.jsx(n.code,{children:"ref"})," on which the corresponding ",o.jsx(n.code,{children:"close"})," method is called."]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-jsx",children:`const DialogComponent = () => {
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
`,o.jsx(n.h1,{id:"more-examples",children:"More Examples"}),`
`,o.jsx(n.h2,{id:"dialog-with-content",children:"Dialog with content"}),`
`,o.jsx(r,{of:u}),`
`,o.jsx(c,{})]})}}export{pn as default};
//# sourceMappingURL=Dialog-c2a39ef0.js.map
