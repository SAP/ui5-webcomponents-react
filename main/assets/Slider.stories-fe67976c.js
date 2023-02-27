import{M as p,C as h,i as d,a as u}from"./index-08f5a92a.js";import{_ as c}from"./iframe-baaa6734.js";import"./Slider-1b171f08.js";import{w as f}from"./withWebComponent-63dd52a0.js";import{A as v}from"./DomRefTable.module-bd2f6310.js";import{D as g}from"./DocsHeader-7b277ff6.js";import{F as b}from"./Footer-a200614f.js";import{j as e,a as y,F as w}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u as s}from"./index-4fb8b842.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"../sb-preview/runtime.mjs";import"./AriaLabelHelper-dee23f38.js";import"./Float-f0e2d425.js";import"./Integer-a72984d1.js";import"./UI5Element-727d48d7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./MarkedEvents-f33713fa.js";import"./class-map-abcca105.js";import"./utils-ed90fb1b.js";import"./FocusableElements-5a723910.js";import"./Keys-50a1cb5a.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-c56abc92.js";import"./MediaRange-25b98f31.js";import"./style-map-7b3eb5df.js";import"./SliderBase-f51396fe.js";import"./Icons-5bcf1e3f.js";import"./Button-e1b15b5b.js";import"./chunk-4XCFV5WA-12e22cb0.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./index-c79180df.js";import"./decline-ff534003.js";import"./index-6923d62a.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-e249b0b6.js";import"./TableOfContent-b905a526.js";import"./index-1220256a.js";import"./WrappingType-b81e595a.js";import"./index-998f859a.js";import"./Label-6707bdfc.js";import"./Media-6b270b80.js";import"./index-65416cbf.js";import"./Popover-5336e3a5.js";const t=f("ui5-slider",["value","accessibleName","labelInterval","max","min","step"],["disabled","showTickmarks","showTooltip"],[],["change","input"],()=>c(()=>import("./Slider-1b171f08.js"),["./Slider-1b171f08.js","./withWebComponent-63dd52a0.js","./utils-ed90fb1b.js","./CustomElementsScopeUtils-137da8c8.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./jsx-runtime-670450c2.js","./UI5Element-727d48d7.js","./AriaLabelHelper-dee23f38.js","./Float-f0e2d425.js","./Integer-a72984d1.js","./MarkedEvents-f33713fa.js","./class-map-abcca105.js","./FocusableElements-5a723910.js","./Keys-50a1cb5a.js","./getActiveElement-bcae01ed.js","./ResizeHandler-c56abc92.js","./MediaRange-25b98f31.js","./style-map-7b3eb5df.js","./SliderBase-f51396fe.js","./Icons-5bcf1e3f.js","./Button-e1b15b5b.js"],import.meta.url));t.displayName="Slider";t.defaultProps={value:0,labelInterval:0,max:100,min:0,step:1};try{t.displayName="Slider",t.__docgenInfo={description:`The Slider component represents a numerical range and a handle (grip). The purpose of the component is to enable visual selection of a value in a continuous numerical range by moving an adjustable handle.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Slider" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"Slider",props:{onChange:{defaultValue:null,description:"Fired when the value changes and the user has finished interacting with the slider.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<SliderDomRef, never>) => void"}},onInput:{defaultValue:null,description:"Fired when the value changes due to user interaction that is not yet finished - during mouse/touch dragging.",name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<SliderDomRef, never>) => void"}},value:{defaultValue:{value:"0"},description:"Current value of the slider",name:"value",required:!1,type:{name:"number"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Defines whether the slider is in disabled state.",name:"disabled",required:!1,type:{name:"boolean"}},labelInterval:{defaultValue:{value:"0"},description:`Displays a label with a value on every N-th step.

**Note:** The step and tickmarks properties must be enabled. Example - if the step value is set to 2 and the label interval is also specified to 2 - then every second tickmark will be labelled, which means every 4th value number.`,name:"labelInterval",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"Defines the maximum value of the slider.",name:"max",required:!1,type:{name:"number"}},min:{defaultValue:{value:"0"},description:"Defines the minimum value of the slider.",name:"min",required:!1,type:{name:"number"}},showTickmarks:{defaultValue:null,description:`Enables tickmarks visualization for each step.

**Note:** The step must be a positive number.`,name:"showTickmarks",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Enables handle tooltip displaying the current value.",name:"showTooltip",required:!1,type:{name:"boolean"}},step:{defaultValue:{value:"1"},description:`Defines the size of the slider's selection intervals (e.g. min = 0, max = 10, step = 5 would result in possible selection of the values 0, 5, 10).

**Note:** If set to 0 the slider handle movement is disabled. When negative number or value other than a number, the component fallbacks to its default value.`,name:"step",required:!1,type:{name:"number"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const S=`## Structure

The most important properties of the Slider are:

*   min - The minimum value of the slider range.
*   max - The maximum value of the slider range.
*   value - The current value of the slider range.
*   step - Determines the increments in which the slider will move.
*   showTooltip - Determines if a tooltip should be displayed above the handle.
*   showTickmarks - Displays a visual divider between the step values.
*   labelInterval - Labels some or all of the tickmarks with their values.

## Usage

The most common use case is to select values on a continuous numerical scale (e.g. temperature, volume, etc. ).

## Responsive Behavior

The \`Slider\` component adjusts to the size of its parent container by recalculating and resizing the width of the control. You can move the slider handle in several different ways:

*   Drag and drop the handle to the desired value.
*   Click/tap on the range bar to move the handle to that location.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`Slider\` exposes the following CSS Shadow Parts:

*   progress-container - Used to style the progress container(the horizontal bar which visually represents the range between the minimum and maximum value) of the \`Slider\`.
*   progress-bar - Used to style the progress bar, which shows the progress of the \`Slider\`.
*   handle - Used to style the handle of the \`Slider\`.

## Keyboard Handling

*   \`Left or Down Arrow\` - Moves the handle one step to the left, effectively decreasing the component's value by \`step\` amount;
*   \`Right or Up Arrow\` - Moves the handle one step to the right, effectively increasing the component's value by \`step\` amount;
*   \`Left or Down Arrow + Ctrl/Cmd\` - Moves the handle to the left with step equal to 1/10th of the entire range, effectively decreasing the component's value by 1/10th of the range;
*   \`Right or Up Arrow + Ctrl/Cmd\` - Moves the handle to the right with step equal to 1/10th of the entire range, effectively increasing the component's value by 1/10th of the range;
*   \`Plus\` - Same as \`Right or Up Arrow\`;
*   \`Minus\` - Same as \`Left or Down Arrow\`;
*   \`Home\` - Moves the handle to the beginning of the range;
*   \`End\` - Moves the handle to the end of the range;
*   \`Page Up\` - Same as \`Right or Up + Ctrl/Cmd\`;
*   \`Page Down\` - Same as \`Left or Down + Ctrl/Cmd\`;
*   \`Escape\` - Resets the value property after interaction, to the position prior the component's focusing;`;function D(n={}){const{wrapper:r}=Object.assign({},s(),n.components);return r?e(r,{...n,children:e(a,{})}):a();function a(){const i=Object.assign({h2:"h2"},s(),n.components);return y(w,{children:[e(p,{title:"Inputs / Slider",component:t,argTypes:{children:{control:{disable:!0}}}}),`
`,e(g,{since:"0.13.0"}),`
`,e("br",{}),`
`,e(i.h2,{children:"Example"}),`
`,e(h,{children:e(d,{name:"Default",children:m=>e(t,{...m})})}),`
`,e(i.h2,{children:"Properties"}),`
`,e(v,{story:"Default"}),`
`,e(u,{children:S}),`
`,e(b,{})]})}}const l=n=>e(t,{...n});l.storyName="Default";l.parameters={storySource:{source:`args => {
  return <Slider {...args} />;
}`}};const o={title:"Inputs / Slider",component:t,argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:D};const Te=["defaultStory"];export{Te as __namedExportsOrder,o as default,l as defaultStory};
//# sourceMappingURL=Slider.stories-fe67976c.js.map
