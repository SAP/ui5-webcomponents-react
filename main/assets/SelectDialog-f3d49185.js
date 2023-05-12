import{j as o}from"./jsx-runtime-5926aa06.js";import{C as s}from"./DomRefTable.module-c49e277b.js";import{D as c}from"./DocsHeader-3ebfe41b.js";import{F as a}from"./Footer-2bb98770.js";import"./index-ebeaab24.js";import{D as l}from"./DomRefTable-71c619bc.js";import{M as d,C as n}from"./chunk-PCJTTTQV-d745d1d0.js";import{D as h}from"./DialogDomRef-ffa73df1.js";import{C as g,D as p,M as x}from"./SelectDialog.stories-beb0dfac.js";import{u as m}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-af4c64e5.js";import"./iframe-c9a3f230.js";import"../sb-preview/runtime.js";import"./UI5Element-74c2a827.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d61dcbbc.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-a2964213.js";import"./Icons-94b91597.js";import"./decline-c0e7c267.js";import"./i18n-defaults-80781f7e.js";import"./information-972c65ef.js";import"./class-map-519e9c6d.js";import"./Button-1eb48b4c.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./index-8330eb1d.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./Import-3e5f034e.js";import"./TableOfContent-45be38a6.js";import"./index-1c1085f5.js";import"./Link-e0af46e3.js";import"./WrappingType-b81e595a.js";import"./index-e163b211.js";import"./Label-fcb0092c.js";import"./index-9c09ad76.js";import"./index-57035e4f.js";import"./Popover-2de3a0ad.js";import"./Integer-f7f172c9.js";import"./PopupUtils-db5b49db.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-c4ad8573.js";import"./FocusableElements-20734289.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-362c4d65.js";import"./ResizeHandler-0f082c48.js";import"./MediaRange-25b98f31.js";import"./style-map-33b353d0.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./search-139b49f2.js";import"./CssSizeVariables-bd372cde.js";import"./index-99d317a4.js";import"./i18n-defaults-fc88400a.js";import"./I18nContext-cdb50611.js";import"./index-1ce02a42.js";import"./overflow-0a1f4799.js";import"./stopPropagation-da74d54e.js";import"./index-11daa321.js";import"./ToggleButton-9307a40f.js";import"./CustomVariables-fd831c35.js";import"./debounce-208efd13.js";import"./index-10e80212.js";import"./ListItemBase-c271f906.js";import"./ItemNavigation-e9bbb1b9.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-990cb1ca.js";import"./index-65dc8ffe.js";import"./Dialog-07218916.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-f492bfb6.js";import"./index-a24b85de.js";import"./Title-85313bbf.js";import"./index-c66f4697.js";import"./Input-90311e06.js";import"./Suggestions.css-2167eb11.js";import"./ResponsivePopoverCommon.css-5b3cf680.js";import"./ValueStateMessage.css-0142eeaf.js";import"./index-cb6c623a.js";import"./index-f6fe098d.js";import"./StandardListItem-48aef1ae.js";import"./ListItem-4183041f.js";import"./RadioButton-9ea605bf.js";import"./CheckBox-5944a432.js";import"./accept-4bb68de0.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-b979090e.js";import"./Avatar-99b7e1ff.js";import"./employee-78b984a5.js";function gt(i={}){const{wrapper:e}=Object.assign({},m(),i.components);return e?o.jsx(e,Object.assign({},i,{children:o.jsx(r,{})})):r();function r(){const t=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",h3:"h3"},m(),i.components);return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:g}),`
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
//# sourceMappingURL=SelectDialog-f3d49185.js.map
