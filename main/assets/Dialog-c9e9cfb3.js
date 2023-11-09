import{j as o}from"./jsx-runtime-d079401a.js";import{C as l}from"./DomRefTable.module-d8bb041f.js";import{D as p}from"./DocsHeader-d0b74f07.js";import{F as c}from"./Footer-b1def5e3.js";import"./index-f1f2c4b1.js";import{M as m,C as r,b as d}from"./chunk-HLWAVYOI-577e40d3.js";import{D as h}from"./DomRefTable-4bface3f.js";import{C as g,D as s,W as u}from"./Dialog.stories-37738c94.js";import{D as f}from"./DialogDomRef-ffa73df1.js";import{u as a}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-825df3e6.js";import"./iframe-026e5bdf.js";import"../sb-preview/runtime.js";import"./UI5Element-d089e658.js";import"./CustomElementsScopeUtils-90546106.js";import"./withWebComponent-f146e44d.js";import"./utils-85c0effb.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-dc979b51.js";import"./Icons-d115de21.js";import"./decline-a017ea5c.js";import"./i18n-defaults-bdef1cce.js";import"./information-ff75d6c3.js";import"./alert-fa33aca2.js";import"./class-map-5b190712.js";import"./Button-f20bbbdf.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-a1ecaff4.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-b7e0672b.js";import"./index-2ca57cb5.js";import"./Integer-f7f172c9.js";import"./index-eeffdb9c.js";import"./Avatar-d6a8bd34.js";import"./ResizeHandler-36d5a74c.js";import"./employee-0930782f.js";import"./index-88d2d023.js";import"./index-b8c3cd34.js";import"./Link-0dce4afc.js";import"./WrappingType-b81e595a.js";import"./index-12e0da73.js";import"./TableOfContent-3af5c55e.js";import"./index-2a6e4ea0.js";import"./Label-025b0296.js";import"./index-c74c9f7f.js";import"./index-e520ff97.js";import"./index-08937dea.js";import"./Popover-84fe14ea.js";import"./PopupUtils-caf3caee.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-070f9d59.js";import"./FocusableElements-320054f2.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-2f7624b7.js";import"./BrowserScrollbar.css-e63eefff.js";import"./index-f82c8853.js";import"./mapValues-6da481dc.js";import"./_baseForOwn-62af832b.js";import"./_baseUniq-27dbdc21.js";import"./index-356e4a49.js";import"./settings-d8850585.js";import"./CodeGen-b33fe2c9.js";import"./index-34121cd7.js";import"./Dialog-d6d3e16c.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-06678d5b.js";import"./Bar-9b663c57.js";import"./parameters-bundle.css-6c8484e5.js";import"./index-bcb17bb7.js";import"./index-793dec2b.js";import"./Title-53f5d1e4.js";import"./index-3da82763.js";import"./ListItemBase-8f94593b.js";import"./ItemNavigation-5bb0bc27.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-30d2b934.js";import"./index-f8eb446a.js";import"./StandardListItem-e433cbf1.js";import"./ListItem-237bd455.js";import"./RadioButton-894dc7d7.js";import"./CheckBox-e4c9f0e7.js";import"./accept-b3993803.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-f2ee719f.js";const x=`## Structure

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
`;function te(n={}){const{wrapper:t}=Object.assign({},a(),n.components);return t?o.jsx(t,Object.assign({},n,{children:o.jsx(i,{})})):i();function i(){const e=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",a:"a",h1:"h1"},a(),n.components);return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:g}),`
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
`,o.jsx(c,{})]})}}export{te as default};
//# sourceMappingURL=Dialog-c9e9cfb3.js.map
