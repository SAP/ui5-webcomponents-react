const __vite__fileDeps=["./Input-DQD7cJqM.js","./UI5Element-DFWAHaHd.js","./Boot-Bc3-yGxv.js","./EventProvider-CVfkyUHo.js","./useIsomorphicLayoutEffect-5feXxxyy.js","./index-CP2MHerv.js","./CustomElementsScopeUtils-u88Ac6A7.js","./withWebComponent-9h-zTtgT.js","./utils-CGfXuD-n.js","./slot-_4yKMUwC.js","./event-Dq0fpeHi.js","./ResizeHandler-C9Gw3xFv.js","./Device-RcFucVeJ.js","./ValueState-Bg0UWejw.js","./Keys-B00bFMgT.js","./Integer-DgRYWdxf.js","./i18nBundle-X-a5Hvm9.js","./AriaLabelHelper-C5uDZewF.js","./getActiveElement-kltGt_DR.js","./decline-DOPX1W-e.js","./Icons-o-g_t4X3.js","./i18n-defaults-CXs2tJOZ.js","./information-D2w0wkAo.js","./alert-RYmCrbKT.js","./Popover-DNhju5aN.js","./PopupsCommon.css-32Lkpc5h.js","./FocusableElements-T7dKq3am.js","./isElementHidden-B4HqmI2E.js","./isElementClickable-0ACQ4G_A.js","./getEffectiveScrollbarStyle-BwuZEAK6.js","./MediaRange-Bnzt26Xb.js","./style-map-C8zHoaTp.js","./class-map-_DPQQvzZ.js","./parameters-bundle.css-DQGkr9pp.js","./BrowserScrollbar.css-BGBIr9gH.js","./Icon-CfJM8OQU.js","./i18n-defaults-DUjPXQIq.js","./ResponsivePopoverCommon.css-Dg9T36wJ.js","./ValueStateMessage.css-DZVmOaDz.js","./ResponsivePopover-Cw_FSBSa.js","./Dialog-DMThqIWU.js","./Button-CxOzesRb.js","./MarkedEvents-CAur0wxK.js","./willShowContent-CZcfsNXp.js","./Title-DxPRxMU1.js","./WrappingType-CW8URInd.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as n}from"./iframe-aAEtqIR4.js";import"./Input-DQD7cJqM.js";import{w as o}from"./withWebComponent-9h-zTtgT.js";const e=o("ui5-input",["accessibleName","accessibleNameRef","maxlength","name","placeholder","type","value","valueState"],["disabled","noTypeahead","open","readonly","required","showClearIcon","showSuggestions"],["icon","valueStateMessage"],["change","close","input","open","selection-change"],()=>n(()=>import("./Input-DQD7cJqM.js").then(t=>t.c),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]),import.meta.url));e.displayName="Input";try{e.displayName="Input",e.__docgenInfo={description:`The \`Input\` component allows the user to enter and edit text or numeric values in one line.

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

- [Escape] - Closes the suggestion list, if open. If closed or not enabled, cancels changes and reverts to the value which the Input field had when it got the focus.
- [Enter] or [Return] - If suggestion list is open takes over the current matching item and closes it. If value state or group header is focused, does nothing.
- [Down] - Focuses the next matching item in the suggestion list. Selection-change event is fired.
- [Up] - Focuses the previous matching item in the suggestion list. Selection-change event is fired.
- [Home] - If focus is in the text input, moves caret before the first character. If focus is in the list, highlights the first item and updates the input accordingly.
- [End] - If focus is in the text input, moves caret after the last character. If focus is in the list, highlights the last item and updates the input accordingly.
- [Page Up] - If focus is in the list, moves highlight up by page size (10 items by default). If focus is in the input, does nothing.
- [Page Down] - If focus is in the list, moves highlight down by page size (10 items by default). If focus is in the input, does nothing.



\`import "@ui5/webcomponents/dist/features/InputSuggestions.js";\` (optional - for input suggestions support)

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Input",props:{children:{defaultValue:null,description:'Defines the suggestion items.\n\n**Note:** The suggestions would be displayed only if the `showSuggestions`\nproperty is set to `true`.\n\n**Note:** The `<SuggestionItem>` and `<SuggestionGroupItem>` are recommended to be used as suggestion items.\n\n**Note:** Importing the Input Suggestions Support feature:\n\n`import "@ui5/webcomponents/dist/features/InputSuggestions.js";`\n\nautomatically imports the `<SuggestionItem>` and `<SuggestionGroupItem>` for your convenience.',name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed in the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="icon"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"icon",required:!1,type:{name:"UI5WCSlotsNode"}},valueStateMessage:{defaultValue:null,description:`Defines the value state message that will be displayed as pop up under the component.
The value state message slot should contain only one root element.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The \`valueStateMessage\` would be displayed,
when the component is in \`Information\`, \`Warning\` or \`Error\` value state.

**Note:** If the component has \`suggestionItems\`,
the \`valueStateMessage\` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:"Fired when the input operation has finished by pressing Enter or on focusout.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, never>) => void"}},onClose:{defaultValue:null,description:`Fired when the suggestions picker is closed.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, never>) => void"}},onInput:{defaultValue:null,description:`Fired when the value of the component changes at each keystroke,
and when a suggestion item has been selected.`,name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, never>) => void"}},onOpen:{defaultValue:null,description:`Fired when the suggestions picker is open.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, never>) => void"}},onSelectionChange:{defaultValue:null,description:`Fired when the user navigates to a suggestion item via the ARROW keys,
as a preview, before the final selection.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, InputSelectionChangeEventDetail>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the input.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is in disabled state.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},maxlength:{defaultValue:{value:"undefined"},description:`Sets the maximum number of characters available in the input field.

**Note:** This property is not compatible with the ui5-input type InputType.Number. If the ui5-input type is set to Number, the maxlength value is ignored.`,name:"maxlength",required:!1,type:{name:"number"}},name:{defaultValue:null,description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:"name",required:!1,type:{name:"string"}},noTypeahead:{defaultValue:{value:"false"},description:`Defines whether the value will be autcompleted to match an item

**Note:** Available since [v1.4.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.4.0) of **@ui5/webcomponents**.`,name:"noTypeahead",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"false"},description:"Defines whether the suggestions picker is open.\nThe picker will not open if the `showSuggestions` property is set to `false`, the input is disabled or the input is readonly.\nThe picker will close automatically and `close` event will be fired if the input is not in the viewport.\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.",name:"open",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:`Defines a short hint intended to aid the user with data entry when the
component has no value.`,name:"placeholder",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},showClearIcon:{defaultValue:{value:"false"},description:`Defines whether the clear icon of the input will be shown.

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"showClearIcon",required:!1,type:{name:"boolean"}},showSuggestions:{defaultValue:{value:"false"},description:'Defines whether the component should show suggestions, if such are present.\n\n**Note:** You need to import the `InputSuggestions` module\nfrom `"@ui5/webcomponents/dist/features/InputSuggestions.js"` to enable this functionality.',name:"showSuggestions",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:'"Text"'},description:`Defines the HTML type of the component.

**Notes:**

- The particular effect of this property differs depending on the browser
and the current language settings, especially for type \`Number\`.
- The property is mostly intended to be used with touch devices
that use different soft keyboard layouts depending on the given input type.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"Text"'},{value:'"Email"'},{value:'"Number"'},{value:'"Password"'},{value:'"Tel"'},{value:'"URL"'},{value:'"Search"'},{value:'"Text"'},{value:'"Email"'},{value:'"Number"'},{value:'"Password"'},{value:'"Tel"'},{value:'"URL"'},{value:'"Search"'}]}},value:{defaultValue:null,description:`Defines the value of the component.

**Note:** The property is updated upon typing.`,name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="Input",e.__docgenInfo={description:`The \`Input\` component allows the user to enter and edit text or numeric values in one line.

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

- [Escape] - Closes the suggestion list, if open. If closed or not enabled, cancels changes and reverts to the value which the Input field had when it got the focus.
- [Enter] or [Return] - If suggestion list is open takes over the current matching item and closes it. If value state or group header is focused, does nothing.
- [Down] - Focuses the next matching item in the suggestion list. Selection-change event is fired.
- [Up] - Focuses the previous matching item in the suggestion list. Selection-change event is fired.
- [Home] - If focus is in the text input, moves caret before the first character. If focus is in the list, highlights the first item and updates the input accordingly.
- [End] - If focus is in the text input, moves caret after the last character. If focus is in the list, highlights the last item and updates the input accordingly.
- [Page Up] - If focus is in the list, moves highlight up by page size (10 items by default). If focus is in the input, does nothing.
- [Page Down] - If focus is in the list, moves highlight down by page size (10 items by default). If focus is in the input, does nothing.



\`import "@ui5/webcomponents/dist/features/InputSuggestions.js";\` (optional - for input suggestions support)

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Input",props:{children:{defaultValue:null,description:'Defines the suggestion items.\n\n**Note:** The suggestions would be displayed only if the `showSuggestions`\nproperty is set to `true`.\n\n**Note:** The `<SuggestionItem>` and `<SuggestionGroupItem>` are recommended to be used as suggestion items.\n\n**Note:** Importing the Input Suggestions Support feature:\n\n`import "@ui5/webcomponents/dist/features/InputSuggestions.js";`\n\nautomatically imports the `<SuggestionItem>` and `<SuggestionGroupItem>` for your convenience.',name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed in the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="icon"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"icon",required:!1,type:{name:"UI5WCSlotsNode"}},valueStateMessage:{defaultValue:null,description:`Defines the value state message that will be displayed as pop up under the component.
The value state message slot should contain only one root element.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The \`valueStateMessage\` would be displayed,
when the component is in \`Information\`, \`Warning\` or \`Error\` value state.

**Note:** If the component has \`suggestionItems\`,
the \`valueStateMessage\` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:"Fired when the input operation has finished by pressing Enter or on focusout.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, never>) => void"}},onClose:{defaultValue:null,description:`Fired when the suggestions picker is closed.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, never>) => void"}},onInput:{defaultValue:null,description:`Fired when the value of the component changes at each keystroke,
and when a suggestion item has been selected.`,name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, never>) => void"}},onOpen:{defaultValue:null,description:`Fired when the suggestions picker is open.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, never>) => void"}},onSelectionChange:{defaultValue:null,description:`Fired when the user navigates to a suggestion item via the ARROW keys,
as a preview, before the final selection.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, InputSelectionChangeEventDetail>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the input.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is in disabled state.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},maxlength:{defaultValue:{value:"undefined"},description:`Sets the maximum number of characters available in the input field.

**Note:** This property is not compatible with the ui5-input type InputType.Number. If the ui5-input type is set to Number, the maxlength value is ignored.`,name:"maxlength",required:!1,type:{name:"number"}},name:{defaultValue:null,description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:"name",required:!1,type:{name:"string"}},noTypeahead:{defaultValue:{value:"false"},description:`Defines whether the value will be autcompleted to match an item

**Note:** Available since [v1.4.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.4.0) of **@ui5/webcomponents**.`,name:"noTypeahead",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"false"},description:"Defines whether the suggestions picker is open.\nThe picker will not open if the `showSuggestions` property is set to `false`, the input is disabled or the input is readonly.\nThe picker will close automatically and `close` event will be fired if the input is not in the viewport.\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.",name:"open",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:`Defines a short hint intended to aid the user with data entry when the
component has no value.`,name:"placeholder",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},showClearIcon:{defaultValue:{value:"false"},description:`Defines whether the clear icon of the input will be shown.

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"showClearIcon",required:!1,type:{name:"boolean"}},showSuggestions:{defaultValue:{value:"false"},description:'Defines whether the component should show suggestions, if such are present.\n\n**Note:** You need to import the `InputSuggestions` module\nfrom `"@ui5/webcomponents/dist/features/InputSuggestions.js"` to enable this functionality.',name:"showSuggestions",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:'"Text"'},description:`Defines the HTML type of the component.

**Notes:**

- The particular effect of this property differs depending on the browser
and the current language settings, especially for type \`Number\`.
- The property is mostly intended to be used with touch devices
that use different soft keyboard layouts depending on the given input type.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"Text"'},{value:'"Email"'},{value:'"Number"'},{value:'"Password"'},{value:'"Tel"'},{value:'"URL"'},{value:'"Search"'},{value:'"Text"'},{value:'"Email"'},{value:'"Number"'},{value:'"Password"'},{value:'"Tel"'},{value:'"URL"'},{value:'"Search"'}]}},value:{defaultValue:null,description:`Defines the value of the component.

**Note:** The property is updated upon typing.`,name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as I};
