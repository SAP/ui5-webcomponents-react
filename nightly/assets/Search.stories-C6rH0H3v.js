import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{r as U}from"./index-U0ga5oGA.js";import{w as _,j as h,h as R,p as q,d as W,s as d,m as V,y as k,E as A}from"./jsx-runtime-gx_Zcjo3.js";import{l as F}from"./event-strict-DgQLNDEV.js";import{c as I}from"./ListItemGroup-CsRDqRTe.js";import{I as E}from"./Icon-CZw5gRks.js";import{T as L}from"./Tag-CEzSQIl5.js";import{a as M,B as P}from"./Button-BhunxXU0.js";import{d as z}from"./decline-BwbUHmi7.js";import{T as O}from"./TagDesign-Ga50IS6u.js";import{d as j}from"./parameters-bundle.css-VMdlhyu5.js";import{f as H}from"./generateHighlightedMarkup-DZM9A42t.js";import"./Search-D07D18HI.js";const u=_("ui5-search",["accessibleDescription","accessibleName","placeholder","value"],["loading","noTypeahead","open","showClearIcon"],["action","illustration","messageArea","scopes"],["close","input","open","scope-change","search"]);u.displayName="Search";try{u.displayName="Search",u.__docgenInfo={description:`A \`Search\` is an input with suggestions, used for user search.

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
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"action",required:!1,type:{name:"UI5WCSlotsNode"}},children:{defaultValue:null,description:"Defines the Search suggestion items.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},illustration:{defaultValue:null,description:`Defines the illustrated message to be shown in the popup.

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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{u.displayName="Search",u.__docgenInfo={description:`A \`Search\` is an input with suggestions, used for user search.

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
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"action",required:!1,type:{name:"UI5WCSlotsNode"}},children:{defaultValue:null,description:"Defines the Search suggestion items.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},illustration:{defaultValue:null,description:`Defines the illustrated message to be shown in the popup.

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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function B(){return h("li",{part:"native-li",class:"ui5-li-root ui5-li--focusable","aria-selected":this.selected,role:"option","data-sap-focus-ref":!0,draggable:this.movable,tabindex:this._effectiveTabIndex,onFocusIn:this._onfocusin,onFocusOut:this._onfocusout,onKeyUp:this._onkeyup,onKeyDown:this._onkeydown,onClick:this._onclick,children:h("div",{part:"content",class:"ui5-search-item-content",children:R("div",{class:"ui5-search-item-begin-content",children:[this.icon&&h(E,{class:"ui5-search-item-icon",name:this.icon}),this.scopeName&&h(L,{design:O.Set2,colorScheme:"10",children:this.scopeName}),h("div",{class:"ui5-search-item-titles-container",children:h("span",{part:"title",class:"ui5-search-item-heading",dangerouslySetInnerHTML:{__html:this._markupText}})}),this.selected&&h(M,{class:"ui5-search-item-selected-delete",design:P.Transparent,icon:z,onClick:this._onDeleteButtonClick})]})})})}q("@ui5/webcomponents-theming","sap_horizon",async()=>W);q("@ui5/webcomponents-fiori","sap_horizon",async()=>j);const G=`:host([selected]){border:none}.ui5-search-item-content{width:100%;height:100%;display:flex;align-items:center;gap:1rem}.ui5-search-item-begin-content{display:flex;height:100%;align-items:center;gap:.75rem;width:100%;box-sizing:border-box;flex:1}.ui5-search-item-selected-delete{display:none}:host([selected]:hover),:host(:focus-within){.ui5-search-item-selected-delete{display:inline-block}}.ui5-search-item-heading{display:inline-block;font-size:var(--sapFontLargeSize);font-family:var(--sapFontFamily);font-weight:400;color:var(--sapList_TextColor);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui5-search-item-titles-container{overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;flex:1}.ui5-search-item-icon{padding:.375rem;width:1rem;height:1rem;box-sizing:content-box}
`;var f=function(t,n,a,s){var o=arguments.length,e=o<3?n:s===null?s=Object.getOwnPropertyDescriptor(n,a):s,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(t,n,a,s);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(e=(o<3?i(e):o>3?i(n,a,e):i(n,a))||e);return o>3&&e&&Object.defineProperty(n,a,e),e};let l=class extends I{constructor(){super(...arguments),this.text="",this.icon="",this.selected=!1,this.highlightText="",this._markupText=""}_onfocusin(n){super._onfocusin(n),this.selected=!0}_onfocusout(){this.selected=!1}_onDeleteButtonClick(){this.fireDecoratorEvent("delete")}onBeforeRendering(){super.onBeforeRendering(),this._markupText=this.highlightText?H(this.text,this.highlightText):this.text}};f([d()],l.prototype,"text",void 0);f([d()],l.prototype,"icon",void 0);f([d({type:Boolean})],l.prototype,"selected",void 0);f([d()],l.prototype,"scopeName",void 0);f([d()],l.prototype,"highlightText",void 0);l=f([V({tag:"ui5-search-item",languageAware:!0,renderer:k,template:B,styles:[I.styles,G]}),F("delete")],l);l.define();const m=_("ui5-search-item",["icon","scopeName","text"],["selected"],[],["delete"]);m.displayName="SearchItem";try{m.displayName="SearchItem",m.__docgenInfo={description:`A \`SearchItem\` is a list item, used for displaying search suggestions



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"SearchItem",props:{onDelete:{defaultValue:null,description:`Fired when delete button is pressed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onDelete",required:!1,type:{name:"(event: Ui5CustomEvent<SearchItemDomRef, never>) => void"}},icon:{defaultValue:null,description:"Defines the icon name of the search item.",name:"icon",required:!1,type:{name:"string"}},scopeName:{defaultValue:{value:"false"},description:"Defines the scope of the search item",name:"scopeName",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"Defines whether the search item is selected.",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Defines the heading text of the search item.",name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{m.displayName="SearchItem",m.__docgenInfo={description:`A \`SearchItem\` is a list item, used for displaying search suggestions



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"SearchItem",props:{onDelete:{defaultValue:null,description:`Fired when delete button is pressed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onDelete",required:!1,type:{name:"(event: Ui5CustomEvent<SearchItemDomRef, never>) => void"}},icon:{defaultValue:null,description:"Defines the icon name of the search item.",name:"icon",required:!1,type:{name:"string"}},scopeName:{defaultValue:{value:"false"},description:"Defines the scope of the search item",name:"scopeName",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"Defines whether the search item is selected.",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Defines the heading text of the search item.",name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var S=function(t,n,a,s){var o=arguments.length,e=o<3?n:s===null?s=Object.getOwnPropertyDescriptor(n,a):s,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(t,n,a,s);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(e=(o<3?i(e):o>3?i(n,a,e):i(n,a))||e);return o>3&&e&&Object.defineProperty(n,a,e),e};let y=class extends A{get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}};S([d()],y.prototype,"text",void 0);S([d({type:Boolean})],y.prototype,"selected",void 0);y=S([V("ui5-search-scope")],y);y.define();const r=_("ui5-search-scope",["text"],["selected"],[],[]);r.displayName="SearchScope";try{r.displayName="SearchScope",r.__docgenInfo={description:"The `SearchScope` represents the options for the scope in `Search`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"SearchScope",props:{selected:{defaultValue:{value:"false"},description:"Indicates whether the item is selected",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{r.displayName="SearchScope",r.__docgenInfo={description:"The `SearchScope` represents the options for the scope in `Search`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"SearchScope",props:{selected:{defaultValue:{value:"false"},description:"Indicates whether the item is selected",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const $={title:"Inputs / Search",component:u,argTypes:{children:{control:{disable:!0}},illustration:{control:{disable:!0}},scopes:{control:{disable:!0}},messageArea:{control:{disable:!0}},action:{control:{disable:!0}}},tags:["package:@ui5/webcomponents-fiori"]},g={},w=[{name:"Laptop",scope:"products"},{name:"Leave Requests",scope:"apps"},{name:"Log work",scope:"apps"},{name:"Manage Products",scope:"apps"},{name:"Mobile Phones",scope:"products"},{name:"Tablet",scope:"products"}],b={args:{showClearIcon:!0,placeholder:"Search Apps, Products",scopes:p.jsxs(p.Fragment,{children:[p.jsx(r,{selected:!0,text:"All"}),p.jsx(r,{text:"Apps"}),p.jsx(r,{text:"Products"})]})},render(t){const[n,a]=U.useState(w),s=o=>{t.onScopeChange(o);const{scope:e}=o.detail;e.text==="All"?a(w):a(w.filter(i=>i.scope===e.text.toLowerCase()))};return p.jsx(u,{...t,onScopeChange:s,children:n.map(o=>p.jsx(m,{text:o.name,scopeName:o.scope},o.name))})}};var v,D,C;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(C=(D=g.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var N,T,x;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(x=(T=b.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const K=["Default","WithScopeAndItems"],pe=Object.freeze(Object.defineProperty({__proto__:null,Default:g,WithScopeAndItems:b,__namedExportsOrder:K,default:$},Symbol.toStringTag,{value:"Module"}));export{pe as C,g as D,b as W};
