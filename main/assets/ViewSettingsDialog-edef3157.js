import{j as t,a as m,F as h}from"./jsx-runtime-670450c2.js";import{C as f}from"./DomRefTable.module-b3048698.js";import{D as S}from"./DocsHeader-2c815477.js";import{F as u}from"./Footer-f4421db3.js";import"./index-f1f749bf.js";import{D}from"./DomRefTable-4ce20b0a.js";import{S as b}from"./SubcomponentsSection-6138f2fc.js";import{M as w,C as F,a as i,e as n,b as r}from"./chunk-PCJTTTQV-dabea91d.js";import{C as y,D as a,S as c,F as l,a as d}from"./ViewSettingsDialog.stories-a6d96731.js";import{u as g}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-fcfb8c4e.js";import"./iframe-8983185e.js";import"../sb-preview/runtime.mjs";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-76e48863.js";import"./Icon-27a81412.js";import"./Icons-5b18f7d2.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./class-map-6d48ebd3.js";import"./Button-fa05cadd.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-44cc9c22.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-176475de.js";import"./TableOfContent-4b8b3863.js";import"./index-2b378c96.js";import"./Link-3b8926df.js";import"./WrappingType-b81e595a.js";import"./index-b1341032.js";import"./Label-528b8168.js";import"./index-96c5f47c.js";import"./index-18619a78.js";import"./Popover-824d4d7c.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7f720278.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-382f34a2.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./Dialog-610dd06c.js";import"./ValueState-2c5e5904.js";import"./GroupHeaderListItem-56788105.js";import"./ListItemBase-780d7053.js";import"./ItemNavigation-01761450.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-c375cd19.js";import"./StandardListItem-38cf6758.js";import"./ListItem-843af2c9.js";import"./RadioButton-412fbbc0.js";import"./CheckBox-f0072def.js";import"./accept-9744f30a.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-78d167a6.js";import"./Avatar-0d8d2b25.js";import"./employee-0153a597.js";import"./Title-0440ec3f.js";import"./SegmentedButton-8f7343f0.js";import"./ToggleButton-ed4cffda.js";import"./Bar-b186f469.js";import"./parameters-bundle.css-6b4a2ffb.js";import"./filter-d6e4b3d6.js";import"./nav-back-455500fc.js";import"./i18n-defaults-217b10b4.js";import"./index-2e35f934.js";const I=`**Since:** 0.20.0

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
//# sourceMappingURL=ViewSettingsDialog-edef3157.js.map
