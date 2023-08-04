import{M as l,C as h,e as d,b as c}from"./chunk-S4VUQJ4A-2f00d13c.js";import{S as o}from"./index-5a29f900.js";import{A as u}from"./DomRefTable.module-0cb57df1.js";import{D as f}from"./DocsHeader-991d32fe.js";import{F as g}from"./Footer-3f8faf83.js";import{j as e}from"./jsx-runtime-d079401a.js";import"./index-f1f2c4b1.js";import{u as a}from"./index-59d6410c.js";import"./iframe-95e95fd4.js";import"../sb-preview/runtime.js";import"./index-92d824d3.js";import"./index-c74c9f7f.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./Slider-121b06d2.js";import"./withWebComponent-8885c1b6.js";import"./utils-626dc1bf.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./Float-99d99064.js";import"./Integer-f7f172c9.js";import"./UI5Element-11982a12.js";import"./Icons-234bf59e.js";import"./SliderBase-50e6d33d.js";import"./Icon-6459d230.js";import"./ResizeHandler-9ebe913c.js";import"./Device-6afa24d0.js";import"./class-map-2a13820b.js";import"./style-map-4f876188.js";import"./i18n-defaults-183ab1a9.js";import"./react-jss.esm-c310038c.js";import"./index-099fdb19.js";import"./slot-76e48863.js";import"./decline-23c167e4.js";import"./i18n-defaults-2d2bf0b6.js";import"./information-1886de07.js";import"./Button-1a04ac66.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./index-47d0a85a.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-783dc33d.js";import"./index-f092546e.js";import"./index-abc2cc05.js";import"./Avatar-60ab180c.js";import"./employee-e34ffee2.js";import"./index-81ae69cd.js";import"./index-5644339f.js";import"./Link-6bda31f4.js";import"./WrappingType-b81e595a.js";import"./index-14ef1273.js";import"./TableOfContent-0ec8ba6f.js";import"./index-4b7fcd1e.js";import"./Label-78e0be96.js";import"./index-9e4a4085.js";import"./index-acff0a7f.js";import"./Popover-d6899044.js";import"./PopupsCommon.css-a62fa435.js";import"./FocusableElements-708d1a4e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./BrowserScrollbar.css-7fb20ad4.js";const v=`## Structure

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
`;function S(t={}){const{wrapper:n}=Object.assign({},a(),t.components);return n?e.jsx(n,{...t,children:e.jsx(i,{})}):i();function i(){const s=Object.assign({h2:"h2"},a(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Inputs / Slider",component:o,argTypes:{children:{control:{disable:!0}}}}),`
`,e.jsx(f,{since:"0.13.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"example",children:"Example"}),`
`,e.jsx(h,{children:e.jsx(d,{name:"Default",children:p=>e.jsx(o,{...p})})}),`
`,e.jsx(s.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(u,{story:"Default"}),`
`,e.jsx(c,{children:v}),`
`,e.jsx(g,{})]})}}const m=t=>e.jsx(o,{...t});m.storyName="Default";m.parameters={storySource:{source:`args => {
  return <Slider {...args} />;
}`}};const r={title:"Inputs / Slider",component:o,argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:S};const Ee=["defaultStory"];export{Ee as __namedExportsOrder,r as default,m as defaultStory};
//# sourceMappingURL=Slider.stories-137009b4.js.map
