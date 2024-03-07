import{_ as n}from"./iframe-lvTVDQ9h.js";import"./Input-eD9SaQvX.js";import{w as o}from"./withWebComponent-WsMVk7rH.js";const e=o("ui5-input",["accessibleName","accessibleNameRef","maxlength","name","placeholder","type","value","valueState"],["disabled","noTypeahead","readonly","required","showClearIcon","showSuggestions"],["icon","valueStateMessage"],["change","input","suggestion-item-preview","suggestion-item-select"],()=>n(()=>import("./Input-eD9SaQvX.js").then(t=>t.c),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38]),import.meta.url));e.displayName="Input";try{e.displayName="Input",e.__docgenInfo={description:`The \`Input\` component allows the user to enter and edit text or numeric values in one line.

Additionally, you can provide \`suggestionItems\`,
that are displayed in a popover right under the input.

The text field can be editable or read-only (\`readonly\` property),
and it can be enabled or disabled (\`disabled\` property).
To visualize semantic states, such as "error" or "warning", the \`valueState\` property is provided.
When the user makes changes to the text, the change event is fired,
which enables you to react on any text change.

**Note:** If you are using the \`Input\` as a single npm module,
don't forget to import the \`InputSuggestions\` module from
"@ui5/webcomponents/dist/features/InputSuggestions.js"
to enable the suggestions functionality.

### Keyboard Handling
The \`Input\` provides the following keyboard shortcuts:

- [ESC] - Closes the suggestion list, if open. If closed or not enabled, cancels changes and reverts to the value which the Input field had when it got the focus.
- [ENTER] or [RETURN] - If suggestion list is open takes over the current matching item and closes it. If value state or group header is focused, does nothing.
- [DOWN] - Focuses the next matching item in the suggestion list.
- [UP] - Focuses the previous matching item in the suggestion list.
- [HOME] - If focus is in the text input, moves caret before the first character. If focus is in the list, highlights the first item and updates the input accordingly.
- [END] - If focus is in the text input, moves caret after the last character. If focus is in the list, highlights the last item and updates the input accordingly.
- [PAGEUP] - If focus is in the list, moves highlight up by page size (10 items by default). If focus is in the input, does nothing.
- [PAGEDOWN] - If focus is in the list, moves highlight down by page size (10 items by default). If focus is in the input, does nothing.



\`import "@ui5/webcomponents/dist/features/InputSuggestions.js";\` (optional - for input suggestions support)

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"Input",props:{children:{defaultValue:null,description:'Defines the suggestion items.\n\n**Note:** The suggestions would be displayed only if the `showSuggestions`\nproperty is set to `true`.\n\n**Note:** The `<SuggestionItem>` and `<SuggestionGroupItem>` are recommended to be used as suggestion items.\n\n**Note:** Importing the Input Suggestions Support feature:\n\n`import "@ui5/webcomponents/dist/features/InputSuggestions.js";`\n\nautomatically imports the `<SuggestionItem>` and `<SuggestionGroupItem>` for your convenience.',name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed in the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="icon"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"icon",required:!1,type:{name:"UI5WCSlotsNode"}},valueStateMessage:{defaultValue:null,description:"Defines the value state message that will be displayed as pop up under the component.\n\n**Note:** If not specified, a default text (in the respective language) will be displayed.\n\n**Note:** The `valueStateMessage` would be displayed,\nwhen the component is in `Information`, `Warning` or `Error` value state.\n\n**Note:** If the component has `suggestionItems`,\nthe `valueStateMessage` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot=\"valueStateMessage\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).",name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:"Fired when the input operation has finished by pressing Enter or on focusout.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, never>) => void"}},onInput:{defaultValue:null,description:`Fired when the value of the component changes at each keystroke,
and when a suggestion item has been selected.`,name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, never>) => void"}},onSuggestionItemPreview:{defaultValue:null,description:`Fired when the user navigates to a suggestion item via the ARROW keys,
as a preview, before the final selection.`,name:"onSuggestionItemPreview",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, InputSuggestionItemPreviewEventDetail>) => void"}},onSuggestionItemSelect:{defaultValue:null,description:"Fired when a suggestion item, that is displayed in the suggestion popup, is selected.",name:"onSuggestionItemSelect",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, InputSuggestionItemSelectEventDetail>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the input.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is in disabled state.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},maxlength:{defaultValue:{value:"undefined"},description:`Sets the maximum number of characters available in the input field.

**Note:** This property is not compatible with the ui5-input type InputType.Number. If the ui5-input type is set to Number, the maxlength value is ignored.`,name:"maxlength",required:!1,type:{name:"number"}},name:{defaultValue:null,description:`Determines the name with which the component will be submitted in an HTML form.

**Important:** For the \`name\` property to have effect, you must add the following import to your project:
\`import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";\`

**Note:** When set, a native \`input\` HTML element
will be created inside the component so that it can be submitted as
part of an HTML form. Do not use this property unless you need to submit a form.`,name:"name",required:!1,type:{name:"string"}},noTypeahead:{defaultValue:{value:"false"},description:"Defines whether the value will be autcompleted to match an item",name:"noTypeahead",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:`Defines a short hint intended to aid the user with data entry when the
component has no value.`,name:"placeholder",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},showClearIcon:{defaultValue:{value:"false"},description:"Defines whether the clear icon of the input will be shown.",name:"showClearIcon",required:!1,type:{name:"boolean"}},showSuggestions:{defaultValue:{value:"false"},description:'Defines whether the component should show suggestions, if such are present.\n\n**Note:** You need to import the `InputSuggestions` module\nfrom `"@ui5/webcomponents/dist/features/InputSuggestions.js"` to enable this functionality.',name:"showSuggestions",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:'"Text"'},description:`Defines the HTML type of the component.

**Notes:**

- The particular effect of this property differs depending on the browser
and the current language settings, especially for type \`Number\`.
- The property is mostly intended to be used with touch devices
that use different soft keyboard layouts depending on the given input type.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"Text"'},{value:'"Email"'},{value:'"Number"'},{value:'"Password"'},{value:'"Tel"'},{value:'"URL"'},{value:'"Text"'},{value:'"Email"'},{value:'"Number"'},{value:'"Password"'},{value:'"Tel"'},{value:'"URL"'}]}},value:{defaultValue:null,description:`Defines the value of the component.

**Note:** The property is updated upon typing.`,name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Warning"'},{value:'"None"'},{value:'"Error"'},{value:'"Success"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Error"'},{value:'"Information"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as I};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Input-eD9SaQvX.js","./UI5Element-i6xEMhb-.js","./Boot-ZMdbUkXu.js","./VersionInfo-szri6OiK.js","./CustomElementsScopeUtils-E-jGiXBT.js","./withWebComponent-WsMVk7rH.js","./utils-TqRdq3Pf.js","./index-OjgoNOWw.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./slot-HSrR9XJ-.js","./event-lM5HanI-.js","./ResizeHandler-_spraO4D.js","./ValueState-zUcANXoY.js","./Keys-ZEuNsqmZ.js","./Integer-kog98579.js","./i18nBundle-QOmUTBjc.js","./AriaLabelHelper-RbKlVwzD.js","./getActiveElement-IIKAy3xo.js","./decline-9_Y3Taaa.js","./Icons-2Vjs2kvs.js","./i18n-defaults-SIMqfZL6.js","./information-5Caf1O3N.js","./alert-80rGR3Mk.js","./Popover-AJDeb5lw.js","./PopupUtils--F87unyw.js","./PopupsCommon.css-D70R2m1B.js","./FocusableElements--mw2hLMH.js","./isElementHidden-d3-Fo4V6.js","./getEffectiveScrollbarStyle-Gz48PLeD.js","./MediaRange-sEMt71Ve.js","./style-map-T1SBcBMD.js","./class-map-QoPRPm_o.js","./parameters-bundle.css-I2VxmuZZ.js","./BrowserScrollbar.css-amc9gXm3.js","./Icon-ONjMh5dV.js","./i18n-defaults-KFYnnpmz.js","./ResponsivePopoverCommon.css-IQ069Qg1.js","./ValueStateMessage.css-zZE82aMf.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
