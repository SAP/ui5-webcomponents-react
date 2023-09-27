import{M as l,C as h,e as d,b as c}from"./chunk-S4VUQJ4A-5bd9470b.js";import{S as o}from"./index-98e42d92.js";import{A as u}from"./DomRefTable.module-fa19d05a.js";import{D as f}from"./DocsHeader-d92662e2.js";import{F as g}from"./Footer-c57a7ba8.js";import{j as e}from"./jsx-runtime-d079401a.js";import"./index-f1f2c4b1.js";import{u as a}from"./index-59d6410c.js";import"./iframe-8bbfbf88.js";import"../sb-preview/runtime.js";import"./index-92d824d3.js";import"./index-c74c9f7f.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./Slider-16ee770f.js";import"./withWebComponent-40b4b429.js";import"./utils-64df43e3.js";import"./CustomElementsScopeUtils-7e643eaa.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./Float-99d99064.js";import"./Integer-f7f172c9.js";import"./UI5Element-fe43d284.js";import"./Icons-1d0bcfc0.js";import"./SliderBase-4b52e910.js";import"./Icon-4b8e6c3e.js";import"./ResizeHandler-c2d89e75.js";import"./class-map-c90b90b7.js";import"./style-map-26bcc635.js";import"./i18n-defaults-d5195a49.js";import"./react-jss.esm-2e5f50f2.js";import"./index-2322ca88.js";import"./slot-76e48863.js";import"./decline-6c7fc0a2.js";import"./i18n-defaults-bdef1cce.js";import"./information-5d7a8806.js";import"./alert-1b225bb9.js";import"./Button-ca10e4c6.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-0dcb0e40.js";import"./index-7442d734.js";import"./index-ef817c13.js";import"./Avatar-b61e760c.js";import"./employee-6f8dc3b6.js";import"./index-9cafd313.js";import"./index-6211d3e5.js";import"./Link-39a6449b.js";import"./WrappingType-b81e595a.js";import"./index-e55d41f0.js";import"./TableOfContent-1451378e.js";import"./index-22fac480.js";import"./Label-44520d2b.js";import"./index-a7d53cdc.js";import"./index-cfc9a6cb.js";import"./Popover-e0a9892e.js";import"./PopupUtils-6f7aa5d8.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-20392ac5.js";import"./FocusableElements-81dc3a15.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./BrowserScrollbar.css-6733af99.js";const v=`## Structure

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
//# sourceMappingURL=Slider.stories-a978b6ab.js.map
