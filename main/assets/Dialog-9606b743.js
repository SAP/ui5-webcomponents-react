import{j as o}from"./jsx-runtime-5926aa06.js";import{C as l}from"./DomRefTable.module-5b78712b.js";import{D as p}from"./DocsHeader-1c408d58.js";import{F as c}from"./Footer-39bf01fb.js";import"./index-ebeaab24.js";import{D as m}from"./DomRefTable-9bc7c10a.js";import{M as d,C as r,a as h}from"./chunk-PCJTTTQV-2fb7274b.js";import{C as g,D as s,W as u}from"./Dialog.stories-ec3830ae.js";import{D as f}from"./DialogDomRef-ffa73df1.js";import{u as a}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-aa14275c.js";import"./iframe-d0c8c5f9.js";import"../sb-preview/runtime.js";import"./UI5Element-2e105c8a.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-1927e688.js";import"./Icons-fe8ad928.js";import"./decline-76de6b04.js";import"./i18n-defaults-80781f7e.js";import"./information-bc6b0940.js";import"./class-map-6a9bd920.js";import"./Button-a741ea37.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-2f9956dc.js";import"./index-8330eb1d.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./TableOfContent-c2e4749d.js";import"./index-f9625a8e.js";import"./Link-92895189.js";import"./WrappingType-b81e595a.js";import"./index-b55e7081.js";import"./Label-51e84534.js";import"./index-9c09ad76.js";import"./index-d45d15f0.js";import"./Popover-898d0a68.js";import"./Integer-f7f172c9.js";import"./PopupUtils-2e0c5ac0.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-0f627f88.js";import"./FocusableElements-d8460590.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-267f9e5d.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./settings-7adc4efb.js";import"./CodeGen-7efd756c.js";import"./index-f507d593.js";import"./Dialog-335e5eae.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-49a62115.js";import"./index-664e8ea9.js";import"./Bar-93c64f9e.js";import"./parameters-bundle.css-5626463c.js";import"./index-33200ef5.js";import"./index-a2021b67.js";import"./Title-4b970c0e.js";import"./index-8c8c6b99.js";import"./ListItemBase-9f02a20e.js";import"./ItemNavigation-e091c48d.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-ed5c055b.js";import"./index-b0cbb506.js";import"./StandardListItem-e9d00b86.js";import"./ListItem-e52b9a25.js";import"./RadioButton-9630bc35.js";import"./CheckBox-b65adee7.js";import"./accept-8cc3ec33.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-d68231f1.js";import"./Avatar-8bebda11.js";import"./employee-2f853b68.js";const x=`## Structure

A \`Dialog\` consists of a header, content, and a footer for action buttons. The \`Dialog\` is usually displayed at the center of the screen. Its position can be changed by the user. To enable this, you need to set the property \`draggable\` accordingly.

## Responsive Behavior

The \`stretch\` property can be used to stretch the \`Dialog\` on full screen.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`Dialog\` exposes the following CSS Shadow Parts:

- header - Used to style the header of the component
- content - Used to style the content of the component
- footer - Used to style the footer of the component
`;function en(e={}){const{wrapper:t}=Object.assign({},a(),e.components);return t?o.jsx(t,Object.assign({},e,{children:o.jsx(i,{})})):i();function i(){const n=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",a:"a",h1:"h1"},a(),e.components);return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:g}),`
`,o.jsx(p,{}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"example",children:"Example"}),`
`,o.jsx(r,{of:s}),`
`,o.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(l,{of:s}),`
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
`,o.jsx(c,{})]})}}export{en as default};
//# sourceMappingURL=Dialog-9606b743.js.map
