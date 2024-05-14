const __vite__fileDeps=["./Menu-DZA447_E.js","./UI5Element-BfPpwo_k.js","./Boot-BtdVcW0c.js","./EventProvider-B3ZIXKWe.js","./ManagedStyles-0Bwp9t5R.js","./index-BP8_t0zE.js","./CustomElementsScopeUtils-CjWOyBed.js","./withWebComponent-DdLYI_QY.js","./utils-VXdlHuBA.js","./useIsomorphicLayoutEffect-CnI1knHw.js","./slot-Df15G--e.js","./event-CegLCnR0.js","./Popover-BRx0aMsU.js","./Integer-Dh6YzFpK.js","./PopupUtils-BDyegTwa.js","./getActiveElement-BL9Yqj8a.js","./PopupsCommon.css-BGWtnzwQ.js","./FocusableElements-FQMFYvMw.js","./isElementHidden-Bpu2V8BK.js","./AriaLabelHelper-CzOXVcye.js","./getEffectiveScrollbarStyle-DWzHjL-d.js","./Keys-BgUkNma0.js","./ResizeHandler-BxP3RYN1.js","./MediaRange-CQ-a3KRn.js","./style-map-BhswnH6I.js","./class-map-DwUNpVO-.js","./parameters-bundle.css-DjgCrOcY.js","./BrowserScrollbar.css-BmT0sFnr.js","./i18nBundle-Dx46P1iz.js","./slim-arrow-right-BFi0TIdF.js","./Icons-DgaaT5sV.js","./ResponsivePopover-BSbuHI1C.js","./i18n-defaults-BFrvdQTW.js","./Dialog-DhuoG6wg.js","./ValueState-Bn-H2OaL.js","./Icon-CDo0XdyR.js","./information-CIM5_BNu.js","./i18n-defaults-BdfZArTM.js","./alert-DaAYzDGJ.js","./Button-C4siPQ_G.js","./MarkedEvents-BPv6Lv4o.js","./willShowContent-BOkh0bwj.js","./HasPopup-Cecjtg2t.js","./Title-ClrU0KnW.js","./WrappingType-CW8URInd.js","./decline-Bq4uAF5d.js","./List-Dj8Q9o3Y.js","./ItemNavigation-B1rM-mPj.js","./TabbableElements-Ds_LZU0v.js","./debounce-jW346lN3.js","./BusyIndicator-Bh506WVf.js","./Label-B0QBRtjK.js","./CheckBox-76mbRj2v.js","./accept-kIYT9b9U.js","./RadioButton-DO7IWeaB.js","./CustomListItem-CnzueQa6.js","./ListItem-tgwFX80A.js","./StandardListItem-TNULnp6L.js","./Avatar-DDfgA5P5.js","./employee-Cmog-JUE.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./iframe-CY1Xvn4s.js";import"./Menu-DZA447_E.js";import{w as o}from"./withWebComponent-DdLYI_QY.js";const n=o("ui5-menu",["busyDelay","headerText","opener"],["busy","open"],[],["after-close","after-open","before-close","before-open","item-click","item-focus"],()=>i(()=>import("./Menu-DZA447_E.js").then(e=>e.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59]),import.meta.url));n.displayName="Menu";try{n.displayName="Menu",n.__docgenInfo={description:"`Menu` component represents a hierarchical menu structure.\n\n### Usage\n\n`Menu` contains `MenuItem` components.\nAn arbitrary hierarchy structure can be represented by recursively nesting menu items.\n\n### Keyboard Handling\n\nThe `Menu` provides advanced keyboard handling.\nThe user can use the following keyboard shortcuts in order to navigate trough the tree:\n\n- `Arrow Up` / `Arrow Down` - Navigates up and down the menu items that are currently visible.\n- `Arrow Right`, `Space` or `Enter` - Opens a sub-menu if there are menu items nested\nin the currently clicked menu item.\n- `Arrow Left` or `Escape` - Closes the currently opened sub-menu.\n\nNote: if the text ditrection is set to Right-to-left (RTL), `Arrow Right` and `Arrow Left` functionality is swapped.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"Menu",props:{children:{defaultValue:null,description:"Defines the items of this component.\n\n**Note:** Use `MenuItem` for the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onAfterClose:{defaultValue:null,description:`Fired after the menu is closed. **This event does not bubble.**

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"onAfterClose",required:!1,type:{name:"(event: Ui5CustomEvent<MenuDomRef, never>) => void"}},onAfterOpen:{defaultValue:null,description:`Fired after the menu is opened. **This event does not bubble.**

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"onAfterOpen",required:!1,type:{name:"(event: Ui5CustomEvent<MenuDomRef, never>) => void"}},onBeforeClose:{defaultValue:null,description:`Fired before the menu is closed. This event can be cancelled, which will prevent the menu from closing. **This event does not bubble.**

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<MenuDomRef, MenuBeforeCloseEventDetail>) => void"}},onBeforeOpen:{defaultValue:null,description:`Fired before the menu is opened. This event can be cancelled, which will prevent the menu from opening. **This event does not bubble.**

**Note:** Since 1.14.0 the event is also fired before a sub-menu opens.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<MenuDomRef, MenuBeforeOpenEventDetail>) => void"}},onItemClick:{defaultValue:null,description:`Fired when an item is being clicked.

**Note:** Since 1.17.0 the event is preventable, allowing the menu to remain open after an item is pressed.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.`,name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<MenuDomRef, MenuItemClickEventDetail>) => void"}},onItemFocus:{defaultValue:null,description:`Fired when a menu item receives focus.

**Note:** Available since [v1.23.1](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.1) of **@ui5/webcomponents**.`,name:"onItemFocus",required:!1,type:{name:"(event: Ui5CustomEvent<MenuDomRef, MenuItemFocusEventDetail>) => void"}},busy:{defaultValue:{value:"false"},description:`Defines if a loading indicator would be displayed inside the corresponding ui5-menu popover.

**Note:** Available since [v1.13.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.13.0) of **@ui5/webcomponents**.`,name:"busy",required:!1,type:{name:"boolean"}},busyDelay:{defaultValue:{value:"1000"},description:`Defines the delay in milliseconds, after which the busy indicator will be displayed inside the corresponding ui5-menu popover..

**Note:** Available since [v1.13.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.13.0) of **@ui5/webcomponents**.`,name:"busyDelay",required:!1,type:{name:"number"}},headerText:{defaultValue:null,description:"Defines the header text of the menu (displayed on mobile).",name:"headerText",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:`Indicates if the menu is open

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},opener:{defaultValue:null,description:`Defines the ID or DOM Reference of the element that the menu is shown at

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"opener",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{n.displayName="Menu",n.__docgenInfo={description:"`Menu` component represents a hierarchical menu structure.\n\n### Usage\n\n`Menu` contains `MenuItem` components.\nAn arbitrary hierarchy structure can be represented by recursively nesting menu items.\n\n### Keyboard Handling\n\nThe `Menu` provides advanced keyboard handling.\nThe user can use the following keyboard shortcuts in order to navigate trough the tree:\n\n- `Arrow Up` / `Arrow Down` - Navigates up and down the menu items that are currently visible.\n- `Arrow Right`, `Space` or `Enter` - Opens a sub-menu if there are menu items nested\nin the currently clicked menu item.\n- `Arrow Left` or `Escape` - Closes the currently opened sub-menu.\n\nNote: if the text ditrection is set to Right-to-left (RTL), `Arrow Right` and `Arrow Left` functionality is swapped.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"Menu",props:{children:{defaultValue:null,description:"Defines the items of this component.\n\n**Note:** Use `MenuItem` for the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onAfterClose:{defaultValue:null,description:`Fired after the menu is closed. **This event does not bubble.**

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"onAfterClose",required:!1,type:{name:"(event: Ui5CustomEvent<MenuDomRef, never>) => void"}},onAfterOpen:{defaultValue:null,description:`Fired after the menu is opened. **This event does not bubble.**

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"onAfterOpen",required:!1,type:{name:"(event: Ui5CustomEvent<MenuDomRef, never>) => void"}},onBeforeClose:{defaultValue:null,description:`Fired before the menu is closed. This event can be cancelled, which will prevent the menu from closing. **This event does not bubble.**

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<MenuDomRef, MenuBeforeCloseEventDetail>) => void"}},onBeforeOpen:{defaultValue:null,description:`Fired before the menu is opened. This event can be cancelled, which will prevent the menu from opening. **This event does not bubble.**

**Note:** Since 1.14.0 the event is also fired before a sub-menu opens.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<MenuDomRef, MenuBeforeOpenEventDetail>) => void"}},onItemClick:{defaultValue:null,description:`Fired when an item is being clicked.

