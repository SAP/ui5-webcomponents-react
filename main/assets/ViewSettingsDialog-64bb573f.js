import{j as t}from"./jsx-runtime-5926aa06.js";import{C as g}from"./DomRefTable.module-cb72d915.js";import{D as h}from"./DocsHeader-cc6402b5.js";import{F as f}from"./Footer-8b29ea13.js";import"./index-ebeaab24.js";import{D as x}from"./DomRefTable-df21b6ad.js";import{S as j}from"./SubcomponentsSection-6138f2fc.js";import{M as S,C as u,a as i,e as n,b as r}from"./chunk-PCJTTTQV-badaacef.js";import{C as D,D as m,S as a,F as c,a as l}from"./ViewSettingsDialog.stories-2e3b3fa3.js";import{u as d}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-849cee3d.js";import"./iframe-094919e0.js";import"../sb-preview/runtime.js";import"./UI5Element-b6f0d493.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-d703a0b9.js";import"./Icons-e2180d53.js";import"./decline-b90c4a5f.js";import"./i18n-defaults-80781f7e.js";import"./information-33412b2a.js";import"./class-map-6a9bd920.js";import"./Button-dc6eb42e.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-3f99aa96.js";import"./i18n-defaults-18f6652d.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-aaf25c56.js";import"./index-43bc6237.js";import"./Integer-f7f172c9.js";import"./index-49cba631.js";import"./Avatar-81a3aee4.js";import"./ResizeHandler-021ae412.js";import"./employee-dc1adeb6.js";import"./index-fef64524.js";import"./index-fe589c62.js";import"./Link-96b46196.js";import"./WrappingType-b81e595a.js";import"./index-b9e92427.js";import"./TableOfContent-f0e8bec6.js";import"./index-2b22de6a.js";import"./Label-4abbc3da.js";import"./index-9c09ad76.js";import"./index-97c21802.js";import"./Popover-fafbd2ef.js";import"./PopupUtils-46fb16e4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-47573c24.js";import"./FocusableElements-6ebe483a.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./Dialog-75ee043a.js";import"./ValueState-2c5e5904.js";import"./GroupHeaderListItem-a97f07dd.js";import"./ListItemBase-3d6c9587.js";import"./ItemNavigation-9ba0e1fe.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-a1d94425.js";import"./StandardListItem-b7d80d39.js";import"./ListItem-dd0f001f.js";import"./RadioButton-6fe6a6d4.js";import"./CheckBox-ac24e34a.js";import"./accept-cf6ab22a.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-10d60cd3.js";import"./Title-6c23a67a.js";import"./SegmentedButton-64782135.js";import"./ToggleButton-6d4f0fe0.js";import"./Bar-c671d5aa.js";import"./parameters-bundle.css-5626463c.js";import"./filter-2d5b63cd.js";import"./nav-back-702c46e0.js";import"./i18n-defaults-44d0f21e.js";import"./index-f88c0539.js";const b=`**Since:** 0.20.0

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
`,I=[{name:"setConfirmedSettings",visibility:"public",parameters:[{name:"settings",type:"Object",optional:!1,parameterProperties:{sortOrder:{name:"sortOrder",type:"string",optional:!1,description:"sort order"},sortBy:{name:"sortBy",type:"string",optional:!1,description:"sort by"},filters:{name:"filters",type:"Object[]",optional:!1,description:"filters"}},description:"predefined settings."}],description:'Sets a JavaScript object, as settings to the <code>ui5-view-settings-dialog</code>. This method can be used after the dialog is initially open, as the dialog need to set its initial settings. The <code>ui5-view-settings-dialog</code> throws an event called "before-open", this can be used as trigger point. The object should have the following format: <code> {sortOrder: "Ascending", sortBy: "Name", filters: [{"Filter 1": ["Some filter 1", "Some filter 2"]}, {"Filter 2": ["Some filter 4"]}]} </code>'},{name:"show",visibility:"public",description:"Shows the dialog."}];function co(e={}){const{wrapper:s}=Object.assign({},d(),e.components);return s?t.jsx(s,Object.assign({},e,{children:t.jsx(p,{})})):p();function p(){const o=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},d(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(S,{of:D}),`
`,t.jsx(h,{since:"0.20.0"}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(u,{of:m}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(g,{of:m}),`
`,t.jsx(i,{children:F}),`
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
`,t.jsx(i,{children:j}),`
`,t.jsx(o.h2,{id:"sortitem",children:"SortItem"}),`
`,t.jsx(n,{of:a}),`
`,t.jsx(r,{of:a}),`
`,t.jsx(i,{children:y}),`
`,t.jsx(o.h2,{id:"filteritem",children:"FilterItem"}),`
`,t.jsx(n,{of:c}),`
`,t.jsx(r,{of:c}),`
`,t.jsx(i,{children:b}),`
`,t.jsx(o.h2,{id:"filteritemoption",children:"FilterItemOption"}),`
`,t.jsx(n,{of:l}),`
`,t.jsx(r,{of:l}),`
`,t.jsx(i,{children:w}),`
`,t.jsx(f,{})]})}}export{co as default};
//# sourceMappingURL=ViewSettingsDialog-64bb573f.js.map
