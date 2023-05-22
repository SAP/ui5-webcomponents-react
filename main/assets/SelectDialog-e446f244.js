import{j as o}from"./jsx-runtime-5926aa06.js";import{C as s}from"./DomRefTable.module-bc62f23f.js";import{D as c}from"./DocsHeader-4869cdbe.js";import{F as a}from"./Footer-964cd981.js";import"./index-ebeaab24.js";import{D as l}from"./DomRefTable-781a1433.js";import{M as d,C as n}from"./chunk-PCJTTTQV-d2256553.js";import{D as h}from"./DialogDomRef-ffa73df1.js";import{C as g,D as p,M as x}from"./SelectDialog.stories-48babcf4.js";import{u as m}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-3569cdee.js";import"./iframe-acb875ce.js";import"../sb-preview/runtime.js";import"./UI5Element-784c80b7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d61dcbbc.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-a5230073.js";import"./Icons-e56d104a.js";import"./decline-1806c5c4.js";import"./i18n-defaults-80781f7e.js";import"./information-aaa07e0e.js";import"./class-map-519e9c6d.js";import"./Button-0cdf0df4.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./index-c65c86f0.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./Import-4fa6197a.js";import"./TableOfContent-46168952.js";import"./index-40ee5d30.js";import"./Link-d48f545c.js";import"./WrappingType-b81e595a.js";import"./index-ccbccf5a.js";import"./Label-07c40881.js";import"./index-9c09ad76.js";import"./index-600ec027.js";import"./Popover-6674202f.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6cc8839e.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-586317d0.js";import"./FocusableElements-9503dbb2.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-12b70099.js";import"./ResizeHandler-846eb684.js";import"./MediaRange-25b98f31.js";import"./style-map-33b353d0.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./search-5ac7b830.js";import"./CssSizeVariables-bd372cde.js";import"./index-99d317a4.js";import"./i18n-defaults-b56a0b3b.js";import"./I18nContext-cdb50611.js";import"./index-e76d2371.js";import"./overflow-ccfa1b27.js";import"./stopPropagation-da74d54e.js";import"./index-0f60b110.js";import"./ToggleButton-102a0cd2.js";import"./CustomVariables-fd831c35.js";import"./debounce-ab129990.js";import"./index-efc4d388.js";import"./ListItemBase-1b8f200b.js";import"./ItemNavigation-18d1bc39.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-9f101f31.js";import"./index-7e0d2851.js";import"./Dialog-26e9357a.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-944279fd.js";import"./index-e1a994c2.js";import"./Title-693a182d.js";import"./index-a182e781.js";import"./Input-04e2cdde.js";import"./Suggestions.css-4e0c49ee.js";import"./ResponsivePopoverCommon.css-b43b8141.js";import"./ValueStateMessage.css-202e3b47.js";import"./index-37282e5a.js";import"./index-24a8d954.js";import"./StandardListItem-a4dacc1d.js";import"./ListItem-69faf8c2.js";import"./RadioButton-8f2ea794.js";import"./CheckBox-0dc7f77e.js";import"./accept-83b05845.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-62d048e9.js";import"./Avatar-b9c0c6ae.js";import"./employee-0da36253.js";function gt(i={}){const{wrapper:e}=Object.assign({},m(),i.components);return e?o.jsx(e,Object.assign({},i,{children:o.jsx(r,{})})):r();function r(){const t=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",h3:"h3"},m(),i.components);return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:g}),`
`,o.jsx(c,{}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(n,{of:p}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(s,{of:p}),`
`,o.jsx(l,{rows:h}),`
`,o.jsx(t.h2,{id:"opening-selectdialogs",children:"Opening SelectDialogs"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h4,{id:"since-0220",children:"since 0.22.0"}),`
`,o.jsxs(t.p,{children:["We recommend opening and closing the ",o.jsx(t.code,{children:"SelectDialog"})," component in a declarative way using the ",o.jsx(t.code,{children:"open"}),` prop.
You can still use the imperative way which is outlined below.`]}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`const MyComponentWithSelectDialog = () => {
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
`,o.jsx(t.h4,{id:"before-0220",children:"before 0.22.0"}),`
`,o.jsxs(t.p,{children:[o.jsx(t.code,{children:"SelectDialog"}),"s can be opened by attaching a ",o.jsx(t.code,{children:"ref"})," to the component and then calling the corresponding ",o.jsx(t.strong,{children:o.jsx(t.code,{children:"show"})})," method."]}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`const SelectDialogComponent = () => {
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
`,o.jsx(t.h2,{id:"more-examples",children:"More Examples"}),`
`,o.jsx(t.h3,{id:"selectdialog-in-multiselect-mode-with-search",children:"SelectDialog in MultiSelect mode with search"}),`
`,o.jsx(n,{of:x}),`
`,o.jsx(a,{})]})}}export{gt as default};
//# sourceMappingURL=SelectDialog-e446f244.js.map
