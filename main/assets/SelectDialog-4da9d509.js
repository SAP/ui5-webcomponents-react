import{j as o,a as r,F as c}from"./jsx-runtime-670450c2.js";import{C as l}from"./DomRefTable.module-30f3bd43.js";import{D as s}from"./DocsHeader-ce92ab0e.js";import{F as d}from"./Footer-c8244a58.js";import"./index-f1f749bf.js";import{D as h}from"./DomRefTable-02666777.js";import{M as g,C as p}from"./index-02423177.js";import{D as u}from"./DialogDomRef-ffa73df1.js";import{C as f,D as m,M as D}from"./SelectDialog.stories-a253345d.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-4XCFV5WA-0265c491.js";import"./iframe-3c157cf7.js";import"../sb-preview/runtime.mjs";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-9d4f0257.js";import"./UI5Element-5c53814f.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-b8903b2e.js";import"./utils-ed90fb1b.js";import"./AriaLabelHelper-dee23f38.js";import"./MarkedEvents-f33713fa.js";import"./decline-2be11c85.js";import"./Icons-0f428547.js";import"./class-map-a4eccd4f.js";import"./Button-6ca701be.js";import"./Keys-50a1cb5a.js";import"./index-6923d62a.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-60eb1828.js";import"./TableOfContent-75175b8f.js";import"./index-63e4052b.js";import"./WrappingType-b81e595a.js";import"./index-bd49c23e.js";import"./Label-aecaa844.js";import"./Media-6b270b80.js";import"./MediaRange-25b98f31.js";import"./index-0db28cca.js";import"./Popover-e3c8ecec.js";import"./Integer-44c9be94.js";import"./FocusableElements-679e4fb9.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-da7c4a52.js";import"./style-map-f4770aeb.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./search-6cc41abf.js";import"./CssSizeVariables-bd372cde.js";import"./index-99d317a4.js";import"./i18n-defaults-15e6b3e0.js";import"./I18nContext-bef5b452.js";import"./index-452350f1.js";import"./overflow-332f7cb9.js";import"./stopPropagation-da74d54e.js";import"./index-dac912d1.js";import"./ToggleButton-78a2795e.js";import"./CustomVariables-fd831c35.js";import"./debounce-5c77766a.js";import"./index-3f70bd96.js";import"./ListItemBase-4b52d1f0.js";import"./ItemNavigation-1cd3f78d.js";import"./fastNavigation-ebf07f1c.js";import"./TabbableElements-52be7164.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-3e5a8ca3.js";import"./index-13e5e145.js";import"./Dialog-32c7096e.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-373748a1.js";import"./index-8ff8581d.js";import"./Title-fb9c1aba.js";import"./index-83ae6b46.js";import"./Input-2c7cf5dc.js";import"./Suggestions.css-af656ac7.js";import"./ResponsivePopoverCommon.css-1186d6a9.js";import"./ValueStateMessage.css-57760618.js";import"./index-f7b539e8.js";import"./index-eb6fe343.js";import"./StandardListItem-ddbc126c.js";import"./ListItem-bdb92faa.js";import"./RadioButton-71b27f26.js";import"./CheckBox-9f80be56.js";import"./accept-4d6b88bc.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-ac6f9b0d.js";import"./Avatar-e191e45f.js";import"./employee-01ecb76e.js";function lt(i={}){const{wrapper:e}=Object.assign({},a(),i.components);return e?o(e,Object.assign({},i,{children:o(n,{})})):n();function n(){const t=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",h3:"h3"},a(),i.components);return r(c,{children:[o(g,{of:f}),`
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
`,o(d,{})]})}}export{lt as default};
//# sourceMappingURL=SelectDialog-4da9d509.js.map
