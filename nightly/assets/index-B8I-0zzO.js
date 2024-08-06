const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./RadioButton-DDuVo1bF.js","./Keys-F_3Gvx0K.js","./withWebComponent-Dj0CMfaz.js","./utils-B21VtmG1.js","./index-ClU-Tc1p.js","./useIsomorphicLayoutEffect-DCJrFAVs.js","./event-Dq0fpeHi.js","./i18nBundle-vPfkXYRc.js","./ValueState-Bg0UWejw.js","./AriaLabelHelper-C5uDZewF.js","./Label-DYSmE5xX.js","./i18n-defaults-BrbxGX_s.js","./if-defined-B8mU3KX1.js","./parameters-bundle.css-BFbT_feV.js","./class-map-DwAhupCS.js"])))=>i.map(i=>d[i]);
import{_ as t}from"./iframe-Cpwv2kZr.js";import"./RadioButton-DDuVo1bF.js";import{w as o}from"./withWebComponent-Dj0CMfaz.js";const e=o("ui5-radio-button",["accessibleName","accessibleNameRef","name","text","value","valueState","wrappingType"],["checked","disabled","readonly","required"],[],["change"],()=>t(()=>import("./RadioButton-DDuVo1bF.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),import.meta.url));e.displayName="RadioButton";try{e.displayName="RadioButton",e.__docgenInfo={description:`The \`RadioButton\` component enables users to select a single option from a set of options.
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



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"RadioButton",props:{onChange:{defaultValue:null,description:"Fired when the component checked state changes.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<RadioButtonDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v1.6.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.6.0) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Defines the IDs of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:`Defines whether the component is checked or not.

**Note:** The property value can be changed with user interaction,
either by clicking/tapping on the component,
or by using the Space or Enter key.`,name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

Radio buttons with the same \`name\` will form a radio button group.

**Note:** By this name the component will be identified upon submission in an HTML form.

**Note:** The selection can be changed with \`ARROW_UP/DOWN\` and \`ARROW_LEFT/RIGHT\` keys between radio buttons in same group.

**Note:** Only one radio button can be selected per group.`,name:"name",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:`Defines whether the component is required.

**Note:** Available since [v1.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.`,name:"required",required:!1,type:{name:"boolean"}},text:{defaultValue:{value:"undefined"},description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},value:{defaultValue:null,description:`Defines the form value of the component.
When a form with a radio button group is submitted, the group's value
will be the value of the currently selected radio button.`,name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'}]}},wrappingType:{defaultValue:{value:'"Normal"'},description:`Defines whether the component text wraps when there is not enough space.

**Note:** for option "Normal" the text will wrap and the words will not be broken based on hyphenation.`,name:"wrappingType",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Normal"'},{value:'"Normal"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="RadioButton",e.__docgenInfo={description:`The \`RadioButton\` component enables users to select a single option from a set of options.
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



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"RadioButton",props:{onChange:{defaultValue:null,description:"Fired when the component checked state changes.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<RadioButtonDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v1.6.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.6.0) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Defines the IDs of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:`Defines whether the component is checked or not.

**Note:** The property value can be changed with user interaction,
either by clicking/tapping on the component,
or by using the Space or Enter key.`,name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

Radio buttons with the same \`name\` will form a radio button group.

**Note:** By this name the component will be identified upon submission in an HTML form.

**Note:** The selection can be changed with \`ARROW_UP/DOWN\` and \`ARROW_LEFT/RIGHT\` keys between radio buttons in same group.

**Note:** Only one radio button can be selected per group.`,name:"name",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:`Defines whether the component is required.

**Note:** Available since [v1.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.`,name:"required",required:!1,type:{name:"boolean"}},text:{defaultValue:{value:"undefined"},description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},value:{defaultValue:null,description:`Defines the form value of the component.
When a form with a radio button group is submitted, the group's value
will be the value of the currently selected radio button.`,name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'}]}},wrappingType:{defaultValue:{value:'"Normal"'},description:`Defines whether the component text wraps when there is not enough space.

**Note:** for option "Normal" the text will wrap and the words will not be broken based on hyphenation.`,name:"wrappingType",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Normal"'},{value:'"Normal"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as R};
