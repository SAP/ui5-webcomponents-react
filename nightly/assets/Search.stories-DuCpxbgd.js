import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{r as W}from"./index-U0ga5oGA.js";import{w as v,j as l,h as S,p as V,d as A,s as c,m as I,y as R,E as k}from"./jsx-runtime-2URiGFD4.js";import{d as L}from"./slot-_4yKMUwC.js";import{c as U}from"./ListItemGroup-CjFr5KrF.js";import{I as F}from"./Icon-B0-3JSbm.js";import{a as M,T as E}from"./Tag-CFnuOVXp.js";import{a as z,B as P}from"./Button-Bjd4zYvH.js";import{d as O}from"./decline-Dy3AHuu2.js";import{d as H}from"./parameters-bundle.css-BSPpStCH.js";import{f as j}from"./generateHighlightedMarkup-DOyZLZ_s.js";import{l as B}from"./event-strict-DgQLNDEV.js";import"./Search-D4xqfQBG.js";const m=v("ui5-search",["accessibleDescription","accessibleName","placeholder","value"],["loading","noTypeahead","open","showClearIcon"],["action","filterButton","illustration","messageArea","scopes"],["close","input","open","scope-change","search"]);m.displayName="Search";try{m.displayName="Search",m.__docgenInfo={description:`A \`Search\` is an input with suggestions, used for user search.

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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{m.displayName="Search",m.__docgenInfo={description:`A \`Search\` is an input with suggestions, used for user search.

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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function G(){return l("li",{part:"native-li",class:"ui5-li-root ui5-li--focusable","aria-selected":this.selected,role:"option","data-sap-focus-ref":!0,draggable:this.movable,tabindex:this._effectiveTabIndex,onFocusIn:this._onfocusin,onFocusOut:this._onfocusout,onKeyUp:this._onkeyup,onKeyDown:this._onkeydown,onClick:this._onclick,children:l("div",{part:"content",class:"ui5-search-item-content",children:S("div",{class:"ui5-search-item-begin-content",children:[this.image.length>0&&!this.icon&&l("slot",{name:"image"}),this.icon&&l(F,{class:"ui5-search-item-icon",name:this.icon}),this.scopeName&&l(M,{design:E.Set2,colorScheme:"10",children:this.scopeName}),S("div",{class:"ui5-search-item-titles-container",children:[l("span",{part:"title",class:"ui5-search-item-text",dangerouslySetInnerHTML:{__html:this._markupText}}),l("span",{part:"subtitle",class:"ui5-search-item-description",children:this.description})]}),this.selected&&l(z,{class:"ui5-search-item-selected-delete",design:P.Transparent,icon:O,onClick:this._onDeleteButtonClick})]})})})}V("@ui5/webcomponents-theming","sap_horizon",async()=>A);V("@ui5/webcomponents-fiori","sap_horizon",async()=>H);const $=`:host([selected]){border:none}:host{border:none}.ui5-search-item-content{width:100%;height:100%;display:flex;align-items:center;gap:1rem}.ui5-search-item-begin-content{display:flex;height:100%;align-items:center;gap:.75rem;width:100%;box-sizing:border-box;flex:1}.ui5-search-item-selected-delete{display:none}:host([selected]:hover),:host(:focus-within){.ui5-search-item-selected-delete{display:inline-block}}.ui5-search-item-text{display:inline-block;font-size:var(--sapFontLargeSize);font-family:var(--sapFontFamily);font-weight:400;color:var(--sapList_TextColor);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui5-search-item-titles-container{overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;flex:1}.ui5-search-item-icon{padding:.375rem;width:1.25rem;height:1rem;box-sizing:content-box}:host([description]){height:auto;min-height:var(--_ui5-v2-11-0_list_item_base_height)}:host([description]) .ui5-search-item-content{padding-top:.5rem;padding-bottom:.5rem}:host([description]) .ui5-search-item-description{display:inline-block}.ui5-search-item-description{display:none;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;color:var(--sapContent_LabelColor);margin-top:.25rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
`;var h=function(t,o,a,s){var n=arguments.length,e=n<3?o:s===null?s=Object.getOwnPropertyDescriptor(o,a):s,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(t,o,a,s);else for(var d=t.length-1;d>=0;d--)(i=t[d])&&(e=(n<3?i(e):n>3?i(o,a,e):i(o,a))||e);return n>3&&e&&Object.defineProperty(o,a,e),e};let r=class extends U{constructor(){super(...arguments),this.selected=!1,this.highlightText="",this._markupText=""}_onfocusin(o){super._onfocusin(o),this.selected=!0}_onfocusout(){this.selected=!1}_onDeleteButtonClick(){this.fireDecoratorEvent("delete")}onBeforeRendering(){super.onBeforeRendering(),this._markupText=this.highlightText?j(this.text||"",this.highlightText):this.text||""}};h([c()],r.prototype,"text",void 0);h([c()],r.prototype,"description",void 0);h([c()],r.prototype,"icon",void 0);h([c({type:Boolean})],r.prototype,"selected",void 0);h([c()],r.prototype,"scopeName",void 0);h([c()],r.prototype,"highlightText",void 0);h([L()],r.prototype,"image",void 0);r=h([I({tag:"ui5-search-item",languageAware:!0,renderer:R,template:G,styles:[U.styles,$]}),B("delete")],r);r.define();const f=v("ui5-search-item",["description","icon","scopeName","text"],["selected"],["image"],["delete"]);f.displayName="SearchItem";try{f.displayName="SearchItem",f.__docgenInfo={description:`A \`SearchItem\` is a list item, used for displaying search suggestions



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"SearchItem",props:{image:{defaultValue:null,description:`**Note:** While the slot allows the option of setting a custom avatar, to comply with the
design guidelines, use the \`ui5-avatar\` with size - XS.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="image"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.12.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.12.0) of **@ui5/webcomponents-fiori**.`,name:"image",required:!1,type:{name:"UI5WCSlotsNode"}},onDelete:{defaultValue:null,description:`Fired when delete button is pressed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onDelete",required:!1,type:{name:"(event: Ui5CustomEvent<SearchItemDomRef, never>) => void"}},description:{defaultValue:{value:"undefined"},description:`Defines the description that appears right under the item text, if available.

**Note:** Available since [v2.12.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.12.0) of **@ui5/webcomponents-fiori**.`,name:"description",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"undefined"},description:`Defines the icon name of the search item.
**Note:** If provided, the image slot will be ignored.`,name:"icon",required:!1,type:{name:"string"}},scopeName:{defaultValue:{value:"undefined"},description:"Defines the scope of the search item",name:"scopeName",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"Defines whether the search item is selected.",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:{value:"undefined"},description:"Defines the heading text of the search item.",name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{f.displayName="SearchItem",f.__docgenInfo={description:`A \`SearchItem\` is a list item, used for displaying search suggestions



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"SearchItem",props:{image:{defaultValue:null,description:`**Note:** While the slot allows the option of setting a custom avatar, to comply with the
design guidelines, use the \`ui5-avatar\` with size - XS.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="image"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.12.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.12.0) of **@ui5/webcomponents-fiori**.`,name:"image",required:!1,type:{name:"UI5WCSlotsNode"}},onDelete:{defaultValue:null,description:`Fired when delete button is pressed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onDelete",required:!1,type:{name:"(event: Ui5CustomEvent<SearchItemDomRef, never>) => void"}},description:{defaultValue:{value:"undefined"},description:`Defines the description that appears right under the item text, if available.

**Note:** Available since [v2.12.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.12.0) of **@ui5/webcomponents-fiori**.`,name:"description",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"undefined"},description:`Defines the icon name of the search item.
**Note:** If provided, the image slot will be ignored.`,name:"icon",required:!1,type:{name:"string"}},scopeName:{defaultValue:{value:"undefined"},description:"Defines the scope of the search item",name:"scopeName",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"Defines whether the search item is selected.",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:{value:"undefined"},description:"Defines the heading text of the search item.",name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var _=function(t,o,a,s){var n=arguments.length,e=n<3?o:s===null?s=Object.getOwnPropertyDescriptor(o,a):s,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(t,o,a,s);else for(var d=t.length-1;d>=0;d--)(i=t[d])&&(e=(n<3?i(e):n>3?i(o,a,e):i(o,a))||e);return n>3&&e&&Object.defineProperty(o,a,e),e};let y=class extends k{get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}};_([c()],y.prototype,"text",void 0);_([c({type:Boolean})],y.prototype,"selected",void 0);y=_([I("ui5-search-scope")],y);y.define();const p=v("ui5-search-scope",["text"],["selected"],[],[]);p.displayName="SearchScope";try{p.displayName="SearchScope",p.__docgenInfo={description:"The `SearchScope` represents the options for the scope in `Search`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"SearchScope",props:{selected:{defaultValue:{value:"false"},description:"Indicates whether the item is selected",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{p.displayName="SearchScope",p.__docgenInfo={description:"The `SearchScope` represents the options for the scope in `Search`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"SearchScope",props:{selected:{defaultValue:{value:"false"},description:"Indicates whether the item is selected",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const K={title:"Inputs / Search",component:m,argTypes:{children:{control:{disable:!0}},illustration:{control:{disable:!0}},scopes:{control:{disable:!0}},messageArea:{control:{disable:!0}},action:{control:{disable:!0}}},tags:["package:@ui5/webcomponents-fiori"]},g={},w=[{name:"Laptop",scope:"products"},{name:"Leave Requests",scope:"apps"},{name:"Log work",scope:"apps"},{name:"Manage Products",scope:"apps"},{name:"Mobile Phones",scope:"products"},{name:"Tablet",scope:"products"}],b={args:{showClearIcon:!0,placeholder:"Search Apps, Products",scopes:u.jsxs(u.Fragment,{children:[u.jsx(p,{selected:!0,text:"All"}),u.jsx(p,{text:"Apps"}),u.jsx(p,{text:"Products"})]})},render(t){const[o,a]=W.useState(w),s=n=>{t.onScopeChange(n);const{scope:e}=n.detail;e.text==="All"?a(w):a(w.filter(i=>i.scope===e.text.toLowerCase()))};return u.jsx(m,{...t,onScopeChange:s,children:o.map(n=>u.jsx(f,{text:n.name,scopeName:n.scope},n.name))})}};var D,N,C;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:"{}",...(C=(N=g.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var T,x,q;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(q=(x=b.parameters)==null?void 0:x.docs)==null?void 0:q.source}}};const X=["Default","WithScopeAndItems"],he=Object.freeze(Object.defineProperty({__proto__:null,Default:g,WithScopeAndItems:b,__namedExportsOrder:X,default:K},Symbol.toStringTag,{value:"Module"}));export{he as C,g as D,b as W};
