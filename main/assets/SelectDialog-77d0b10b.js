import{j as o,a as r,F as c}from"./jsx-runtime-670450c2.js";import{C as l}from"./DomRefTable.module-3d83c57b.js";import{D as s}from"./DocsHeader-f65c67c8.js";import{F as d}from"./Footer-da37bb84.js";import"./index-f1f749bf.js";import{D as h}from"./DomRefTable-2b8db518.js";import{M as g,C as p}from"./chunk-PCJTTTQV-07df005d.js";import{D as u}from"./DialogDomRef-ffa73df1.js";import{C as f,D as m,M as D}from"./SelectDialog.stories-87e2355b.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-41cf13c7.js";import"./iframe-22f8d39f.js";import"../sb-preview/runtime.mjs";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-76e48863.js";import"./Icon-27a81412.js";import"./Icons-5b18f7d2.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./class-map-6d48ebd3.js";import"./Button-fa05cadd.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-44cc9c22.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-4c258798.js";import"./TableOfContent-8bbfd532.js";import"./index-d1663926.js";import"./Link-3b8926df.js";import"./WrappingType-b81e595a.js";import"./index-a3409209.js";import"./Label-528b8168.js";import"./index-96c5f47c.js";import"./index-cb46d963.js";import"./Popover-824d4d7c.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7f720278.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-382f34a2.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./search-f47cd12e.js";import"./CssSizeVariables-bd372cde.js";import"./index-99d317a4.js";import"./i18n-defaults-57d9744b.js";import"./I18nContext-bef5b452.js";import"./index-c7659433.js";import"./overflow-e82f5104.js";import"./stopPropagation-da74d54e.js";import"./index-2bd524e9.js";import"./ToggleButton-ed4cffda.js";import"./CustomVariables-fd831c35.js";import"./debounce-c3e37d29.js";import"./index-9793a9c2.js";import"./ListItemBase-780d7053.js";import"./ItemNavigation-01761450.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-c375cd19.js";import"./index-223ea19c.js";import"./Dialog-610dd06c.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-7acf7a6f.js";import"./index-4f7c4516.js";import"./Title-0440ec3f.js";import"./index-1041d22a.js";import"./Input-405066de.js";import"./Suggestions.css-1532b733.js";import"./ResponsivePopoverCommon.css-0466170a.js";import"./ValueStateMessage.css-7363aec7.js";import"./index-a8b5d89a.js";import"./index-49fa6164.js";import"./StandardListItem-38cf6758.js";import"./ListItem-843af2c9.js";import"./RadioButton-412fbbc0.js";import"./CheckBox-f0072def.js";import"./accept-9744f30a.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-78d167a6.js";import"./Avatar-0d8d2b25.js";import"./employee-0153a597.js";function St(i={}){const{wrapper:e}=Object.assign({},a(),i.components);return e?o(e,Object.assign({},i,{children:o(n,{})})):n();function n(){const t=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",h3:"h3"},a(),i.components);return r(c,{children:[o(g,{of:f}),`
`,o(s,{}),`
`,o("br",{}),`
`,o(t.h2,{id:"example",children:"Example"}),`
`,o(p,{of:m}),`
`,o(t.h2,{id:"properties",children:"Properties"}),`
`,o(l,{of:m}),`
`,o(h,{rows:u}),`
`,o(t.h2,{id:"opening-selectdialogs",children:"Opening SelectDialogs"}),`
`,o("br",{}),`
`,o(t.h4,{id:"since-0220",children:"since 0.22.0"}),`
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
`,o(t.h4,{id:"before-0220",children:"before 0.22.0"}),`
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
`,o(t.h2,{id:"more-examples",children:"More Examples"}),`
`,o(t.h3,{id:"selectdialog-in-multiselect-mode-with-search",children:"SelectDialog in MultiSelect mode with search"}),`
`,o(p,{of:D}),`
`,o(d,{})]})}}export{St as default};
//# sourceMappingURL=SelectDialog-77d0b10b.js.map
