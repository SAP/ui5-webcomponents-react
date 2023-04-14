import{j as t,a as m,F as h}from"./jsx-runtime-670450c2.js";import{C as f}from"./DomRefTable.module-145c683e.js";import{D as S}from"./DocsHeader-f5cec27e.js";import{F as u}from"./Footer-6f05cc62.js";import"./index-f1f749bf.js";import{D}from"./DomRefTable-8f048293.js";import{S as b}from"./SubcomponentsSection-6138f2fc.js";import{M as w,C as F,a as i,e as n,b as r}from"./chunk-PCJTTTQV-124369eb.js";import{C as y,D as a,S as c,F as l,a as d}from"./ViewSettingsDialog.stories-ec761f8f.js";import{u as g}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-93f6da71.js";import"./iframe-b136776b.js";import"../sb-preview/runtime.mjs";import"./UI5Element-5e77b351.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-76e48863.js";import"./Icon-a70637b5.js";import"./Icons-85b0e9dd.js";import"./decline-07b4d490.js";import"./i18n-defaults-80781f7e.js";import"./information-bce3ba82.js";import"./class-map-6d48ebd3.js";import"./Button-35e7f923.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-94bcf4c7.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-d1e5abbc.js";import"./TableOfContent-a4d281ff.js";import"./index-30829d93.js";import"./Link-8808efba.js";import"./WrappingType-b81e595a.js";import"./index-7ed0da27.js";import"./Label-e24223e9.js";import"./index-96c5f47c.js";import"./index-80db8ec8.js";import"./Popover-eac39f76.js";import"./Integer-f7f172c9.js";import"./PopupUtils-d0ec75b7.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-ab897c30.js";import"./FocusableElements-2da74965.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-b2c643e0.js";import"./ResizeHandler-653daa1f.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./Dialog-0e44ed8a.js";import"./ValueState-2c5e5904.js";import"./GroupHeaderListItem-8a27241b.js";import"./ListItemBase-b73c7fed.js";import"./ItemNavigation-316291cb.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-1df19c4b.js";import"./StandardListItem-2d39af82.js";import"./ListItem-3c89af96.js";import"./RadioButton-17175673.js";import"./CheckBox-c006676c.js";import"./accept-0670a13e.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-24b9c100.js";import"./Avatar-f4abe909.js";import"./employee-f8bb953b.js";import"./Title-07ee6300.js";import"./SegmentedButton-c9e4c258.js";import"./ToggleButton-f5871530.js";import"./Bar-93e4db55.js";import"./parameters-bundle.css-6b4a2ffb.js";import"./filter-a1f06d56.js";import"./nav-back-27c9a26f.js";import"./i18n-defaults-217b10b4.js";import"./index-25a0a0fa.js";const I=`**Since:** 0.20.0

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
`,v=[{name:"setConfirmedSettings",visibility:"public",parameters:[{name:"settings",type:"Object",optional:!1,parameterProperties:{sortOrder:{name:"sortOrder",type:"string",optional:!1,description:"sort order"},sortBy:{name:"sortBy",type:"string",optional:!1,description:"sort by"},filters:{name:"filters",type:"Object[]",optional:!1,description:"filters"}},description:"predefined settings."}],description:'Sets a JavaScript object, as settings to the <code>ui5-view-settings-dialog</code>. This method can be used after the dialog is initially open, as the dialog need to set its initial settings. The <code>ui5-view-settings-dialog</code> throws an event called "before-open", this can be used as trigger point. The object should have the following format: <code> {sortOrder: "Ascending", sortBy: "Name", filters: [{"Filter 1": ["Some filter 1", "Some filter 2"]}, {"Filter 2": ["Some filter 4"]}]} </code>'},{name:"show",visibility:"public",description:"Shows the dialog."}];function go(e={}){const{wrapper:s}=Object.assign({},g(),e.components);return s?t(s,Object.assign({},e,{children:t(p,{})})):p();function p(){const o=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},g(),e.components);return m(h,{children:[t(w,{of:y}),`
`,t(S,{since:"0.20.0"}),`
`,t("br",{}),`
`,t(o.h2,{id:"example",children:"Example"}),`
`,t(F,{of:a}),`
`,t(o.h2,{id:"properties",children:"Properties"}),`
`,t(f,{of:a}),`
`,t(i,{children:j}),`
`,t(D,{rows:v}),`
`,t(o.h2,{id:"opening-viewsettingsdialog",children:"Opening ViewSettingsDialog"}),`
`,m(o.p,{children:[t(o.code,{children:"ViewSettingsDialog"}),"s can be opened by attaching a ",t(o.code,{children:"ref"})," to the component and then calling the corresponding ",t(o.strong,{children:t(o.code,{children:"show"})})," method."]}),`
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
`,t(i,{children:b}),`
`,t(o.h2,{id:"sortitem",children:"SortItem"}),`
`,t(n,{of:c}),`
`,t(r,{of:c}),`
`,t(i,{children:O}),`
`,t(o.h2,{id:"filteritem",children:"FilterItem"}),`
`,t(n,{of:l}),`
`,t(r,{of:l}),`
`,t(i,{children:I}),`
`,t(o.h2,{id:"filteritemoption",children:"FilterItemOption"}),`
`,t(n,{of:d}),`
`,t(r,{of:d}),`
`,t(i,{children:C}),`
`,t(u,{})]})}}export{go as default};
//# sourceMappingURL=ViewSettingsDialog-0e171b44.js.map
