import"./Tab-YmAcrVgC.js";import{w as o}from"./jsx-runtime-CkEx_Gfk.js";const e=o("ui5-tab",["additionalText","design","icon","text"],["disabled","selected"],["items"],[]);e.displayName="Tab";try{e.displayName="Tab",e.__docgenInfo={description:"The `Tab` represents a selectable item inside a `TabContainer`.\nIt defines both the item in the tab strip (top part of the `TabContainer`) and the\ncontent that is presented to the user once the tab is selected.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"Tab",props:{children:{defaultValue:null,description:"Holds the content associated with this tab.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},items:{defaultValue:null,description:`Defines hierarchies with nested sub tabs.

**Note:** Use \`Tab\` and \`TabSeparator\` for the intended design.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="items"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"items",required:!1,type:{name:"UI5WCSlotsNode"}},additionalText:{defaultValue:{value:"undefined"},description:'Represents the "additionalText" text, which is displayed in the tab. In the cases when in the same time there are tabs with icons and tabs without icons, if a tab has no icon the "additionalText" is displayed larger.',name:"additionalText",required:!1,type:{name:"string"}},design:{defaultValue:{value:'"Default"'},description:'Defines the component\'s design color.\n\nThe design is applied to:\n\n- the component icon\n- the `text` when the component overflows\n- the tab selection line\n\nAvailable designs are: `"Default"`, `"Neutral"`, `"Positive"`, `"Critical"` and `"Negative"`.\n\n**Note:** The design depends on the current theme.',name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"Default"'},{value:'"Neutral"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"Neutral"'}]}},disabled:{defaultValue:{value:"false"},description:"Disabled tabs can't be selected.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"undefined"},description:`Defines the icon source URI to be displayed as graphical element within the component.
The SAP-icons font provides numerous built-in icons.
See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"Specifies if the component is selected.",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:{value:"undefined"},description:"The text to be displayed for the item.",name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="Tab",e.__docgenInfo={description:"The `Tab` represents a selectable item inside a `TabContainer`.\nIt defines both the item in the tab strip (top part of the `TabContainer`) and the\ncontent that is presented to the user once the tab is selected.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"Tab",props:{children:{defaultValue:null,description:"Holds the content associated with this tab.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},items:{defaultValue:null,description:`Defines hierarchies with nested sub tabs.

**Note:** Use \`Tab\` and \`TabSeparator\` for the intended design.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="items"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"items",required:!1,type:{name:"UI5WCSlotsNode"}},additionalText:{defaultValue:{value:"undefined"},description:'Represents the "additionalText" text, which is displayed in the tab. In the cases when in the same time there are tabs with icons and tabs without icons, if a tab has no icon the "additionalText" is displayed larger.',name:"additionalText",required:!1,type:{name:"string"}},design:{defaultValue:{value:'"Default"'},description:'Defines the component\'s design color.\n\nThe design is applied to:\n\n- the component icon\n- the `text` when the component overflows\n- the tab selection line\n\nAvailable designs are: `"Default"`, `"Neutral"`, `"Positive"`, `"Critical"` and `"Negative"`.\n\n**Note:** The design depends on the current theme.',name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"Default"'},{value:'"Neutral"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"Neutral"'}]}},disabled:{defaultValue:{value:"false"},description:"Disabled tabs can't be selected.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"undefined"},description:`Defines the icon source URI to be displayed as graphical element within the component.
The SAP-icons font provides numerous built-in icons.
See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"Specifies if the component is selected.",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:{value:"undefined"},description:"The text to be displayed for the item.",name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const t=o("ui5-tabcontainer",["contentBackgroundDesign","headerBackgroundDesign","overflowMode","tabLayout"],["collapsed","noAutoSelection"],["overflowButton","startOverflowButton"],["move-over","move","tab-select"]);t.displayName="TabContainer";try{t.displayName="TabContainer",t.__docgenInfo={description:`The \`TabContainer\` represents a collection of tabs with associated content.
Navigation through the tabs changes the content display of the currently active content area.
A tab can be labeled with text only, or icons with text.

### Structure

The \`TabContainer\` can hold two types of entities:

- \`Tab\` - contains all the information on an item (text and icon)
- \`TabSeparator\` - used to separate tabs with a line

### Hierarchies
Multiple sub tabs could be placed underneath one main tab. Nesting allows deeper hierarchies with indentations
to indicate the level of each nested tab. When a tab has both sub tabs and own content its click area is split
to allow the user to display the content or alternatively to expand / collapse the list of sub tabs.

### Keyboard Handling

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



\`import "@ui5/webcomponents/dist/Tab.js";\` (for \`Tab\`)

\`import "@ui5/webcomponents/dist/TabSeparator.js";\` (for \`TabSeparator\`)

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"TabContainer",props:{children:{defaultValue:null,description:"Defines the tabs.\n\n**Note:** Use `Tab` and `TabSeparator` for the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},overflowButton:{defaultValue:null,description:`Defines the button which will open the overflow menu. If nothing is provided to this slot,
the default button will be used.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="overflowButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"overflowButton",required:!1,type:{name:"UI5WCSlotsNode"}},startOverflowButton:{defaultValue:null,description:`Defines the button which will open the start overflow menu if available. If nothing is provided to this slot,
the default button will be used.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="startOverflowButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"startOverflowButton",required:!1,type:{name:"UI5WCSlotsNode"}},onMove:{defaultValue:null,description:`Fired when element is moved to the tab container.

**Note:** \`move\` event is fired only if there was a preceding \`move-over\` with prevented default action.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onMove",required:!1,type:{name:"(event: Ui5CustomEvent<TabContainerDomRef, TabContainerMoveEventDetail>) => void"}},onMoveOver:{defaultValue:null,description:`Fired when element is being moved over the tab container.

If the new position is valid, prevent the default action of the event using \`preventDefault()\`.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onMoveOver",required:!1,type:{name:"(event: Ui5CustomEvent<TabContainerDomRef, TabContainerMoveEventDetail>) => void"}},onTabSelect:{defaultValue:null,description:`Fired when a tab is selected.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onTabSelect",required:!1,type:{name:"(event: Ui5CustomEvent<TabContainerDomRef, TabContainerTabSelectEventDetail>) => void"}},collapsed:{defaultValue:{value:"false"},description:"Defines whether the tab content is collapsed.",name:"collapsed",required:!1,type:{name:"boolean"}},contentBackgroundDesign:{defaultValue:{value:'"Solid"'},description:"Sets the background color of the Tab Container's content as `Solid`, `Transparent`, or `Translucent`.\n\n**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.",name:"contentBackgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"Solid"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"Translucent"'},{value:'"Translucent"'}]}},headerBackgroundDesign:{defaultValue:{value:'"Solid"'},description:"Sets the background color of the Tab Container's header as `Solid`, `Transparent`, or `Translucent`.\n\n**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.",name:"headerBackgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"Solid"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"Translucent"'},{value:'"Translucent"'}]}},noAutoSelection:{defaultValue:{value:"false"},description:`Defines if automatic tab selection is deactivated.

**Note:** By default, if none of the child tabs have the \`selected\` property set, the first tab will be automatically selected.
Setting this property to \`true\` allows preventing this behavior.

**Note:** Available since [v2.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents**.`,name:"noAutoSelection",required:!1,type:{name:"boolean"}},overflowMode:{defaultValue:{value:'"End"'},description:`Defines the overflow mode of the header (the tab strip). If you have a large number of tabs, only the tabs that can fit on screen will be visible.
All other tabs that can 't fit on the screen are available in an overflow tab "More".

**Note:**
Only one overflow at the end would be displayed by default,
but when set to \`StartAndEnd\`, there will be two overflows on both ends, and tab order will not change on tab selection.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"overflowMode",required:!1,type:{name:"enum",value:[{value:'"End"'},{value:'"End"'},{value:'"StartAndEnd"'},{value:'"StartAndEnd"'}]}},tabLayout:{defaultValue:{value:'"Standard"'},description:"Defines the alignment of the content and the `additionalText` of a tab.\n\n**Note:**\nThe content and the `additionalText` would be displayed vertically by default,\nbut when set to `Inline`, they would be displayed horizontally.",name:"tabLayout",required:!1,type:{name:"enum",value:[{value:'"Inline"'},{value:'"Standard"'},{value:'"Inline"'},{value:'"Standard"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{t.displayName="TabContainer",t.__docgenInfo={description:`The \`TabContainer\` represents a collection of tabs with associated content.
Navigation through the tabs changes the content display of the currently active content area.
A tab can be labeled with text only, or icons with text.

### Structure

The \`TabContainer\` can hold two types of entities:

- \`Tab\` - contains all the information on an item (text and icon)
- \`TabSeparator\` - used to separate tabs with a line

### Hierarchies
Multiple sub tabs could be placed underneath one main tab. Nesting allows deeper hierarchies with indentations
to indicate the level of each nested tab. When a tab has both sub tabs and own content its click area is split
to allow the user to display the content or alternatively to expand / collapse the list of sub tabs.

### Keyboard Handling

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



\`import "@ui5/webcomponents/dist/Tab.js";\` (for \`Tab\`)

\`import "@ui5/webcomponents/dist/TabSeparator.js";\` (for \`TabSeparator\`)

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"TabContainer",props:{children:{defaultValue:null,description:"Defines the tabs.\n\n**Note:** Use `Tab` and `TabSeparator` for the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},overflowButton:{defaultValue:null,description:`Defines the button which will open the overflow menu. If nothing is provided to this slot,
the default button will be used.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="overflowButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"overflowButton",required:!1,type:{name:"UI5WCSlotsNode"}},startOverflowButton:{defaultValue:null,description:`Defines the button which will open the start overflow menu if available. If nothing is provided to this slot,
the default button will be used.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="startOverflowButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"startOverflowButton",required:!1,type:{name:"UI5WCSlotsNode"}},onMove:{defaultValue:null,description:`Fired when element is moved to the tab container.

**Note:** \`move\` event is fired only if there was a preceding \`move-over\` with prevented default action.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onMove",required:!1,type:{name:"(event: Ui5CustomEvent<TabContainerDomRef, TabContainerMoveEventDetail>) => void"}},onMoveOver:{defaultValue:null,description:`Fired when element is being moved over the tab container.

If the new position is valid, prevent the default action of the event using \`preventDefault()\`.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onMoveOver",required:!1,type:{name:"(event: Ui5CustomEvent<TabContainerDomRef, TabContainerMoveEventDetail>) => void"}},onTabSelect:{defaultValue:null,description:`Fired when a tab is selected.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onTabSelect",required:!1,type:{name:"(event: Ui5CustomEvent<TabContainerDomRef, TabContainerTabSelectEventDetail>) => void"}},collapsed:{defaultValue:{value:"false"},description:"Defines whether the tab content is collapsed.",name:"collapsed",required:!1,type:{name:"boolean"}},contentBackgroundDesign:{defaultValue:{value:'"Solid"'},description:"Sets the background color of the Tab Container's content as `Solid`, `Transparent`, or `Translucent`.\n\n**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.",name:"contentBackgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"Solid"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"Translucent"'},{value:'"Translucent"'}]}},headerBackgroundDesign:{defaultValue:{value:'"Solid"'},description:"Sets the background color of the Tab Container's header as `Solid`, `Transparent`, or `Translucent`.\n\n**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.",name:"headerBackgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"Solid"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"Translucent"'},{value:'"Translucent"'}]}},noAutoSelection:{defaultValue:{value:"false"},description:`Defines if automatic tab selection is deactivated.

**Note:** By default, if none of the child tabs have the \`selected\` property set, the first tab will be automatically selected.
Setting this property to \`true\` allows preventing this behavior.

**Note:** Available since [v2.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents**.`,name:"noAutoSelection",required:!1,type:{name:"boolean"}},overflowMode:{defaultValue:{value:'"End"'},description:`Defines the overflow mode of the header (the tab strip). If you have a large number of tabs, only the tabs that can fit on screen will be visible.
All other tabs that can 't fit on the screen are available in an overflow tab "More".

**Note:**
Only one overflow at the end would be displayed by default,
but when set to \`StartAndEnd\`, there will be two overflows on both ends, and tab order will not change on tab selection.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"overflowMode",required:!1,type:{name:"enum",value:[{value:'"End"'},{value:'"End"'},{value:'"StartAndEnd"'},{value:'"StartAndEnd"'}]}},tabLayout:{defaultValue:{value:'"Standard"'},description:"Defines the alignment of the content and the `additionalText` of a tab.\n\n**Note:**\nThe content and the `additionalText` would be displayed vertically by default,\nbut when set to `Inline`, they would be displayed horizontally.",name:"tabLayout",required:!1,type:{name:"enum",value:[{value:'"Inline"'},{value:'"Standard"'},{value:'"Inline"'},{value:'"Standard"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as T,t as a};
