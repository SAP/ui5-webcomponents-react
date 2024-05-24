const __vite__fileDeps=["./Select-BpJfwAqM.js","./UI5Element-DC8MZeOy.js","./Boot-DRGCpzpB.js","./EventProvider-B3ZIXKWe.js","./useIsomorphicLayoutEffect-wJjydpYF.js","./index-BP8_t0zE.js","./CustomElementsScopeUtils-yz8rUzbr.js","./withWebComponent-CWrtEEjV.js","./utils-EaJipdFl.js","./event-CegLCnR0.js","./slot-Df15G--e.js","./Keys-BgUkNma0.js","./Popover-D2WBCDl9.js","./Integer-Dh6YzFpK.js","./PopupUtils-C_R40Sx-.js","./getActiveElement-BL9Yqj8a.js","./PopupsCommon.css-BVkg1U_d.js","./FocusableElements-CrwTZl4-.js","./isElementHidden-Bpu2V8BK.js","./AriaLabelHelper-CzOXVcye.js","./getEffectiveScrollbarStyle-DWzHjL-d.js","./ResizeHandler-DEdNEOKg.js","./MediaRange-CQ-a3KRn.js","./style-map-MmmenpP7.js","./class-map-B9wLsnvZ.js","./parameters-bundle.css-CtgfEhuk.js","./BrowserScrollbar.css-cD_o1v9b.js","./InvisibleMessage-C0vBJgzv.js","./ValueState-Bn-H2OaL.js","./slim-arrow-down-D2RZ_g3E.js","./Icons-CG6FlOJ_.js","./i18nBundle-BdneKiEM.js","./information-CWnHh7YX.js","./i18n-defaults-BdfZArTM.js","./alert-BiuXmsCV.js","./decline--LpgiSgn.js","./List-DhzEUdMj.js","./ItemNavigation-am3g3xGz.js","./TabbableElements-Ds_LZU0v.js","./debounce-jW346lN3.js","./BusyIndicator-CTBaiQfJ.js","./Label-IIemeO1C.js","./WrappingType-CW8URInd.js","./i18n-defaults-DKt7VHOa.js","./CheckBox-BZj6MKWp.js","./accept-5SoBdaHQ.js","./Icon-CmpPkOGs.js","./RadioButton-hFf0Ixfj.js","./ResponsivePopover-DzElSN_X.js","./Dialog-DHFoNWVc.js","./Button-BrKU6WlN.js","./MarkedEvents-BPv6Lv4o.js","./willShowContent-BOkh0bwj.js","./HasPopup-Cecjtg2t.js","./Title-IUvBxdmV.js","./StandardListItem-Cdr6osPe.js","./ListItem-jW45-bGs.js","./slim-arrow-right-Cttx0bDU.js","./Avatar-CzFTtzk7.js","./employee-DAykk7OJ.js","./ResponsivePopoverCommon.css-BI8MPqTJ.js","./ValueStateMessage.css-Caexp31Y.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as n}from"./iframe-DCtDS0JT.js";import"./Select-BpJfwAqM.js";import{w as o}from"./withWebComponent-CWrtEEjV.js";const e=o("ui5-select",["accessibleName","accessibleNameRef","menu","name","value","valueState"],["disabled","readonly","required"],["label","valueStateMessage"],["change","close","live-change","open"],()=>n(()=>import("./Select-BpJfwAqM.js").then(t=>t.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61]),import.meta.url));e.displayName="Select";try{e.displayName="Select",e.__docgenInfo={description:`The \`Select\` component is used to create a drop-down list.

### Usage

There are two main usages of the \`ui5-select>\`.

1. With Option (\`Option\`) web component:

The available options of the Select are defined by using the Option component.
The Option comes with predefined design and layout, including \`icon\`, \`text\` and \`additional-text\`.

2. With SelectMenu (\`SelectMenu\`) and SelectMenuOption (\`SelectMenuOption\`) web components:

The SelectMenu can be used as alternative to define the Select's dropdown
and can be used via the \`menu\` property of the Select to reference SelectMenu by its ID.
The component gives the possibility to customize the Select's dropdown
by slotting entirely custom options (via the SelectMenuOption component) and adding custom styles.

**Note:** SelectMenu is a popover and placing it top-level in the HTML page is recommended,
because some page styles (for example transitions) can misplace the SelectMenu.

### Keyboard Handling
The \`Select\` provides advanced keyboard handling.

- [F4] / [Alt] + [Up] / [Alt] + [Down] / [Space] or [Enter] - Opens/closes the drop-down.
- [Up] or [Down] - If the drop-down is closed - changes selection to the next or the previous option. If the drop-down is opened - moves focus to the next or the previous option.
- [Space], [Enter] - If the drop-down is opened - selects the focused option.
- [Escape] - Closes the drop-down without changing the selection.
- [Home] - Navigates to first option
- [End] - Navigates to the last option



\`import "@ui5/webcomponents/dist/Option";\` (comes with \`Select\`)

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Select",props:{children:{defaultValue:null,description:`Defines the component options.

**Note:** Only one selected option is allowed.
If more than one option is defined as selected, the last one would be considered as the selected one.

**Note:** Use the \`Option\` component to define the desired options.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},label:{defaultValue:null,description:`Defines the HTML element that will be displayed in the component input part,
representing the selected option.

**Note:** If not specified and \`SelectMenuOption\` is used,
either the option's \`display-text\` or its textContent will be displayed.

**Note:** If not specified and \`Option\` is used,
the option's textContent will be displayed.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="label"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.17.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.17.0) of **@ui5/webcomponents**.`,name:"label",required:!1,type:{name:"UI5WCSlotsNode"}},valueStateMessage:{defaultValue:null,description:"Defines the value state message that will be displayed as pop up under the component.\n\n**Note:** If not specified, a default text (in the respective language) will be displayed.\n\n**Note:** The `valueStateMessage` would be displayed,\nwhen the component is in `Information`, `Warning` or `Error` value state.\n\n**Note:** If the component has `suggestionItems`,\nthe `valueStateMessage` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot=\"valueStateMessage\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).",name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:"Fired when the selected option changes.\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<SelectDomRef, SelectChangeEventDetail>) => void"}},onClose:{defaultValue:null,description:"Fired after the component's dropdown menu closes.",name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<SelectDomRef, never>) => void"}},onLiveChange:{defaultValue:null,description:`Fired when the user navigates through the options, but the selection is not finalized,
or when pressing the ESC key to revert the current selection.

