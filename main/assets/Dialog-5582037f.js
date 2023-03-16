import{j as o,a as e,F as s}from"./jsx-runtime-670450c2.js";import{C as c}from"./DomRefTable.module-d7b11fb4.js";import{D as m}from"./DocsHeader-90dfdee9.js";import{F as h}from"./Footer-78bfc988.js";import"./index-f1f749bf.js";import{D as d}from"./DomRefTable-8584a56a.js";import{M as g,C as a,a as u}from"./chunk-PCJTTTQV-071005ae.js";import{C as f,a as p,W as D}from"./Dialog.stories-bc2c622c.js";import{D as C}from"./DialogDomRef-ffa73df1.js";import{u as l}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-9e309682.js";import"./iframe-cdc5f22c.js";import"../sb-preview/runtime.mjs";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-65cd39a0.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./Icon-7987c836.js";import"./Icons-fe6e657a.js";import"./decline-6bd98a2e.js";import"./i18n-defaults-80781f7e.js";import"./information-b6c8ed8e.js";import"./class-map-95320e87.js";import"./Button-bc3a11a1.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-b4aa831c.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-26eece03.js";import"./TableOfContent-6466379d.js";import"./index-14d24bea.js";import"./Link-018547e8.js";import"./WrappingType-b81e595a.js";import"./index-adf81736.js";import"./Label-ccc234fe.js";import"./index-96c5f47c.js";import"./index-24ae1121.js";import"./Popover-224d761a.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-9873a291.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-1da6d0d2.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-cae0a379.js";import"./react-18-ecd79c7b.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./settings-f4b98acd.js";import"./index-746be5b2.js";import"./Dialog-43ec4fb1.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-e726d825.js";import"./StandardListItem-ac3f40c5.js";import"./ListItem-83c0fb9e.js";import"./ListItemBase-a0bc6999.js";import"./ItemNavigation-8e291cfa.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-15ff681f.js";import"./RadioButton-a8c23c83.js";import"./CheckBox-80dd6e5f.js";import"./accept-d8c33d70.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-52a56681.js";import"./Avatar-7e1d4e21.js";import"./employee-1bc983a2.js";import"./index-537ab872.js";import"./index-4bd09017.js";import"./Bar-78c6a88f.js";import"./fastNavigation-8b41cdda.js";import"./parameters-bundle.css-6b4a2ffb.js";import"./index-d9b0adcc.js";import"./index-270d60a4.js";import"./Title-129aeb28.js";import"./index-e523c7d3.js";const w=`## Structure

A \`Dialog\` consists of a header, content, and a footer for action buttons. The \`Dialog\` is usually displayed at the center of the screen. Its position can be changed by the user. To enable this, you need to set the property \`draggable\` accordingly.

## Responsive Behavior

The \`stretch\` property can be used to stretch the \`Dialog\` on full screen.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`Dialog\` exposes the following CSS Shadow Parts:

*   header - Used to style the header of the component
*   content - Used to style the content of the component
*   footer - Used to style the footer of the component`;function sn(t={}){const{wrapper:i}=Object.assign({},l(),t.components);return i?o(i,Object.assign({},t,{children:o(r,{})})):r();function r(){const n=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",a:"a",h1:"h1"},l(),t.components);return e(s,{children:[o(g,{of:f}),`
`,o(m,{}),`
`,o("br",{}),`
`,o(n.h2,{children:"Example"}),`
`,o(a,{of:p}),`
`,o(n.h2,{children:"Properties"}),`
`,o(c,{of:p}),`
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
`,o(h,{})]})}}export{sn as default};
//# sourceMappingURL=Dialog-5582037f.js.map
