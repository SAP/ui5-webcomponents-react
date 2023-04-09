import{M as l,C as h,f as d,a as c}from"./chunk-PCJTTTQV-2a1bf646.js";import{S as o}from"./index-8c87d23b.js";import{d as u}from"./DomRefTable.module-c5182f5b.js";import{D as f}from"./DocsHeader-36d2c89a.js";import{F as g}from"./Footer-38a0e481.js";import{j as e,a as v,F as S}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u as s}from"./index-4fb8b842.js";import"./iframe-a1050c91.js";import"../sb-preview/runtime.mjs";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./Slider-7185e1d2.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./Float-99d99064.js";import"./Integer-f7f172c9.js";import"./UI5Element-d1d93200.js";import"./Icons-efeb15d5.js";import"./SliderBase-9da421d5.js";import"./Icon-c8fd92f0.js";import"./ResizeHandler-f4ca1209.js";import"./Device-208919c6.js";import"./class-map-6d48ebd3.js";import"./style-map-51d6dd91.js";import"./i18n-defaults-254d6b69.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./index-8f7c632f.js";import"./slot-76e48863.js";import"./decline-41212cdc.js";import"./i18n-defaults-80781f7e.js";import"./information-859245b4.js";import"./Button-400e2491.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./index-44cc9c22.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-f2706ae3.js";import"./TableOfContent-cf0312e8.js";import"./index-bbb948e4.js";import"./Link-706be030.js";import"./WrappingType-b81e595a.js";import"./index-d4cbdf0b.js";import"./Label-e3d88218.js";import"./index-33927007.js";import"./Popover-4088d87a.js";import"./PopupUtils-a92cb9f4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-1644cafd.js";import"./FocusableElements-8859c874.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-ab5bee37.js";import"./MediaRange-25b98f31.js";const w=`## Structure

The most important properties of the Slider are:

- min - The minimum value of the slider range.
- max - The maximum value of the slider range.
- value - The current value of the slider range.
- step - Determines the increments in which the slider will move.
- showTooltip - Determines if a tooltip should be displayed above the handle.
- showTickmarks - Displays a visual divider between the step values.
- labelInterval - Labels some or all of the tickmarks with their values.

## Usage

The most common use case is to select values on a continuous numerical scale (e.g. temperature, volume, etc. ).

## Responsive Behavior

The \`Slider\` component adjusts to the size of its parent container by recalculating and resizing the width of the control. You can move the slider handle in several different ways:

- Drag and drop the handle to the desired value.
- Click/tap on the range bar to move the handle to that location.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`Slider\` exposes the following CSS Shadow Parts:

- progress-container - Used to style the progress container(the horizontal bar which visually represents the range between the minimum and maximum value) of the \`Slider\`.
- progress-bar - Used to style the progress bar, which shows the progress of the \`Slider\`.
- handle - Used to style the handle of the \`Slider\`.

## Keyboard Handling

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
`;function y(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e(n,{...t,children:e(i,{})}):i();function i(){const a=Object.assign({h2:"h2"},s(),t.components);return v(S,{children:[e(l,{title:"Inputs / Slider",component:o,argTypes:{children:{control:{disable:!0}}}}),`
`,e(f,{since:"0.13.0"}),`
`,e("br",{}),`
`,e(a.h2,{id:"example",children:"Example"}),`
`,e(h,{children:e(d,{name:"Default",children:p=>e(o,{...p})})}),`
`,e(a.h2,{id:"properties",children:"Properties"}),`
`,e(u,{story:"Default"}),`
`,e(c,{children:w}),`
`,e(g,{})]})}}const m=t=>e(o,{...t});m.storyName="Default";m.parameters={storySource:{source:`args => {
  return <Slider {...args} />;
}`}};const r={title:"Inputs / Slider",component:o,argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:y};const _e=["defaultStory"];export{_e as __namedExportsOrder,r as default,m as defaultStory};
//# sourceMappingURL=Slider.stories-4ccb3907.js.map
