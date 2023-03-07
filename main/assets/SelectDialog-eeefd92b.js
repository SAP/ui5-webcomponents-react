import{j as o,a as r,F as c}from"./jsx-runtime-670450c2.js";import{C as l}from"./DomRefTable.module-f90a1284.js";import{D as s}from"./DocsHeader-5b523b99.js";import{F as d}from"./Footer-cb200abc.js";import"./index-f1f749bf.js";import{D as h}from"./DomRefTable-a2e7e5aa.js";import{M as g,C as p}from"./index-43922050.js";import{D as u}from"./DialogDomRef-ffa73df1.js";import{C as f,D as m,M as D}from"./SelectDialog.stories-2bbadec5.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-G4YQS2SV-a125d30f.js";import"./iframe-ea3a93fd.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-fe4dc3ff.js";import"./inheritsLoose-93e09647.js";import"./index-4f072a6d.js";import"./UI5Element-eb05fed8.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-c82262ef.js";import"./MarkedEvents-8627ed01.js";import"./decline-0a22f866.js";import"./Icons-8637bdfe.js";import"./class-map-5d8e4b2b.js";import"./Button-8cfaf72a.js";import"./Keys-3acbae73.js";import"./Device-208919c6.js";import"./index-1d945bd3.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-95e3d886.js";import"./TableOfContent-7b57719c.js";import"./index-f57edce5.js";import"./WrappingType-b81e595a.js";import"./index-b2c1542f.js";import"./Label-6255dce9.js";import"./Footer.module-c4f3b823.js";import"./index-d9205786.js";import"./Popover-3083ea67.js";import"./Integer-d9976c13.js";import"./PopupsCommon.css-f9f23bc7.js";import"./FocusableElements-44b79fcc.js";import"./ResizeHandler-a25182c3.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./search-cbb5fba0.js";import"./CssSizeVariables-bd372cde.js";import"./index-99d317a4.js";import"./i18n-defaults-5a38197e.js";import"./I18nContext-bef5b452.js";import"./index-2a5a163c.js";import"./overflow-9726de47.js";import"./stopPropagation-da74d54e.js";import"./index-3ced47f8.js";import"./ToggleButton-071ada2a.js";import"./CustomVariables-fd831c35.js";import"./debounce-5c77766a.js";import"./index-ee118db6.js";import"./ListItemBase-734ff571.js";import"./ItemNavigation-c55a00e7.js";import"./TabbableElements-297bf359.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-a479e128.js";import"./index-a3f5b1ff.js";import"./Dialog-fddee574.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-af7fe0eb.js";import"./index-444bf5a3.js";import"./Title-cb40e614.js";import"./index-df031f2b.js";import"./Input-0fd7f96f.js";import"./Suggestions.css-6778036a.js";import"./ResponsivePopoverCommon.css-0f307ec8.js";import"./ValueStateMessage.css-b9603d7a.js";import"./index-ed445b33.js";import"./index-36b7992a.js";import"./StandardListItem-b41e01b6.js";import"./ListItem-3abb0ad1.js";import"./RadioButton-f9cd6c52.js";import"./CheckBox-9723ff68.js";import"./accept-c855adf5.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-ccfb1ccc.js";import"./Avatar-e5971732.js";import"./employee-dc8e6c76.js";function dt(i={}){const{wrapper:e}=Object.assign({},a(),i.components);return e?o(e,Object.assign({},i,{children:o(n,{})})):n();function n(){const t=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",h3:"h3"},a(),i.components);return r(c,{children:[o(g,{of:f}),`
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
//# sourceMappingURL=SelectDialog-eeefd92b.js.map
