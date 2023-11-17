import{_ as n}from"./iframe-_OlRtZJR.js";import{I as o}from"./Input-BNiri3bM.js";import{w as a}from"./withWebComponent-ceo0jn6D.js";import{V as s}from"./ValueState-I_-hGNIb.js";const e=a("ui5-input",["accessibleName","accessibleNameRef","maxlength","name","placeholder","type","value","valueState"],["disabled","noTypeahead","readonly","required","showClearIcon","showSuggestions"],["icon","valueStateMessage"],["change","input","suggestion-item-preview","suggestion-item-select"],()=>n(()=>import("./Input-BNiri3bM.js").then(t=>t.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]),import.meta.url));e.displayName="Input";e.defaultProps={type:o.Text,valueState:s.None};try{e.displayName="Input",e.__docgenInfo={description:'The `Input` component allows the user to enter and edit text or numeric values in one line.\nAdditionally, you can provide `suggestionItems`, that are displayed in a popover right under the input.\n\nThe text field can be editable or read-only (`readonly` property), and it can be enabled or disabled (`disabled` property). To visualize semantic states, such as "error" or "warning", the `valueState` property is provided. When the user makes changes to the text, the change event is fired, which enables you to react on any text change.\n\n**Note:** If you are using the `Input` as a single npm module, don\'t forget to import the `InputSuggestions` module from "@ui5/webcomponents/dist/features/InputSuggestions.js" to enable the suggestions functionality.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Input)',displayName:"Input",props:{children:{defaultValue:null,description:`Defines the suggestion items.

Example:

<pre>
  <code>
   &lt;Input showSuggestions><br />
   &nbsp;&nbsp;&lt;SuggestionItem text="Item #1" /><br />
   &nbsp;&nbsp;&lt;SuggestionItem text="Item #2" /><br />
   &lt;/Input>
 </code>
</pre>


**Note:** The suggestions would be displayed only if the \`showSuggestions\` property is set to \`true\`.

**Note:** The \`<SuggestionItem>\` and \`<SuggestionGroupItem>\` are recommended to be used as suggestion items.

**Note:** Importing the Input Suggestions Support feature:
\`import "@ui5/webcomponents/dist/features/InputSuggestions.js";\`
automatically imports the \`<SuggestionItem>\` and \`<SuggestionGroupItem>\` for your convenience.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed in the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="icon"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"icon",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},valueStateMessage:{defaultValue:null,description:"Defines the value state message that will be displayed as pop up under the component.\n\n**Note:** If not specified, a default text (in the respective language) will be displayed.\n\n**Note:** The `valueStateMessage` would be displayed, when the component is in `Information`, `Warning` or `Error` value state.\n\n**Note:** If the component has `suggestionItems`, the `valueStateMessage` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot=\"valueStateMessage\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).",name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onChange:{defaultValue:null,description:"Fired when the input operation has finished by pressing Enter or on focusout.\n\n__Note:__ This event is NOT the same as the native `onChange` [event of React](https://reactjs.org/docs/dom-elements.html#onchange). If you want to simulate that behavior, please use `onInput` instead.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, never>) => void"}},onInput:{defaultValue:null,description:"Fired when the value of the component changes at each keystroke, and when a suggestion item has been selected.",name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, never>) => void"}},onSuggestionItemPreview:{defaultValue:null,description:"Fired when the user navigates to a suggestion item via the ARROW keys, as a preview, before the final selection.",name:"onSuggestionItemPreview",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, InputSuggestionItemPreviewEventDetail>) => void"}},onSuggestionItemSelect:{defaultValue:null,description:"Fired when a suggestion item, that is displayed in the suggestion popup, is selected.",name:"onSuggestionItemSelect",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, InputSuggestionItemSelectEventDetail>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the input.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:`Defines whether the component is in disabled state.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},maxlength:{defaultValue:null,description:`Sets the maximum number of characters available in the input field.

**Note:** This property is not compatible with the Input type InputType.Number. If the Input type is set to Number, the maxlength value is ignored.`,name:"maxlength",required:!1,type:{name:"number"}},name:{defaultValue:null,description:'Determines the name with which the component will be submitted in an HTML form.\n\n**Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n\n**Note:** When set, a native `input` HTML element will be created inside the component so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.',name:"name",required:!1,type:{name:"string"}},noTypeahead:{defaultValue:null,description:"Defines whether the value will be autcompleted to match an item",name:"noTypeahead",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"Defines a short hint intended to aid the user with data entry when the component has no value.",name:"placeholder",required:!1,type:{name:"string"}},readonly:{defaultValue:null,description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable, but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},showClearIcon:{defaultValue:null,description:"Defines whether the clear icon of the input will be shown.",name:"showClearIcon",required:!1,type:{name:"boolean"}},showSuggestions:{defaultValue:null,description:'Defines whether the component should show suggestions, if such are present.\n\n**Note:** You need to import the `InputSuggestions` module from `"@ui5/webcomponents/dist/features/InputSuggestions.js"` to enable this functionality.',name:"showSuggestions",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"InputType.Text"},description:`Defines the HTML type of the component.

**Notes:**

*   The particular effect of this property differs depending on the browser and the current language settings, especially for type \`Number\`.
*   The property is mostly intended to be used with touch devices that use different soft keyboard layouts depending on the given input type.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"Text"'},{value:'"Email"'},{value:'"Number"'},{value:'"Password"'},{value:'"Tel"'},{value:'"URL"'},{value:'"Text"'},{value:'"Email"'},{value:'"Number"'},{value:'"Password"'},{value:'"Tel"'},{value:'"URL"'}]}},value:{defaultValue:null,description:`Defines the value of the component.

**Note:** The property is updated upon typing.`,name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:"ValueState.None"},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Error"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as I};
//# sourceMappingURL=index-qanpx5M6.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Input-BNiri3bM.js","./UI5Element-51XrG2PJ.js","./CustomElementsScopeUtils-FvbtGFoH.js","./withWebComponent-ceo0jn6D.js","./utils-CrDMzPRG.js","./index-OjgoNOWw.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./slot-HSrR9XJ-.js","./Icon-HNXZSIOG.js","./Icons-3pbvVZUr.js","./ResizeHandler-9pqGT1BJ.js","./ValueState-zUcANXoY.js","./Integer-kog98579.js","./AriaLabelHelper-RbKlVwzD.js","./getActiveElement-IIKAy3xo.js","./decline-Q45dXYUl.js","./i18n-defaults-n2A5pq_J.js","./Suggestions.css-OipsoI1z.js","./information-WfdY8QHP.js","./alert-TGfQazfI.js","./Popover-pPQH5XeW.js","./PopupUtils-JhQDb1QD.js","./PopupsCommon.css-q9U65Wkb.js","./FocusableElements-W9IwOAGU.js","./isElementHidden-d3-Fo4V6.js","./MediaRange-sEMt71Ve.js","./style-map-uWW-8QIe.js","./class-map-JXa0-u4l.js","./BrowserScrollbar.css-HfEGARrw.js","./i18n-defaults-RBzcmDt8.js","./ResponsivePopoverCommon.css-sOUQDAhm.js","./ValueStateMessage.css-YQdKx3t-.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}