**Note:** Since 1.17.0 the event is preventable, allowing the menu to remain open after an item is pressed.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.`,name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<MenuDomRef, MenuItemClickEventDetail>) => void"}},onItemFocus:{defaultValue:null,description:`Fired when a menu item receives focus.

**Note:** Available since [v1.23.1](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.1) of **@ui5/webcomponents**.`,name:"onItemFocus",required:!1,type:{name:"(event: Ui5CustomEvent<MenuDomRef, MenuItemFocusEventDetail>) => void"}},busy:{defaultValue:{value:"false"},description:`Defines if a loading indicator would be displayed inside the corresponding ui5-menu popover.

**Note:** Available since [v1.13.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.13.0) of **@ui5/webcomponents**.`,name:"busy",required:!1,type:{name:"boolean"}},busyDelay:{defaultValue:{value:"1000"},description:`Defines the delay in milliseconds, after which the busy indicator will be displayed inside the corresponding ui5-menu popover..

**Note:** Available since [v1.13.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.13.0) of **@ui5/webcomponents**.`,name:"busyDelay",required:!1,type:{name:"number"}},headerText:{defaultValue:null,description:"Defines the header text of the menu (displayed on mobile).",name:"headerText",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:`Indicates if the menu is open

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},opener:{defaultValue:null,description:`Defines the ID or DOM Reference of the element that the menu is shown at

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"opener",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const t=o("ui5-menu-item",["accessibleName","additionalText","busyDelay","icon","text","tooltip"],["busy","disabled","startsSection"],[],[],()=>i(()=>import("./Menu-DZA447_E.js").then(e=>e.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59]),import.meta.url));t.displayName="MenuItem";try{t.displayName="MenuItem",t.__docgenInfo={description:"`MenuItem` is the item to use inside a `Menu`.\nAn arbitrary hierarchy structure can be represented by recursively nesting menu items.\n\n### Usage\n\n`MenuItem` is an abstract element, representing a node in a `Menu`. The menu itself is rendered as a list,\nand each `MenuItem` is represented by a list item (`StandardListItem`) in that list. Therefore, you should only use\n`MenuItem` directly in your apps. The `StandardListItem` list item is internal for the list, and not intended for public use.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"MenuItem",props:{children:{defaultValue:null,description:"Defines the items of this component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},accessibleName:{defaultValue:null,description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v1.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.7.0) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},additionalText:{defaultValue:null,description:`Defines the \`additionalText\`, displayed in the end of the menu item.

**Note:** The additional text would not be displayed if the item has a submenu.

**Note:** Available since [v1.8.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.8.0) of **@ui5/webcomponents**.`,name:"additionalText",required:!1,type:{name:"string"}},busy:{defaultValue:{value:"false"},description:"Defines the delay in milliseconds, after which the busy indicator will be displayed inside the corresponding ui5-menu popover.\n\n**Note:** If set to `true` a `BusyIndicator` component will be displayed into the related one to the current `MenuItem` sub-menu popover.\n\n**Note:** Available since [v1.13.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.13.0) of **@ui5/webcomponents**.",name:"busy",required:!1,type:{name:"boolean"}},busyDelay:{defaultValue:{value:"1000"},description:`Defines the delay in milliseconds, after which the busy indicator will be displayed inside the corresponding ui5-menu popover.

**Note:** Available since [v1.13.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.13.0) of **@ui5/webcomponents**.`,name:"busyDelay",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"false"},description:"Defines whether `MenuItem` is in disabled state.\n\n**Note:** A disabled `MenuItem` is noninteractive.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component.
The SAP-icons font provides numerous options.

