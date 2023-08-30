import{j as o}from"./jsx-runtime-d079401a.js";import{C as l}from"./DomRefTable.module-7c15699a.js";import{D as p}from"./DocsHeader-d7b1cc24.js";import{F as c}from"./Footer-2aa52b46.js";import"./index-f1f2c4b1.js";import{M as m,C as r,b as d}from"./chunk-S4VUQJ4A-ce2f993f.js";import{D as h}from"./DomRefTable-123067b9.js";import{C as g,D as s,W as u}from"./Dialog.stories-8801d972.js";import{D as f}from"./DialogDomRef-ffa73df1.js";import{u as a}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-198424ee.js";import"./iframe-53643a71.js";import"../sb-preview/runtime.js";import"./UI5Element-6dcea8dd.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7d7e5133.js";import"./utils-626dc1bf.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-b7f7d9e7.js";import"./Icons-e937042c.js";import"./decline-d1fe7fdd.js";import"./i18n-defaults-2d2bf0b6.js";import"./information-a40f0e71.js";import"./class-map-0ab40ab9.js";import"./Button-6bb9ed58.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-d675a36d.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-5ee8a8c4.js";import"./index-4400e7a2.js";import"./Integer-f7f172c9.js";import"./index-0219f247.js";import"./Avatar-faa225d6.js";import"./ResizeHandler-e83234a4.js";import"./employee-f0b5ef8f.js";import"./index-44b608b4.js";import"./index-baf41c7c.js";import"./Link-34530090.js";import"./WrappingType-b81e595a.js";import"./index-43333f43.js";import"./TableOfContent-8ee6455a.js";import"./index-c3a35679.js";import"./Label-c4db564a.js";import"./index-b42968db.js";import"./index-3331f69b.js";import"./index-01776f25.js";import"./Popover-8ece70a3.js";import"./PopupsCommon.css-2b73575b.js";import"./FocusableElements-ae22402e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-132a30d8.js";import"./BrowserScrollbar.css-22391551.js";import"./index-d203965f.js";import"./mapValues-e5c6f517.js";import"./_baseForOwn-24231fc1.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-00f63d78.js";import"./_baseUniq-edf521f4.js";import"./index-356e4a49.js";import"./settings-db964377.js";import"./CodeGen-1efa7294.js";import"./index-788d53a4.js";import"./Dialog-ea4c9a60.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-f834955e.js";import"./Bar-86528487.js";import"./parameters-bundle.css-f9dc8928.js";import"./index-4dbaed48.js";import"./index-230a786e.js";import"./Title-e46bbbf5.js";import"./index-6c620a87.js";import"./ListItemBase-c655abbb.js";import"./ItemNavigation-f231b836.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-713a4f98.js";import"./index-70a9cb22.js";import"./StandardListItem-17582cb4.js";import"./ListItem-43381874.js";import"./RadioButton-f48638b8.js";import"./CheckBox-6d778514.js";import"./accept-d5698387.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-1acb3967.js";const x=`## Structure

A \`Dialog\` consists of a header, content, and a footer for action buttons. The \`Dialog\` is usually displayed at the center of the screen. Its position can be changed by the user. To enable this, you need to set the property \`draggable\` accordingly.

## Responsive Behavior

The \`stretch\` property can be used to stretch the \`Dialog\` on full screen.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`Dialog\` exposes the following CSS Shadow Parts:

- header - Used to style the header of the component
- content - Used to style the content of the component
- footer - Used to style the footer of the component

**Note:** When a \`Bar\` is used in the header or in the footer, you should remove the default dialog's paddings.  
For more information see the sample "Bar in Header/Footer".
`;function ie(n={}){const{wrapper:t}=Object.assign({},a(),n.components);return t?o.jsx(t,Object.assign({},n,{children:o.jsx(i,{})})):i();function i(){const e=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",a:"a",h1:"h1"},a(),n.components);return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:g}),`
`,o.jsx(p,{}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(r,{of:s}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(l,{of:s}),`
`,o.jsx(d,{children:x}),`
`,o.jsx(h,{rows:f}),`
`,o.jsx(e.h2,{id:"opening-dialogs",children:"Opening Dialogs"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h4,{id:"since-0220",children:"since 0.22.0"}),`
`,o.jsxs(e.p,{children:["We recommend opening and closing the ",o.jsx(e.code,{children:"Dialog"})," component in a declarative way using the ",o.jsx(e.code,{children:"open"}),` prop.
You can still use the imperative way which is outlined below.`]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const MyComponentWithDialog = () => {
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
`,o.jsx(e.h4,{id:"before-0220",children:"before 0.22.0"}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"Dialogs"})," can be opened by attaching a ",o.jsx(e.code,{children:"ref"})," to the component and then calling the corresponding ",o.jsx(e.strong,{children:o.jsx(e.code,{children:"show"})})," method."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const DialogComponent = () => {
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
`,o.jsx(e.h2,{id:"using-dialogs-inside-other-components",children:"Using Dialogs inside other components"}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"Dialogs"}),` are often used within other components, when opened this could sometimes have unwanted side effects.
In this case, we recommend using `,o.jsx(e.a,{href:"https://reactjs.org/docs/portals.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"createPortal"})," to mount the ",o.jsx(e.code,{children:"Dialog"})," outside of the DOM hierarchy of the parent component."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const DialogComponent = () => {
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
`,o.jsx(e.h2,{id:"closing-dialogs",children:"Closing Dialogs"}),`
`,o.jsxs(e.p,{children:["Closing ",o.jsx(e.code,{children:"Dialogs"}),` works in the same way as opening them.
You can either set the `,o.jsx(e.code,{children:"open"})," prop to ",o.jsx(e.code,{children:"false"})," or attaching a ",o.jsx(e.code,{children:"ref"})," on which the corresponding ",o.jsx(e.code,{children:"close"})," method is called."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const DialogComponent = () => {
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
`,o.jsx(e.h1,{id:"more-examples",children:"More Examples"}),`
`,o.jsx(e.h2,{id:"dialog-with-content",children:"Dialog with content"}),`
`,o.jsx(r,{of:u}),`
`,o.jsx(c,{})]})}}export{ie as default};
//# sourceMappingURL=Dialog-8de5a8b5.js.map