**Note:** Available since [v1.17.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.17.0) of **@ui5/webcomponents**.`,name:"onLiveChange",required:!1,type:{name:"(event: Ui5CustomEvent<SelectDomRef, SelectLiveChangeEventDetail>) => void"}},onOpen:{defaultValue:null,description:"Fired after the component's dropdown menu opens.",name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<SelectDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the select.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is in disabled state.

**Note:** A disabled component is noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},menu:{defaultValue:{value:"undefined"},description:`Defines a reference (ID or DOM element) of component's menu of options
as alternative to define the select's dropdown.

**Note:** Usage of \`SelectMenu\` is recommended.

**Note:** Available since [v1.17.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.17.0) of **@ui5/webcomponents**.`,name:"menu",required:!1,type:{name:"string"}},name:{defaultValue:null,description:'Determines the name with which the component will be submitted in an HTML form.\nThe value of the component will be the value of the currently selected `Option`.\n\n**Important:** For the `name` property to have effect, you must add the following import to your project:\n`import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n\n**Note:** When set, a native `input` HTML element\nwill be created inside the `Select` so that it can be submitted as\npart of an HTML form. Do not use this property unless you need to submit a form.',name:"name",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.

**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`Defines the value of the component:

- when get - returns the value of the component, e.g. the \`value\` property of the selected option or its text content.

- when set - selects the option with matching \`value\` property or text content.

**Note:** If the given value does not match any existing option,
the first option will get selected.

**Note:** Available since [v1.20.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.20.0) of **@ui5/webcomponents**.`,name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Warning"'},{value:'"None"'},{value:'"Error"'},{value:'"Success"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Error"'},{value:'"Information"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="Select",e.__docgenInfo={description:`The \`Select\` component is used to create a drop-down list.

### Usage

There are two main usages of the \`ui5-select>\`.

1. With Option (\`Option\`) web component:

The available options of the Select are defined by using the Option component.
The Option comes with predefined design and layout, including \`icon\`, \`text\` and \`additional-text\`.

2. With SelectMenu (\`SelectMenu\`) and SelectMenuOption (\`SelectMenuOption\`) web components:

The SelectMenu can be used as alternative to define the Select's dropdown
and can be used via the \`menu\` property of the Select to reference SelectMenu by its ID.
The component gives the possibility to customize the Select's dropdown
by slotting entirely custom options (via the SelectMenuOption component) and adding custom styles.

**Note:** SelectMenu is a popover and placing it top-level in the HTML page is recommended,
because some page styles (for example transitions) can misplace the SelectMenu.

### Keyboard Handling
The \`Select\` provides advanced keyboard handling.

- [F4] / [Alt] + [Up] / [Alt] + [Down] / [Space] or [Enter] - Opens/closes the drop-down.
- [Up] or [Down] - If the drop-down is closed - changes selection to the next or the previous option. If the drop-down is opened - moves focus to the next or the previous option.
- [Space], [Enter] - If the drop-down is opened - selects the focused option.
- [Escape] - Closes the drop-down without changing the selection.
- [Home] - Navigates to first option
- [End] - Navigates to the last option



\`import "@ui5/webcomponents/dist/Option";\` (comes with \`Select\`)

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Select",props:{children:{defaultValue:null,description:`Defines the component options.

**Note:** Only one selected option is allowed.
If more than one option is defined as selected, the last one would be considered as the selected one.

**Note:** Use the \`Option\` component to define the desired options.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},label:{defaultValue:null,description:`Defines the HTML element that will be displayed in the component input part,
representing the selected option.

**Note:** If not specified and \`SelectMenuOption\` is used,
either the option's \`display-text\` or its textContent will be displayed.

**Note:** If not specified and \`Option\` is used,
the option's textContent will be displayed.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="label"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.17.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.17.0) of **@ui5/webcomponents**.`,name:"label",required:!1,type:{name:"UI5WCSlotsNode"}},valueStateMessage:{defaultValue:null,description:"Defines the value state message that will be displayed as pop up under the component.\n\n**Note:** If not specified, a default text (in the respective language) will be displayed.\n\n**Note:** The `valueStateMessage` would be displayed,\nwhen the component is in `Information`, `Warning` or `Error` value state.\n\n**Note:** If the component has `suggestionItems`,\nthe `valueStateMessage` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot=\"valueStateMessage\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).",name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:"Fired when the selected option changes.\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<SelectDomRef, SelectChangeEventDetail>) => void"}},onClose:{defaultValue:null,description:"Fired after the component's dropdown menu closes.",name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<SelectDomRef, never>) => void"}},onLiveChange:{defaultValue:null,description:`Fired when the user navigates through the options, but the selection is not finalized,
or when pressing the ESC key to revert the current selection.

