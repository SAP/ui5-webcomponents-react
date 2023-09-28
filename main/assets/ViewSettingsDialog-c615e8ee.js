import{j as t}from"./jsx-runtime-d079401a.js";import{C as g}from"./DomRefTable.module-f120e188.js";import{D as f}from"./DocsHeader-4c84a994.js";import{F as b}from"./Footer-9b5bf698.js";import"./index-f1f2c4b1.js";import{M as u,C as x,b as o,f as n,A as r}from"./chunk-S4VUQJ4A-9d70caf3.js";import{D as j}from"./DomRefTable-15c02952.js";import{S as w}from"./SubcomponentsSection-6138f2fc.js";import{C as S,D as a,S as c,F as l,a as d}from"./ViewSettingsDialog.stories-326e8bdf.js";import{e as s}from"./utils-b1ef2149.js";import{u as h}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-f14b6e9d.js";import"./iframe-6577e19e.js";import"../sb-preview/runtime.js";import"./UI5Element-fe43d284.js";import"./CustomElementsScopeUtils-7e643eaa.js";import"./withWebComponent-40b4b429.js";import"./utils-64df43e3.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-4b8e6c3e.js";import"./Icons-1d0bcfc0.js";import"./decline-6c7fc0a2.js";import"./i18n-defaults-bdef1cce.js";import"./information-5d7a8806.js";import"./alert-1b225bb9.js";import"./class-map-c90b90b7.js";import"./Button-ca10e4c6.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-d5195a49.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-0dcb0e40.js";import"./index-127b808b.js";import"./Integer-f7f172c9.js";import"./index-f79d2917.js";import"./Avatar-b61e760c.js";import"./ResizeHandler-c2d89e75.js";import"./employee-6f8dc3b6.js";import"./index-c5e4ad44.js";import"./index-2354e865.js";import"./Link-39a6449b.js";import"./WrappingType-b81e595a.js";import"./index-7ebe0f2b.js";import"./TableOfContent-f71ce619.js";import"./index-db13eb88.js";import"./Label-44520d2b.js";import"./index-c74c9f7f.js";import"./index-5e118ca2.js";import"./index-28771739.js";import"./Popover-e0a9892e.js";import"./PopupUtils-6f7aa5d8.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-20392ac5.js";import"./FocusableElements-81dc3a15.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-26bcc635.js";import"./BrowserScrollbar.css-6733af99.js";import"./index-92d824d3.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./Dialog-524beb63.js";import"./ValueState-2c5e5904.js";import"./GroupHeaderListItem-1642eb17.js";import"./ListItemBase-a954caa9.js";import"./ItemNavigation-6fcc55ad.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-9ca5d237.js";import"./StandardListItem-4d8bc973.js";import"./ListItem-8f00fe18.js";import"./RadioButton-2fcb52b7.js";import"./CheckBox-e1cfdb7e.js";import"./accept-9e169369.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-bfe8f962.js";import"./Title-01167e9e.js";import"./SegmentedButton-8e975c7d.js";import"./ToggleButton-e803c376.js";import"./Bar-536b1c90.js";import"./parameters-bundle.css-f8793162.js";import"./filter-ed4eaf7b.js";import"./nav-back-1b57b932.js";import"./i18n-defaults-2dcf78e8.js";const D=`**Since:** 0.20.0
**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).

### Usage

For the \`FilterItem\`
`,F=`**Since:** 0.20.0
**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).

### Usage

For the \`FilterItemOption\`
`,I=`**Since:** 0.20.0
**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).

### Usage

For the \`SortItem\`
`,C=`## Structure

A \`ViewSettingsDialog\` consists of a header, content, and a footer for action buttons. The \`ViewSettingsDialog\` is usually displayed at the center of the screen.

## Responsive Behavior

\`ViewSettingsDialog\` stretches on full screen on phones.
`,y=[{name:"setConfirmedSettings",visibility:"public",parameters:[{name:"settings",type:"Object",optional:!1,parameterProperties:{sortOrder:{name:"sortOrder",type:"string",optional:!1,description:"sort order"},sortBy:{name:"sortBy",type:"string",optional:!1,description:"sort by"},filters:{name:"filters",type:"Object[]",optional:!1,description:"filters"}},description:"predefined settings."}],description:`Sets a JavaScript object, as settings to the <code>ui5-view-settings-dialog</code>. This method can be used after the dialog is initially open, as the dialog needs to set its initial settings.<br> The <code>ui5-view-settings-dialog</code> throws an event called "before-open", which can be used as a trigger point.<br> The object should have the following format:<br> <pre>
{
	sortOrder: "Ascending",
	sortBy: "Name",
	filters: [
		{"Filter 1": ["Some filter 1", "Some filter 2"]},
		{"Filter 2": ["Some filter 4"]},
	]
}
</pre>`},{name:"show",visibility:"public",description:"Shows the dialog."}];function le(i={}){const{wrapper:p}=Object.assign({},h(),i.components);return p?t.jsx(p,Object.assign({},i,{children:t.jsx(m,{})})):m();function m(){const e=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},h(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(u,{of:S}),`
`,t.jsx(f,{since:"0.20.0"}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(x,{of:a}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(g,{of:a}),`
`,t.jsx(o,{children:C}),`
`,t.jsx(j,{rows:y}),`
`,t.jsx(e.h2,{id:"opening-viewsettingsdialog",children:"Opening ViewSettingsDialog"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"ViewSettingsDialog"}),"s can be opened by attaching a ",t.jsx(e.code,{children:"ref"})," to the component and then calling the corresponding ",t.jsx(e.strong,{children:t.jsx(e.code,{children:"show"})})," method."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`const ViewSettingsDialogComponent = () => {
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
`,t.jsx(o,{children:w}),`
`,t.jsx(e.h2,{id:"sortitem",children:"SortItem"}),`
`,t.jsx(n,{of:c}),`
`,t.jsx(r,{exclude:s,of:c}),`
`,t.jsx(o,{children:I}),`
`,t.jsx(e.h2,{id:"filteritem",children:"FilterItem"}),`
`,t.jsx(n,{of:l}),`
`,t.jsx(r,{exclude:s,of:l}),`
`,t.jsx(o,{children:D}),`
`,t.jsx(e.h2,{id:"filteritemoption",children:"FilterItemOption"}),`
`,t.jsx(n,{of:d}),`
`,t.jsx(r,{exclude:s,of:d}),`
`,t.jsx(o,{children:F}),`
`,t.jsx(b,{})]})}}export{le as default};
//# sourceMappingURL=ViewSettingsDialog-c615e8ee.js.map
