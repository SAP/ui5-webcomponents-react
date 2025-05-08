import"./Panel-D8CXC8dN.js";import{w as t}from"./jsx-runtime-CkEx_Gfk.js";const e=t("ui5-panel",["accessibleName","accessibleRole","headerLevel","headerText"],["collapsed","fixed","noAnimation","stickyHeader"],["header"],["toggle"]);e.displayName="Panel";try{e.displayName="Panel",e.__docgenInfo={description:`The \`Panel\` component is a container which has a header and a
content area and is used
for grouping and displaying information. It can be collapsed to save space on the screen.

### Guidelines:

- Nesting two or more panels is not recommended.
- Do not stack too many panels on one page.

### Structure
The panel's header area consists of a title bar with a header text or custom header.

The header is clickable and can be used to toggle between the expanded and collapsed state. It includes an icon which rotates depending on the state.

The custom header can be set through the \`header\` slot and it may contain arbitraray content, such as: title, buttons or any other HTML elements.

The content area can contain an arbitrary set of controls.

**Note:** The custom header is not clickable out of the box, but in this case the icon is interactive and allows to show/hide the content area.

### Responsive Behavior

- If the width of the panel is set to 100% (default), the panel and its children are
resized responsively,
depending on its parent container.
- If the panel has a fixed height, it will take up the space even if the panel is
collapsed.
- When the panel is expandable (the \`fixed\` property is set to \`false\`),
an arrow icon (pointing to the right) appears in front of the header.
- When the animation is activated, expand/collapse uses a smooth animation to open or
close the content area.
- When the panel expands/collapses, the arrow icon rotates 90 degrees
clockwise/counter-clockwise.

### Keyboard Handling

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Panel",props:{children:{defaultValue:null,description:"Defines the content of the component. The content is visible only when the component is expanded.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the component header area.

**Note:** When a header is provided, the \`headerText\` property is ignored.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},onToggle:{defaultValue:null,description:`Fired when the component is expanded/collapsed by user interaction.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onToggle",required:!1,type:{name:"(event: Ui5CustomEvent<PanelDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Form"'},description:"Sets the accessible ARIA role of the component.\nDepending on the usage, you can change the role from the default `Form`\nto `Region` or `Complementary`.",name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Complementary"'},{value:'"Form"'},{value:'"Region"'},{value:'"Complementary"'},{value:'"Form"'},{value:'"Region"'}]}},collapsed:{defaultValue:{value:"false"},description:"Indicates whether the component is collapsed and only the header is displayed.",name:"collapsed",required:!1,type:{name:"boolean"}},fixed:{defaultValue:{value:"false"},description:`Determines whether the component is in a fixed state that is not
expandable/collapsible by user interaction.`,name:"fixed",required:!1,type:{name:"boolean"}},headerLevel:{defaultValue:{value:'"H2"'},description:'Defines the "aria-level" of component heading,\nset by the `headerText`.',name:"headerLevel",required:!1,type:{name:"enum",value:[{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},headerText:{defaultValue:{value:"undefined"},description:`This property is used to set the header text of the component.
The text is visible in both expanded and collapsed states.

**Note:** This property is overridden by the \`header\` slot.`,name:"headerText",required:!1,type:{name:"string"}},noAnimation:{defaultValue:{value:"false"},description:"Indicates whether the transition between the expanded and the collapsed state of the component is animated. By default the animation is enabled.",name:"noAnimation",required:!1,type:{name:"boolean"}},stickyHeader:{defaultValue:{value:"false"},description:`Indicates whether the Panel header is sticky or not.
If stickyHeader is set to true, then whenever you scroll the content or
the application, the header of the panel will be always visible and
a solid color will be used for its design.`,name:"stickyHeader",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="Panel",e.__docgenInfo={description:`The \`Panel\` component is a container which has a header and a
content area and is used
for grouping and displaying information. It can be collapsed to save space on the screen.

### Guidelines:

- Nesting two or more panels is not recommended.
- Do not stack too many panels on one page.

### Structure
The panel's header area consists of a title bar with a header text or custom header.

The header is clickable and can be used to toggle between the expanded and collapsed state. It includes an icon which rotates depending on the state.

The custom header can be set through the \`header\` slot and it may contain arbitraray content, such as: title, buttons or any other HTML elements.

The content area can contain an arbitrary set of controls.

**Note:** The custom header is not clickable out of the box, but in this case the icon is interactive and allows to show/hide the content area.

### Responsive Behavior

- If the width of the panel is set to 100% (default), the panel and its children are
resized responsively,
depending on its parent container.
- If the panel has a fixed height, it will take up the space even if the panel is
collapsed.
- When the panel is expandable (the \`fixed\` property is set to \`false\`),
an arrow icon (pointing to the right) appears in front of the header.
- When the animation is activated, expand/collapse uses a smooth animation to open or
close the content area.
- When the panel expands/collapses, the arrow icon rotates 90 degrees
clockwise/counter-clockwise.

### Keyboard Handling

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Panel",props:{children:{defaultValue:null,description:"Defines the content of the component. The content is visible only when the component is expanded.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the component header area.

**Note:** When a header is provided, the \`headerText\` property is ignored.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},onToggle:{defaultValue:null,description:`Fired when the component is expanded/collapsed by user interaction.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onToggle",required:!1,type:{name:"(event: Ui5CustomEvent<PanelDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Form"'},description:"Sets the accessible ARIA role of the component.\nDepending on the usage, you can change the role from the default `Form`\nto `Region` or `Complementary`.",name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Complementary"'},{value:'"Form"'},{value:'"Region"'},{value:'"Complementary"'},{value:'"Form"'},{value:'"Region"'}]}},collapsed:{defaultValue:{value:"false"},description:"Indicates whether the component is collapsed and only the header is displayed.",name:"collapsed",required:!1,type:{name:"boolean"}},fixed:{defaultValue:{value:"false"},description:`Determines whether the component is in a fixed state that is not
expandable/collapsible by user interaction.`,name:"fixed",required:!1,type:{name:"boolean"}},headerLevel:{defaultValue:{value:'"H2"'},description:'Defines the "aria-level" of component heading,\nset by the `headerText`.',name:"headerLevel",required:!1,type:{name:"enum",value:[{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},headerText:{defaultValue:{value:"undefined"},description:`This property is used to set the header text of the component.
The text is visible in both expanded and collapsed states.

**Note:** This property is overridden by the \`header\` slot.`,name:"headerText",required:!1,type:{name:"string"}},noAnimation:{defaultValue:{value:"false"},description:"Indicates whether the transition between the expanded and the collapsed state of the component is animated. By default the animation is enabled.",name:"noAnimation",required:!1,type:{name:"boolean"}},stickyHeader:{defaultValue:{value:"false"},description:`Indicates whether the Panel header is sticky or not.
If stickyHeader is set to true, then whenever you scroll the content or
the application, the header of the panel will be always visible and
a solid color will be used for its design.`,name:"stickyHeader",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as P};
