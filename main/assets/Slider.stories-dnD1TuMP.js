import{M as l,C as h,f as d,b as c}from"./chunk-HLWAVYOI-gDttGN3m.js";import{S as o}from"./index-9IgzlvtU.js";import{b as u}from"./DomRefTable.module-YF5yLoWc.js";import{D as f}from"./DocsHeader-BxNzXZJf.js";import{F as g}from"./Footer-ZsSjQxcR.js";import{j as e}from"./jsx-runtime-DtaoT6pD.js";import"./index-OjgoNOWw.js";import{u as a}from"./index-RwE9nQVW.js";import"./iframe-eO5ZJSn9.js";import"../sb-preview/runtime.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./_baseForOwn-UZJwRxDU.js";import"./mapValues-HzTlT2lF.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./index-UBYxvHMA.js";import"./Slider-3Lkmoltu.js";import"./withWebComponent-y_2h_qsG.js";import"./utils-jDGQm03y.js";import"./VersionInfo-yX_RFFR1.js";import"./CustomElementsScopeUtils-icazltFf.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./Float-0fEWDOdp.js";import"./Integer-kog98579.js";import"./i18nBundle-h5yKZf-0.js";import"./Icons-cDXElGrC.js";import"./UI5Element-4kitL615.js";import"./SliderBase-4hpvG32Y.js";import"./Icon-ic8wGgAs.js";import"./ResizeHandler-_S6lmbp5.js";import"./class-map-aNJl42Aw.js";import"./style-map-cRo_ADDP.js";import"./i18n-defaults-zEJ36VRV.js";import"./react-jss.esm-tmBtHfec.js";import"./index-kt8wc_gZ.js";import"./slot-HSrR9XJ-.js";import"./decline-tlNcqIac.js";import"./i18n-defaults-CPLPRuO1.js";import"./information-txDdHyyj.js";import"./alert-sbIfV1of.js";import"./Button-dXtUjl7w.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./index-IPJJPG41.js";import"./clsx-c3LcQGjR.js";import"./i18n-defaults-EHbh3l3V.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-DWXxr99t.js";import"./ModalsContext-0q87fkkd.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-kI6DTjO7.js";import"./index-nDwo5N6E.js";import"./index-D-MP_7kc.js";import"./Avatar-DexMZin0.js";import"./employee-jQid-Nvn.js";import"./index-Hv-mV4uB.js";import"./index-RppeFWF1.js";import"./Link-yiZ7VLOd.js";import"./WrappingType-avPrqc94.js";import"./index-5ETO3hDj.js";import"./TableOfContent-EK_0cmrB.js";import"./index-3K7vbEfI.js";import"./Label-avDcfEez.js";import"./index-ozDH_TmN.js";import"./index-QG4pr-3F.js";import"./Popover-jBPmsweJ.js";import"./PopupUtils-9DzRw33t.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-Honr3Kcv.js";import"./FocusableElements-eRJsgpvJ.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./BrowserScrollbar.css-IWLYYIFQ.js";const v=`## Structure

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
}`}};const r={title:"Inputs / Slider",component:o,argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:S};const qe=["defaultStory"];export{qe as __namedExportsOrder,r as default,m as defaultStory};
