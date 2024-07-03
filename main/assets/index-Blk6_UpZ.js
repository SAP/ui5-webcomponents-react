const __vite__fileDeps=["./Popover-CA74kJve.js","./withWebComponent-DVfwWPVB.js","./utils-CKbRNFS-.js","./CustomElementsScopeUtils-C6IqSY4u.js","./useIsomorphicLayoutEffect-CpdNMtv3.js","./index-DEe9W-hO.js","./slot-_4yKMUwC.js","./Integer-DgRYWdxf.js","./Device-RcFucVeJ.js","./PopupsCommon.css-C85aKd3d.js","./UI5Element-B4CRQCUa.js","./event-Dq0fpeHi.js","./FocusableElements-bN8doqn4.js","./isElementHidden-B4HqmI2E.js","./isElementClickable-0ACQ4G_A.js","./AriaLabelHelper-C5uDZewF.js","./getEffectiveScrollbarStyle-BwuZEAK6.js","./Keys-B00bFMgT.js","./getActiveElement-kltGt_DR.js","./ResizeHandler-Bwj_klJ5.js","./MediaRange-Bnzt26Xb.js","./style-map-Chhl6hRu.js","./class-map-nHH1vjEv.js","./if-defined-BG38O0o4.js","./parameters-bundle.css-DQGkr9pp.js","./BrowserScrollbar.css-Dn2WHWng.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as n}from"./iframe-C7_2vYGb.js";import"./Popover-CA74kJve.js";import{w as o}from"./withWebComponent-DVfwWPVB.js";const e=o("ui5-popover",["accessibleName","accessibleNameRef","accessibleRole","headerText","horizontalAlign","initialFocus","opener","placement","verticalAlign"],["allowTargetOverlap","hideArrow","modal","open","preventFocusRestore","preventInitialFocus"],["footer","header"],["before-close","before-open","close","open"],()=>n(()=>import("./Popover-CA74kJve.js").then(t=>t.d),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]),import.meta.url));e.displayName="Popover";try{e.displayName="Popover",e.__docgenInfo={description:`The \`Popover\` component displays additional information for an object
in a compact way and without leaving the page.
The Popover can contain various UI elements, such as fields, tables, images, and charts.
It can also include actions in the footer.

### Structure

The popover has three main areas:

- Header (optional)
- Content
- Footer (optional)

**Note:** The \`Popover\` is closed when the user clicks
or taps outside the popover
or selects an action within the popover. You can prevent this with the
\`modal\` property.



**Note: ** We recommend placing popup-like components (\`Dialog\` and \`Popover\`)
outside any other components. Preferably, the popup-like components should be placed
in an upper level HTML element. Otherwise, in some cases the parent HTML elements can break
the position and/or z-index management of the popup-like components.

**Note:** We don't recommend nesting popup-like components (\`Dialog\`, \`Popover\`).

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Popover",props:{children:{defaultValue:null,description:"Defines the content of the Popup.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},footer:{defaultValue:null,description:`Defines the footer HTML Element.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="footer"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"footer",required:!1,type:{name:"UI5WCSlotsNode"}},header:{defaultValue:null,description:`Defines the header HTML Element.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},onBeforeClose:{defaultValue:null,description:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<PopoverDomRef, PopupBeforeCloseEventDetail>) => void"}},onBeforeOpen:{defaultValue:null,description:"Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. **This event does not bubble.**\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<PopoverDomRef, never>) => void"}},onClose:{defaultValue:null,description:"Fired after the component is closed. **This event does not bubble.**",name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<PopoverDomRef, never>) => void"}},onOpen:{defaultValue:null,description:"Fired after the component is opened. **This event does not bubble.**",name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<PopoverDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:`Defines the IDs of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Dialog"'},description:`Allows setting a custom role.

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},allowTargetOverlap:{defaultValue:{value:"false"},description:`Determines if there is no enough space, the component can be placed
over the target.`,name:"allowTargetOverlap",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"Defines the header text.\n\n**Note:** If `header` slot is provided, the `headerText` is ignored.",name:"headerText",required:!1,type:{name:"string"}},hideArrow:{defaultValue:{value:"false"},description:"Determines whether the component arrow is hidden.",name:"hideArrow",required:!1,type:{name:"boolean"}},horizontalAlign:{defaultValue:{value:'"Center"'},description:"Determines the horizontal alignment of the component.",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"Start"'},{value:'"Center"'},{value:'"End"'},{value:'"Stretch"'},{value:'"Center"'},{value:'"Start"'},{value:'"End"'},{value:'"Stretch"'}]}},initialFocus:{defaultValue:null,description:"Defines the ID of the HTML Element, which will get the initial focus.\n\n**Note:** If an element with `autofocus` attribute is added inside the component,\n`initialFocus` won't take effect.",name:"initialFocus",required:!1,type:{name:"string"}},modal:{defaultValue:{value:"false"},description:`Defines whether the component should close when
clicking/tapping outside of the popover.
If enabled, it blocks any interaction with the background.`,name:"modal",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"false"},description:`Indicates if the element is open

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},opener:{defaultValue:{value:"undefined"},description:"Defines the ID or DOM Reference of the element at which the popover is shown.\nWhen using this attribute in a declarative way, you must only use the `id` (as a string) of the element at which you want to show the popover.\nYou can only set the `opener` attribute to a DOM Reference when using JavaScript.\n\n**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.",name:"opener",required:!1,type:{name:"string | HTMLElement"}},placement:{defaultValue:{value:'"End"'},description:"Determines on which side the component is placed at.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"Start"'},{value:'"End"'},{value:'"Start"'},{value:'"End"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Top"'},{value:'"Bottom"'}]}},preventFocusRestore:{defaultValue:{value:"false"},description:`Defines if the focus should be returned to the previously focused element,
when the popup closes.`,name:"preventFocusRestore",required:!1,type:{name:"boolean"}},preventInitialFocus:{defaultValue:{value:"false"},description:`Indicates whether initial focus should be prevented.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"preventInitialFocus",required:!1,type:{name:"boolean"}},verticalAlign:{defaultValue:{value:'"Center"'},description:"Determines the vertical alignment of the component.",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"Center"'},{value:'"Stretch"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Center"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Stretch"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="Popover",e.__docgenInfo={description:`The \`Popover\` component displays additional information for an object
in a compact way and without leaving the page.
The Popover can contain various UI elements, such as fields, tables, images, and charts.
It can also include actions in the footer.

### Structure

The popover has three main areas:

- Header (optional)
- Content
- Footer (optional)

**Note:** The \`Popover\` is closed when the user clicks
or taps outside the popover
or selects an action within the popover. You can prevent this with the
\`modal\` property.



**Note: ** We recommend placing popup-like components (\`Dialog\` and \`Popover\`)
outside any other components. Preferably, the popup-like components should be placed
in an upper level HTML element. Otherwise, in some cases the parent HTML elements can break
the position and/or z-index management of the popup-like components.

**Note:** We don't recommend nesting popup-like components (\`Dialog\`, \`Popover\`).

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Popover",props:{children:{defaultValue:null,description:"Defines the content of the Popup.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},footer:{defaultValue:null,description:`Defines the footer HTML Element.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="footer"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"footer",required:!1,type:{name:"UI5WCSlotsNode"}},header:{defaultValue:null,description:`Defines the header HTML Element.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},onBeforeClose:{defaultValue:null,description:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<PopoverDomRef, PopupBeforeCloseEventDetail>) => void"}},onBeforeOpen:{defaultValue:null,description:"Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. **This event does not bubble.**\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<PopoverDomRef, never>) => void"}},onClose:{defaultValue:null,description:"Fired after the component is closed. **This event does not bubble.**",name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<PopoverDomRef, never>) => void"}},onOpen:{defaultValue:null,description:"Fired after the component is opened. **This event does not bubble.**",name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<PopoverDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:`Defines the IDs of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Dialog"'},description:`Allows setting a custom role.

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},allowTargetOverlap:{defaultValue:{value:"false"},description:`Determines if there is no enough space, the component can be placed
over the target.`,name:"allowTargetOverlap",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"Defines the header text.\n\n**Note:** If `header` slot is provided, the `headerText` is ignored.",name:"headerText",required:!1,type:{name:"string"}},hideArrow:{defaultValue:{value:"false"},description:"Determines whether the component arrow is hidden.",name:"hideArrow",required:!1,type:{name:"boolean"}},horizontalAlign:{defaultValue:{value:'"Center"'},description:"Determines the horizontal alignment of the component.",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"Start"'},{value:'"Center"'},{value:'"End"'},{value:'"Stretch"'},{value:'"Center"'},{value:'"Start"'},{value:'"End"'},{value:'"Stretch"'}]}},initialFocus:{defaultValue:null,description:"Defines the ID of the HTML Element, which will get the initial focus.\n\n**Note:** If an element with `autofocus` attribute is added inside the component,\n`initialFocus` won't take effect.",name:"initialFocus",required:!1,type:{name:"string"}},modal:{defaultValue:{value:"false"},description:`Defines whether the component should close when
clicking/tapping outside of the popover.
If enabled, it blocks any interaction with the background.`,name:"modal",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"false"},description:`Indicates if the element is open

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},opener:{defaultValue:{value:"undefined"},description:"Defines the ID or DOM Reference of the element at which the popover is shown.\nWhen using this attribute in a declarative way, you must only use the `id` (as a string) of the element at which you want to show the popover.\nYou can only set the `opener` attribute to a DOM Reference when using JavaScript.\n\n**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.",name:"opener",required:!1,type:{name:"string | HTMLElement"}},placement:{defaultValue:{value:'"End"'},description:"Determines on which side the component is placed at.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"Start"'},{value:'"End"'},{value:'"Start"'},{value:'"End"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Top"'},{value:'"Bottom"'}]}},preventFocusRestore:{defaultValue:{value:"false"},description:`Defines if the focus should be returned to the previously focused element,
when the popup closes.`,name:"preventFocusRestore",required:!1,type:{name:"boolean"}},preventInitialFocus:{defaultValue:{value:"false"},description:`Indicates whether initial focus should be prevented.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"preventInitialFocus",required:!1,type:{name:"boolean"}},verticalAlign:{defaultValue:{value:'"Center"'},description:"Determines the vertical alignment of the component.",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"Center"'},{value:'"Stretch"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Center"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Stretch"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as P};
