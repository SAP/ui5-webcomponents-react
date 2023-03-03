import{j as o,a as r,F as c}from"./jsx-runtime-670450c2.js";import{C as l}from"./DomRefTable.module-f2d37632.js";import{D as s}from"./DocsHeader-418e4008.js";import{F as d}from"./Footer-d7beaea3.js";import"./index-f1f749bf.js";import{D as h}from"./DomRefTable-d3ea4065.js";import{M as g,C as p}from"./index-0e8f60d5.js";import{D as u}from"./DialogDomRef-ffa73df1.js";import{C as f,D as m,M as D}from"./SelectDialog.stories-4120e433.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-G4YQS2SV-386e3cad.js";import"./iframe-3591d0cc.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-6f8afb28.js";import"./UI5Element-727d48d7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-63dd52a0.js";import"./utils-ed90fb1b.js";import"./AriaLabelHelper-dee23f38.js";import"./MarkedEvents-0e37da6f.js";import"./decline-ff534003.js";import"./Icons-5bcf1e3f.js";import"./class-map-abcca105.js";import"./Button-2e5054c2.js";import"./Keys-50a1cb5a.js";import"./index-6923d62a.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-58164062.js";import"./TableOfContent-b30f071b.js";import"./index-036cdf6d.js";import"./WrappingType-b81e595a.js";import"./index-46cb378d.js";import"./Label-6707bdfc.js";import"./Footer.module-c4f3b823.js";import"./index-82591e11.js";import"./Popover-97ca01c1.js";import"./Integer-8010a7ae.js";import"./FocusableElements-5a723910.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-c56abc92.js";import"./MediaRange-25b98f31.js";import"./style-map-7b3eb5df.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./search-d68d0f2f.js";import"./CssSizeVariables-bd372cde.js";import"./index-99d317a4.js";import"./i18n-defaults-a62b2e2b.js";import"./I18nContext-bef5b452.js";import"./index-359ce472.js";import"./overflow-1ae87508.js";import"./stopPropagation-da74d54e.js";import"./index-4ab6ea33.js";import"./ToggleButton-a83fc587.js";import"./CustomVariables-fd831c35.js";import"./debounce-5c77766a.js";import"./index-9cdadb01.js";import"./ListItemBase-ef18a748.js";import"./ItemNavigation-4b509b49.js";import"./fastNavigation-ebf07f1c.js";import"./TabbableElements-21c27087.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-59c61392.js";import"./index-7270ade0.js";import"./Dialog-859ab2f5.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-8f4444ac.js";import"./index-88309a6c.js";import"./Title-18f6d5a1.js";import"./index-a23c9bf5.js";import"./Input-a6aac6bd.js";import"./Suggestions.css-1f63061d.js";import"./ResponsivePopoverCommon.css-bc05f183.js";import"./ValueStateMessage.css-6e86a950.js";import"./index-4878dccf.js";import"./index-9a3bdb90.js";import"./StandardListItem-cb5818d4.js";import"./ListItem-9550e3d3.js";import"./RadioButton-d0c7abe6.js";import"./CheckBox-2890456e.js";import"./accept-70258933.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-a1b07349.js";import"./Avatar-b22f5314.js";import"./employee-10cd14ab.js";function st(i={}){const{wrapper:e}=Object.assign({},a(),i.components);return e?o(e,Object.assign({},i,{children:o(n,{})})):n();function n(){const t=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",h3:"h3"},a(),i.components);return r(c,{children:[o(g,{of:f}),`
`,o(s,{}),`
`,o("br",{}),`
`,o(t.h2,{children:"Example"}),`
`,o(p,{of:m}),`
`,o(t.h2,{children:"Properties"}),`
`,o(l,{of:m}),`
`,o(h,{rows:u}),`
`,o(t.h2,{children:"Opening SelectDialogs"}),`
`,o("br",{}),`
`,o(t.h4,{children:"since 0.22.0"}),`
`,r(t.p,{children:["We recommend opening and closing the ",o(t.code,{children:"SelectDialog"})," component in a declarative way using the ",o(t.code,{children:"open"}),` prop.
You can still use the imperative way which is outlined below.`]}),`
`,o(t.pre,{children:o(t.code,{className:"language-jsx",children:`const MyComponentWithSelectDialog = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setDialogIsOpen(true);
        }}
      >
        Open SelectDialog
      </Button>
      <SelectDialog open={dialogIsOpen} headerText="Select Product">
        <StandardListItem image="pathToImg" description="description">
          Product
        </StandardListItem>
      </SelectDialog>
    </>
  );
};
`})}),`
`,o(t.h4,{children:"before 0.22.0"}),`
`,r(t.p,{children:[o(t.code,{children:"SelectDialog"}),"s can be opened by attaching a ",o(t.code,{children:"ref"})," to the component and then calling the corresponding ",o(t.strong,{children:o(t.code,{children:"show"})})," method."]}),`
`,o(t.pre,{children:o(t.code,{className:"language-jsx",children:`const SelectDialogComponent = () => {
  const dialogRef = useRef(null);
  const onButtonClick = () => {
    dialogRef.current.show();
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open SelectDialog</Button>
      <SelectDialog ref={dialogRef} headerText="Select Product">
        <StandardListItem image="pathToImg" description="description">
          Product
        </StandardListItem>
      </SelectDialog>
    </>
  );
};
`})}),`
`,o(t.h2,{children:"More Examples"}),`
`,o(t.h3,{children:"SelectDialog in MultiSelect mode with search"}),`
`,o(p,{of:D}),`
`,o(d,{})]})}}export{st as default};
//# sourceMappingURL=SelectDialog-c5b78d25.js.map
