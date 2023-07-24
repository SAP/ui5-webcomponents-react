import{j as o}from"./jsx-runtime-d079401a.js";import{C as l}from"./DomRefTable.module-dca4eee1.js";import{D as a}from"./DocsHeader-0a8a5b0e.js";import{F as c}from"./Footer-193420c4.js";import"./index-f1f2c4b1.js";import{D as m}from"./DomRefTable-2686d0e6.js";import{M as d,C as r,b as h}from"./chunk-PCJTTTQV-6cb6708a.js";import{C as g,D as s,W as u}from"./Dialog.stories-0afead73.js";import{D as f}from"./DialogDomRef-ffa73df1.js";import{u as p}from"./index-59d6410c.js";import"./react-jss.esm-c310038c.js";import"./inheritsLoose-93e09647.js";import"./index-2b4ef5a2.js";import"./iframe-b2a8ab27.js";import"../sb-preview/runtime.js";import"./UI5Element-11982a12.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-99b005ba.js";import"./utils-626dc1bf.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-31253496.js";import"./Icons-234bf59e.js";import"./decline-c1cc2557.js";import"./i18n-defaults-837f5aed.js";import"./information-2644a02f.js";import"./class-map-b4d8f3b0.js";import"./Button-0b5fe0db.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-1a83921e.js";import"./index-47d0a85a.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-783dc33d.js";import"./index-61808de2.js";import"./Integer-f7f172c9.js";import"./index-2d67bb6d.js";import"./Avatar-813f92b3.js";import"./ResizeHandler-9ebe913c.js";import"./employee-e34ffee2.js";import"./index-1a90a508.js";import"./index-3c522cb1.js";import"./Link-b0328393.js";import"./WrappingType-b81e595a.js";import"./index-13bed04c.js";import"./TableOfContent-79453255.js";import"./index-b1991b5a.js";import"./Label-62dd8470.js";import"./index-c74c9f7f.js";import"./index-297dd309.js";import"./index-26420a83.js";import"./Popover-f3103b78.js";import"./PopupsCommon.css-552c6676.js";import"./FocusableElements-708d1a4e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-56038137.js";import"./BrowserScrollbar.css-527f9f64.js";import"./react-18-50d7df5e.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./settings-4143fb8e.js";import"./CodeGen-e90a4270.js";import"./index-8816f40a.js";import"./Dialog-8bf45a3e.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-3bb33bb2.js";import"./Bar-e19b5f8b.js";import"./parameters-bundle.css-f9dc8928.js";import"./index-84b30087.js";import"./index-733afc1e.js";import"./Title-3276c542.js";import"./index-d58c7e3f.js";import"./ListItemBase-6d1fb082.js";import"./ItemNavigation-a882fb90.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-741cae1e.js";import"./index-685ab2b4.js";import"./StandardListItem-7168aefd.js";import"./ListItem-429c71be.js";import"./RadioButton-80f32cef.js";import"./CheckBox-6ec8bf24.js";import"./accept-6c83709e.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-c0f59065.js";const x=`## Structure

A \`Dialog\` consists of a header, content, and a footer for action buttons. The \`Dialog\` is usually displayed at the center of the screen. Its position can be changed by the user. To enable this, you need to set the property \`draggable\` accordingly.

## Responsive Behavior

The \`stretch\` property can be used to stretch the \`Dialog\` on full screen.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`Dialog\` exposes the following CSS Shadow Parts:

- header - Used to style the header of the component
- content - Used to style the content of the component
- footer - Used to style the footer of the component
`;function sn(e={}){const{wrapper:t}=Object.assign({},p(),e.components);return t?o.jsx(t,Object.assign({},e,{children:o.jsx(i,{})})):i();function i(){const n=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",a:"a",h1:"h1"},p(),e.components);return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:g}),`
`,o.jsx(a,{}),`
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
`,o.jsx(c,{})]})}}export{sn as default};
//# sourceMappingURL=Dialog-44c01f66.js.map
