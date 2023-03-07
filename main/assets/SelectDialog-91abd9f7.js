import{j as o,a as r,F as c}from"./jsx-runtime-670450c2.js";import{C as l}from"./DomRefTable.module-075bf2d5.js";import{D as s}from"./DocsHeader-7989e4fc.js";import{F as d}from"./Footer-69a42fd0.js";import"./index-f1f749bf.js";import{D as h}from"./DomRefTable-09ce657e.js";import{M as g,C as p}from"./index-fb9c0e91.js";import{D as u}from"./DialogDomRef-ffa73df1.js";import{C as f,D as m,M as D}from"./SelectDialog.stories-5fe367eb.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-G4YQS2SV-4c374140.js";import"./iframe-e103fb9d.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-b0ce239d.js";import"./UI5Element-4f8793c9.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-c82262ef.js";import"./MarkedEvents-8627ed01.js";import"./decline-e7438d7e.js";import"./Icons-ad6f0d24.js";import"./class-map-5d8e4b2b.js";import"./Button-8fbc19ea.js";import"./Keys-3acbae73.js";import"./Device-208919c6.js";import"./index-da505e61.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-97ec0f64.js";import"./TableOfContent-1ecd06be.js";import"./index-4bf67b0b.js";import"./WrappingType-b81e595a.js";import"./index-3904d700.js";import"./Label-27ec0466.js";import"./Footer.module-c4f3b823.js";import"./index-aba46643.js";import"./Popover-84c1d886.js";import"./Integer-d9976c13.js";import"./PopupsCommon.css-2f3b9f5d.js";import"./FocusableElements-c64a83a7.js";import"./ResizeHandler-1dae7180.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./search-d97d6077.js";import"./CssSizeVariables-bd372cde.js";import"./index-99d317a4.js";import"./i18n-defaults-1f918df5.js";import"./I18nContext-bef5b452.js";import"./index-541b5900.js";import"./overflow-19c39e55.js";import"./stopPropagation-da74d54e.js";import"./index-f66f3f51.js";import"./ToggleButton-63576987.js";import"./CustomVariables-fd831c35.js";import"./debounce-5c77766a.js";import"./index-f94b3c3b.js";import"./ListItemBase-c15c02a7.js";import"./ItemNavigation-4c4dc0f2.js";import"./TabbableElements-c3d95d8d.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-fb622f11.js";import"./index-3a6e2ab6.js";import"./Dialog-846d1fb6.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-22e45419.js";import"./index-6ee26003.js";import"./Title-4c33d979.js";import"./index-f582195c.js";import"./Input-918ad206.js";import"./Suggestions.css-188a0406.js";import"./ResponsivePopoverCommon.css-b406725f.js";import"./ValueStateMessage.css-e8026e78.js";import"./index-6c4a37df.js";import"./index-33f9eee5.js";import"./StandardListItem-089df25b.js";import"./ListItem-efa04b9c.js";import"./RadioButton-5efc72cd.js";import"./CheckBox-d7672a83.js";import"./accept-a7f2d970.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-fdb534c0.js";import"./Avatar-6d4f44b6.js";import"./employee-fe809d4d.js";function dt(i={}){const{wrapper:e}=Object.assign({},a(),i.components);return e?o(e,Object.assign({},i,{children:o(n,{})})):n();function n(){const t=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",h3:"h3"},a(),i.components);return r(c,{children:[o(g,{of:f}),`
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
`,o(d,{})]})}}export{dt as default};
//# sourceMappingURL=SelectDialog-91abd9f7.js.map
