import"./Slider-D2R76geF.js";import{w as n}from"./withWebComponent-DpVKsRHi.js";const e=n("ui5-slider",["accessibleName","labelInterval","max","min","name","step","value"],["disabled","editableTooltip","showTickmarks","showTooltip"],[],["change","input"]);e.displayName="Slider";try{e.displayName="Slider",e.__docgenInfo={description:`The Slider component represents a numerical range and a handle (grip).
The purpose of the component is to enable visual selection of a value in
a continuous numerical range by moving an adjustable handle.

### Structure
The most important properties of the Slider are:

- min - The minimum value of the slider range.
- max - The maximum value of the slider range.
- value - The current value of the slider range.
- step - Determines the increments in which the slider will move.
- showTooltip - Determines if a tooltip should be displayed above the handle.
- showTickmarks - Displays a visual divider between the step values.
- labelInterval - Labels some or all of the tickmarks with their values.

### Usage
The most common use case is to select values on a continuous numerical scale (e.g. temperature, volume, etc. ).

### Responsive Behavior
The \`Slider\` component adjusts to the size of its parent container by recalculating and
resizing the width of the control. You can move the slider handle in several different ways:

- Drag and drop the handle to the desired value.
- Click/tap on the range bar to move the handle to that location.

### Keyboard Handling

- \`Left or Down Arrow\` - Moves the handle one step to the left, effectively decreasing the component's value by \`step\` amount;
- \`Right or Up Arrow\` - Moves the handle one step to the right, effectively increasing the component's value by \`step\` amount;
- \`Left or Down Arrow + Ctrl/Cmd\` - Moves the handle to the left with step equal to 1/10th of the entire range, effectively decreasing the component's value by 1/10th of the range;
- \`Right or Up Arrow + Ctrl/Cmd\` - Moves the handle to the right with step equal to 1/10th of the entire range, effectively increasing the component's value by 1/10th of the range;
- \`Plus\` - Same as \`Right or Up Arrow\`;
- \`Minus\` - Same as \`Left or Down Arrow\`;
- \`Home\` - Moves the handle to the beginning of the range;
- \`End\` - Moves the handle to the end of the range;
- \`Page Up\` - Same as \`Right or Up + Ctrl/Cmd\`;
- \`Page Down\` - Same as \`Left or Down + Ctrl/Cmd\`;
- \`Escape\` - Resets the value property after interaction, to the position prior the component's focusing;



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Slider",props:{onChange:{defaultValue:null,description:`Fired when the value changes and the user has finished interacting with the slider.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<SliderDomRef, never>) => void"}},onInput:{defaultValue:null,description:`Fired when the value changes due to user interaction that is not yet finished - during mouse/touch dragging.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<SliderDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v1.4.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.4.0) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Defines whether the slider is in disabled state.",name:"disabled",required:!1,type:{name:"boolean"}},editableTooltip:{defaultValue:{value:"false"},description:`Indicates whether input fields should be used as tooltips for the handles.

**Note:** Setting this option to true will only work if showTooltip is set to true.
**Note:** In order for the component to comply with the accessibility standard, it is recommended to set the editableTooltip property to true.`,name:"editableTooltip",required:!1,type:{name:"boolean"}},labelInterval:{defaultValue:{value:"0"},description:`Displays a label with a value on every N-th step.

**Note:** The step and tickmarks properties must be enabled.
Example - if the step value is set to 2 and the label interval is also specified to 2 - then every second
tickmark will be labelled, which means every 4th value number.`,name:"labelInterval",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"Defines the maximum value of the slider.",name:"max",required:!1,type:{name:"number"}},min:{defaultValue:{value:"0"},description:"Defines the minimum value of the slider.",name:"min",required:!1,type:{name:"number"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"name",required:!1,type:{name:"string"}},showTickmarks:{defaultValue:{value:"false"},description:`Enables tickmarks visualization for each step.

**Note:** The step must be a positive number.`,name:"showTickmarks",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:{value:"false"},description:"Enables handle tooltip displaying the current value.",name:"showTooltip",required:!1,type:{name:"boolean"}},step:{defaultValue:{value:"1"},description:`Defines the size of the slider's selection intervals (e.g. min = 0, max = 10, step = 5 would result in possible selection of the values 0, 5, 10).

**Note:** If set to 0 the slider handle movement is disabled. When negative number or value other than a number, the component fallbacks to its default value.`,name:"step",required:!1,type:{name:"number"}},value:{defaultValue:{value:"0"},description:"Current value of the slider",name:"value",required:!1,type:{name:"number"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="Slider",e.__docgenInfo={description:`The Slider component represents a numerical range and a handle (grip).
The purpose of the component is to enable visual selection of a value in
a continuous numerical range by moving an adjustable handle.

### Structure
The most important properties of the Slider are:

- min - The minimum value of the slider range.
- max - The maximum value of the slider range.
- value - The current value of the slider range.
- step - Determines the increments in which the slider will move.
- showTooltip - Determines if a tooltip should be displayed above the handle.
- showTickmarks - Displays a visual divider between the step values.
- labelInterval - Labels some or all of the tickmarks with their values.

### Usage
The most common use case is to select values on a continuous numerical scale (e.g. temperature, volume, etc. ).

### Responsive Behavior
The \`Slider\` component adjusts to the size of its parent container by recalculating and
resizing the width of the control. You can move the slider handle in several different ways:

- Drag and drop the handle to the desired value.
- Click/tap on the range bar to move the handle to that location.

### Keyboard Handling

- \`Left or Down Arrow\` - Moves the handle one step to the left, effectively decreasing the component's value by \`step\` amount;
- \`Right or Up Arrow\` - Moves the handle one step to the right, effectively increasing the component's value by \`step\` amount;
- \`Left or Down Arrow + Ctrl/Cmd\` - Moves the handle to the left with step equal to 1/10th of the entire range, effectively decreasing the component's value by 1/10th of the range;
- \`Right or Up Arrow + Ctrl/Cmd\` - Moves the handle to the right with step equal to 1/10th of the entire range, effectively increasing the component's value by 1/10th of the range;
- \`Plus\` - Same as \`Right or Up Arrow\`;
- \`Minus\` - Same as \`Left or Down Arrow\`;
- \`Home\` - Moves the handle to the beginning of the range;
- \`End\` - Moves the handle to the end of the range;
- \`Page Up\` - Same as \`Right or Up + Ctrl/Cmd\`;
- \`Page Down\` - Same as \`Left or Down + Ctrl/Cmd\`;
- \`Escape\` - Resets the value property after interaction, to the position prior the component's focusing;



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Slider",props:{onChange:{defaultValue:null,description:`Fired when the value changes and the user has finished interacting with the slider.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<SliderDomRef, never>) => void"}},onInput:{defaultValue:null,description:`Fired when the value changes due to user interaction that is not yet finished - during mouse/touch dragging.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<SliderDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v1.4.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.4.0) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Defines whether the slider is in disabled state.",name:"disabled",required:!1,type:{name:"boolean"}},editableTooltip:{defaultValue:{value:"false"},description:`Indicates whether input fields should be used as tooltips for the handles.

**Note:** Setting this option to true will only work if showTooltip is set to true.
**Note:** In order for the component to comply with the accessibility standard, it is recommended to set the editableTooltip property to true.`,name:"editableTooltip",required:!1,type:{name:"boolean"}},labelInterval:{defaultValue:{value:"0"},description:`Displays a label with a value on every N-th step.

**Note:** The step and tickmarks properties must be enabled.
Example - if the step value is set to 2 and the label interval is also specified to 2 - then every second
tickmark will be labelled, which means every 4th value number.`,name:"labelInterval",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"Defines the maximum value of the slider.",name:"max",required:!1,type:{name:"number"}},min:{defaultValue:{value:"0"},description:"Defines the minimum value of the slider.",name:"min",required:!1,type:{name:"number"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"name",required:!1,type:{name:"string"}},showTickmarks:{defaultValue:{value:"false"},description:`Enables tickmarks visualization for each step.

**Note:** The step must be a positive number.`,name:"showTickmarks",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:{value:"false"},description:"Enables handle tooltip displaying the current value.",name:"showTooltip",required:!1,type:{name:"boolean"}},step:{defaultValue:{value:"1"},description:`Defines the size of the slider's selection intervals (e.g. min = 0, max = 10, step = 5 would result in possible selection of the values 0, 5, 10).

**Note:** If set to 0 the slider handle movement is disabled. When negative number or value other than a number, the component fallbacks to its default value.`,name:"step",required:!1,type:{name:"number"}},value:{defaultValue:{value:"0"},description:"Current value of the slider",name:"value",required:!1,type:{name:"number"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as S};