**Note:** Available since [v1.17.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.17.0) of **@ui5/webcomponents**.`,name:"onLiveChange",required:!1,type:{name:"(event: Ui5CustomEvent<SelectDomRef, SelectLiveChangeEventDetail>) => void"}},onOpen:{defaultValue:null,description:"Fired after the component's dropdown menu opens.",name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<SelectDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the select.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is in disabled state.

**Note:** A disabled component is noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},menu:{defaultValue:{value:"undefined"},description:`Defines a reference (ID or DOM element) of component's menu of options
as alternative to define the select's dropdown.

**Note:** Usage of \`SelectMenu\` is recommended.

**Note:** Available since [v1.17.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.17.0) of **@ui5/webcomponents**.`,name:"menu",required:!1,type:{name:"string"}},name:{defaultValue:null,description:'Determines the name with which the component will be submitted in an HTML form.\nThe value of the component will be the value of the currently selected `Option`.\n\n**Important:** For the `name` property to have effect, you must add the following import to your project:\n`import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n\n**Note:** When set, a native `input` HTML element\nwill be created inside the `Select` so that it can be submitted as\npart of an HTML form. Do not use this property unless you need to submit a form.',name:"name",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.

**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`Defines the value of the component:

- when get - returns the value of the component, e.g. the \`value\` property of the selected option or its text content.

- when set - selects the option with matching \`value\` property or text content.

**Note:** If the given value does not match any existing option,
the first option will get selected.

**Note:** Available since [v1.20.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.20.0) of **@ui5/webcomponents**.`,name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Warning"'},{value:'"None"'},{value:'"Error"'},{value:'"Success"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Error"'},{value:'"Information"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as S};
