import{j as o}from"./jsx-runtime-5926aa06.js";import{C as l}from"./DomRefTable.module-9ae2cdfc.js";import{D as p}from"./DocsHeader-d657e53a.js";import{F as c}from"./Footer-6d157ad2.js";import"./index-ebeaab24.js";import{D as m}from"./DomRefTable-dceb1e0d.js";import{M as d,C as r,a as h}from"./chunk-PCJTTTQV-d5471771.js";import{C as g,D as s,W as u}from"./Dialog.stories-f3d3b083.js";import{D as f}from"./DialogDomRef-ffa73df1.js";import{u as a}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-6b3a3cdb.js";import"./iframe-f95e4ac2.js";import"../sb-preview/runtime.js";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-c710bf85.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-16710c43.js";import"./Icons-5b18f7d2.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./class-map-eee65cb7.js";import"./Button-6eea99db.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./index-4c0ab015.js";import"./clsx.m-1229b3e0.js";import"./index-2495a9e4.js";import"./ThemingParameters-f4b4144e.js";import"./Import-7bf7eef5.js";import"./TableOfContent-21cce581.js";import"./index-1b320f3b.js";import"./Link-a00cf029.js";import"./WrappingType-b81e595a.js";import"./index-a29eece8.js";import"./Label-e22f23ee.js";import"./index-9c09ad76.js";import"./index-1811a350.js";import"./Popover-34a43919.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-bfd93775.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-72af48b2.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-eb41b602.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./settings-456fc51a.js";import"./CodeGen-9398aac9.js";import"./index-1e3abf42.js";import"./Dialog-0fdd42ca.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-00c88681.js";import"./index-f2e4b26f.js";import"./Bar-6f655916.js";import"./parameters-bundle.css-6b4a2ffb.js";import"./index-2da387a2.js";import"./index-c972526d.js";import"./Title-c7a0da36.js";import"./index-eaa94b0a.js";import"./ListItemBase-49bcf604.js";import"./ItemNavigation-01761450.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-8eb05e4f.js";import"./index-1f4321a7.js";import"./StandardListItem-1576ed3d.js";import"./ListItem-2c0fcc20.js";import"./RadioButton-5262eb7a.js";import"./CheckBox-3275c87a.js";import"./accept-9744f30a.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-78d167a6.js";import"./Avatar-f85f46ad.js";import"./employee-0153a597.js";const x=`## Structure

A \`Dialog\` consists of a header, content, and a footer for action buttons. The \`Dialog\` is usually displayed at the center of the screen. Its position can be changed by the user. To enable this, you need to set the property \`draggable\` accordingly.

## Responsive Behavior

The \`stretch\` property can be used to stretch the \`Dialog\` on full screen.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`Dialog\` exposes the following CSS Shadow Parts:

- header - Used to style the header of the component
- content - Used to style the content of the component
- footer - Used to style the footer of the component
`;function rn(e={}){const{wrapper:t}=Object.assign({},a(),e.components);return t?o.jsx(t,Object.assign({},e,{children:o.jsx(i,{})})):i();function i(){const n=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",a:"a",h1:"h1"},a(),e.components);return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:g}),`
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
`,o.jsx(c,{})]})}}export{rn as default};
//# sourceMappingURL=Dialog-7669a14a.js.map
