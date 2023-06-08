import{j as t}from"./jsx-runtime-5926aa06.js";import{C as g}from"./DomRefTable.module-fea6f879.js";import{D as h}from"./DocsHeader-397861c5.js";import{F as f}from"./Footer-3525217e.js";import"./index-ebeaab24.js";import{D as x}from"./DomRefTable-54ed671b.js";import{S as j}from"./SubcomponentsSection-6138f2fc.js";import{M as S,C as u,a as e,e as n,b as r}from"./chunk-PCJTTTQV-4f7a6d40.js";import{C as D,D as m,S as a,F as c,a as l}from"./ViewSettingsDialog.stories-7ac3cdc7.js";import{u as d}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-0b9089b0.js";import"./iframe-9085ae47.js";import"../sb-preview/runtime.js";import"./UI5Element-a8445a25.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-884f99a7.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-3e9cb840.js";import"./Icons-c55d12a5.js";import"./decline-c4793abd.js";import"./i18n-defaults-80781f7e.js";import"./information-e6fe8610.js";import"./class-map-323a92fb.js";import"./Button-f1768a08.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-fca59c5d.js";import"./index-8330eb1d.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./TableOfContent-738efb51.js";import"./index-e52a334d.js";import"./Link-8b80096c.js";import"./WrappingType-b81e595a.js";import"./index-0edb6340.js";import"./Label-6cefa2d2.js";import"./index-9c09ad76.js";import"./index-45440674.js";import"./Popover-2f417d64.js";import"./Integer-f7f172c9.js";import"./PopupUtils-b38c74c1.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-3239006e.js";import"./FocusableElements-69e44a9d.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-cea672cf.js";import"./MediaRange-25b98f31.js";import"./style-map-34e6b8f4.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./Dialog-effa1776.js";import"./ValueState-2c5e5904.js";import"./GroupHeaderListItem-bd8efaa6.js";import"./ListItemBase-124add92.js";import"./ItemNavigation-cb92b87f.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-8d822d0c.js";import"./StandardListItem-8dc8c287.js";import"./ListItem-a92cce8b.js";import"./RadioButton-021a694f.js";import"./CheckBox-33235970.js";import"./accept-2ae5e2eb.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-70b47038.js";import"./Avatar-3e4df27c.js";import"./employee-d55343ff.js";import"./Title-a5ea80a2.js";import"./SegmentedButton-bf7a39fa.js";import"./ToggleButton-49eb273a.js";import"./Bar-2d143472.js";import"./parameters-bundle.css-6a285d0d.js";import"./filter-6cb7da5b.js";import"./nav-back-3823203e.js";import"./i18n-defaults-44d0f21e.js";import"./index-089c87d1.js";const b=`**Since:** 0.20.0

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
`,I=[{name:"setConfirmedSettings",visibility:"public",parameters:[{name:"settings",type:"Object",optional:!1,parameterProperties:{sortOrder:{name:"sortOrder",type:"string",optional:!1,description:"sort order"},sortBy:{name:"sortBy",type:"string",optional:!1,description:"sort by"},filters:{name:"filters",type:"Object[]",optional:!1,description:"filters"}},description:"predefined settings."}],description:'Sets a JavaScript object, as settings to the <code>ui5-view-settings-dialog</code>. This method can be used after the dialog is initially open, as the dialog need to set its initial settings. The <code>ui5-view-settings-dialog</code> throws an event called "before-open", this can be used as trigger point. The object should have the following format: <code> {sortOrder: "Ascending", sortBy: "Name", filters: [{"Filter 1": ["Some filter 1", "Some filter 2"]}, {"Filter 2": ["Some filter 4"]}]} </code>'},{name:"show",visibility:"public",description:"Shows the dialog."}];function so(i={}){const{wrapper:s}=Object.assign({},d(),i.components);return s?t.jsx(s,Object.assign({},i,{children:t.jsx(p,{})})):p();function p(){const o=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},d(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(S,{of:D}),`
`,t.jsx(h,{since:"0.20.0"}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(u,{of:m}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(g,{of:m}),`
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
`,t.jsx(n,{of:c}),`
`,t.jsx(r,{of:c}),`
`,t.jsx(e,{children:b}),`
`,t.jsx(o.h2,{id:"filteritemoption",children:"FilterItemOption"}),`
`,t.jsx(n,{of:l}),`
`,t.jsx(r,{of:l}),`
`,t.jsx(e,{children:w}),`
`,t.jsx(f,{})]})}}export{so as default};
//# sourceMappingURL=ViewSettingsDialog-a2e4abab.js.map
