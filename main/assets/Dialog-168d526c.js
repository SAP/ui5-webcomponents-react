import{j as o,a as e,F as s}from"./jsx-runtime-670450c2.js";import{C as c}from"./DomRefTable.module-796e5b92.js";import{D as m}from"./DocsHeader-275d7057.js";import{F as h}from"./Footer-c24922c1.js";import"./index-f1f749bf.js";import{D as d}from"./DomRefTable-c0cc069b.js";import{M as g,C as a,a as u}from"./index-4c6bc1d8.js";import{C as f,D as p,W as D}from"./Dialog.stories-bf3ff31a.js";import{D as C}from"./DialogDomRef-ffa73df1.js";import{u as l}from"./index-4fb8b842.js";import"./chunk-PCJTTTQV-e4b5f208.js";import"./iframe-62981b78.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-fe4dc3ff.js";import"./inheritsLoose-93e09647.js";import"./index-a1d9006c.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-c82262ef.js";import"./i18n-defaults-ffd92f69.js";import"./decline-5eb6d937.js";import"./Icons-7b82f601.js";import"./i18n-defaults-7dff8409.js";import"./information-0837f136.js";import"./class-map-5d8e4b2b.js";import"./Icon-ce854b74.js";import"./Keys-3acbae73.js";import"./Button-b2f5d653.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./index-cbb29537.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-6eff54b4.js";import"./TableOfContent-6d559a7d.js";import"./index-6328c9d9.js";import"./Link-4cf74d63.js";import"./WrappingType-b81e595a.js";import"./index-87d6c211.js";import"./Label-040efebd.js";import"./Footer.module-f90cad7d.js";import"./index-6454d6ca.js";import"./Popover-9656b900.js";import"./Integer-d9976c13.js";import"./PopupsCommon.css-ff32b102.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./settings-109f4c28.js";import"./index-8ae00df0.js";import"./Dialog-d6ad04fd.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-12eee4c1.js";import"./index-656b71e2.js";import"./Bar-2267974f.js";import"./fastNavigation-8b41cdda.js";import"./parameters-bundle.css-6b4a2ffb.js";import"./index-f4287294.js";import"./index-ade1837c.js";import"./Title-b986a4bd.js";import"./index-9c0de43f.js";import"./ListItemBase-bb5cef12.js";import"./ItemNavigation-9e1aa83a.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-aae87d2c.js";import"./index-a0b96134.js";import"./StandardListItem-d455eb22.js";import"./ListItem-1aa125fd.js";import"./RadioButton-9df6ded1.js";import"./CheckBox-4b130a30.js";import"./accept-a98baca8.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-bbef5919.js";import"./Avatar-88715af2.js";import"./employee-98ce1b38.js";const w=`## Structure

A \`Dialog\` consists of a header, content, and a footer for action buttons. The \`Dialog\` is usually displayed at the center of the screen. Its position can be changed by the user. To enable this, you need to set the property \`draggable\` accordingly.

## Responsive Behavior

The \`stretch\` property can be used to stretch the \`Dialog\` on full screen.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`Dialog\` exposes the following CSS Shadow Parts:

*   header - Used to style the header of the component
*   content - Used to style the content of the component
*   footer - Used to style the footer of the component`;function cn(t={}){const{wrapper:i}=Object.assign({},l(),t.components);return i?o(i,Object.assign({},t,{children:o(r,{})})):r();function r(){const n=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",a:"a",h1:"h1"},l(),t.components);return e(s,{children:[o(g,{of:f}),`
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
`,o(h,{})]})}}export{cn as default};
//# sourceMappingURL=Dialog-168d526c.js.map
