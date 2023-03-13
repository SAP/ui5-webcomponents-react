import{j as o,a as r,F as c}from"./jsx-runtime-670450c2.js";import{C as l}from"./DomRefTable.module-662c659b.js";import{D as s}from"./DocsHeader-ff0a79df.js";import{F as d}from"./Footer-37bd1cd1.js";import"./index-f1f749bf.js";import{D as h}from"./DomRefTable-0a0b378e.js";import{M as g,C as p}from"./index-a5b0d48e.js";import{D as u}from"./DialogDomRef-ffa73df1.js";import{C as f,D as m,M as D}from"./SelectDialog.stories-52b3d2fd.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-PCJTTTQV-06356942.js";import"./iframe-2f6fe1a8.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-fe4dc3ff.js";import"./inheritsLoose-93e09647.js";import"./index-14f444b1.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-c82262ef.js";import"./i18n-defaults-da1c0a37.js";import"./decline-5eb6d937.js";import"./Icons-7b82f601.js";import"./i18n-defaults-7dff8409.js";import"./information-0837f136.js";import"./class-map-5d8e4b2b.js";import"./Icon-a9b28f0c.js";import"./Keys-3acbae73.js";import"./Button-8d5b0cb6.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./index-1d945bd3.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-f72dcf1d.js";import"./TableOfContent-0cf236d1.js";import"./index-e369c219.js";import"./Link-d055a21d.js";import"./WrappingType-b81e595a.js";import"./index-fdd37487.js";import"./Label-040efebd.js";import"./Footer.module-f90cad7d.js";import"./index-31d0fe2b.js";import"./Popover-e2d049c9.js";import"./Integer-d9976c13.js";import"./PopupsCommon.css-c7334d05.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./search-7b988f7f.js";import"./CssSizeVariables-bd372cde.js";import"./index-99d317a4.js";import"./i18n-defaults-9da374be.js";import"./I18nContext-bef5b452.js";import"./index-ee4d85ee.js";import"./overflow-3d929a36.js";import"./stopPropagation-da74d54e.js";import"./index-c64a0071.js";import"./ToggleButton-d1319c08.js";import"./CustomVariables-fd831c35.js";import"./debounce-5c77766a.js";import"./index-1e95d8cb.js";import"./ListItemBase-ba2a9558.js";import"./ItemNavigation-9e1aa83a.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-ed921760.js";import"./index-f7ccef40.js";import"./Dialog-fb686138.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-e0d414a8.js";import"./index-420fffad.js";import"./Title-b986a4bd.js";import"./index-29cbc990.js";import"./Input-846eddbd.js";import"./Suggestions.css-faab6178.js";import"./ResponsivePopoverCommon.css-187e38b6.js";import"./ValueStateMessage.css-37773c69.js";import"./index-cc7f3e63.js";import"./index-8162159f.js";import"./StandardListItem-d8c56411.js";import"./ListItem-335dc456.js";import"./RadioButton-b891eec4.js";import"./CheckBox-31c3e074.js";import"./accept-a98baca8.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-bbef5919.js";import"./Avatar-1386d002.js";import"./employee-98ce1b38.js";function Ct(i={}){const{wrapper:e}=Object.assign({},a(),i.components);return e?o(e,Object.assign({},i,{children:o(n,{})})):n();function n(){const t=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",h3:"h3"},a(),i.components);return r(c,{children:[o(g,{of:f}),`
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
`,o(d,{})]})}}export{Ct as default};
//# sourceMappingURL=SelectDialog-e83744f4.js.map
