const __vite__fileDeps=["./Dialog-DhuoG6wg.js","./ManagedStyles-0Bwp9t5R.js","./index-BP8_t0zE.js","./withWebComponent-DdLYI_QY.js","./utils-VXdlHuBA.js","./EventProvider-B3ZIXKWe.js","./CustomElementsScopeUtils-CjWOyBed.js","./useIsomorphicLayoutEffect-CnI1knHw.js","./slot-Df15G--e.js","./PopupsCommon.css-BGWtnzwQ.js","./Boot-BtdVcW0c.js","./event-CegLCnR0.js","./UI5Element-BfPpwo_k.js","./FocusableElements-FQMFYvMw.js","./isElementHidden-Bpu2V8BK.js","./AriaLabelHelper-CzOXVcye.js","./getEffectiveScrollbarStyle-DWzHjL-d.js","./Keys-BgUkNma0.js","./PopupUtils-BDyegTwa.js","./getActiveElement-BL9Yqj8a.js","./ResizeHandler-BxP3RYN1.js","./MediaRange-CQ-a3KRn.js","./style-map-BhswnH6I.js","./class-map-DwUNpVO-.js","./parameters-bundle.css-DjgCrOcY.js","./ValueState-Bn-H2OaL.js","./i18nBundle-Dx46P1iz.js","./Icon-CDo0XdyR.js","./Icons-DgaaT5sV.js","./information-CIM5_BNu.js","./i18n-defaults-BdfZArTM.js","./alert-DaAYzDGJ.js","./i18n-defaults-BFrvdQTW.js","./BrowserScrollbar.css-BmT0sFnr.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as o}from"./iframe-DYuYfarO.js";import"./Dialog-DhuoG6wg.js";import{w as n}from"./withWebComponent-DdLYI_QY.js";const e=n("ui5-dialog",["accessibleName","accessibleNameRef","accessibleRole","headerText","initialFocus","state"],["draggable","open","preventFocusRestore","resizable","stretch"],["footer","header"],["after-close","after-open","before-close","before-open"],()=>o(()=>import("./Dialog-DhuoG6wg.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]),import.meta.url));e.displayName="Dialog";try{e.displayName="Dialog",e.__docgenInfo={description:`The \`Dialog\` component is used to temporarily display some information in a
size-limited window in front of the regular app screen.
It is used to prompt the user for an action or a confirmation.
The \`Dialog\` interrupts the current app processing as it is the only focused UI element and
the main screen is dimmed/blocked.
The dialog combines concepts known from other technologies where the windows have
names such as dialog box, dialog window, pop-up, pop-up window, alert box, or message box.

The \`Dialog\` is modal, which means that an user action is required before it is possible to return to the parent window.
To open multiple dialogs, each dialog element should be separate in the markup. This will ensure the correct modal behavior. Avoid nesting dialogs within each other.
The content of the \`Dialog\` is fully customizable.

### Structure
A \`Dialog\` consists of a header, content, and a footer for action buttons.
The \`Dialog\` is usually displayed at the center of the screen.
Its position can be changed by the user. To enable this, you need to set the property \`draggable\` accordingly.


### Responsive Behavior
The \`stretch\` property can be used to stretch the
\`Dialog\` on full screen.

**Note:** When a \`ui5-bar\` is used in the header or in the footer, you should remove the default dialog's paddings.

For more information see the sample "Bar in Header/Footer".

### Keyboard Handling

#### Basic Navigation
When the \`Dialog\` has the \`draggable\` property set to \`true\` and the header is focused, the user can move the dialog
with the following keyboard shortcuts:

- [Up] or [Down] arrow keys - Move the dialog up/down.
- [Left] or [Right] arrow keys - Move the dialog left/right.

#### Resizing
When the \`Dialog\` has the \`resizable\` property set to \`true\` and the header is focused, the user can change the size of the dialog
with the following keyboard shortcuts:

- [Shift] + [Up] or [Down] - Decrease/Increase the height of the dialog.
- [Shift] + [Left] or [Right] - Decrease/Increase the width of the dialog.



**Note:** We recommend placing popup-like components (\`Dialog\` and \`Popover\`)
outside any other components. Preferably, the popup-like components should be placed
in an upper level HTML element. Otherwise, in some cases the parent HTML elements can break
the position and/or z-index management of the popup-like components.

**Note:** We don't recommend nesting popup-like components (\`Dialog\`, \`Popover\`).

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Dialog",props:{children:{defaultValue:null,description:"Defines the content of the Popup.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},footer:{defaultValue:null,description:`Defines the footer HTML Element.

**Note:** When a \`ui5-bar\` is used in the footer, you should remove the default dialog's paddings.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="footer"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"footer",required:!1,type:{name:"UI5WCSlotsNode"}},header:{defaultValue:null,description:`Defines the header HTML Element.

**Note:** When a \`ui5-bar\` is used in the header, you should remove the default dialog's paddings.

**Note:** If \`header\` slot is provided, the labelling of the dialog is a responsibility of the application developer.
\`accessibleName\` should be used.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},onAfterClose:{defaultValue:null,description:"Fired after the component is closed. **This event does not bubble.**",name:"onAfterClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onAfterOpen:{defaultValue:null,description:"Fired after the component is opened. **This event does not bubble.**",name:"onAfterOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onBeforeClose:{defaultValue:null,description:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void"}},onBeforeOpen:{defaultValue:null,description:"Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. **This event does not bubble.**\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:`Defines the IDs of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Dialog"'},description:`Allows setting a custom role.

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},draggable:{defaultValue:{value:"false"},description:`Determines whether the component is draggable.
If this property is set to true, the Dialog will be draggable by its header.

**Note:** The component can be draggable only in desktop mode.

**Note:** This property overrides the default HTML "draggable" attribute native behavior.
When "draggable" is set to true, the native browser "draggable"
behavior is prevented and only the Dialog custom logic ("draggable by its header") works.`,name:"draggable",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"Defines the header text.\n\n**Note:** If `header` slot is provided, the `headerText` is ignored.",name:"headerText",required:!1,type:{name:"string"}},initialFocus:{defaultValue:null,description:"Defines the ID of the HTML Element, which will get the initial focus.",name:"initialFocus",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:`Indicates if the element is open

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},preventFocusRestore:{defaultValue:{value:"false"},description:`Defines if the focus should be returned to the previously focused element,
when the popup closes.`,name:"preventFocusRestore",required:!1,type:{name:"boolean"}},resizable:{defaultValue:{value:"false"},description:`Configures the component to be resizable.
If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages.
In RTL languages, the resize handle will be placed in the bottom left corner.

**Note:** The component can be resizable only in desktop mode.

**Note:** Upon resizing, externally defined height and width styling will be ignored.`,name:"resizable",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:'"None"'},description:'Defines the state of the `Dialog`.\n\n**Note:** If `"Error"` and `"Warning"` state is set, it will change the\naccessibility role to "alertdialog", if the accessibleRole property is set to `"Dialog"`.',name:"state",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Warning"'},{value:'"None"'},{value:'"Error"'},{value:'"Success"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Error"'},{value:'"Information"'}]}},stretch:{defaultValue:{value:"false"},description:`Determines whether the component should be stretched to fullscreen.

**Note:** The component will be stretched to approximately
90% of the viewport.`,name:"stretch",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="Dialog",e.__docgenInfo={description:`The \`Dialog\` component is used to temporarily display some information in a
size-limited window in front of the regular app screen.
It is used to prompt the user for an action or a confirmation.
The \`Dialog\` interrupts the current app processing as it is the only focused UI element and
the main screen is dimmed/blocked.
The dialog combines concepts known from other technologies where the windows have
names such as dialog box, dialog window, pop-up, pop-up window, alert box, or message box.

The \`Dialog\` is modal, which means that an user action is required before it is possible to return to the parent window.
To open multiple dialogs, each dialog element should be separate in the markup. This will ensure the correct modal behavior. Avoid nesting dialogs within each other.
The content of the \`Dialog\` is fully customizable.

### Structure
A \`Dialog\` consists of a header, content, and a footer for action buttons.
The \`Dialog\` is usually displayed at the center of the screen.
Its position can be changed by the user. To enable this, you need to set the property \`draggable\` accordingly.


### Responsive Behavior
The \`stretch\` property can be used to stretch the
\`Dialog\` on full screen.

**Note:** When a \`ui5-bar\` is used in the header or in the footer, you should remove the default dialog's paddings.

For more information see the sample "Bar in Header/Footer".

### Keyboard Handling

#### Basic Navigation
When the \`Dialog\` has the \`draggable\` property set to \`true\` and the header is focused, the user can move the dialog
with the following keyboard shortcuts:

- [Up] or [Down] arrow keys - Move the dialog up/down.
- [Left] or [Right] arrow keys - Move the dialog left/right.

#### Resizing
When the \`Dialog\` has the \`resizable\` property set to \`true\` and the header is focused, the user can change the size of the dialog
with the following keyboard shortcuts:

- [Shift] + [Up] or [Down] - Decrease/Increase the height of the dialog.
- [Shift] + [Left] or [Right] - Decrease/Increase the width of the dialog.



**Note:** We recommend placing popup-like components (\`Dialog\` and \`Popover\`)
outside any other components. Preferably, the popup-like components should be placed
in an upper level HTML element. Otherwise, in some cases the parent HTML elements can break
the position and/or z-index management of the popup-like components.

**Note:** We don't recommend nesting popup-like components (\`Dialog\`, \`Popover\`).

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Dialog",props:{children:{defaultValue:null,description:"Defines the content of the Popup.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},footer:{defaultValue:null,description:`Defines the footer HTML Element.

**Note:** When a \`ui5-bar\` is used in the footer, you should remove the default dialog's paddings.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="footer"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"footer",required:!1,type:{name:"UI5WCSlotsNode"}},header:{defaultValue:null,description:`Defines the header HTML Element.

**Note:** When a \`ui5-bar\` is used in the header, you should remove the default dialog's paddings.

**Note:** If \`header\` slot is provided, the labelling of the dialog is a responsibility of the application developer.
\`accessibleName\` should be used.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},onAfterClose:{defaultValue:null,description:"Fired after the component is closed. **This event does not bubble.**",name:"onAfterClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onAfterOpen:{defaultValue:null,description:"Fired after the component is opened. **This event does not bubble.**",name:"onAfterOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onBeforeClose:{defaultValue:null,description:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void"}},onBeforeOpen:{defaultValue:null,description:"Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. **This event does not bubble.**\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:`Defines the IDs of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Dialog"'},description:`Allows setting a custom role.

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},draggable:{defaultValue:{value:"false"},description:`Determines whether the component is draggable.
If this property is set to true, the Dialog will be draggable by its header.

**Note:** The component can be draggable only in desktop mode.

**Note:** This property overrides the default HTML "draggable" attribute native behavior.
When "draggable" is set to true, the native browser "draggable"
behavior is prevented and only the Dialog custom logic ("draggable by its header") works.`,name:"draggable",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"Defines the header text.\n\n**Note:** If `header` slot is provided, the `headerText` is ignored.",name:"headerText",required:!1,type:{name:"string"}},initialFocus:{defaultValue:null,description:"Defines the ID of the HTML Element, which will get the initial focus.",name:"initialFocus",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:`Indicates if the element is open

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},preventFocusRestore:{defaultValue:{value:"false"},description:`Defines if the focus should be returned to the previously focused element,
when the popup closes.`,name:"preventFocusRestore",required:!1,type:{name:"boolean"}},resizable:{defaultValue:{value:"false"},description:`Configures the component to be resizable.
If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages.
In RTL languages, the resize handle will be placed in the bottom left corner.

**Note:** The component can be resizable only in desktop mode.

**Note:** Upon resizing, externally defined height and width styling will be ignored.`,name:"resizable",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:'"None"'},description:'Defines the state of the `Dialog`.\n\n**Note:** If `"Error"` and `"Warning"` state is set, it will change the\naccessibility role to "alertdialog", if the accessibleRole property is set to `"Dialog"`.',name:"state",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Warning"'},{value:'"None"'},{value:'"Error"'},{value:'"Success"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Error"'},{value:'"Information"'}]}},stretch:{defaultValue:{value:"false"},description:`Determines whether the component should be stretched to fullscreen.

**Note:** The component will be stretched to approximately
90% of the viewport.`,name:"stretch",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as D};
