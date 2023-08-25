import{j as t}from"./jsx-runtime-d079401a.js";import{C as g}from"./DomRefTable.module-631d633e.js";import{D as f}from"./DocsHeader-c6652b01.js";import{F as b}from"./Footer-ff5ca319.js";import"./index-f1f2c4b1.js";import{M as u,C as x,b as o,f as n,A as r}from"./chunk-S4VUQJ4A-b6bbae92.js";import{D as j}from"./DomRefTable-602cdf3d.js";import{S as w}from"./SubcomponentsSection-6138f2fc.js";import{C as S,D as a,S as c,F as l,a as d}from"./ViewSettingsDialog.stories-e4cc96d1.js";import{e as s}from"./utils-b1ef2149.js";import{u as h}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-5c99afe1.js";import"./iframe-1dd5a666.js";import"../sb-preview/runtime.js";import"./UI5Element-6dcea8dd.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7d7e5133.js";import"./utils-626dc1bf.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-b7f7d9e7.js";import"./Icons-e937042c.js";import"./decline-d1fe7fdd.js";import"./i18n-defaults-2d2bf0b6.js";import"./information-a40f0e71.js";import"./class-map-0ab40ab9.js";import"./Button-6bb9ed58.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-d675a36d.js";import"./index-bb1f9706.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-5ee8a8c4.js";import"./index-02736a64.js";import"./Integer-f7f172c9.js";import"./index-dc71433f.js";import"./Avatar-faa225d6.js";import"./ResizeHandler-e83234a4.js";import"./employee-f0b5ef8f.js";import"./index-c6f02c4d.js";import"./index-38f03d20.js";import"./Link-34530090.js";import"./WrappingType-b81e595a.js";import"./index-fb6e8b5e.js";import"./TableOfContent-ad58c919.js";import"./index-b3a0928d.js";import"./Label-c4db564a.js";import"./index-b42968db.js";import"./index-1853dc0b.js";import"./index-c03d5ed5.js";import"./Popover-8ece70a3.js";import"./PopupsCommon.css-2b73575b.js";import"./FocusableElements-ae22402e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-132a30d8.js";import"./BrowserScrollbar.css-22391551.js";import"./index-d203965f.js";import"./mapValues-e5c6f517.js";import"./_baseForOwn-24231fc1.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-00f63d78.js";import"./_baseUniq-edf521f4.js";import"./index-356e4a49.js";import"./Dialog-ea4c9a60.js";import"./ValueState-2c5e5904.js";import"./GroupHeaderListItem-7829eb80.js";import"./ListItemBase-c655abbb.js";import"./ItemNavigation-f231b836.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-713a4f98.js";import"./StandardListItem-17582cb4.js";import"./ListItem-43381874.js";import"./RadioButton-f48638b8.js";import"./CheckBox-6d778514.js";import"./accept-d5698387.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-1acb3967.js";import"./Title-e46bbbf5.js";import"./SegmentedButton-6deaa090.js";import"./ToggleButton-2d52195e.js";import"./Bar-86528487.js";import"./parameters-bundle.css-f9dc8928.js";import"./filter-142191d2.js";import"./nav-back-7cb22783.js";import"./i18n-defaults-2dcf78e8.js";const D=`**Since:** 0.20.0  
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
</pre>`},{name:"show",visibility:"public",description:"Shows the dialog."}];function ce(i={}){const{wrapper:p}=Object.assign({},h(),i.components);return p?t.jsx(p,Object.assign({},i,{children:t.jsx(m,{})})):m();function m(){const e=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},h(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(u,{of:S}),`
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
`,t.jsx(b,{})]})}}export{ce as default};
//# sourceMappingURL=ViewSettingsDialog-f8b34553.js.map
