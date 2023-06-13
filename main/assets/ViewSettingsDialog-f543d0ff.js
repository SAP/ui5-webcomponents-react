import{j as t}from"./jsx-runtime-5926aa06.js";import{C as g}from"./DomRefTable.module-001ee1c3.js";import{D as h}from"./DocsHeader-09494c78.js";import{F as f}from"./Footer-f0841fbb.js";import"./index-ebeaab24.js";import{D as x}from"./DomRefTable-fd927de9.js";import{S as j}from"./SubcomponentsSection-6138f2fc.js";import{M as S,C as u,a as e,e as n,b as r}from"./chunk-PCJTTTQV-063e2a8c.js";import{C as D,D as m,S as a,F as c,a as l}from"./ViewSettingsDialog.stories-64aad9ae.js";import{u as d}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-e33c04d0.js";import"./iframe-403ac14f.js";import"../sb-preview/runtime.js";import"./UI5Element-2e105c8a.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-f65ad4fd.js";import"./Icons-1a294222.js";import"./decline-bfe69317.js";import"./i18n-defaults-80781f7e.js";import"./information-bd54c92c.js";import"./class-map-6a9bd920.js";import"./Button-77ada2e8.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-fca59c5d.js";import"./index-b9e92427.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./TableOfContent-291ab24f.js";import"./index-b1fb09ae.js";import"./Link-12d36fdb.js";import"./WrappingType-b81e595a.js";import"./index-c0c4d891.js";import"./Label-54923333.js";import"./index-9c09ad76.js";import"./index-7b70a3fd.js";import"./Popover-046c0918.js";import"./Integer-f7f172c9.js";import"./PopupUtils-2e0c5ac0.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-41f002e2.js";import"./FocusableElements-d8460590.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-267f9e5d.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./Dialog-1441abbc.js";import"./ValueState-2c5e5904.js";import"./GroupHeaderListItem-ffd1a7c3.js";import"./ListItemBase-80511c88.js";import"./ItemNavigation-897757d1.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-101ae14f.js";import"./StandardListItem-be6d96ba.js";import"./ListItem-a11c4ab9.js";import"./RadioButton-94f0be9f.js";import"./CheckBox-58c12bd7.js";import"./accept-83a59a78.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-56a3c652.js";import"./Avatar-580de7f7.js";import"./employee-649f60dc.js";import"./Title-4b970c0e.js";import"./SegmentedButton-e9bb6eb0.js";import"./ToggleButton-978ce561.js";import"./Bar-93c64f9e.js";import"./parameters-bundle.css-5626463c.js";import"./filter-a7ea1ca7.js";import"./nav-back-c8198f6a.js";import"./i18n-defaults-44d0f21e.js";import"./index-f592c774.js";const b=`**Since:** 0.20.0

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
//# sourceMappingURL=ViewSettingsDialog-f543d0ff.js.map
