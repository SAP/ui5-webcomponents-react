import{j as o}from"./jsx-runtime-5926aa06.js";import{C as s}from"./DomRefTable.module-ad47dab3.js";import{D as c}from"./DocsHeader-797aaec6.js";import{F as a}from"./Footer-f528fa13.js";import"./index-ebeaab24.js";import{D as l}from"./DomRefTable-7fcffefa.js";import{M as d,C as n}from"./chunk-PCJTTTQV-994f0cbc.js";import{D as h}from"./DialogDomRef-ffa73df1.js";import{C as g,D as p,M as x}from"./SelectDialog.stories-824e36b2.js";import{u as m}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-e3b2ee5c.js";import"./iframe-1f7bc337.js";import"../sb-preview/runtime.js";import"./UI5Element-533070c8.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-2e16c08b.js";import"./Icons-67fab4b0.js";import"./decline-1d33941a.js";import"./i18n-defaults-80781f7e.js";import"./information-e88b206d.js";import"./class-map-6a9bd920.js";import"./Button-21e98691.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-2f9956dc.js";import"./index-4c0ab015.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./TableOfContent-c76a74b2.js";import"./index-73c8b848.js";import"./Link-08f0fbaf.js";import"./WrappingType-b81e595a.js";import"./index-ddd6f982.js";import"./Label-94e3ba9d.js";import"./index-9c09ad76.js";import"./index-e9ea925e.js";import"./Popover-167ff704.js";import"./Integer-f7f172c9.js";import"./PopupUtils-ba2b770f.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-97917f6d.js";import"./FocusableElements-eec123c0.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-aaf74c24.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./search-777a05df.js";import"./CssSizeVariables-e51da639.js";import"./index-99d317a4.js";import"./i18n-defaults-00bdea17.js";import"./I18nContext-cdb50611.js";import"./index-4068e128.js";import"./overflow-37050d17.js";import"./stopPropagation-da74d54e.js";import"./index-661350dc.js";import"./ToggleButton-b0c1a404.js";import"./CustomVariables-d3e297a0.js";import"./debounce-a2c7a12f.js";import"./index-988b0430.js";import"./ListItemBase-bb0e7e03.js";import"./ItemNavigation-211cc58c.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-59389070.js";import"./index-b3c08cc4.js";import"./Dialog-e7dbd17a.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-ee36d6d0.js";import"./index-c25ed07d.js";import"./Title-2e442dfb.js";import"./index-78ebe79b.js";import"./Input-9f609064.js";import"./Suggestions.css-6a7a04ae.js";import"./ResponsivePopoverCommon.css-a7286400.js";import"./ValueStateMessage.css-ab874ec7.js";import"./index-1c30d59e.js";import"./index-41e05d3b.js";import"./StandardListItem-4965eb0f.js";import"./ListItem-fa446a08.js";import"./RadioButton-a0e5c6e9.js";import"./CheckBox-724085ae.js";import"./accept-f2459768.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-e957a39c.js";import"./Avatar-01bfa415.js";import"./employee-d2874d42.js";function dt(i={}){const{wrapper:e}=Object.assign({},m(),i.components);return e?o.jsx(e,Object.assign({},i,{children:o.jsx(r,{})})):r();function r(){const t=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",h3:"h3"},m(),i.components);return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:g}),`
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
//# sourceMappingURL=SelectDialog-43445efd.js.map
