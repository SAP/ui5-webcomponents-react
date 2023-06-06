import{j as o}from"./jsx-runtime-5926aa06.js";import{C as s}from"./DomRefTable.module-bfa916b8.js";import{D as c}from"./DocsHeader-89a8fe35.js";import{F as a}from"./Footer-b7431144.js";import"./index-ebeaab24.js";import{D as l}from"./DomRefTable-c146a737.js";import{M as d,C as n}from"./chunk-PCJTTTQV-08f35eb0.js";import{D as h}from"./DialogDomRef-ffa73df1.js";import{C as g,D as p,M as x}from"./SelectDialog.stories-5fdeacdb.js";import{u as m}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-a1bdeb54.js";import"./iframe-529e6a99.js";import"../sb-preview/runtime.js";import"./UI5Element-a8445a25.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-884f99a7.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-3e9cb840.js";import"./Icons-c55d12a5.js";import"./decline-c4793abd.js";import"./i18n-defaults-80781f7e.js";import"./information-e6fe8610.js";import"./class-map-323a92fb.js";import"./Button-f1768a08.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-fca59c5d.js";import"./index-4c0ab015.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./TableOfContent-5a74e7cc.js";import"./index-31193b6d.js";import"./Link-8b80096c.js";import"./WrappingType-b81e595a.js";import"./index-4ee949ab.js";import"./Label-6cefa2d2.js";import"./index-9c09ad76.js";import"./index-ffa785e6.js";import"./Popover-2f417d64.js";import"./Integer-f7f172c9.js";import"./PopupUtils-b38c74c1.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-3239006e.js";import"./FocusableElements-69e44a9d.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-cea672cf.js";import"./MediaRange-25b98f31.js";import"./style-map-34e6b8f4.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./search-f615ea70.js";import"./CssSizeVariables-02fb2fd8.js";import"./index-99d317a4.js";import"./i18n-defaults-2b7c3fd4.js";import"./I18nContext-cdb50611.js";import"./index-081894bd.js";import"./overflow-0acb02d1.js";import"./stopPropagation-da74d54e.js";import"./index-1fd6a64e.js";import"./ToggleButton-49eb273a.js";import"./CustomVariables-fd831c35.js";import"./debounce-c13310e6.js";import"./index-74fc3b36.js";import"./ListItemBase-124add92.js";import"./ItemNavigation-cb92b87f.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-8d822d0c.js";import"./index-996871bf.js";import"./Dialog-effa1776.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-87873df2.js";import"./index-e1589f6e.js";import"./Title-a5ea80a2.js";import"./index-5c532abf.js";import"./Input-c2f4aa77.js";import"./Suggestions.css-2ef2fda5.js";import"./ResponsivePopoverCommon.css-04f065a8.js";import"./ValueStateMessage.css-111bf458.js";import"./index-4b94c4a9.js";import"./index-6b7d80ea.js";import"./StandardListItem-8dc8c287.js";import"./ListItem-a92cce8b.js";import"./RadioButton-021a694f.js";import"./CheckBox-33235970.js";import"./accept-2ae5e2eb.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-70b47038.js";import"./Avatar-3e4df27c.js";import"./employee-d55343ff.js";function dt(i={}){const{wrapper:e}=Object.assign({},m(),i.components);return e?o.jsx(e,Object.assign({},i,{children:o.jsx(r,{})})):r();function r(){const t=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",h3:"h3"},m(),i.components);return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:g}),`
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
`,o.jsx(a,{})]})}}export{dt as default};
//# sourceMappingURL=SelectDialog-4a308490.js.map
