import{j as t}from"./jsx-runtime-d079401a.js";import{C as g}from"./DomRefTable.module-5d67adde.js";import{D as f}from"./DocsHeader-6d4c3770.js";import{F as b}from"./Footer-fa2ff786.js";import"./index-f1f2c4b1.js";import{D as u}from"./DomRefTable-2242a995.js";import{S as x}from"./SubcomponentsSection-6138f2fc.js";import{M as j,C as w,b as o,f as n,A as r}from"./chunk-S4VUQJ4A-4499c612.js";import{C as S,D as a,S as c,F as l,a as d}from"./ViewSettingsDialog.stories-90af9fdb.js";import{e as s}from"./utils-b1ef2149.js";import{u as h}from"./index-59d6410c.js";import"./react-jss.esm-c310038c.js";import"./inheritsLoose-93e09647.js";import"./index-79e04b8a.js";import"./iframe-9c252156.js";import"../sb-preview/runtime.js";import"./UI5Element-a4bd3d38.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7d7e5133.js";import"./utils-626dc1bf.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-42236945.js";import"./Icons-74c917eb.js";import"./decline-3cb804de.js";import"./i18n-defaults-2d2bf0b6.js";import"./information-dbbb1c9a.js";import"./class-map-0ab40ab9.js";import"./Button-02dfef34.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-d5d083dd.js";import"./index-47d0a85a.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-d9b40dee.js";import"./index-82bd8dbf.js";import"./Integer-f7f172c9.js";import"./index-de0aa291.js";import"./Avatar-6c09069b.js";import"./ResizeHandler-0af4416f.js";import"./employee-05c578de.js";import"./index-b7b61b56.js";import"./index-7b58c824.js";import"./Link-498d09c2.js";import"./WrappingType-b81e595a.js";import"./index-56b3d57c.js";import"./TableOfContent-4a72a09e.js";import"./index-5a18bd17.js";import"./Label-287c3220.js";import"./index-c74c9f7f.js";import"./index-fc0a75f8.js";import"./index-b151a09b.js";import"./Popover-26ef4370.js";import"./PopupsCommon.css-f12c9479.js";import"./FocusableElements-66623361.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-132a30d8.js";import"./BrowserScrollbar.css-309143b9.js";import"./index-92d824d3.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./Dialog-3eddfe98.js";import"./ValueState-2c5e5904.js";import"./GroupHeaderListItem-60c5bd52.js";import"./ListItemBase-472e3755.js";import"./ItemNavigation-0734b7c0.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-ce1a2cfb.js";import"./StandardListItem-afe74127.js";import"./ListItem-86bc8c51.js";import"./RadioButton-082fd9c9.js";import"./CheckBox-355e2cb2.js";import"./accept-aa607c05.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-b5a9fe30.js";import"./Title-f7b3e876.js";import"./SegmentedButton-28349c3b.js";import"./ToggleButton-4c5cf92d.js";import"./Bar-4e8debe5.js";import"./parameters-bundle.css-f9dc8928.js";import"./filter-f559e552.js";import"./nav-back-9d16816a.js";import"./i18n-defaults-2dcf78e8.js";const D=`**Since:** 0.20.0  
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
</pre>`},{name:"show",visibility:"public",description:"Shows the dialog."}];function le(i={}){const{wrapper:p}=Object.assign({},h(),i.components);return p?t.jsx(p,Object.assign({},i,{children:t.jsx(m,{})})):m();function m(){const e=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},h(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(j,{of:S}),`
`,t.jsx(f,{since:"0.20.0"}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(w,{of:a}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(g,{of:a}),`
`,t.jsx(o,{children:C}),`
`,t.jsx(u,{rows:y}),`
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
`,t.jsx(o,{children:x}),`
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
//# sourceMappingURL=ViewSettingsDialog-764067fe.js.map
