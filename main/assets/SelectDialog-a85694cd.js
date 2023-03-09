import{j as o,a as r,F as c}from"./jsx-runtime-670450c2.js";import{C as l}from"./DomRefTable.module-5c771d43.js";import{D as s}from"./DocsHeader-22447b02.js";import{F as d}from"./Footer-c06637a8.js";import"./index-f1f749bf.js";import{D as h}from"./DomRefTable-29c485f5.js";import{M as g,C as p}from"./index-454f6e61.js";import{D as u}from"./DialogDomRef-ffa73df1.js";import{C as f,D as m,M as D}from"./SelectDialog.stories-e2a3bf97.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-QDOP3WTA-09a2a7b2.js";import"./iframe-54465ae2.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-fe4dc3ff.js";import"./inheritsLoose-93e09647.js";import"./index-6e1a9984.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-c82262ef.js";import"./MarkedEvents-8627ed01.js";import"./decline-0a03b0b0.js";import"./Icons-7b82f601.js";import"./class-map-5d8e4b2b.js";import"./Button-e27d9549.js";import"./Keys-3acbae73.js";import"./Device-208919c6.js";import"./index-cbb29537.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-cc07a431.js";import"./TableOfContent-b6a97806.js";import"./index-14872dc3.js";import"./WrappingType-b81e595a.js";import"./index-6f08696a.js";import"./Label-040efebd.js";import"./Footer.module-c4f3b823.js";import"./index-8da5c02f.js";import"./Popover-cbbb060d.js";import"./Integer-d9976c13.js";import"./PopupsCommon.css-ab0735c6.js";import"./FocusableElements-c2f39514.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./search-e22246a6.js";import"./CssSizeVariables-bd372cde.js";import"./index-99d317a4.js";import"./i18n-defaults-41f1487d.js";import"./I18nContext-bef5b452.js";import"./index-8e343a95.js";import"./overflow-28a3a237.js";import"./stopPropagation-da74d54e.js";import"./index-498d6b1c.js";import"./ToggleButton-09752afe.js";import"./CustomVariables-fd831c35.js";import"./debounce-5c77766a.js";import"./index-1831c11c.js";import"./ListItemBase-9f62536c.js";import"./ItemNavigation-9e1aa83a.js";import"./TabbableElements-0285a530.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-b3c085b8.js";import"./index-99826b1b.js";import"./Dialog-0097f4e9.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-f2995662.js";import"./index-2276c773.js";import"./Title-b986a4bd.js";import"./index-4c3c925e.js";import"./Input-bd962308.js";import"./Suggestions.css-faab6178.js";import"./ResponsivePopoverCommon.css-187e38b6.js";import"./ValueStateMessage.css-37773c69.js";import"./index-d75263bd.js";import"./index-6a7e3956.js";import"./StandardListItem-0b926583.js";import"./ListItem-b545bc6e.js";import"./RadioButton-4ed70174.js";import"./CheckBox-2761aa24.js";import"./accept-a98baca8.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-bbef5919.js";import"./Avatar-358386af.js";import"./employee-98ce1b38.js";function dt(i={}){const{wrapper:e}=Object.assign({},a(),i.components);return e?o(e,Object.assign({},i,{children:o(n,{})})):n();function n(){const t=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",h3:"h3"},a(),i.components);return r(c,{children:[o(g,{of:f}),`
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
`,o(d,{})]})}}export{dt as default};
//# sourceMappingURL=SelectDialog-a85694cd.js.map
