import{j as o,a as r,F as c}from"./jsx-runtime-670450c2.js";import{C as l}from"./DomRefTable.module-9a9ff34b.js";import{D as s}from"./DocsHeader-c5a3abb5.js";import{F as d}from"./Footer-7f457475.js";import"./index-f1f749bf.js";import{D as h}from"./DomRefTable-ee568ef3.js";import{M as g,C as p}from"./index-bc5dd318.js";import{D as u}from"./DialogDomRef-ffa73df1.js";import{C as f,D as m,M as D}from"./SelectDialog.stories-7b946739.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-PCJTTTQV-7a3eb077.js";import"./iframe-e0204f0d.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-fe4dc3ff.js";import"./inheritsLoose-93e09647.js";import"./index-195fa335.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-c82262ef.js";import"./i18n-defaults-ffd92f69.js";import"./decline-5eb6d937.js";import"./Icons-7b82f601.js";import"./i18n-defaults-7dff8409.js";import"./information-0837f136.js";import"./class-map-5d8e4b2b.js";import"./Icon-ce854b74.js";import"./Keys-3acbae73.js";import"./Button-b2f5d653.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./index-5cbed584.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-b13c67a4.js";import"./TableOfContent-1593fab8.js";import"./index-2d96caf1.js";import"./WrappingType-b81e595a.js";import"./index-bdbf428d.js";import"./Label-040efebd.js";import"./Footer.module-f90cad7d.js";import"./index-94872efc.js";import"./Popover-9656b900.js";import"./Integer-d9976c13.js";import"./PopupsCommon.css-ff32b102.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./search-7b988f7f.js";import"./CssSizeVariables-bd372cde.js";import"./index-99d317a4.js";import"./i18n-defaults-41f1487d.js";import"./I18nContext-bef5b452.js";import"./index-7c5aa9d2.js";import"./overflow-3d929a36.js";import"./stopPropagation-da74d54e.js";import"./index-da7ca040.js";import"./ToggleButton-8a27b40c.js";import"./CustomVariables-fd831c35.js";import"./debounce-5c77766a.js";import"./index-9a6ea711.js";import"./ListItemBase-bb5cef12.js";import"./ItemNavigation-9e1aa83a.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-aae87d2c.js";import"./index-07710d8f.js";import"./Dialog-d6ad04fd.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-ae104e20.js";import"./index-07b3c2eb.js";import"./Title-b986a4bd.js";import"./index-4ffbf66f.js";import"./Input-a63fd7df.js";import"./Suggestions.css-faab6178.js";import"./ResponsivePopoverCommon.css-187e38b6.js";import"./ValueStateMessage.css-37773c69.js";import"./index-59f5e9ce.js";import"./index-4e293a18.js";import"./StandardListItem-d455eb22.js";import"./ListItem-1aa125fd.js";import"./RadioButton-9df6ded1.js";import"./CheckBox-4b130a30.js";import"./accept-a98baca8.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-bbef5919.js";import"./Avatar-88715af2.js";import"./employee-98ce1b38.js";function St(i={}){const{wrapper:e}=Object.assign({},a(),i.components);return e?o(e,Object.assign({},i,{children:o(n,{})})):n();function n(){const t=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",h3:"h3"},a(),i.components);return r(c,{children:[o(g,{of:f}),`
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
`,o(d,{})]})}}export{St as default};
//# sourceMappingURL=SelectDialog-e35a0d25.js.map
