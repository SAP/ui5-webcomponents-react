import{j as o,a as e,F as s}from"./jsx-runtime-670450c2.js";import{C as c}from"./DomRefTable.module-732063cf.js";import{D as m}from"./DocsHeader-d0ff5f2c.js";import{F as d}from"./Footer-967e4034.js";import"./index-f1f749bf.js";import{D as h}from"./DomRefTable-ba7f718f.js";import{M as g,C as a,a as u}from"./chunk-PCJTTTQV-4e2a290c.js";import{C as f,a as l,W as D}from"./Dialog.stories-a972a6e0.js";import{D as C}from"./DialogDomRef-ffa73df1.js";import{u as p}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-27a3e460.js";import"./iframe-3c11358c.js";import"../sb-preview/runtime.mjs";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-76e48863.js";import"./Icon-27a81412.js";import"./Icons-5b18f7d2.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./class-map-6d48ebd3.js";import"./Button-fa05cadd.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-44cc9c22.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-d30419cd.js";import"./TableOfContent-c3028cc3.js";import"./index-e6db3aaf.js";import"./Link-3b8926df.js";import"./WrappingType-b81e595a.js";import"./index-877e5a6f.js";import"./Label-528b8168.js";import"./index-96c5f47c.js";import"./index-95ec74dd.js";import"./Popover-824d4d7c.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7f720278.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-382f34a2.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./settings-456fc51a.js";import"./index-d49f21eb.js";import"./Dialog-610dd06c.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-7921b2cc.js";import"./StandardListItem-38cf6758.js";import"./ListItem-843af2c9.js";import"./ListItemBase-780d7053.js";import"./ItemNavigation-01761450.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-c375cd19.js";import"./RadioButton-412fbbc0.js";import"./CheckBox-f0072def.js";import"./accept-9744f30a.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-78d167a6.js";import"./Avatar-0d8d2b25.js";import"./employee-0153a597.js";import"./index-5f409dd1.js";import"./index-e74e0abe.js";import"./Bar-b186f469.js";import"./parameters-bundle.css-6b4a2ffb.js";import"./index-cf3696d2.js";import"./index-b4224c64.js";import"./Title-0440ec3f.js";import"./index-da2d3436.js";const w=`## Structure

A \`Dialog\` consists of a header, content, and a footer for action buttons. The \`Dialog\` is usually displayed at the center of the screen. Its position can be changed by the user. To enable this, you need to set the property \`draggable\` accordingly.

## Responsive Behavior

The \`stretch\` property can be used to stretch the \`Dialog\` on full screen.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`Dialog\` exposes the following CSS Shadow Parts:

- header - Used to style the header of the component
- content - Used to style the content of the component
- footer - Used to style the footer of the component
`;function pn(t={}){const{wrapper:i}=Object.assign({},p(),t.components);return i?o(i,Object.assign({},t,{children:o(r,{})})):r();function r(){const n=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",a:"a",h1:"h1"},p(),t.components);return e(s,{children:[o(g,{of:f}),`
`,o(m,{}),`
`,o("br",{}),`
`,o(n.h2,{id:"example",children:"Example"}),`
`,o(a,{of:l}),`
`,o(n.h2,{id:"properties",children:"Properties"}),`
`,o(c,{of:l}),`
`,o(u,{children:w}),`
`,o(h,{rows:C}),`
`,o(n.h2,{id:"opening-dialogs",children:"Opening Dialogs"}),`
`,o("br",{}),`
`,o(n.h4,{id:"since-0220",children:"since 0.22.0"}),`
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
`,o(n.h4,{id:"before-0220",children:"before 0.22.0"}),`
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
`,o(n.h2,{id:"using-dialogs-inside-other-components",children:"Using Dialogs inside other components"}),`
`,e(n.p,{children:[o(n.code,{children:"Dialogs"}),` are often used within other components, when opened this could sometimes have unwanted side effects.
In this case, we recommend using `,o(n.a,{href:"https://reactjs.org/docs/portals.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"createPortal"})," to mount the ",o(n.code,{children:"Dialog"})," outside of the DOM hierarchy of the parent component."]}),`
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
`,o(n.h2,{id:"closing-dialogs",children:"Closing Dialogs"}),`
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
`,o(n.h1,{id:"more-examples",children:"More Examples"}),`
`,o(n.h2,{id:"dialog-with-content",children:"Dialog with content"}),`
`,o(a,{of:D}),`
`,o(d,{})]})}}export{pn as default};
//# sourceMappingURL=Dialog-6bcdefaf.js.map
