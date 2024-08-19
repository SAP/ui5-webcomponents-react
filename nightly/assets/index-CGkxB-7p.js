const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./List-CH8w2THx.js","./withWebComponent-Bvd6GsxT.js","./utils-B91Jjtng.js","./index-CMKoANNR.js","./useIsomorphicLayoutEffect-DOdM5Kf8.js","./ResizeHandler-DLtaLMaj.js","./ItemNavigation-vTMdqqKa.js","./Keys-F_3Gvx0K.js","./getActiveElement-kltGt_DR.js","./event-Dq0fpeHi.js","./slot-_4yKMUwC.js","./AriaLabelHelper-C5uDZewF.js","./isElementInView-CjfjvN8v.js","./getEffectiveScrollbarStyle-B3XuleRv.js","./isElementHidden-B4HqmI2E.js","./isElementClickable-0ACQ4G_A.js","./i18nBundle-DyvSagx7.js","./debounce-TTkz9ISH.js","./class-map-izHjq-7_.js","./parameters-bundle.css-DJWIHzS2.js","./BusyIndicator-Cx-S6BZJ.js","./Label-CuT9KatJ.js","./i18n-defaults-CcfWlpG-.js","./if-defined-BJMHgp7g.js","./BrowserScrollbar.css-D0ty1KEr.js","./MarkedEvents-CAur0wxK.js","./decline-DI0qcVtv.js","./Icon-iJ5XkFd9.js","./i18n-defaults-CEQaAj6E.js","./TabbableElements-BJJu_CDc.js","./RadioButton-Chceev8u.js","./ValueState-Bg0UWejw.js","./CheckBox-B5ighiuc.js","./accept-0udhcfey.js","./Button-DFUJoV2f.js","./willShowContent-CZcfsNXp.js","./slim-arrow-right-C_o53qwA.js","./Avatar-DBJmGUf1.js","./employee-CB0X-WXT.js","./alert-XemOvmut.js"])))=>i.map(i=>d[i]);
import{_ as o}from"./iframe-Dr46XUoO.js";import"./List-CH8w2THx.js";import{w as n}from"./withWebComponent-Bvd6GsxT.js";const e=n("ui5-li-group",["headerAccessibleName","headerText"],[],["header"],["move-over","move"],()=>o(()=>import("./List-CH8w2THx.js").then(t=>t.n),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]),import.meta.url));e.displayName="ListItemGroup";try{e.displayName="ListItemGroup",e.__docgenInfo={description:`The \`ListItemGroup\` is a special list item, used only to create groups of list items.

This is the item to use inside a \`List\`.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ListItemGroup",props:{children:{defaultValue:null,description:"Defines the items of the <code>ui5-li-group</code>.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the header of the component.

**Note:** Using this slot, the default header text of group and the value of \`headerText\` property will be overwritten.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},onMove:{defaultValue:null,description:"Fired when a movable list item is dropped onto a drop target.\n\n**Note:** `move` event is fired only if there was a preceding `move-over` with prevented default action.\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.\n\n**Note:** Available since [v2.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.1.0) of **@ui5/webcomponents**.",name:"onMove",required:!1,type:{name:"(event: Ui5CustomEvent<ListItemGroupDomRef, ListItemGroupMoveEventDetail>) => void"}},onMoveOver:{defaultValue:null,description:`Fired when a movable list item is moved over a potential drop target during a dragging operation.

If the new position is valid, prevent the default action of the event using \`preventDefault()\`.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v2.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.1.0) of **@ui5/webcomponents**.`,name:"onMoveOver",required:!1,type:{name:"(event: Ui5CustomEvent<ListItemGroupDomRef, ListItemGroupMoveEventDetail>) => void"}},headerAccessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the header.",name:"headerAccessibleName",required:!1,type:{name:"string"}},headerText:{defaultValue:{value:"undefined"},description:"Defines the header text of the <code>ui5-li-group</code>.",name:"headerText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="ListItemGroup",e.__docgenInfo={description:`The \`ListItemGroup\` is a special list item, used only to create groups of list items.

This is the item to use inside a \`List\`.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ListItemGroup",props:{children:{defaultValue:null,description:"Defines the items of the <code>ui5-li-group</code>.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the header of the component.

**Note:** Using this slot, the default header text of group and the value of \`headerText\` property will be overwritten.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},onMove:{defaultValue:null,description:"Fired when a movable list item is dropped onto a drop target.\n\n**Note:** `move` event is fired only if there was a preceding `move-over` with prevented default action.\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.\n\n**Note:** Available since [v2.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.1.0) of **@ui5/webcomponents**.",name:"onMove",required:!1,type:{name:"(event: Ui5CustomEvent<ListItemGroupDomRef, ListItemGroupMoveEventDetail>) => void"}},onMoveOver:{defaultValue:null,description:`Fired when a movable list item is moved over a potential drop target during a dragging operation.

If the new position is valid, prevent the default action of the event using \`preventDefault()\`.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v2.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.1.0) of **@ui5/webcomponents**.`,name:"onMoveOver",required:!1,type:{name:"(event: Ui5CustomEvent<ListItemGroupDomRef, ListItemGroupMoveEventDetail>) => void"}},headerAccessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the header.",name:"headerAccessibleName",required:!1,type:{name:"string"}},headerText:{defaultValue:{value:"undefined"},description:"Defines the header text of the <code>ui5-li-group</code>.",name:"headerText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as L};
