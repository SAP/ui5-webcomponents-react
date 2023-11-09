import{j as t}from"./jsx-runtime-d079401a.js";import{C as g}from"./DomRefTable.module-f05b81ba.js";import{D as f}from"./DocsHeader-1187361a.js";import{F as b}from"./Footer-ba0c9d44.js";import"./index-f1f2c4b1.js";import{M as u,C as x,b as o,f as n,A as r}from"./chunk-HLWAVYOI-a6f72cf0.js";import{D as j}from"./DomRefTable-5f2b173e.js";import{S as w}from"./SubcomponentsSection-6138f2fc.js";import{C as S,D as a,S as c,F as l,a as d}from"./ViewSettingsDialog.stories-17f0d24c.js";import{e as s}from"./utils-b1ef2149.js";import{u as h}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-edf24df5.js";import"./iframe-00365b50.js";import"../sb-preview/runtime.js";import"./UI5Element-d089e658.js";import"./CustomElementsScopeUtils-90546106.js";import"./withWebComponent-f146e44d.js";import"./utils-85c0effb.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-dc979b51.js";import"./Icons-d115de21.js";import"./decline-a017ea5c.js";import"./i18n-defaults-bdef1cce.js";import"./information-ff75d6c3.js";import"./alert-fa33aca2.js";import"./class-map-5b190712.js";import"./Button-f20bbbdf.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-a1ecaff4.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-b7e0672b.js";import"./index-5cc6a68f.js";import"./Integer-f7f172c9.js";import"./index-46b44704.js";import"./Avatar-d6a8bd34.js";import"./ResizeHandler-36d5a74c.js";import"./employee-0930782f.js";import"./index-caa04bd3.js";import"./index-18fe1021.js";import"./Link-0dce4afc.js";import"./WrappingType-b81e595a.js";import"./index-12e0da73.js";import"./TableOfContent-be64e3e5.js";import"./index-a20cedb0.js";import"./Label-025b0296.js";import"./index-c74c9f7f.js";import"./index-9afde71a.js";import"./index-8d7f3001.js";import"./Popover-84fe14ea.js";import"./PopupUtils-caf3caee.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-070f9d59.js";import"./FocusableElements-320054f2.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-2f7624b7.js";import"./BrowserScrollbar.css-e63eefff.js";import"./index-f82c8853.js";import"./mapValues-6da481dc.js";import"./_baseForOwn-62af832b.js";import"./_baseUniq-27dbdc21.js";import"./index-356e4a49.js";import"./Dialog-d6d3e16c.js";import"./ValueState-2c5e5904.js";import"./GroupHeaderListItem-bda61d02.js";import"./ListItemBase-8f94593b.js";import"./ItemNavigation-5bb0bc27.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-30d2b934.js";import"./StandardListItem-e433cbf1.js";import"./ListItem-237bd455.js";import"./RadioButton-894dc7d7.js";import"./CheckBox-e4c9f0e7.js";import"./accept-b3993803.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-f2ee719f.js";import"./Title-53f5d1e4.js";import"./SegmentedButton-f883d249.js";import"./ToggleButton-999ad82c.js";import"./Bar-9b663c57.js";import"./parameters-bundle.css-6c8484e5.js";import"./filter-528c38fa.js";import"./nav-back-dfa550ff.js";import"./i18n-defaults-2dcf78e8.js";const D=`**Since:** 0.20.0
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
</pre>`},{name:"show",visibility:"public",description:"Shows the dialog."}];function ae(i={}){const{wrapper:p}=Object.assign({},h(),i.components);return p?t.jsx(p,Object.assign({},i,{children:t.jsx(m,{})})):m();function m(){const e=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},h(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(u,{of:S}),`
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
`,t.jsx(b,{})]})}}export{ae as default};
//# sourceMappingURL=ViewSettingsDialog-92693def.js.map
