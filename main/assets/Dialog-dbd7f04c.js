import{j as o}from"./jsx-runtime-d079401a.js";import{C as l}from"./DomRefTable.module-20037c8e.js";import{D as p}from"./DocsHeader-05587277.js";import{F as c}from"./Footer-79cd2704.js";import"./index-f1f2c4b1.js";import{M as m,C as r,b as d}from"./chunk-S4VUQJ4A-59b16d8c.js";import{D as h}from"./DomRefTable-f871afc6.js";import{C as g,D as s,W as u}from"./Dialog.stories-f6ad0c85.js";import{D as f}from"./DialogDomRef-ffa73df1.js";import{u as a}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-0aa9f06f.js";import"./iframe-6327b2e6.js";import"../sb-preview/runtime.js";import"./UI5Element-e590cd60.js";import"./CustomElementsScopeUtils-264b8a39.js";import"./withWebComponent-b4c67a1a.js";import"./utils-e9940b93.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-b897d66f.js";import"./Icons-65b34360.js";import"./decline-2f6198d2.js";import"./i18n-defaults-bdef1cce.js";import"./information-e97f915a.js";import"./alert-7494fabe.js";import"./class-map-e1b423a4.js";import"./Button-4505b9f6.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-d5195a49.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-203b56de.js";import"./index-fa58758b.js";import"./Integer-f7f172c9.js";import"./index-0eb052db.js";import"./Avatar-60d18bb8.js";import"./ResizeHandler-34ecee99.js";import"./employee-78fe46d2.js";import"./index-52c0f93d.js";import"./index-43932da4.js";import"./Link-a373b451.js";import"./WrappingType-b81e595a.js";import"./index-343af056.js";import"./TableOfContent-2b85e520.js";import"./index-8645d56e.js";import"./Label-69062358.js";import"./index-c74c9f7f.js";import"./index-3000e1ad.js";import"./index-e89ca6b5.js";import"./Popover-742c9988.js";import"./PopupUtils-f407c5e4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-97942203.js";import"./FocusableElements-d024bb16.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-ecc46a93.js";import"./BrowserScrollbar.css-4a87524a.js";import"./index-92d824d3.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./settings-b07ad1e4.js";import"./CodeGen-d0baecf7.js";import"./index-9f3e032f.js";import"./Dialog-cf714d6a.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-c2a43234.js";import"./Bar-f60d381d.js";import"./parameters-bundle.css-1b860e2a.js";import"./index-a2f0ff35.js";import"./index-45f19ae7.js";import"./Title-0fb688d3.js";import"./index-dda0d2d3.js";import"./ListItemBase-e8a1d82b.js";import"./ItemNavigation-52fe434f.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-7cb729ee.js";import"./index-78eae3ee.js";import"./StandardListItem-32d37e59.js";import"./ListItem-65b5ee84.js";import"./RadioButton-bfff4944.js";import"./CheckBox-c32e2a79.js";import"./accept-92104380.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-7a309837.js";const x=`## Structure

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
`;function re(n={}){const{wrapper:t}=Object.assign({},a(),n.components);return t?o.jsx(t,Object.assign({},n,{children:o.jsx(i,{})})):i();function i(){const e=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",a:"a",h1:"h1"},a(),n.components);return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:g}),`
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
`,o.jsx(c,{})]})}}export{re as default};
//# sourceMappingURL=Dialog-dbd7f04c.js.map
