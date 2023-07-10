import{j as t}from"./jsx-runtime-5926aa06.js";import{C as h}from"./DomRefTable.module-64609978.js";import{D as g}from"./DocsHeader-bfd65c9b.js";import{F as f}from"./Footer-a9b6064b.js";import"./index-ebeaab24.js";import{D as x}from"./DomRefTable-2a51eb66.js";import{S as j}from"./SubcomponentsSection-6138f2fc.js";import{M as S,C as u,a as e,e as n,b as r}from"./chunk-PCJTTTQV-3d828c2c.js";import{C as D,D as m,S as a,F as l,a as c}from"./ViewSettingsDialog.stories-8d2073d8.js";import{u as d}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-70b02468.js";import"./iframe-bfb4694d.js";import"../sb-preview/runtime.js";import"./UI5Element-3b11b083.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d4224c1c.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-9aa64f88.js";import"./Icons-f64cf5a7.js";import"./decline-5f59d729.js";import"./i18n-defaults-80781f7e.js";import"./information-73174d4b.js";import"./class-map-18f572ce.js";import"./Button-86524f67.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-99b8bbf4.js";import"./i18n-defaults-f002f496.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-cbae0ba3.js";import"./index-722f2e88.js";import"./Integer-f7f172c9.js";import"./index-6b120dbc.js";import"./Avatar-d2efa509.js";import"./ResizeHandler-13af62ac.js";import"./employee-ef49f0ae.js";import"./index-6429fd34.js";import"./index-94dc3ee5.js";import"./Link-d41264a5.js";import"./WrappingType-b81e595a.js";import"./index-ea625d40.js";import"./TableOfContent-cda682b4.js";import"./index-45bfc019.js";import"./Label-9108dd9e.js";import"./index-9c09ad76.js";import"./index-34ef59d7.js";import"./index-6ec49ce1.js";import"./Popover-76648ec8.js";import"./PopupsCommon.css-7ddbcd9a.js";import"./FocusableElements-baf79594.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-54298215.js";import"./BrowserScrollbar.css-cca56078.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./Dialog-08b725c0.js";import"./ValueState-2c5e5904.js";import"./GroupHeaderListItem-17372dff.js";import"./ListItemBase-9b88c288.js";import"./ItemNavigation-4baedd26.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-9bf9c132.js";import"./StandardListItem-6c956409.js";import"./ListItem-d1dee57e.js";import"./RadioButton-c3da5c0b.js";import"./CheckBox-4c6776c5.js";import"./accept-1b3f8b1f.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-82b1b6d3.js";import"./Title-c6699a53.js";import"./SegmentedButton-83cde53c.js";import"./ToggleButton-d910effc.js";import"./Bar-ae5ccc94.js";import"./parameters-bundle.css-f9dc8928.js";import"./filter-94e37ac1.js";import"./nav-back-1e0df955.js";import"./i18n-defaults-1f5a0024.js";const b=`**Since:** 0.20.0

### Usage

For the \`FilterItem\`
`,w=`**Since:** 0.20.0

### Usage

For the \`FilterItemOption\`
`,y=`**Since:** 0.20.0

### Usage

For the \`SortItem\`
`,F=`## Structure

A \`ViewSettingsDialog\` consists of a header, content, and a footer for action buttons. The \`ViewSettingsDialog\` is usually displayed at the center of the screen.

## Responsive Behavior

\`ViewSettingsDialog\` stretches on full screen on phones.
`,I=[{name:"setConfirmedSettings",visibility:"public",parameters:[{name:"settings",type:"Object",optional:!1,parameterProperties:{sortOrder:{name:"sortOrder",type:"string",optional:!1,description:"sort order"},sortBy:{name:"sortBy",type:"string",optional:!1,description:"sort by"},filters:{name:"filters",type:"Object[]",optional:!1,description:"filters"}},description:"predefined settings."}],description:`Sets a JavaScript object, as settings to the <code>ui5-view-settings-dialog</code>. This method can be used after the dialog is initially open, as the dialog needs to set its initial settings.<br> The <code>ui5-view-settings-dialog</code> throws an event called "before-open", which can be used as a trigger point.<br> The object should have the following format:<br> <pre>
{
	sortOrder: "Ascending",
	sortBy: "Name",
	filters: [
		{"Filter 1": ["Some filter 1", "Some filter 2"]},
		{"Filter 2": ["Some filter 4"]},
	]
}
</pre>`},{name:"show",visibility:"public",description:"Shows the dialog."}];function ao(i={}){const{wrapper:s}=Object.assign({},d(),i.components);return s?t.jsx(s,Object.assign({},i,{children:t.jsx(p,{})})):p();function p(){const o=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},d(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(S,{of:D}),`
`,t.jsx(g,{since:"0.20.0"}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(u,{of:m}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(h,{of:m}),`
`,t.jsx(e,{children:F}),`
`,t.jsx(x,{rows:I}),`
`,t.jsx(o.h2,{id:"opening-viewsettingsdialog",children:"Opening ViewSettingsDialog"}),`
`,t.jsxs(o.p,{children:[t.jsx(o.code,{children:"ViewSettingsDialog"}),"s can be opened by attaching a ",t.jsx(o.code,{children:"ref"})," to the component and then calling the corresponding ",t.jsx(o.strong,{children:t.jsx(o.code,{children:"show"})})," method."]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const ViewSettingsDialogComponent = () => {
  const dialogRef = useRef(null);
  const onButtonClick = () => {
    dialogRef.current.show();
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open ViewSettingsDialog</Button>
      <ViewSettingsDialog
        ref={dialogRef}
        sortItems={
          <>
            <SortItem text="Name" />
            <SortItem text="Position" />
            <SortItem text="Company" />
            <SortItem text="Department" />
          </>
        }
      />
    </>
  );
};
`})}),`
`,t.jsx(e,{children:j}),`
`,t.jsx(o.h2,{id:"sortitem",children:"SortItem"}),`
`,t.jsx(n,{of:a}),`
`,t.jsx(r,{of:a}),`
`,t.jsx(e,{children:y}),`
`,t.jsx(o.h2,{id:"filteritem",children:"FilterItem"}),`
`,t.jsx(n,{of:l}),`
`,t.jsx(r,{of:l}),`
`,t.jsx(e,{children:b}),`
`,t.jsx(o.h2,{id:"filteritemoption",children:"FilterItemOption"}),`
`,t.jsx(n,{of:c}),`
`,t.jsx(r,{of:c}),`
`,t.jsx(e,{children:w}),`
`,t.jsx(f,{})]})}}export{ao as default};
//# sourceMappingURL=ViewSettingsDialog-8ad3a1f6.js.map
