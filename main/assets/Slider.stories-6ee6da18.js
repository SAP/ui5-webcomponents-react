import{M as p,C as h,j as d,a as u}from"./index-110a3fa1.js";import{_ as c}from"./iframe-ea7c4db7.js";import"./Slider-46e7406f.js";import{w as f}from"./withWebComponent-e4481254.js";import{b as v}from"./DomRefTable.module-8ee4b8ac.js";import{D as g}from"./DocsHeader-cc0af092.js";import{F as b}from"./Footer-422dc980.js";import{j as e,a as y,F as w}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u as s}from"./index-4fb8b842.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"../sb-preview/runtime.mjs";import"./Float-99d99064.js";import"./Integer-f7f172c9.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./Keys-3acbae73.js";import"./SliderBase-b3752822.js";import"./event-97133b94.js";import"./ResizeHandler-1fa8a094.js";import"./Device-208919c6.js";import"./Icons-7b82f601.js";import"./Icon-459702a7.js";import"./utils-ed90fb1b.js";import"./class-map-5d8e4b2b.js";import"./style-map-77d201d2.js";import"./i18n-defaults-6bc67b6a.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./chunk-PCJTTTQV-8b228751.js";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-fe4dc3ff.js";import"./index-fd595332.js";import"./slot-634e3e91.js";import"./decline-f2b294b3.js";import"./i18n-defaults-80781f7e.js";import"./information-50e1ad0f.js";import"./Button-876771f0.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./index-1d945bd3.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-079248c0.js";import"./TableOfContent-e49cb266.js";import"./index-9720f3e9.js";import"./Link-687260e5.js";import"./WrappingType-b81e595a.js";import"./index-3e940d4d.js";import"./Label-040efebd.js";import"./Footer.module-f90cad7d.js";import"./index-f6bb18d5.js";import"./Popover-54e30804.js";import"./PopupsCommon.css-d3649668.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./getActiveElement-bcae01ed.js";import"./MediaRange-25b98f31.js";const t=f("ui5-slider",["value","accessibleName","labelInterval","max","min","step"],["disabled","showTickmarks","showTooltip"],[],["change","input"],()=>c(()=>import("./Slider-46e7406f.js"),["./Slider-46e7406f.js","./withWebComponent-e4481254.js","./utils-ed90fb1b.js","./CustomElementsScopeUtils-137da8c8.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./jsx-runtime-670450c2.js","./useIsomorphicLayoutEffect-a838da4a.js","./Float-99d99064.js","./Integer-f7f172c9.js","./UI5Element-427ec721.js","./Keys-3acbae73.js","./SliderBase-b3752822.js","./event-97133b94.js","./ResizeHandler-1fa8a094.js","./Device-208919c6.js","./Icons-7b82f601.js","./Icon-459702a7.js","./class-map-5d8e4b2b.js","./style-map-77d201d2.js","./i18n-defaults-6bc67b6a.js"],import.meta.url));t.displayName="Slider";t.defaultProps={value:0,labelInterval:0,max:100,min:0,step:1};try{t.displayName="Slider",t.__docgenInfo={description:`The Slider component represents a numerical range and a handle (grip). The purpose of the component is to enable visual selection of a value in a continuous numerical range by moving an adjustable handle.

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
}`}};const o={title:"Inputs / Slider",component:t,argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:D};const Fe=["defaultStory"];export{Fe as __namedExportsOrder,o as default,l as defaultStory};
//# sourceMappingURL=Slider.stories-6ee6da18.js.map
