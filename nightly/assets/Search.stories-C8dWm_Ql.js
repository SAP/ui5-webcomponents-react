import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./index-U0ga5oGA.js";import{S as v,a as r}from"./index-ehZdtUjR.js";import"./Search-BQy-4Bea.js";import{w as S}from"./jsx-runtime-2NO35c9p.js";const t=S("ui5-search",["accessibleDescription","accessibleName","placeholder","value"],["loading","noTypeahead","open","showClearIcon"],["action","filterButton","illustration","messageArea","scopes"],["close","input","open","scope-change","search"]);t.displayName="Search";try{t.displayName="Search",t.__docgenInfo={description:`A \`Search\` is an input with suggestions, used for user search.

The \`Search\` consists of several elements parts:
- Scope - displays a select in the beggining of the component, used for filtering results by their scope.
- Input field - for user input value
- Clear button - gives the possibility for deleting the entered value
- Search button - a primary button for performing search, when the user has entered a search term
- Suggestions - a list with available search suggestions



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Search",props:{action:{defaultValue:null,description:`Defines the popup footer action button.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="action"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"action",required:!1,type:{name:"UI5WCSlotsNode"}},children:{defaultValue:null,description:"Defines the Search suggestion items.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},filterButton:{defaultValue:null,description:`Defines the filter button slot, used to display an additional filtering button.
This slot is intended for passing a \`ui5-button\` with a filter icon to provide extended filtering options.

**Note:** Scope button and Filter button are mutually exclusive.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="filterButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.11.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents-fiori**.`,name:"filterButton",required:!1,type:{name:"UI5WCSlotsNode"}},illustration:{defaultValue:null,description:`Defines the illustrated message to be shown in the popup.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="illustration"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"illustration",required:!1,type:{name:"UI5WCSlotsNode"}},messageArea:{defaultValue:null,description:`Defines the illustrated message to be shown in the popup.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="messageArea"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"messageArea",required:!1,type:{name:"UI5WCSlotsNode"}},scopes:{defaultValue:null,description:`Defines the component scope options.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="scopes"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"scopes",required:!1,type:{name:"UI5WCSlotsNode"}},onClose:{defaultValue:null,description:`Fired when the popup is closed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<SearchDomRef, never>) => void"}},onInput:{defaultValue:null,description:`Fired when typing in input or clear icon is pressed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<SearchDomRef, never>) => void"}},onOpen:{defaultValue:null,description:`Fired when the popup is opened.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<SearchDomRef, never>) => void"}},onScopeChange:{defaultValue:null,description:`Fired when the scope has changed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onScopeChange",required:!1,type:{name:"(event: Ui5CustomEvent<SearchDomRef, SearchFieldScopeSelectionChangeDetails>) => void"}},onSearch:{defaultValue:null,description:`Fired when the user has triggered search with Enter key or Search Button press.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onSearch",required:!1,type:{name:"(event: Ui5CustomEvent<SearchDomRef, never>) => void"}},accessibleDescription:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA description of the field.",name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"false"},description:"Indicates whether a loading indicator should be shown in the popup.",name:"loading",required:!1,type:{name:"boolean"}},noTypeahead:{defaultValue:{value:"false"},description:"Defines whether the value will be autcompleted to match an item.",name:"noTypeahead",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"false"},description:"Indicates whether the items picker is open.",name:"open",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"undefined"},description:`Defines a short hint intended to aid the user with data entry when the
component has no value.`,name:"placeholder",required:!1,type:{name:"string"}},showClearIcon:{defaultValue:{value:"false"},description:"Defines whether the clear icon of the search will be shown.",name:"showClearIcon",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`Defines the value of the component.

