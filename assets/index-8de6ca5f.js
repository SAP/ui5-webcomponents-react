import{_ as n}from"./iframe-3ab1de1e.js";import"./Select-165e307f.js";import{w as o}from"./withWebComponent-f146e44d.js";import{V as a}from"./ValueState-ab6838cc.js";const e=o("ui5-select",["accessibleName","accessibleNameRef","menu","name","valueState"],["disabled","required"],["label","valueStateMessage"],["change","close","live-change","open"],()=>n(()=>import("./Select-165e307f.js").then(t=>t.b),["./Select-165e307f.js","./UI5Element-d089e658.js","./CustomElementsScopeUtils-90546106.js","./withWebComponent-f146e44d.js","./utils-85c0effb.js","./index-f1f2c4b1.js","./jsx-runtime-d079401a.js","./useIsomorphicLayoutEffect-c49de97d.js","./Icon-dc979b51.js","./Icons-d115de21.js","./slot-76e48863.js","./Popover-84fe14ea.js","./Integer-f7f172c9.js","./PopupUtils-caf3caee.js","./getActiveElement-bcae01ed.js","./PopupsCommon.css-070f9d59.js","./FocusableElements-320054f2.js","./isElementHidden-01c07146.js","./AriaLabelHelper-43a261ec.js","./decline-a017ea5c.js","./i18n-defaults-bdef1cce.js","./ResizeHandler-36d5a74c.js","./MediaRange-25b98f31.js","./style-map-2f7624b7.js","./class-map-5b190712.js","./BrowserScrollbar.css-e63eefff.js","./InvisibleMessage-b699e12e.js","./ValueState-2c5e5904.js","./slim-arrow-down-d3e7694d.js","./information-ff75d6c3.js","./alert-fa33aca2.js","./ListItemBase-8f94593b.js","./ItemNavigation-5bb0bc27.js","./TabbableElements-8e49b367.js","./debounce-9c2fb7dd.js","./BusyIndicator-30d2b934.js","./Label-025b0296.js","./WrappingType-b81e595a.js","./i18n-defaults-a1ecaff4.js","./ResponsivePopover-46599dee.js","./Dialog-d6d3e16c.js","./Button-f20bbbdf.js","./MarkedEvents-b83081e9.js","./Title-53f5d1e4.js","./StandardListItem-e433cbf1.js","./ListItem-237bd455.js","./RadioButton-894dc7d7.js","./CheckBox-e4c9f0e7.js","./accept-b3993803.js","./HasPopup-47461347.js","./slim-arrow-right-f2ee719f.js","./Avatar-d6a8bd34.js","./employee-0930782f.js","./ResponsivePopoverCommon.css-ef6cd2ad.js","./ValueStateMessage.css-7d9802b8.js"],import.meta.url));e.displayName="Select";e.defaultProps={valueState:a.None};try{e.displayName="Select",e.__docgenInfo={description:`The \`Select\` component is used to create a drop-down list.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Select)`,displayName:"Select",props:{children:{defaultValue:null,description:`Defines the component options.

**Note:** Only one selected option is allowed. If more than one option is defined as selected, the last one would be considered as the selected one.

**Note:** Use the \`Option\` component to define the desired options.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},label:{defaultValue:null,description:`Defines the HTML element that will be displayed in the component input part, representing the selected option.

**Note:** If not specified and \`SelectMenuOption\` is used, either the option's \`display-text\` or its textContent will be displayed.

**Note:** If not specified and \`Option\` is used, the option's textContent will be displayed.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="label"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"label",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},valueStateMessage:{defaultValue:null,description:"Defines the value state message that will be displayed as pop up under the component.\n\n**Note:** If not specified, a default text (in the respective language) will be displayed.\n\n**Note:** The `valueStateMessage` would be displayed, when the component is in `Information`, `Warning` or `Error` value state.\n\n**Note:** If the component has `suggestionItems`, the `valueStateMessage` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot=\"valueStateMessage\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).",name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onChange:{defaultValue:null,description:"Fired when the selected option changes.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<SelectDomRef, SelectChangeEventDetail>) => void"}},onClose:{defaultValue:null,description:"Fired after the component's dropdown menu closes.",name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<SelectDomRef, never>) => void"}},onLiveChange:{defaultValue:null,description:"Fired when the user navigates through the options, but the selection is not finalized, or when pressing the ESC key to revert the current selection.",name:"onLiveChange",required:!1,type:{name:"(event: Ui5CustomEvent<SelectDomRef, SelectLiveChangeEventDetail>) => void"}},onOpen:{defaultValue:null,description:"Fired after the component's dropdown menu opens.",name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<SelectDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the select.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:`Defines whether the component is in disabled state.

**Note:** A disabled component is noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},menu:{defaultValue:null,description:"Defines the ID of the component's options menu, as an alternative to defining the selection's drop-down menu.\n\n**Note:** Usage of `SelectMenu` is recommended.",name:"menu",required:!1,type:{name:"string"}},name:{defaultValue:null,description:'Determines the name with which the component will be submitted in an HTML form. The value of the component will be the value of the currently selected `Option`.\n\n**Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n\n**Note:** When set, a native `input` HTML element will be created inside the `Select` so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.',name:"name",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},valueState:{defaultValue:{value:"ValueState.None"},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Error"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as S};
//# sourceMappingURL=index-8de6ca5f.js.map
