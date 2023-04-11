import{j as o,a as r,F as c}from"./jsx-runtime-670450c2.js";import{C as l}from"./DomRefTable.module-981d3edb.js";import{D as s}from"./DocsHeader-c8e8c292.js";import{F as d}from"./Footer-bd5ff639.js";import"./index-f1f749bf.js";import{D as h}from"./DomRefTable-79860df2.js";import{M as g,C as p}from"./chunk-PCJTTTQV-42db6d56.js";import{D as u}from"./DialogDomRef-ffa73df1.js";import{C as f,D as m,M as D}from"./SelectDialog.stories-ff55388a.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-a334410f.js";import"./iframe-60b58bb3.js";import"../sb-preview/runtime.mjs";import"./UI5Element-5e77b351.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-76e48863.js";import"./Icon-a70637b5.js";import"./Icons-85b0e9dd.js";import"./decline-07b4d490.js";import"./i18n-defaults-80781f7e.js";import"./information-bce3ba82.js";import"./class-map-6d48ebd3.js";import"./Button-35e7f923.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f9987b26.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-4c4ba252.js";import"./TableOfContent-57d7e08d.js";import"./index-a4d92329.js";import"./Link-8808efba.js";import"./WrappingType-b81e595a.js";import"./index-8363d649.js";import"./Label-e24223e9.js";import"./index-96c5f47c.js";import"./index-606314c1.js";import"./Popover-eac39f76.js";import"./Integer-f7f172c9.js";import"./PopupUtils-d0ec75b7.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-ab897c30.js";import"./FocusableElements-2da74965.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-b2c643e0.js";import"./ResizeHandler-653daa1f.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./search-af24379c.js";import"./CssSizeVariables-bd372cde.js";import"./index-99d317a4.js";import"./i18n-defaults-f914d614.js";import"./I18nContext-bef5b452.js";import"./index-175dd44e.js";import"./overflow-2c19be30.js";import"./stopPropagation-da74d54e.js";import"./index-f50261d3.js";import"./ToggleButton-f5871530.js";import"./CustomVariables-fd831c35.js";import"./debounce-bee6fd25.js";import"./index-2e42ec2a.js";import"./ListItemBase-b73c7fed.js";import"./ItemNavigation-316291cb.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-1df19c4b.js";import"./index-871c7e8b.js";import"./Dialog-0e44ed8a.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-8827afaf.js";import"./index-46c94151.js";import"./Title-07ee6300.js";import"./index-18e5bac4.js";import"./Input-70ea0aaf.js";import"./Suggestions.css-b7d020a7.js";import"./ResponsivePopoverCommon.css-19238fee.js";import"./ValueStateMessage.css-2737d025.js";import"./index-7ac4a8ad.js";import"./index-3b5a1284.js";import"./StandardListItem-2d39af82.js";import"./ListItem-3c89af96.js";import"./RadioButton-17175673.js";import"./CheckBox-c006676c.js";import"./accept-0670a13e.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-24b9c100.js";import"./Avatar-f4abe909.js";import"./employee-f8bb953b.js";function St(i={}){const{wrapper:e}=Object.assign({},a(),i.components);return e?o(e,Object.assign({},i,{children:o(n,{})})):n();function n(){const t=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",h3:"h3"},a(),i.components);return r(c,{children:[o(g,{of:f}),`
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
//# sourceMappingURL=SelectDialog-7a54f479.js.map
