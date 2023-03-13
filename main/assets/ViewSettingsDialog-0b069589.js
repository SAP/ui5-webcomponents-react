import{j as t,a as p,F as g}from"./jsx-runtime-670450c2.js";import{C as f}from"./DomRefTable.module-5a92b3aa.js";import{D as u}from"./DocsHeader-2171f118.js";import{F as S}from"./Footer-d1fa4308.js";import"./index-f1f749bf.js";import{D}from"./DomRefTable-e28568d7.js";import{S as b}from"./SubcomponentsSection-6138f2fc.js";import{M as w,C as F,a as i,h as r,b as n}from"./index-d168f592.js";import{C as y,D as a,S as c,F as l,a as d}from"./ViewSettingsDialog.stories-6b76e731.js";import{u as h}from"./index-4fb8b842.js";import"./chunk-PCJTTTQV-7fbc680b.js";import"./iframe-ec1d1418.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-fe4dc3ff.js";import"./inheritsLoose-93e09647.js";import"./index-3519bbac.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./i18n-defaults-da1c0a37.js";import"./decline-f2b294b3.js";import"./Icons-7b82f601.js";import"./i18n-defaults-80781f7e.js";import"./information-50e1ad0f.js";import"./class-map-5d8e4b2b.js";import"./Icon-a9b28f0c.js";import"./Keys-3acbae73.js";import"./Button-b7bbfa18.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./index-57eaac56.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-2a210be2.js";import"./TableOfContent-87933f28.js";import"./index-472e8986.js";import"./Link-f8688ae9.js";import"./WrappingType-b81e595a.js";import"./index-87fa1919.js";import"./Label-040efebd.js";import"./Footer.module-f90cad7d.js";import"./index-610136b6.js";import"./Popover-661594f1.js";import"./Integer-f7f172c9.js";import"./PopupsCommon.css-be465885.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./Dialog-8adfbd6d.js";import"./ValueState-2c5e5904.js";import"./GroupHeaderListItem-5167186a.js";import"./ListItemBase-eee2ba1b.js";import"./ItemNavigation-18222ac6.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-f47be8a3.js";import"./StandardListItem-aeb86e64.js";import"./ListItem-fadb587b.js";import"./RadioButton-c2b6bc1d.js";import"./CheckBox-9b089db0.js";import"./accept-a98baca8.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-bbef5919.js";import"./Avatar-ff49e25a.js";import"./employee-98ce1b38.js";import"./Title-b986a4bd.js";import"./SegmentedButton-8ca67e83.js";import"./ToggleButton-a9b3674e.js";import"./Bar-62766cca.js";import"./fastNavigation-8b41cdda.js";import"./parameters-bundle.css-6b4a2ffb.js";import"./filter-008e2c6a.js";import"./nav-back-d955604a.js";import"./i18n-defaults-0a7ef706.js";import"./index-1c9aec94.js";const I=`
### Usage

For the \`FilterItem\``,C=`
### Usage

For the \`FilterItemOption\``,O=`
### Usage

For the \`SortItem\``,j=`## Structure

A \`ViewSettingsDialog\` consists of a header, content, and a footer for action buttons. The \`ViewSettingsDialog\` is usually displayed at the center of the screen.

## Responsive Behavior

\`ViewSettingsDialog\` stretches on full screen on phones.
`,v=[{name:"setConfirmedSettings",visibility:"public",parameters:[{name:"settings",type:"Object",optional:!1,parameterProperties:{sortOrder:{name:"sortOrder",type:"string",optional:!1,description:"sort order"},sortBy:{name:"sortBy",type:"string",optional:!1,description:"sort by"},filters:{name:"filters",type:"Object[]",optional:!1,description:"filters"}},description:"predefined settings."}],description:'Sets a JavaScript object, as settings to the <code>ui5-view-settings-dialog</code>. This method can be used after the dialog is initially open, as the dialog need to set its initial settings. The <code>ui5-view-settings-dialog</code> throws an event called "before-open", this can be used as trigger point. The object should have the following format: <code> {sortOrder: "Ascending", sortBy: "Name", filters: [{"Filter 1": ["Some filter 1", "Some filter 2"]}, {"Filter 2": ["Some filter 4"]}]} </code>'},{name:"show",visibility:"public",description:"Shows the dialog."}];function So(e={}){const{wrapper:s}=Object.assign({},h(),e.components);return s?t(s,Object.assign({},e,{children:t(m,{})})):m();function m(){const o=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},h(),e.components);return p(g,{children:[t(w,{of:y}),`
`,t(u,{since:"0.20.0"}),`
`,t("br",{}),`
`,t(o.h2,{children:"Example"}),`
`,t(F,{of:a}),`
`,t(o.h2,{children:"Properties"}),`
`,t(f,{of:a}),`
`,t(i,{children:j}),`
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
`,t(i,{children:b}),`
`,t(o.h2,{children:"SortItem"}),`
`,t(r,{of:c}),`
`,t(n,{of:c}),`
`,t(i,{children:O}),`
`,t(o.h2,{children:"FilterItem"}),`
`,t(r,{of:l}),`
`,t(n,{of:l}),`
`,t(i,{children:I}),`
`,t(o.h2,{children:"FilterItemOption"}),`
`,t(r,{of:d}),`
`,t(n,{of:d}),`
`,t(i,{children:C}),`
`,t(S,{})]})}}export{So as default};
//# sourceMappingURL=ViewSettingsDialog-0b069589.js.map
