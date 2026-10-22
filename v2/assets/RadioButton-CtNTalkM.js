import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./withWebComponent-DhD1x6sB.js";import{n as r}from"./RadioButton-CbMtutwi.js";var i;function a(){return(a=e((()=>{r(),n(),i=t(`ui5-radio-button`,[`accessibleName`,`accessibleNameRef`,`name`,`text`,`value`,`valueState`,`wrappingType`],[`checked`,`disabled`,`readonly`,`required`],[],[`change`]),i.displayName=`RadioButton`;try{i.displayName=`RadioButton`,i.__docgenInfo={description:`The \`RadioButton\` component enables users to select a single option from a set of options.
When a \`RadioButton\` is selected by the user, the
\`change\` event is fired.
When a \`RadioButton\` that is within a group is selected, the one
that was previously selected gets automatically deselected. You can group radio buttons by using the \`name\` property.

**Note:** If \`RadioButton\` is not part of a group, it can be selected once, but can not be deselected back.

### Keyboard Handling

Once the \`RadioButton\` is on focus, it might be selected by pressing the Space and Enter keys.

The Arrow Down/Arrow Up and Arrow Left/Arrow Right keys can be used to change selection between next/previous radio buttons in one group,
while TAB and SHIFT + TAB can be used to enter or leave the radio button group.

**Note:** On entering radio button group, the focus goes to the currently selected radio button.



__Note:__ This is a UI5 Web Component! [RadioButton UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/RadioButton) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`RadioButton`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/RadioButton/index.d.ts`,methods:[],props:{onChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/RadioButton/index.d.ts`,name:`RadioButtonPropTypes`}],description:`Fired when the component checked state changes.

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onChange`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/RadioButton/index.d.ts`,name:`RadioButtonPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<RadioButtonDomRef, never>) => void`}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/RadioButton/index.d.ts`,name:`RadioButtonAttributes`}],description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v1.6.0](https://github.com/UI5/webcomponents/releases/tag/v1.6.0) of **@ui5/webcomponents**.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/RadioButton/index.d.ts`,name:`RadioButtonAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleNameRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/RadioButton/index.d.ts`,name:`RadioButtonAttributes`}],description:`Defines the IDs of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/UI5/webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:`accessibleNameRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/RadioButton/index.d.ts`,name:`RadioButtonAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},checked:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/RadioButton/index.d.ts`,name:`RadioButtonAttributes`}],description:`Defines whether the component is checked or not.

**Note:** The property value can be changed with user interaction,
either by clicking/tapping on the component,
or by using the Space or Enter key.

**Note:** Only enabled radio buttons can be checked.
Read-only radio buttons are not selectable, and therefore are always unchecked.

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.`,name:`checked`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/RadioButton/index.d.ts`,name:`RadioButtonAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/RadioButton/index.d.ts`,name:`RadioButtonAttributes`}],description:`Defines whether the component is disabled.

**Note:** A disabled component is completely noninteractive.`,name:`disabled`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/RadioButton/index.d.ts`,name:`RadioButtonAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},name:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/RadioButton/index.d.ts`,name:`RadioButtonAttributes`}],description:`Determines the name by which the component will be identified upon submission in an HTML form.

Radio buttons with the same \`name\` will form a radio button group.

**Note:** By this name the component will be identified upon submission in an HTML form.

**Note:** The selection can be changed with \`ARROW_UP/DOWN\` and \`ARROW_LEFT/RIGHT\` keys between radio buttons in same group.

**Note:** Only one radio button can be selected per group.`,name:`name`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/RadioButton/index.d.ts`,name:`RadioButtonAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},readonly:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/RadioButton/index.d.ts`,name:`RadioButtonAttributes`}],description:`Defines whether the component is read-only.

**Note:** A read-only component isn't editable or selectable.
However, because it's focusable, it still provides visual feedback upon user interaction.`,name:`readonly`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/RadioButton/index.d.ts`,name:`RadioButtonAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},required:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/RadioButton/index.d.ts`,name:`RadioButtonAttributes`}],description:`Defines whether the component is required.

**Note:** Available since [v1.9.0](https://github.com/UI5/webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.`,name:`required`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/RadioButton/index.d.ts`,name:`RadioButtonAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},text:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/RadioButton/index.d.ts`,name:`RadioButtonAttributes`}],description:`Defines the text of the component.`,name:`text`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/RadioButton/index.d.ts`,name:`RadioButtonAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},value:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/RadioButton/index.d.ts`,name:`RadioButtonAttributes`}],description:`Defines the form value of the component.
When a form with a radio button group is submitted, the group's value
will be the value of the currently selected radio button.`,name:`value`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/RadioButton/index.d.ts`,name:`RadioButtonAttributes`},required:!1,tags:{},type:{name:`string`}},valueState:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/RadioButton/index.d.ts`,name:`RadioButtonAttributes`}],description:`Defines the value state of the component.`,name:`valueState`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/RadioButton/index.d.ts`,name:`RadioButtonAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | "Information" | ValueState | "Positive" | "Critical" | "Negative"`,value:[{value:`"None"`},{value:`"Information"`},{value:`"None"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Critical"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Negative"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Information"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`},{value:`"Critical"`},{value:`"Negative"`}]}},wrappingType:{defaultValue:{value:`"Normal"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/RadioButton/index.d.ts`,name:`RadioButtonAttributes`}],description:`Defines whether the component text wraps when there is not enough space.

**Note:** for option "Normal" the text will wrap and the words will not be broken based on hyphenation.`,name:`wrappingType`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/RadioButton/index.d.ts`,name:`RadioButtonAttributes`},required:!1,tags:{default:`"Normal"`},type:{name:`enum`,raw:`"None" | WrappingType | "Normal"`,value:[{value:`"None"`},{value:`"None"`,description:`The text will be truncated with an ellipsis.`,fullComment:`The text will be truncated with an ellipsis.
@public`,tags:{public:``}},{value:`"Normal"`,description:`The text will wrap. The words will not be broken based on hyphenation.`,fullComment:`The text will wrap. The words will not be broken based on hyphenation.
@public`,tags:{public:``}},{value:`"Normal"`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{}}}catch{}})))()}export{a as n,i as t};