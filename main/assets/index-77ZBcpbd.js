import{_ as n}from"./iframe-LnjFU1Gc.js";import"./Select-gPlLiyBN.js";import{w as o}from"./withWebComponent-l-jCeTa1.js";import{V as a}from"./ValueState-I_-hGNIb.js";const e=o("ui5-select",["accessibleName","accessibleNameRef","menu","name","valueState"],["disabled","required"],["label","valueStateMessage"],["change","close","live-change","open"],()=>n(()=>import("./Select-gPlLiyBN.js").then(t=>t.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56]),import.meta.url));e.displayName="Select";e.defaultProps={valueState:a.None};try{e.displayName="Select",e.__docgenInfo={description:`The \`Select\` component is used to create a drop-down list.

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
//# sourceMappingURL=index-77ZBcpbd.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Select-gPlLiyBN.js","./UI5Element-Y0uzLFOr.js","./i18nBundle-Crssojm_.js","./VersionInfo-hBCHoyLi.js","./CustomElementsScopeUtils-5j4ES8UU.js","./withWebComponent-l-jCeTa1.js","./utils-NoXYr8Q_.js","./index-OjgoNOWw.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./Icon-bdsWWJur.js","./Icons-WRZ8WMWs.js","./slot-HSrR9XJ-.js","./Popover-F3UgQy3P.js","./Integer-kog98579.js","./PopupUtils-7oRQuqE1.js","./getActiveElement-IIKAy3xo.js","./PopupsCommon.css-QWf1zPQp.js","./FocusableElements-SaTJsZH1.js","./isElementHidden-d3-Fo4V6.js","./AriaLabelHelper-RbKlVwzD.js","./decline-tcMkvtbY.js","./i18n-defaults-n2A5pq_J.js","./ResizeHandler-YlQCt_sN.js","./MediaRange-sEMt71Ve.js","./style-map-IagzN5gT.js","./class-map-kmjzTHDs.js","./BrowserScrollbar.css-aoBbOOT0.js","./InvisibleMessage-yI1s4DPy.js","./ValueState-zUcANXoY.js","./slim-arrow-down-kCxSOfJs.js","./information-bLrgXyhK.js","./alert-hH0G14f_.js","./ListItemBase-bpRWPkiV.js","./ItemNavigation-KSoe0GH9.js","./TabbableElements-aYIPY3zp.js","./debounce-8VpZswfd.js","./BusyIndicator-qZ0KGBIz.js","./Label-ZVCbnRu4.js","./WrappingType-avPrqc94.js","./i18n-defaults-RBzcmDt8.js","./ResponsivePopover-7YN-L6kM.js","./Dialog-m8Vv8OUX.js","./Button-2q6zbrjb.js","./MarkedEvents-aYv14vsS.js","./Title-QMeEqdxD.js","./StandardListItem-yowcTzq2.js","./ListItem-jYoROocM.js","./RadioButton-UJTh3ZVD.js","./CheckBox-0JSYmzBX.js","./accept-QwIZktij.js","./HasPopup-9BAMrqbD.js","./slim-arrow-right-SUiVGFkg.js","./Avatar-iPKVYLtK.js","./employee-fYGGLuhG.js","./ResponsivePopoverCommon.css-qnvKwXX1.js","./ValueStateMessage.css-AHMe5yzO.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}