import{_ as n}from"./iframe-WUzyVZLd.js";import"./Select-C6nXjJBO.js";import{w as o}from"./withWebComponent--kEkWNJH.js";const e=o("ui5-select",["accessibleName","accessibleNameRef","menu","name","value","valueState"],["disabled","readonly","required"],["label","valueStateMessage"],["change","close","live-change","open"],()=>n(()=>import("./Select-C6nXjJBO.js").then(t=>t.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60]),import.meta.url));e.displayName="Select";try{e.displayName="Select",e.__docgenInfo={description:`The \`Select\` component is used to create a drop-down list.

### Usage

There are two main usages of the \`ui5-select>\`. 1. With Option (\`Option\`) web component:
The available options of the Select are defined by using the Option component. The Option comes with predefined design and layout, including \`icon\`, \`text\` and \`additional-text\`.

2\\. With SelectMenu (\`SelectMenu\`) and SelectMenuOption (\`SelectMenuOption\`) web components:
The SelectMenu can be used as alternative to define the Select's dropdown and can be used via the \`menu\` property of the Select to reference SelectMenu by its ID. The component gives the possibility to customize the Select's dropdown by slotting entirely custom options (via the SelectMenuOption component) and adding custom styles. **Note:** SelectMenu is a popover and placing it top-level in the HTML page is recommended, because some page styles (for example transitions) can misplace the SelectMenu.

### Keyboard Handling

The \`Select\` provides advanced keyboard handling.

*   \\[F4, ALT+UP, ALT+DOWN, SPACE, ENTER\\] - Opens/closes the drop-down.
*   \\[UP, DOWN\\] - If the drop-down is closed - changes selection to the next or the previous option. If the drop-down is opened - moves focus to the next or the previous option.
*   \\[SPACE, ENTER\\] - If the drop-down is opened - selects the focused option.
*   \\[ESC\\] - Closes the drop-down without changing the selection.
*   \\[HOME\\] - Navigates to first option
*   \\[END\\] - Navigates to the last option



\`import "@ui5/webcomponents/dist/Option";\` (comes with \`Select\`)

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"Select",props:{children:{defaultValue:null,description:`Defines the component options.

**Note:** Only one selected option is allowed. If more than one option is defined as selected, the last one would be considered as the selected one.

**Note:** Use the \`Option\` component to define the desired options.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},label:{defaultValue:null,description:`Defines the HTML element that will be displayed in the component input part, representing the selected option.

**Note:** If not specified and \`SelectMenuOption\` is used, either the option's \`display-text\` or its textContent will be displayed.

**Note:** If not specified and \`Option\` is used, the option's textContent will be displayed.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="label"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"label",required:!1,type:{name:"UI5WCSlotsNode"}},valueStateMessage:{defaultValue:null,description:"Defines the value state message that will be displayed as pop up under the component.\n\n**Note:** If not specified, a default text (in the respective language) will be displayed.\n\n**Note:** The `valueStateMessage` would be displayed, when the component is in `Information`, `Warning` or `Error` value state.\n\n**Note:** If the component has `suggestionItems`, the `valueStateMessage` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot=\"valueStateMessage\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).",name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:"Fired when the selected option changes.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<SelectDomRef, SelectChangeEventDetail>) => void"}},onClose:{defaultValue:null,description:"Fired after the component's dropdown menu closes.",name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<SelectDomRef, never>) => void"}},onLiveChange:{defaultValue:null,description:"Fired when the user navigates through the options, but the selection is not finalized, or when pressing the ESC key to revert the current selection.",name:"onLiveChange",required:!1,type:{name:"(event: Ui5CustomEvent<SelectDomRef, SelectLiveChangeEventDetail>) => void"}},onOpen:{defaultValue:null,description:"Fired after the component's dropdown menu opens.",name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<SelectDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the select.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is in disabled state.

**Note:** A disabled component is noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},menu:{defaultValue:{value:"undefined"},description:"Defines a reference (ID or DOM element) of component's menu of options as alternative to define the select's dropdown.\n\n**Note:** Usage of `SelectMenu` is recommended.",name:"menu",required:!1,type:{name:"string"}},name:{defaultValue:null,description:'Determines the name with which the component will be submitted in an HTML form. The value of the component will be the value of the currently selected `Option`.\n\n**Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n\n**Note:** When set, a native `input` HTML element will be created inside the `Select` so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.',name:"name",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable, but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Defines the value of the component:\n\\- when get - returns the value of the component, e.g. the `value` property of the selected option or its text content.\n\\- when set - selects the option with matching `value` property or text content.\n\n**Note:** If the given value does not match any existing option, the first option will get selected.",name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Warning"'},{value:'"None"'},{value:'"Error"'},{value:'"Success"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Error"'},{value:'"Information"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as S};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Select-C6nXjJBO.js","./UI5Element-_cJDeK03.js","./i18nBundle-YDapVb1x.js","./VersionInfo-AzzP9wS2.js","./CustomElementsScopeUtils-IpwVqUeG.js","./withWebComponent--kEkWNJH.js","./utils-rNFQc6Ui.js","./index-OjgoNOWw.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./event-lM5HanI-.js","./slot-HSrR9XJ-.js","./Keys-Mzj2D4aO.js","./Popover-4Jmhfo0j.js","./Integer-kog98579.js","./PopupUtils-WqNPYdCF.js","./getActiveElement-IIKAy3xo.js","./PopupsCommon.css-U0zEo08F.js","./FocusableElements-YRGIpHeQ.js","./isElementHidden-d3-Fo4V6.js","./AriaLabelHelper-RbKlVwzD.js","./getEffectiveScrollbarStyle-Gz48PLeD.js","./ResizeHandler-xTi6PJ7P.js","./MediaRange-sEMt71Ve.js","./style-map-5njKSr-C.js","./class-map-Y-YjCFqX.js","./parameters-bundle.css-mPCp9TQx.js","./BrowserScrollbar.css-OKoQbzr6.js","./InvisibleMessage-cYDqcFU1.js","./ValueState-zUcANXoY.js","./slim-arrow-down-pmLcHSz9.js","./Icons-dG5I7pqk.js","./information-hXM74YAc.js","./i18n-defaults-iZnAAWr4.js","./alert-dnfYKYS3.js","./decline-TrFDzgUZ.js","./List-xvZ360e-.js","./ItemNavigation-LaFA1dgP.js","./TabbableElements-L1VqloMt.js","./debounce-8VpZswfd.js","./BusyIndicator-K8TMniJV.js","./Label-GIHgrMyy.js","./WrappingType-avPrqc94.js","./i18n-defaults-3YbdkqSs.js","./CheckBox-eGS7Qw3N.js","./accept-m40NMf-L.js","./Icon-1HyKfQwB.js","./RadioButton-SPoPJm7f.js","./ResponsivePopover-7rT711MV.js","./Dialog-Xtav6IDF.js","./Button-Q_btruTx.js","./MarkedEvents-aYv14vsS.js","./HasPopup-9BAMrqbD.js","./Title-eUmcrWag.js","./StandardListItem-eNUAEuis.js","./ListItem-a3hmRd28.js","./slim-arrow-right-AIyeUwW2.js","./Avatar-zEbB_F4h.js","./employee-2wNDT3_m.js","./ResponsivePopoverCommon.css-47kyCt3t.js","./ValueStateMessage.css-ffR2awM2.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
