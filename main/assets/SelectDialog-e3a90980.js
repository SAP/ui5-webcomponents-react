import{j as o}from"./jsx-runtime-6b79a019.js";import{C as s}from"./DomRefTable.module-767ef15d.js";import{D as c}from"./DocsHeader-0715c8a2.js";import{F as a}from"./Footer-c40bb366.js";import"./index-ccf6a75d.js";import{D as l}from"./DomRefTable-7ad7879e.js";import{M as d,C as n}from"./chunk-PCJTTTQV-972abc61.js";import{D as h}from"./DialogDomRef-ffa73df1.js";import{C as g,D as p,M as x}from"./SelectDialog.stories-41f2a9dd.js";import{u as m}from"./index-f2208173.js";import"./react-jss.esm-0528916b.js";import"./inheritsLoose-93e09647.js";import"./index-5208e886.js";import"./iframe-1d58320c.js";import"../sb-preview/runtime.js";import"./UI5Element-11982a12.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-03662f7f.js";import"./utils-f515de3e.js";import"./useIsomorphicLayoutEffect-0a189966.js";import"./slot-76e48863.js";import"./Icon-3498e12d.js";import"./Icons-234bf59e.js";import"./decline-c1cc2557.js";import"./i18n-defaults-837f5aed.js";import"./information-2644a02f.js";import"./class-map-341004db.js";import"./Button-3da2aede.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-1a83921e.js";import"./index-d3b71bde.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-2d3c4974.js";import"./index-d36a5dff.js";import"./Integer-f7f172c9.js";import"./index-03c05339.js";import"./Avatar-d7b74462.js";import"./ResizeHandler-9ebe913c.js";import"./employee-e34ffee2.js";import"./index-6a884870.js";import"./index-91768a0c.js";import"./Link-6cd3dd1c.js";import"./WrappingType-b81e595a.js";import"./index-bc9f3959.js";import"./TableOfContent-508fc39a.js";import"./index-88957546.js";import"./Label-f867a533.js";import"./index-8d7a8128.js";import"./index-e91f3c80.js";import"./index-350159b9.js";import"./Popover-1f09fd29.js";import"./PopupsCommon.css-fd974b5a.js";import"./FocusableElements-708d1a4e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-9183c00a.js";import"./BrowserScrollbar.css-bcc05298.js";import"./react-18-74db5ca2.js";import"./mapValues-4f30c9d2.js";import"./_baseForOwn-1047660d.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-f4b610e7.js";import"./_baseUniq-a28bb1ec.js";import"./index-356e4a49.js";import"./search-e3ef4121.js";import"./CssSizeVariables-17481929.js";import"./index-99d317a4.js";import"./i18n-defaults-2d74659d.js";import"./I18nContext-bec860f5.js";import"./index-06c80d7d.js";import"./overflow-2bee5387.js";import"./stopPropagation-da74d54e.js";import"./index-36b2360b.js";import"./ToggleButton-18c77239.js";import"./CustomVariables-df17d38c.js";import"./debounce-bb226b95.js";import"./index-a98114cd.js";import"./ListItemBase-f65eaa12.js";import"./ItemNavigation-a882fb90.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-0bd7794e.js";import"./index-61e01020.js";import"./Dialog-b040586c.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-50d1963b.js";import"./Title-01e28931.js";import"./index-be9e60a5.js";import"./Input-2543fb7f.js";import"./Suggestions.css-439ce336.js";import"./ResponsivePopoverCommon.css-94d32982.js";import"./ValueStateMessage.css-e895ae9f.js";import"./index-106d4bec.js";import"./index-e3be5dd8.js";import"./StandardListItem-92ee6b14.js";import"./ListItem-57c44dac.js";import"./RadioButton-3124fa96.js";import"./CheckBox-05a648ec.js";import"./accept-6c83709e.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-c0f59065.js";function xt(i={}){const{wrapper:r}=Object.assign({},m(),i.components);return r?o.jsx(r,Object.assign({},i,{children:o.jsx(e,{})})):e();function e(){const t=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",h3:"h3"},m(),i.components);return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:g}),`
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
`,o.jsx(a,{})]})}}export{xt as default};
//# sourceMappingURL=SelectDialog-e3a90980.js.map