**Note:** The property is updated upon typing.`,name:"value",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{t.displayName="Search",t.__docgenInfo={description:`A \`Search\` is an input with suggestions, used for user search.

The \`Search\` consists of several elements parts:
- Scope - displays a select in the beggining of the component, used for filtering results by their scope.
- Input field - for user input value
- Clear button - gives the possibility for deleting the entered value
- Search button - a primary button for performing search, when the user has entered a search term
- Suggestions - a list with available search suggestions



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Search",props:{action:{defaultValue:null,description:`Defines the popup footer action button.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="action"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"action",required:!1,type:{name:"UI5WCSlotsNode"}},children:{defaultValue:null,description:"Defines the Search suggestion items.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},filterButton:{defaultValue:null,description:`Defines the filter button slot, used to display an additional filtering button.
This slot is intended for passing a \`ui5-button\` with a filter icon to provide extended filtering options.

**Note:** Scope button and Filter button are mutually exclusive.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="filterButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.11.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents-fiori**.`,name:"filterButton",required:!1,type:{name:"UI5WCSlotsNode"}},illustration:{defaultValue:null,description:`Defines the illustrated message to be shown in the popup.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="illustration"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"illustration",required:!1,type:{name:"UI5WCSlotsNode"}},messageArea:{defaultValue:null,description:`Defines the illustrated message to be shown in the popup.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="messageArea"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"messageArea",required:!1,type:{name:"UI5WCSlotsNode"}},scopes:{defaultValue:null,description:`Defines the component scope options.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="scopes"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"scopes",required:!1,type:{name:"UI5WCSlotsNode"}},onClose:{defaultValue:null,description:`Fired when the popup is closed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<SearchDomRef, never>) => void"}},onInput:{defaultValue:null,description:`Fired when typing in input or clear icon is pressed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<SearchDomRef, never>) => void"}},onOpen:{defaultValue:null,description:`Fired when the popup is opened.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<SearchDomRef, never>) => void"}},onScopeChange:{defaultValue:null,description:`Fired when the scope has changed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onScopeChange",required:!1,type:{name:"(event: Ui5CustomEvent<SearchDomRef, SearchFieldScopeSelectionChangeDetails>) => void"}},onSearch:{defaultValue:null,description:`Fired when the user has triggered search with Enter key or Search Button press.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onSearch",required:!1,type:{name:"(event: Ui5CustomEvent<SearchDomRef, never>) => void"}},accessibleDescription:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA description of the field.",name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"false"},description:"Indicates whether a loading indicator should be shown in the popup.",name:"loading",required:!1,type:{name:"boolean"}},noTypeahead:{defaultValue:{value:"false"},description:"Defines whether the value will be autcompleted to match an item.",name:"noTypeahead",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"false"},description:"Indicates whether the items picker is open.",name:"open",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"undefined"},description:`Defines a short hint intended to aid the user with data entry when the
component has no value.`,name:"placeholder",required:!1,type:{name:"string"}},showClearIcon:{defaultValue:{value:"false"},description:"Defines whether the clear icon of the search will be shown.",name:"showClearIcon",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`Defines the value of the component.

**Note:** The property is updated upon typing.`,name:"value",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const _={title:"Inputs / Search",component:t,argTypes:{children:{control:{disable:!0}},illustration:{control:{disable:!0}},scopes:{control:{disable:!0}},messageArea:{control:{disable:!0}},action:{control:{disable:!0}}},tags:["package:@ui5/webcomponents-fiori"]},n={},i=[{name:"Laptop",scope:"products"},{name:"Leave Requests",scope:"apps"},{name:"Log work",scope:"apps"},{name:"Manage Products",scope:"apps"},{name:"Mobile Phones",scope:"products"},{name:"Tablet",scope:"products"}],a={args:{showClearIcon:!0,placeholder:"Search Apps, Products",scopes:e.jsxs(e.Fragment,{children:[e.jsx(r,{selected:!0,text:"All"}),e.jsx(r,{text:"Apps"}),e.jsx(r,{text:"Products"})]})},render(s){const[b,l]=w.useState(i),g=o=>{s.onScopeChange(o);const{scope:p}=o.detail;p.text==="All"?l(i):l(i.filter(y=>y.scope===p.text.toLowerCase()))};return e.jsx(t,{...s,onScopeChange:g,children:b.map(o=>e.jsx(v,{text:o.name,scopeName:o.scope},o.name))})}};var c,h,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(u=(h=n.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var d,m,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    showClearIcon: true,
    placeholder: 'Search Apps, Products',
    scopes: <>
        <SearchScope selected text="All" />
        <SearchScope text="Apps" />
        <SearchScope text="Products" />
      </>
  },
  render(args) {
    const [filterData, setFilterData] = useState(scopeData);
    const handleScopeChange: SearchPropTypes['onScopeChange'] = e => {
      args.onScopeChange(e);
      const {
        scope
      } = e.detail;
      if (scope.text === 'All') {
        setFilterData(scopeData);
      } else {
        setFilterData(scopeData.filter(item => {
          return item.scope === scope.text.toLowerCase();
        }));
      }
    };
    return <Search {...args} onScopeChange={handleScopeChange}>
        {filterData.map(item => {
        return <SearchItem key={item.name} text={item.name} scopeName={item.scope} />;
      })}
      </Search>;
  }
}`,...(f=(m=a.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const C=["Default","WithScopeAndItems"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:n,WithScopeAndItems:a,__namedExportsOrder:C,default:_},Symbol.toStringTag,{value:"Module"}));export{q as C,n as D,a as W};
