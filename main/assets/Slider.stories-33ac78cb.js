import{M as l,C as h,e as d,b as c}from"./chunk-S4VUQJ4A-d6e769c5.js";import{S as o}from"./index-df905e25.js";import{A as u}from"./DomRefTable.module-a87d3915.js";import{D as f}from"./DocsHeader-1de62198.js";import{F as g}from"./Footer-0512dc21.js";import{j as e}from"./jsx-runtime-d079401a.js";import"./index-f1f2c4b1.js";import{u as a}from"./index-59d6410c.js";import"./iframe-860cc998.js";import"../sb-preview/runtime.js";import"./index-d203965f.js";import"./index-b42968db.js";import"./mapValues-e5c6f517.js";import"./_baseForOwn-24231fc1.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-00f63d78.js";import"./_baseUniq-edf521f4.js";import"./index-356e4a49.js";import"./Slider-5abe051a.js";import"./withWebComponent-7d7e5133.js";import"./utils-626dc1bf.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./Float-99d99064.js";import"./Integer-f7f172c9.js";import"./UI5Element-a4bd3d38.js";import"./Icons-74c917eb.js";import"./SliderBase-987e7181.js";import"./Icon-42236945.js";import"./ResizeHandler-0af4416f.js";import"./Device-6afa24d0.js";import"./class-map-0ab40ab9.js";import"./style-map-132a30d8.js";import"./i18n-defaults-d5d083dd.js";import"./react-jss.esm-2e5f50f2.js";import"./index-3ade6c08.js";import"./slot-76e48863.js";import"./decline-3cb804de.js";import"./i18n-defaults-2d2bf0b6.js";import"./information-dbbb1c9a.js";import"./Button-02dfef34.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./index-bb1f9706.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-d9b40dee.js";import"./index-e43b9f80.js";import"./index-84d14e07.js";import"./Avatar-6c09069b.js";import"./employee-05c578de.js";import"./index-f5f20d57.js";import"./index-259e4340.js";import"./Link-498d09c2.js";import"./WrappingType-b81e595a.js";import"./index-fb6e8b5e.js";import"./TableOfContent-c09fbd07.js";import"./index-63a98bf7.js";import"./Label-287c3220.js";import"./index-d745f875.js";import"./index-1f905261.js";import"./Popover-26ef4370.js";import"./PopupsCommon.css-f12c9479.js";import"./FocusableElements-66623361.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./BrowserScrollbar.css-309143b9.js";const v=`## Structure

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
}`}};const r={title:"Inputs / Slider",component:o,argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:S};const Le=["defaultStory"];export{Le as __namedExportsOrder,r as default,m as defaultStory};
//# sourceMappingURL=Slider.stories-33ac78cb.js.map
