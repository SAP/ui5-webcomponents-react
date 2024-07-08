const __vite__fileDeps=["./Select-DwZ7SOW8.js","./UI5Element-CpDKvy14.js","./CustomElementsScopeUtils-CUyxdJhU.js","./useIsomorphicLayoutEffect-kTr5k6y8.js","./index-BQ1WsyJB.js","./withWebComponent-BS5KmJ8y.js","./utils-BKwn1mod.js","./event-Dq0fpeHi.js","./slot-_4yKMUwC.js","./Keys-pFVWso__.js","./InvisibleMessage-onq2FHaL.js","./AriaLabelHelper-C5uDZewF.js","./ValueState-Bg0UWejw.js","./slim-arrow-down-DaoaupPT.js","./Icons-CXhWYR-U.js","./i18nBundle-BnWtnlV0.js","./information-Tp9XErmR.js","./i18n-defaults-eVMsPoDe.js","./alert-CzwHodYh.js","./Device-RcFucVeJ.js","./decline-U1USmITW.js","./List-DAUCd9GG.js","./ResizeHandler-DrydYuxf.js","./ItemNavigation-B3IUttqO.js","./getActiveElement-kltGt_DR.js","./isElementInView-CjfjvN8v.js","./getEffectiveScrollbarStyle-BwuZEAK6.js","./debounce-TTkz9ISH.js","./class-map-C2xEFFE_.js","./parameters-bundle.css-BFbT_feV.js","./BusyIndicator-Cvlx0ISj.js","./Label-q6_PzA5e.js","./i18n-defaults-CTWfTbaq.js","./if-defined-fOOg8zCW.js","./style-map-BYlmazPT.js","./BrowserScrollbar.css-BHkuoGam.js","./MarkedEvents-CAur0wxK.js","./FocusableElements-Bv7oiNdI.js","./isElementHidden-B4HqmI2E.js","./isElementClickable-0ACQ4G_A.js","./TabbableElements-BJJu_CDc.js","./RadioButton-pij5LUus.js","./CheckBox-5dqs80VY.js","./accept-Bh1zuBLx.js","./Icon-B_ypp_jl.js","./Button-BNnZDQ19.js","./willShowContent-CZcfsNXp.js","./slim-arrow-right-BcqVerrF.js","./Avatar-3swUBYi8.js","./employee-BYHCCK7_.js","./ResponsivePopover-CLhNpBnN.js","./Popover-qZ8usbia.js","./PopupsCommon.css-Dy04e_xP.js","./MediaRange-Bnzt26Xb.js","./Dialog-D9IwuRsq.js","./Title-B_zpGxqG.js","./ResponsivePopoverCommon.css-CFhxTWp0.js","./ValueStateMessage.css-v6-laWvE.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as n}from"./iframe-DB1c1wU1.js";import"./Select-DwZ7SOW8.js";import{w as o}from"./withWebComponent-BS5KmJ8y.js";const e=o("ui5-select",["accessibleName","accessibleNameRef","name","value","valueState"],["disabled","readonly","required"],["label","valueStateMessage"],["change","close","live-change","open"],()=>n(()=>import("./Select-DwZ7SOW8.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57]),import.meta.url));e.displayName="Select";try{e.displayName="Select",e.__docgenInfo={description:`The \`Select\` component is used to create a drop-down list.

### Usage

There are two main usages of the \`ui5-select>\`.

1. With Option (\`Option\`) web component:

The available options of the Select are defined by using the Option component.
The Option comes with predefined design and layout, including \`icon\`, \`text\` and \`additional-text\`.

2. With OptionCustom (\`OptionCustom\`) web component.

Options with custom content are defined by using the OptionCustom component
The OptionCustom component comes with no predefined layout and it expects consumers to define it.

### Keyboard Handling
The \`Select\` provides advanced keyboard handling.

- [F4] / [Alt] + [Up] / [Alt] + [Down] / [Space] or [Enter] - Opens/closes the drop-down.
- [Up] or [Down] - If the drop-down is closed - changes selection to the next or the previous option. If the drop-down is opened - moves focus to the next or the previous option.
- [Space], [Enter] - If the drop-down is opened - selects the focused option.
- [Escape] - Closes the drop-down without changing the selection.
- [Home] - Navigates to first option
- [End] - Navigates to the last option



\`import "@ui5/webcomponents/dist/Option";\`
\`import "@ui5/webcomponents/dist/OptionCustom";\`

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Select",props:{children:{defaultValue:null,description:`Defines the component options.

**Note:** Only one selected option is allowed.
If more than one option is defined as selected, the last one would be considered as the selected one.

**Note:** Use the \`Option\` component to define the desired options.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},label:{defaultValue:null,description:`Defines the HTML element that will be displayed in the component input part,
representing the selected option.

**Note:** If not specified and \`OptionCustom\` is used,
either the option's \`display-text\` or its textContent will be displayed.

**Note:** If not specified and \`Option\` is used,
the option's textContent will be displayed.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="label"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.17.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.17.0) of **@ui5/webcomponents**.`,name:"label",required:!1,type:{name:"UI5WCSlotsNode"}},valueStateMessage:{defaultValue:null,description:"Defines the value state message that will be displayed as pop up under the component.\n\n**Note:** If not specified, a default text (in the respective language) will be displayed.\n\n**Note:** The `valueStateMessage` would be displayed,\nwhen the component is in `Information`, `Warning` or `Error` value state.\n\n**Note:** If the component has `suggestionItems`,\nthe `valueStateMessage` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot=\"valueStateMessage\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).",name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:"Fired when the selected option changes.\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<SelectDomRef, SelectChangeEventDetail>) => void"}},onClose:{defaultValue:null,description:"Fired after the component's dropdown menu closes.",name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<SelectDomRef, never>) => void"}},onLiveChange:{defaultValue:null,description:`Fired when the user navigates through the options, but the selection is not finalized,
or when pressing the ESC key to revert the current selection.

