import{j as t,a as p,F as g}from"./jsx-runtime-670450c2.js";import{C as f}from"./DomRefTable.module-9a9ff34b.js";import{D as u}from"./DocsHeader-c5a3abb5.js";import{F as S}from"./Footer-7f457475.js";import"./index-f1f749bf.js";import{D}from"./DomRefTable-ee568ef3.js";import{S as b}from"./SubcomponentsSection-6138f2fc.js";import{M as w,C as F,a as e,h as r,b as n}from"./index-bc5dd318.js";import{C as y,D as a,S as c,F as l,a as d}from"./ViewSettingsDialog.stories-1f48065e.js";import{u as h}from"./index-4fb8b842.js";import"./chunk-PCJTTTQV-7a3eb077.js";import"./iframe-e0204f0d.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-fe4dc3ff.js";import"./inheritsLoose-93e09647.js";import"./index-195fa335.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-c82262ef.js";import"./i18n-defaults-ffd92f69.js";import"./decline-5eb6d937.js";import"./Icons-7b82f601.js";import"./i18n-defaults-7dff8409.js";import"./information-0837f136.js";import"./class-map-5d8e4b2b.js";import"./Icon-ce854b74.js";import"./Keys-3acbae73.js";import"./Button-b2f5d653.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./index-5cbed584.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-b13c67a4.js";import"./TableOfContent-1593fab8.js";import"./index-2d96caf1.js";import"./WrappingType-b81e595a.js";import"./index-bdbf428d.js";import"./Label-040efebd.js";import"./Footer.module-f90cad7d.js";import"./index-94872efc.js";import"./Popover-9656b900.js";import"./Integer-d9976c13.js";import"./PopupsCommon.css-ff32b102.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./Dialog-d6ad04fd.js";import"./ValueState-2c5e5904.js";import"./GroupHeaderListItem-54e0e5cd.js";import"./ListItemBase-bb5cef12.js";import"./ItemNavigation-9e1aa83a.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-aae87d2c.js";import"./StandardListItem-d455eb22.js";import"./ListItem-1aa125fd.js";import"./RadioButton-9df6ded1.js";import"./CheckBox-4b130a30.js";import"./accept-a98baca8.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-bbef5919.js";import"./Avatar-88715af2.js";import"./employee-98ce1b38.js";import"./Title-b986a4bd.js";import"./SegmentedButton-5e65e13d.js";import"./ToggleButton-8a27b40c.js";import"./Bar-2267974f.js";import"./fastNavigation-8b41cdda.js";import"./parameters-bundle.css-6b4a2ffb.js";import"./filter-f55c9a46.js";import"./nav-back-e2bbf132.js";import"./i18n-defaults-2bde2064.js";import"./index-ae104e20.js";const I=`
### Usage

For the \`FilterItem\``,C=`
### Usage

For the \`FilterItemOption\``,O=`
### Usage

For the \`SortItem\``,j=`## Structure

A \`ViewSettingsDialog\` consists of a header, content, and a footer for action buttons. The \`ViewSettingsDialog\` is usually displayed at the center of the screen.

## Responsive Behavior

\`ViewSettingsDialog\` stretches on full screen on phones.
`,v=[{name:"setConfirmedSettings",visibility:"public",parameters:[{name:"settings",type:"Object",optional:!1,parameterProperties:{sortOrder:{name:"sortOrder",type:"string",optional:!1,description:"sort order"},sortBy:{name:"sortBy",type:"string",optional:!1,description:"sort by"},filters:{name:"filters",type:"Object[]",optional:!1,description:"filters"}},description:"predefined settings."}],description:'Sets a JavaScript object, as settings to the <code>ui5-view-settings-dialog</code>. This method can be used after the dialog is initially open, as the dialog need to set its initial settings. The <code>ui5-view-settings-dialog</code> throws an event called "before-open", this can be used as trigger point. The object should have the following format: <code> {sortOrder: "Ascending", sortBy: "Name", filters: [{"Filter 1": ["Some filter 1", "Some filter 2"]}, {"Filter 2": ["Some filter 4"]}]} </code>'},{name:"show",visibility:"public",description:"Shows the dialog."}];function go(i={}){const{wrapper:s}=Object.assign({},h(),i.components);return s?t(s,Object.assign({},i,{children:t(m,{})})):m();function m(){const o=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},h(),i.components);return p(g,{children:[t(w,{of:y}),`
`,t(u,{since:"0.20.0"}),`
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
`,t(r,{of:c}),`
`,t(n,{of:c}),`
`,t(e,{children:O}),`
`,t(o.h2,{children:"FilterItem"}),`
`,t(r,{of:l}),`
`,t(n,{of:l}),`
`,t(e,{children:I}),`
`,t(o.h2,{children:"FilterItemOption"}),`
`,t(r,{of:d}),`
`,t(n,{of:d}),`
`,t(e,{children:C}),`
`,t(S,{})]})}}export{go as default};
//# sourceMappingURL=ViewSettingsDialog-4910f16a.js.map
