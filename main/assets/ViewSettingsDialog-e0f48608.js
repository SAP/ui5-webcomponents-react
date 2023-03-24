import{j as t,a as p,F as g}from"./jsx-runtime-670450c2.js";import{C as f}from"./DomRefTable.module-4edf0668.js";import{D as S}from"./DocsHeader-1c8f403c.js";import{F as u}from"./Footer-fe716fee.js";import"./index-f1f749bf.js";import{D}from"./DomRefTable-42439c79.js";import{S as b}from"./SubcomponentsSection-6138f2fc.js";import{M as w,C as F,a as e,e as n,b as r}from"./chunk-PCJTTTQV-041835cf.js";import{C as y,D as a,S as c,F as l,a as d}from"./ViewSettingsDialog.stories-43d2b8e9.js";import{u as h}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-aabddf75.js";import"./iframe-2b2306d6.js";import"../sb-preview/runtime.mjs";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-65cd39a0.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./Icon-7987c836.js";import"./Icons-fe6e657a.js";import"./decline-6bd98a2e.js";import"./i18n-defaults-80781f7e.js";import"./information-b6c8ed8e.js";import"./class-map-95320e87.js";import"./Button-bc3a11a1.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-b4aa831c.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-d6713a4f.js";import"./TableOfContent-0fcdb3ae.js";import"./index-96ae4bdf.js";import"./Link-018547e8.js";import"./WrappingType-b81e595a.js";import"./index-a9815710.js";import"./Label-ccc234fe.js";import"./index-96c5f47c.js";import"./index-8e62622c.js";import"./Popover-224d761a.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-9873a291.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-1da6d0d2.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-cae0a379.js";import"./react-18-ecd79c7b.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./Dialog-43ec4fb1.js";import"./ValueState-2c5e5904.js";import"./GroupHeaderListItem-d4ea7e0d.js";import"./ListItemBase-a0bc6999.js";import"./ItemNavigation-8e291cfa.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-15ff681f.js";import"./StandardListItem-ac3f40c5.js";import"./ListItem-83c0fb9e.js";import"./RadioButton-a8c23c83.js";import"./CheckBox-80dd6e5f.js";import"./accept-d8c33d70.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-52a56681.js";import"./Avatar-7e1d4e21.js";import"./employee-1bc983a2.js";import"./Title-129aeb28.js";import"./SegmentedButton-48347baf.js";import"./ToggleButton-4790913b.js";import"./Bar-78c6a88f.js";import"./fastNavigation-8b41cdda.js";import"./parameters-bundle.css-6b4a2ffb.js";import"./filter-4f7fbfec.js";import"./nav-back-714ee5c7.js";import"./i18n-defaults-0a7ef706.js";import"./index-9906e610.js";const I=`**Since:** 0.20.0

### Usage

For the \`FilterItem\`
`,C=`**Since:** 0.20.0

### Usage

For the \`FilterItemOption\`
`,O=`**Since:** 0.20.0

### Usage

For the \`SortItem\`
`,j=`## Structure

A \`ViewSettingsDialog\` consists of a header, content, and a footer for action buttons. The \`ViewSettingsDialog\` is usually displayed at the center of the screen.

## Responsive Behavior

\`ViewSettingsDialog\` stretches on full screen on phones.
`,v=[{name:"setConfirmedSettings",visibility:"public",parameters:[{name:"settings",type:"Object",optional:!1,parameterProperties:{sortOrder:{name:"sortOrder",type:"string",optional:!1,description:"sort order"},sortBy:{name:"sortBy",type:"string",optional:!1,description:"sort by"},filters:{name:"filters",type:"Object[]",optional:!1,description:"filters"}},description:"predefined settings."}],description:'Sets a JavaScript object, as settings to the <code>ui5-view-settings-dialog</code>. This method can be used after the dialog is initially open, as the dialog need to set its initial settings. The <code>ui5-view-settings-dialog</code> throws an event called "before-open", this can be used as trigger point. The object should have the following format: <code> {sortOrder: "Ascending", sortBy: "Name", filters: [{"Filter 1": ["Some filter 1", "Some filter 2"]}, {"Filter 2": ["Some filter 4"]}]} </code>'},{name:"show",visibility:"public",description:"Shows the dialog."}];function go(i={}){const{wrapper:s}=Object.assign({},h(),i.components);return s?t(s,Object.assign({},i,{children:t(m,{})})):m();function m(){const o=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},h(),i.components);return p(g,{children:[t(w,{of:y}),`
`,t(S,{since:"0.20.0"}),`
`,t("br",{}),`
`,t(o.h2,{children:"Example"}),`
`,t(F,{of:a}),`
`,t(o.h2,{children:"Properties"}),`
`,t(f,{of:a}),`
`,t(e,{children:j}),`
`,t(D,{rows:v}),`
`,t(o.h2,{children:"Opening ViewSettingsDialog"}),`
`,p(o.p,{children:[t(o.code,{children:"ViewSettingsDialog"}),"s can be opened by attaching a ",t(o.code,{children:"ref"})," to the component and then calling the corresponding ",t(o.strong,{children:t(o.code,{children:"show"})})," method."]}),`
`,t(o.pre,{children:t(o.code,{className:"language-jsx",children:`const ViewSettingsDialogComponent = () => {
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
`,t(e,{children:b}),`
`,t(o.h2,{children:"SortItem"}),`
`,t(n,{of:c}),`
`,t(r,{of:c}),`
`,t(e,{children:O}),`
`,t(o.h2,{children:"FilterItem"}),`
`,t(n,{of:l}),`
`,t(r,{of:l}),`
`,t(e,{children:I}),`
`,t(o.h2,{children:"FilterItemOption"}),`
`,t(n,{of:d}),`
`,t(r,{of:d}),`
`,t(e,{children:C}),`
`,t(u,{})]})}}export{go as default};
//# sourceMappingURL=ViewSettingsDialog-e0f48608.js.map