**Note:** Available since [v1.17.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.17.0) of **@ui5/webcomponents**.`,name:"onLiveChange",required:!1,type:{name:"(event: Ui5CustomEvent<SelectDomRef, SelectLiveChangeEventDetail>) => void"}},onOpen:{defaultValue:null,description:"Fired after the component's dropdown menu opens.",name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<SelectDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the select.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is in disabled state.

**Note:** A disabled component is noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:"name",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.

**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`Defines the value of the component:

- when get - returns the value of the component, e.g. the \`value\` property of the selected option or its text content.

- when set - selects the option with matching \`value\` property or text content.

**Note:** If the given value does not match any existing option,
the first option will get selected.

**Note:** Available since [v1.20.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.20.0) of **@ui5/webcomponents**.`,name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="Select",e.__docgenInfo={description:`The \`Select\` component is used to create a drop-down list.

### Usage

There are two main usages of the \`ui5-select>\`.

1. With Option (\`Option\`) web component:

The available options of the Select are defined by using the Option component.
The Option comes with predefined design and layout, including \`icon\`, \`text\` and \`additional-text\`.

2. With OptionCustom (\`OptionCustom\`) web component.

Options with custom content are defined by using the OptionCustom component
The OptionCustom component comes with no predefined layout and it expects consumers to define it.

### Keyboard Handling
The \`Select\` provides advanced keyboard handling.

- [F4] / [Alt] + [Up] / [Alt] + [Down] / [Space] or [Enter] - Opens/closes the drop-down.
- [Up] or [Down] - If the drop-down is closed - changes selection to the next or the previous option. If the drop-down is opened - moves focus to the next or the previous option.
- [Space], [Enter] - If the drop-down is opened - selects the focused option.
- [Escape] - Closes the drop-down without changing the selection.
- [Home] - Navigates to first option
- [End] - Navigates to the last option



\`import "@ui5/webcomponents/dist/Option";\`
\`import "@ui5/webcomponents/dist/OptionCustom";\`

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Select",props:{children:{defaultValue:null,description:`Defines the component options.

**Note:** Only one selected option is allowed.
If more than one option is defined as selected, the last one would be considered as the selected one.

**Note:** Use the \`Option\` component to define the desired options.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},label:{defaultValue:null,description:`Defines the HTML element that will be displayed in the component input part,
representing the selected option.

**Note:** If not specified and \`OptionCustom\` is used,
either the option's \`display-text\` or its textContent will be displayed.

**Note:** If not specified and \`Option\` is used,
the option's textContent will be displayed.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="label"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.17.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.17.0) of **@ui5/webcomponents**.`,name:"label",required:!1,type:{name:"UI5WCSlotsNode"}},valueStateMessage:{defaultValue:null,description:"Defines the value state message that will be displayed as pop up under the component.\n\n**Note:** If not specified, a default text (in the respective language) will be displayed.\n\n**Note:** The `valueStateMessage` would be displayed,\nwhen the component is in `Information`, `Warning` or `Error` value state.\n\n**Note:** If the component has `suggestionItems`,\nthe `valueStateMessage` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot=\"valueStateMessage\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).",name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:"Fired when the selected option changes.\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<SelectDomRef, SelectChangeEventDetail>) => void"}},onClose:{defaultValue:null,description:"Fired after the component's dropdown menu closes.",name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<SelectDomRef, never>) => void"}},onLiveChange:{defaultValue:null,description:`Fired when the user navigates through the options, but the selection is not finalized,
or when pressing the ESC key to revert the current selection.

**Note:** Available since [v1.17.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.17.0) of **@ui5/webcomponents**.`,name:"onLiveChange",required:!1,type:{name:"(event: Ui5CustomEvent<SelectDomRef, SelectLiveChangeEventDetail>) => void"}},onOpen:{defaultValue:null,description:"Fired after the component's dropdown menu opens.",name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<SelectDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the select.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is in disabled state.

**Note:** A disabled component is noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:"name",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.

**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`Defines the value of the component:

- when get - returns the value of the component, e.g. the \`value\` property of the selected option or its text content.

- when set - selects the option with matching \`value\` property or text content.

**Note:** If the given value does not match any existing option,
the first option will get selected.

**Note:** Available since [v1.20.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.20.0) of **@ui5/webcomponents**.`,name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as S};