**Example:**

See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},startsSection:{defaultValue:{value:"false"},description:"Defines whether a visual separator should be rendered before the item.",name:"startsSection",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Defines the text of the tree item.",name:"text",required:!1,type:{name:"string"}},tooltip:{defaultValue:null,description:`Defines the text of the tooltip for the menu item.

**Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{t.displayName="MenuItem",t.__docgenInfo={description:"`MenuItem` is the item to use inside a `Menu`.\nAn arbitrary hierarchy structure can be represented by recursively nesting menu items.\n\n### Usage\n\n`MenuItem` is an abstract element, representing a node in a `Menu`. The menu itself is rendered as a list,\nand each `MenuItem` is represented by a list item (`StandardListItem`) in that list. Therefore, you should only use\n`MenuItem` directly in your apps. The `StandardListItem` list item is internal for the list, and not intended for public use.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"MenuItem",props:{children:{defaultValue:null,description:"Defines the items of this component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},accessibleName:{defaultValue:null,description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v1.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.7.0) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},additionalText:{defaultValue:null,description:`Defines the \`additionalText\`, displayed in the end of the menu item.

**Note:** The additional text would not be displayed if the item has a submenu.

**Note:** Available since [v1.8.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.8.0) of **@ui5/webcomponents**.`,name:"additionalText",required:!1,type:{name:"string"}},busy:{defaultValue:{value:"false"},description:"Defines the delay in milliseconds, after which the busy indicator will be displayed inside the corresponding ui5-menu popover.\n\n**Note:** If set to `true` a `BusyIndicator` component will be displayed into the related one to the current `MenuItem` sub-menu popover.\n\n**Note:** Available since [v1.13.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.13.0) of **@ui5/webcomponents**.",name:"busy",required:!1,type:{name:"boolean"}},busyDelay:{defaultValue:{value:"1000"},description:`Defines the delay in milliseconds, after which the busy indicator will be displayed inside the corresponding ui5-menu popover.

**Note:** Available since [v1.13.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.13.0) of **@ui5/webcomponents**.`,name:"busyDelay",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"false"},description:"Defines whether `MenuItem` is in disabled state.\n\n**Note:** A disabled `MenuItem` is noninteractive.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component.
The SAP-icons font provides numerous options.

**Example:**

See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},startsSection:{defaultValue:{value:"false"},description:"Defines whether a visual separator should be rendered before the item.",name:"startsSection",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Defines the text of the tree item.",name:"text",required:!1,type:{name:"string"}},tooltip:{defaultValue:null,description:`Defines the text of the tooltip for the menu item.

**Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{n as M,t as a};
