import{j as o}from"./jsx-runtime-5926aa06.js";import{C as s}from"./DomRefTable.module-98c0e7fe.js";import{D as c}from"./DocsHeader-e8848a7f.js";import{F as a}from"./Footer-6f35ba17.js";import"./index-ebeaab24.js";import{D as l}from"./DomRefTable-18386aeb.js";import{M as d,C as n}from"./chunk-PCJTTTQV-dc8988ba.js";import{D as h}from"./DialogDomRef-ffa73df1.js";import{C as g,D as p,M as x}from"./SelectDialog.stories-fb6f1d85.js";import{u as m}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-1b15607e.js";import"./iframe-e4a895a3.js";import"../sb-preview/runtime.js";import"./UI5Element-b1843653.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-aac9cdc2.js";import"./Icons-9f549e0f.js";import"./decline-d907918c.js";import"./i18n-defaults-80781f7e.js";import"./information-0f993e39.js";import"./class-map-6a9bd920.js";import"./Button-37a8c146.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-fca59c5d.js";import"./index-8330eb1d.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./TableOfContent-cbf98bae.js";import"./index-1f241054.js";import"./Link-64c69167.js";import"./WrappingType-b81e595a.js";import"./index-3dc245b5.js";import"./Label-350e96fc.js";import"./index-9c09ad76.js";import"./index-51fafd1a.js";import"./Popover-a3a62d04.js";import"./Integer-f7f172c9.js";import"./PopupUtils-2f7e8748.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-38257fbf.js";import"./FocusableElements-72585d9b.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-8726336f.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./search-bb78d53f.js";import"./CssSizeVariables-02fb2fd8.js";import"./index-99d317a4.js";import"./i18n-defaults-9842c5eb.js";import"./I18nContext-cdb50611.js";import"./index-74263eb9.js";import"./overflow-d80f2841.js";import"./stopPropagation-da74d54e.js";import"./index-93f06bd5.js";import"./ToggleButton-b01053d2.js";import"./CustomVariables-fd831c35.js";import"./debounce-63a1d38f.js";import"./index-80c6ef7b.js";import"./ListItemBase-5d83f75f.js";import"./ItemNavigation-5f1efe0b.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-50734768.js";import"./index-b2643763.js";import"./Dialog-5f3c9cfb.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-f9e69678.js";import"./index-2892815c.js";import"./Title-684c2d0e.js";import"./index-7b530cef.js";import"./Input-f79461a9.js";import"./Suggestions.css-c4e187f7.js";import"./ResponsivePopoverCommon.css-5e0f54ec.js";import"./ValueStateMessage.css-8827ddc0.js";import"./index-596356c6.js";import"./index-85c564f8.js";import"./StandardListItem-8408d1fd.js";import"./ListItem-c43ad95c.js";import"./RadioButton-8c17b531.js";import"./CheckBox-f1563b72.js";import"./accept-31e71d55.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-82b13059.js";import"./Avatar-a15daf14.js";import"./employee-2384bc11.js";function dt(i={}){const{wrapper:e}=Object.assign({},m(),i.components);return e?o.jsx(e,Object.assign({},i,{children:o.jsx(r,{})})):r();function r(){const t=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",h3:"h3"},m(),i.components);return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:g}),`
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
//# sourceMappingURL=SelectDialog-49dc4bdd.js.map
