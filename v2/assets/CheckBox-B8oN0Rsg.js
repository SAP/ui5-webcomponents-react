import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./withWebComponent-DhD1x6sB.js";import{n as r}from"./CheckBox-FEL3tFYL.js";var i;function a(){return(a=e((()=>{r(),n(),i=t(`ui5-checkbox`,[`accessibleName`,`accessibleNameRef`,`name`,`text`,`value`,`valueState`,`wrappingType`],[`checked`,`disabled`,`displayOnly`,`indeterminate`,`readonly`,`required`],[],[`change`]),i.displayName=`CheckBox`;try{i.displayName=`CheckBox`,i.__docgenInfo={description:`Allows the user to set a binary value, such as true/false or yes/no for an item.

The \`CheckBox\` component consists of a box and a label that describes its purpose.
If it's checked, an indicator is displayed inside the box.
To check/uncheck the \`CheckBox\`, the user has to click or tap the square
box or its label.

The \`CheckBox\` component only has 2 states - checked and unchecked.
Clicking or tapping toggles the \`CheckBox\` between checked and unchecked state.

### Usage

You can define the checkbox text with via the \`text\` property. If the text exceeds the available width, it is truncated by default.
In case you prefer text to truncate, set the \`wrappingType\` property to "None".
The touchable area for toggling the \`CheckBox\` ends where the text ends.

You can disable the \`CheckBox\` by setting the \`disabled\` property to
\`true\`,
or use the \`CheckBox\` in read-only mode by setting the \`readonly\`
property to \`true\`.

### Keyboard Handling

The user can use the following keyboard shortcuts to toggle the checked state of the \`CheckBox\`.

- [Space],[Enter] - Toggles between different states: checked, not checked.



__Note:__ This is a UI5 Web Component! [CheckBox UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/CheckBox) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`CheckBox`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,methods:[],props:{onChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,name:`CheckBoxPropTypes`}],description:`Fired when the component checked state changes.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onChange`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,name:`CheckBoxPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<CheckBoxDomRef, never>) => void`}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,name:`CheckBoxAttributes`}],description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v1.1.0](https://github.com/UI5/webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,name:`CheckBoxAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleNameRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,name:`CheckBoxAttributes`}],description:`Receives id(or many ids) of the elements that label the component

**Note:** Available since [v1.1.0](https://github.com/UI5/webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:`accessibleNameRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,name:`CheckBoxAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},checked:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,name:`CheckBoxAttributes`}],description:`Defines if the component is checked.

**Note:** The property can be changed with user interaction,
either by cliking/tapping on the component, or by
pressing the Enter or Space key.`,name:`checked`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,name:`CheckBoxAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,name:`CheckBoxAttributes`}],description:`Defines whether the component is disabled.

**Note:** A disabled component is completely noninteractive.`,name:`disabled`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,name:`CheckBoxAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},displayOnly:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,name:`CheckBoxAttributes`}],description:"Determines whether the `CheckBox` is in display only state.\n\nWhen set to `true`, the `CheckBox` is not interactive, not editable, not focusable\nand not in the tab chain. This setting is used for forms in review mode.\n\n**Note:** When the property `disabled` is set to `true` this property has no effect.\n\n**Note:** Available since [v1.22.0](https://github.com/UI5/webcomponents/releases/tag/v1.22.0) of **@ui5/webcomponents**.",name:`displayOnly`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,name:`CheckBoxAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},indeterminate:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,name:`CheckBoxAttributes`}],description:`Defines whether the component is displayed as partially checked.

**Note:** The indeterminate state can be set only programmatically and can’t be achieved by user
interaction and the resulting visual state depends on the values of the \`indeterminate\`
and \`checked\` properties:

-  If the component is checked and indeterminate, it will be displayed as partially checked
-  If the component is checked and it is not indeterminate, it will be displayed as checked
-  If the component is not checked, it will be displayed as not checked regardless value of the indeterminate attribute

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.`,name:`indeterminate`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,name:`CheckBoxAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},name:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,name:`CheckBoxAttributes`}],description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:`name`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,name:`CheckBoxAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},readonly:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,name:`CheckBoxAttributes`}],description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.`,name:`readonly`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,name:`CheckBoxAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},required:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,name:`CheckBoxAttributes`}],description:`Defines whether the component is required.

**Note:** We advise against using the text property of the checkbox when there is a
label associated with it to avoid having two required asterisks.

**Note:** Available since [v1.3.0](https://github.com/UI5/webcomponents/releases/tag/v1.3.0) of **@ui5/webcomponents**.`,name:`required`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,name:`CheckBoxAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},text:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,name:`CheckBoxAttributes`}],description:`Defines the text of the component.`,name:`text`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,name:`CheckBoxAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},value:{defaultValue:{value:`"on"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,name:`CheckBoxAttributes`}],description:`Defines the form value of the component that is submitted when the checkbox is checked.

When a form containing \`CheckBox\` elements is submitted, only the values of the
**checked** checkboxes are included in the form data sent to the server. Unchecked
checkboxes do not contribute any data to the form submission.

This property is particularly useful for **checkbox groups**, where multiple checkboxes with the same \`name\` but different \`value\` properties can be used to represent a set of related options.`,name:`value`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,name:`CheckBoxAttributes`},required:!1,tags:{default:`"on"`},type:{name:`string`}},valueState:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,name:`CheckBoxAttributes`}],description:`Defines the value state of the component.`,name:`valueState`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,name:`CheckBoxAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | "Information" | ValueState | "Positive" | "Critical" | "Negative"`,value:[{value:`"None"`},{value:`"Information"`},{value:`"None"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Critical"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Negative"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Information"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`},{value:`"Critical"`},{value:`"Negative"`}]}},wrappingType:{defaultValue:{value:`"Normal"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,name:`CheckBoxAttributes`}],description:`Defines whether the component text wraps when there is not enough space.

**Note:** for option "Normal" the text will wrap and the words will not be broken based on hyphenation.
**Note:** for option "None" the text will be truncated with an ellipsis.`,name:`wrappingType`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/CheckBox/index.d.ts`,name:`CheckBoxAttributes`},required:!1,tags:{default:`"Normal"`},type:{name:`enum`,raw:`"None" | WrappingType | "Normal"`,value:[{value:`"None"`},{value:`"None"`,description:`The text will be truncated with an ellipsis.`,fullComment:`The text will be truncated with an ellipsis.
@public`,tags:{public:``}},{value:`"Normal"`,description:`The text will wrap. The words will not be broken based on hyphenation.`,fullComment:`The text will wrap. The words will not be broken based on hyphenation.
@public`,tags:{public:``}},{value:`"Normal"`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{}}}catch{}})))()}export{a as n,i as t};