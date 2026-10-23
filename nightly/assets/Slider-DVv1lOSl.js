import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./withWebComponent-DhD1x6sB.js";import{n as r}from"./Slider-lzqi-f-p.js";var i;function a(){return(a=e((()=>{r(),n(),i=t(`ui5-slider`,[`accessibleName`,`labelInterval`,`max`,`min`,`name`,`step`,`tickmarks`,`value`],[`disabled`,`editableTooltip`,`showTickmarks`,`showTooltip`],[],[`change`,`input`]),i.displayName=`Slider`;try{i.displayName=`Slider`,i.__docgenInfo={description:`The Slider component represents a numerical range and a handle (grip).
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



__Note:__ This is a UI5 Web Component! [Slider UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/Slider) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`Slider`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,methods:[],props:{onChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,name:`SliderPropTypes`}],description:`Fired when the value changes and the user has finished interacting with the slider.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onChange`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,name:`SliderPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<SliderDomRef, never>) => void`}},onInput:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,name:`SliderPropTypes`}],description:`Fired when the value changes due to user interaction that is not yet finished - during mouse/touch dragging.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onInput`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,name:`SliderPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<SliderDomRef, never>) => void`}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,name:`SliderAttributes`}],description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v1.4.0](https://github.com/UI5/webcomponents/releases/tag/v1.4.0) of **@ui5/webcomponents**.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,name:`SliderAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,name:`SliderAttributes`}],description:`Defines whether the slider is in disabled state.`,name:`disabled`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,name:`SliderAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},editableTooltip:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,name:`SliderAttributes`}],description:`
Indicates whether input fields should be used as tooltips for the handles.

**Note:** Setting this option to true will only work if showTooltip is set to true.
**Note:** In order for the component to comply with the accessibility standard, it is recommended to set the editableTooltip property to true.`,name:`editableTooltip`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,name:`SliderAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},labelInterval:{defaultValue:{value:`0`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,name:`SliderAttributes`}],description:`Displays a label with a value on every N-th step.

**Note:** The step and tickmarks properties must be enabled.
Example - if the step value is set to 2 and the label interval is also specified to 2 - then every second
tickmark will be labelled, which means every 4th value number.

**Note:** This property is ignored when the \`tickmarks\` property is used.
In that case every custom tickmark is labelled with its own \`label\`.`,name:`labelInterval`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,name:`SliderAttributes`},required:!1,tags:{default:`0`},type:{name:`number`}},max:{defaultValue:{value:`100`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,name:`SliderAttributes`}],description:`Defines the maximum value of the slider.`,name:`max`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,name:`SliderAttributes`},required:!1,tags:{default:`100`},type:{name:`number`}},min:{defaultValue:{value:`0`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,name:`SliderAttributes`}],description:`Defines the minimum value of the slider.`,name:`min`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,name:`SliderAttributes`},required:!1,tags:{default:`0`},type:{name:`number`}},name:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,name:`SliderAttributes`}],description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:`name`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,name:`SliderAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},showTickmarks:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,name:`SliderAttributes`}],description:`Enables tickmarks visualization for each step.

**Note:** The step must be a positive number.`,name:`showTickmarks`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,name:`SliderAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},showTooltip:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,name:`SliderAttributes`}],description:`Enables handle tooltip displaying the current value.`,name:`showTooltip`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,name:`SliderAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},step:{defaultValue:{value:`1`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,name:`SliderAttributes`}],description:`Defines the size of the slider's selection intervals (e.g. min = 0, max = 10, step = 5 would result in possible selection of the values 0, 5, 10).

**Note:** If set to 0 the slider handle movement is disabled.`,name:`step`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,name:`SliderAttributes`},required:!1,tags:{default:`1`},type:{name:`number`}},tickmarks:{defaultValue:{value:`[]`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,name:`SliderAttributes`}],description:"Defines custom tickmarks with labels on the slider scale.\nEach tickmark object has a numeric `value` and an optional `label` string.\nTickmarks are purely visual — they display labeled markers at specific positions\nbut do not affect the slider's movement behavior. The slider still moves\naccording to `min`, `max`, and `step`.\n\nWhen the current value matches a tickmark value, the tickmark's label\nis shown in the tooltip and announced via `aria-valuetext`.\n\n**Note:** When `tickmarks` is provided, the scale is automatically shown\n(equivalent to `showTickmarks`), and `labelInterval` is ignored - every\ncustom tickmark is rendered with its own `label`.\n\n**Note:** Available since [v2.23.0](https://github.com/UI5/webcomponents/releases/tag/v2.23.0) of **@ui5/webcomponents**.",name:`tickmarks`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,name:`SliderAttributes`},required:!1,tags:{default:`[]`},type:{name:`enum`,raw:`"prototype" | Tickmark[] | unique symbol | "isArray" | "from" | "of" | "fromAsync"`,value:[{value:`"prototype"`},{value:`Tickmark[]`,description:``,fullComment:``,tags:{}},{value:`unique symbol`,description:`A function valued property that is the constructor function that is used to create
derived objects.`,fullComment:`A function valued property that is the constructor function that is used to create
derived objects.`,tags:{}},{value:`"isArray"`},{value:`"from"`},{value:`"of"`},{value:`"fromAsync"`}]}},value:{defaultValue:{value:`0`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,name:`SliderAttributes`}],description:`Current value of the slider`,name:`value`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Slider/index.d.ts`,name:`SliderAttributes`},required:!1,tags:{default:`0`},type:{name:`number`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of __@ui5/webcomponents__.`}}}catch{}})))()}export{a as n,i as t};