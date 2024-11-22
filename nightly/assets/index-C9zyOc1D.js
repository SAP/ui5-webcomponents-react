import"./Menu-DPsaHMjS.js";import{w as t}from"./withWebComponent-DpVKsRHi.js";const e=t("ui5-menu",["headerText","loadingDelay","opener"],["loading","open"],[],["before-close","before-open","close","item-click","open"]);e.displayName="Menu";try{e.displayName="Menu",e.__docgenInfo={description:"`Menu` component represents a hierarchical menu structure.\n\n### Structure\n\nThe `Menu` can hold two types of entities:\n\n- `MenuItem` components\n- `MenuSeparator` - used to separate menu items with a line\n\nAn arbitrary hierarchy structure can be represented by recursively nesting menu items.\n\n### Keyboard Handling\n\nThe `Menu` provides advanced keyboard handling.\nThe user can use the following keyboard shortcuts in order to navigate trough the tree:\n\n- `Arrow Up` / `Arrow Down` - Navigates up and down the menu items that are currently visible.\n- `Arrow Right`, `Space` or `Enter` - Opens a sub-menu if there are menu items nested\nin the currently clicked menu item.\n- `Arrow Left` or `Escape` - Closes the currently opened sub-menu.\n\nNote: if the text ditrection is set to Right-to-left (RTL), `Arrow Right` and `Arrow Left` functionality is swapped.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"Menu",props:{children:{defaultValue:null,description:"Defines the items of this component.\n\n**Note:** Use `MenuItem` and `MenuSeparator` for their intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onBeforeClose:{defaultValue:null,description:`Fired before the menu is closed. This event can be cancelled, which will prevent the menu from closing. **This event does not bubble.**

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<MenuDomRef, MenuBeforeCloseEventDetail>) => void"}},onBeforeOpen:{defaultValue:null,description:`Fired before the menu is opened. This event can be cancelled, which will prevent the menu from opening. **This event does not bubble.**

**Note:** Since 1.14.0 the event is also fired before a sub-menu opens.

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<MenuDomRef, MenuBeforeOpenEventDetail>) => void"}},onClose:{defaultValue:null,description:`Fired after the menu is closed. **This event does not bubble.**

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<MenuDomRef, never>) => void"}},onItemClick:{defaultValue:null,description:`Fired when an item is being clicked.

**Note:** Since 1.17.0 the event is preventable, allowing the menu to remain open after an item is pressed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<MenuDomRef, MenuItemClickEventDetail>) => void"}},onOpen:{defaultValue:null,description:`Fired after the menu is opened. **This event does not bubble.**

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<MenuDomRef, never>) => void"}},headerText:{defaultValue:{value:"undefined"},description:"Defines the header text of the menu (displayed on mobile).",name:"headerText",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"false"},description:`Defines if a loading indicator would be displayed inside the corresponding ui5-menu popover.

**Note:** Available since [v1.13.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.13.0) of **@ui5/webcomponents**.`,name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:`Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding ui5-menu popover..

**Note:** Available since [v1.13.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.13.0) of **@ui5/webcomponents**.`,name:"loadingDelay",required:!1,type:{name:"number"}},open:{defaultValue:{value:"false"},description:`Indicates if the menu is open

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},opener:{defaultValue:{value:"undefined"},description:"Defines the ID or DOM Reference of the element at which the menu is shown.\nWhen using this attribute in a declarative way, you must only use the `id` (as a string) of the element at which you want to show the popover.\nYou can only set the `opener` attribute to a DOM Reference when using JavaScript.\n\n**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.",name:"opener",required:!1,type:{name:"string | HTMLElement"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="Menu",e.__docgenInfo={description:"`Menu` component represents a hierarchical menu structure.\n\n### Structure\n\nThe `Menu` can hold two types of entities:\n\n- `MenuItem` components\n- `MenuSeparator` - used to separate menu items with a line\n\nAn arbitrary hierarchy structure can be represented by recursively nesting menu items.\n\n### Keyboard Handling\n\nThe `Menu` provides advanced keyboard handling.\nThe user can use the following keyboard shortcuts in order to navigate trough the tree:\n\n- `Arrow Up` / `Arrow Down` - Navigates up and down the menu items that are currently visible.\n- `Arrow Right`, `Space` or `Enter` - Opens a sub-menu if there are menu items nested\nin the currently clicked menu item.\n- `Arrow Left` or `Escape` - Closes the currently opened sub-menu.\n\nNote: if the text ditrection is set to Right-to-left (RTL), `Arrow Right` and `Arrow Left` functionality is swapped.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"Menu",props:{children:{defaultValue:null,description:"Defines the items of this component.\n\n**Note:** Use `MenuItem` and `MenuSeparator` for their intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onBeforeClose:{defaultValue:null,description:`Fired before the menu is closed. This event can be cancelled, which will prevent the menu from closing. **This event does not bubble.**

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<MenuDomRef, MenuBeforeCloseEventDetail>) => void"}},onBeforeOpen:{defaultValue:null,description:`Fired before the menu is opened. This event can be cancelled, which will prevent the menu from opening. **This event does not bubble.**

**Note:** Since 1.14.0 the event is also fired before a sub-menu opens.

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<MenuDomRef, MenuBeforeOpenEventDetail>) => void"}},onClose:{defaultValue:null,description:`Fired after the menu is closed. **This event does not bubble.**

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<MenuDomRef, never>) => void"}},onItemClick:{defaultValue:null,description:`Fired when an item is being clicked.

**Note:** Since 1.17.0 the event is preventable, allowing the menu to remain open after an item is pressed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<MenuDomRef, MenuItemClickEventDetail>) => void"}},onOpen:{defaultValue:null,description:`Fired after the menu is opened. **This event does not bubble.**

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<MenuDomRef, never>) => void"}},headerText:{defaultValue:{value:"undefined"},description:"Defines the header text of the menu (displayed on mobile).",name:"headerText",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"false"},description:`Defines if a loading indicator would be displayed inside the corresponding ui5-menu popover.

**Note:** Available since [v1.13.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.13.0) of **@ui5/webcomponents**.`,name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:`Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding ui5-menu popover..

**Note:** Available since [v1.13.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.13.0) of **@ui5/webcomponents**.`,name:"loadingDelay",required:!1,type:{name:"number"}},open:{defaultValue:{value:"false"},description:`Indicates if the menu is open

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},opener:{defaultValue:{value:"undefined"},description:"Defines the ID or DOM Reference of the element at which the menu is shown.\nWhen using this attribute in a declarative way, you must only use the `id` (as a string) of the element at which you want to show the popover.\nYou can only set the `opener` attribute to a DOM Reference when using JavaScript.\n\n**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.",name:"opener",required:!1,type:{name:"string | HTMLElement"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as M};
