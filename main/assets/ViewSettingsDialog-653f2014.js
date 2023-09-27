import{j as t}from"./jsx-runtime-d079401a.js";import{C as g}from"./DomRefTable.module-e26fe270.js";import{D as f}from"./DocsHeader-31b4cd8e.js";import{F as b}from"./Footer-515737ac.js";import"./index-f1f2c4b1.js";import{M as u,C as x,b as o,f as n,A as r}from"./chunk-S4VUQJ4A-18fb694d.js";import{D as j}from"./DomRefTable-06221164.js";import{S as w}from"./SubcomponentsSection-6138f2fc.js";import{C as S,D as a,S as c,F as l,a as d}from"./ViewSettingsDialog.stories-30ac1629.js";import{e as s}from"./utils-b1ef2149.js";import{u as h}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-c0ca7266.js";import"./iframe-becc6373.js";import"../sb-preview/runtime.js";import"./UI5Element-e590cd60.js";import"./CustomElementsScopeUtils-264b8a39.js";import"./withWebComponent-b4c67a1a.js";import"./utils-e9940b93.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-b897d66f.js";import"./Icons-65b34360.js";import"./decline-2f6198d2.js";import"./i18n-defaults-bdef1cce.js";import"./information-e97f915a.js";import"./alert-7494fabe.js";import"./class-map-e1b423a4.js";import"./Button-4505b9f6.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-d5195a49.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-203b56de.js";import"./index-c3be52fc.js";import"./Integer-f7f172c9.js";import"./index-15fbe6ab.js";import"./Avatar-60d18bb8.js";import"./ResizeHandler-34ecee99.js";import"./employee-78fe46d2.js";import"./index-0681a04b.js";import"./index-58775084.js";import"./Link-a373b451.js";import"./WrappingType-b81e595a.js";import"./index-480f63b1.js";import"./TableOfContent-2d27733e.js";import"./index-6989d869.js";import"./Label-69062358.js";import"./index-c74c9f7f.js";import"./index-c70f02b9.js";import"./index-b607e9e5.js";import"./Popover-742c9988.js";import"./PopupUtils-f407c5e4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-97942203.js";import"./FocusableElements-d024bb16.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-ecc46a93.js";import"./BrowserScrollbar.css-4a87524a.js";import"./index-92d824d3.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./Dialog-cf714d6a.js";import"./ValueState-2c5e5904.js";import"./GroupHeaderListItem-667d01bb.js";import"./ListItemBase-e8a1d82b.js";import"./ItemNavigation-52fe434f.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-7cb729ee.js";import"./StandardListItem-32d37e59.js";import"./ListItem-65b5ee84.js";import"./RadioButton-bfff4944.js";import"./CheckBox-c32e2a79.js";import"./accept-92104380.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-7a309837.js";import"./Title-0fb688d3.js";import"./SegmentedButton-011fbf64.js";import"./ToggleButton-c0a19ccb.js";import"./Bar-f60d381d.js";import"./parameters-bundle.css-1b860e2a.js";import"./filter-4303c230.js";import"./nav-back-b6a8f62b.js";import"./i18n-defaults-2dcf78e8.js";const D=`**Since:** 0.20.0
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
//# sourceMappingURL=ViewSettingsDialog-653f2014.js.map
