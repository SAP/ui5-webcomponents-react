import{j as o,a as r,F as c}from"./jsx-runtime-670450c2.js";import{C as l}from"./DomRefTable.module-7ccc680d.js";import{D as s}from"./DocsHeader-f6424144.js";import{F as d}from"./Footer-02dced94.js";import"./index-f1f749bf.js";import{D as h}from"./DomRefTable-9828962a.js";import{M as g,C as p}from"./chunk-PCJTTTQV-d9e1f245.js";import{D as u}from"./DialogDomRef-ffa73df1.js";import{C as f,D as m,M as D}from"./SelectDialog.stories-e3df4135.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-af8e863f.js";import"./iframe-c2cea1d1.js";import"../sb-preview/runtime.mjs";import"./UI5Element-d1d93200.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-76e48863.js";import"./Icon-c8fd92f0.js";import"./Icons-efeb15d5.js";import"./decline-41212cdc.js";import"./i18n-defaults-80781f7e.js";import"./information-859245b4.js";import"./class-map-6d48ebd3.js";import"./Button-400e2491.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-94bcf4c7.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-526feece.js";import"./TableOfContent-786bd8f6.js";import"./index-60854897.js";import"./Link-706be030.js";import"./WrappingType-b81e595a.js";import"./index-4836378a.js";import"./Label-e3d88218.js";import"./index-96c5f47c.js";import"./index-3e009d02.js";import"./Popover-4088d87a.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a92cb9f4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-1644cafd.js";import"./FocusableElements-8859c874.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-ab5bee37.js";import"./ResizeHandler-f4ca1209.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./search-5a20b926.js";import"./CssSizeVariables-bd372cde.js";import"./index-99d317a4.js";import"./i18n-defaults-a2281a8e.js";import"./I18nContext-bef5b452.js";import"./index-67f79863.js";import"./overflow-f521bbb2.js";import"./stopPropagation-da74d54e.js";import"./index-0c9917f4.js";import"./ToggleButton-6bcc3a1e.js";import"./CustomVariables-fd831c35.js";import"./debounce-6203652a.js";import"./index-7d5ff330.js";import"./ListItemBase-6757af89.js";import"./ItemNavigation-8971fb55.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-57fa4b3b.js";import"./index-c9df5375.js";import"./Dialog-c83d8172.js";import"./ValueState-2c5e5904.js";import"./ValueState-ab6838cc.js";import"./index-638222cb.js";import"./index-22d4d4b4.js";import"./Title-6041704e.js";import"./index-3fd3c74e.js";import"./Input-63631743.js";import"./Suggestions.css-a2aab2ea.js";import"./ResponsivePopoverCommon.css-82b1f3cc.js";import"./ValueStateMessage.css-194378a0.js";import"./index-eb2bdc76.js";import"./index-0c89f695.js";import"./StandardListItem-3b715734.js";import"./ListItem-6188cfad.js";import"./RadioButton-23550da4.js";import"./CheckBox-2ada2fbd.js";import"./accept-ca825c33.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-a1ee93cb.js";import"./Avatar-9bebadfe.js";import"./employee-e0b9815e.js";function St(i={}){const{wrapper:e}=Object.assign({},a(),i.components);return e?o(e,Object.assign({},i,{children:o(n,{})})):n();function n(){const t=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",h3:"h3"},a(),i.components);return r(c,{children:[o(g,{of:f}),`
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
//# sourceMappingURL=SelectDialog-2a1b1234.js.map
