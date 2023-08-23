import{j as o}from"./jsx-runtime-d079401a.js";import{C as s}from"./DomRefTable.module-d2537315.js";import{D as c}from"./DocsHeader-7505b502.js";import{F as a}from"./Footer-d744fc0c.js";import"./index-f1f2c4b1.js";import{M as l,C as n}from"./chunk-S4VUQJ4A-ddc15e16.js";import{D as d}from"./DomRefTable-0e3667ee.js";import{D as h}from"./DialogDomRef-ffa73df1.js";import{C as g,D as p,M as x}from"./SelectDialog.stories-33a09097.js";import{u as m}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-9d463984.js";import"./iframe-5ff3bf70.js";import"../sb-preview/runtime.js";import"./UI5Element-a4bd3d38.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7d7e5133.js";import"./utils-626dc1bf.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-42236945.js";import"./Icons-74c917eb.js";import"./decline-3cb804de.js";import"./i18n-defaults-2d2bf0b6.js";import"./information-dbbb1c9a.js";import"./class-map-0ab40ab9.js";import"./Button-7043cfcf.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-d675a36d.js";import"./index-bb1f9706.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-d9b40dee.js";import"./index-139cb4c0.js";import"./Integer-f7f172c9.js";import"./index-3d4c5c26.js";import"./Avatar-8a894654.js";import"./ResizeHandler-0af4416f.js";import"./employee-05c578de.js";import"./index-466c5936.js";import"./index-95f7b871.js";import"./Link-307a9e73.js";import"./WrappingType-b81e595a.js";import"./index-43333f43.js";import"./TableOfContent-e86ec428.js";import"./index-ceda15f9.js";import"./Label-34e3bd87.js";import"./index-b42968db.js";import"./index-f911d1ec.js";import"./index-5124b0b6.js";import"./Popover-26ef4370.js";import"./PopupsCommon.css-f12c9479.js";import"./FocusableElements-66623361.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-132a30d8.js";import"./BrowserScrollbar.css-309143b9.js";import"./index-d203965f.js";import"./mapValues-e5c6f517.js";import"./_baseForOwn-24231fc1.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-00f63d78.js";import"./_baseUniq-edf521f4.js";import"./index-356e4a49.js";import"./search-92a01fd0.js";import"./CssSizeVariables-17481929.js";import"./index-99d317a4.js";import"./i18n-defaults-771c9378.js";import"./I18nContext-dd74d568.js";import"./index-55540024.js";import"./overflow-fb44e468.js";import"./stopPropagation-da74d54e.js";import"./index-1d86b2fe.js";import"./ToggleButton-ffb4fffb.js";import"./CustomVariables-b0f63fee.js";import"./debounce-afefed63.js";import"./index-1d8f832c.js";import"./ListItemBase-e006c78e.js";import"./ItemNavigation-0734b7c0.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-1653a4a5.js";import"./index-63379982.js";import"./Dialog-4aad3648.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-3caaaac5.js";import"./Title-f7b3e876.js";import"./index-ef2821a5.js";import"./Input-e218b89d.js";import"./Suggestions.css-8d6efd26.js";import"./ResponsivePopoverCommon.css-870f7136.js";import"./ValueStateMessage.css-044f6113.js";import"./index-03398f51.js";import"./index-0654a8da.js";import"./StandardListItem-e017edb3.js";import"./ListItem-657b9c84.js";import"./RadioButton-86fe32a8.js";import"./CheckBox-b06ff672.js";import"./accept-aa607c05.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-b5a9fe30.js";function gt(i={}){const{wrapper:e}=Object.assign({},m(),i.components);return e?o.jsx(e,Object.assign({},i,{children:o.jsx(r,{})})):r();function r(){const t=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",h3:"h3"},m(),i.components);return o.jsxs(o.Fragment,{children:[o.jsx(l,{of:g}),`
`,o.jsx(c,{}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(n,{of:p}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(s,{of:p}),`
`,o.jsx(d,{rows:h}),`
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
//# sourceMappingURL=SelectDialog-5a8a48ff.js.map
